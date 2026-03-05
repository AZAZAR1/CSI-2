// pages/api/portal/login.js
import { getCandidateByToken, isExpired } from "../../../lib/portalCandidatesFile";
import { addDevice, hashDevice } from "../../../lib/portalStore";
import { signSession } from "../../../lib/portalSession";

function cookie(name, value, opts = {}) {
  const parts = [`${name}=${value}`];
  if (opts.httpOnly) parts.push("HttpOnly");
  if (opts.secure) parts.push("Secure");
  if (opts.sameSite) parts.push(`SameSite=${opts.sameSite}`);
  if (opts.path) parts.push(`Path=${opts.path}`);
  if (opts.maxAge) parts.push(`Max-Age=${opts.maxAge}`);
  return parts.join("; ");
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false });

  res.setHeader("Cache-Control", "no-store, max-age=0");

  const token = String(req.body?.token || "").trim();
  if (!token) return res.status(400).json({ ok: false, error: "Missing token" });

  const cand = getCandidateByToken(token);
  if (!cand) return res.status(401).json({ ok: false, error: "Invalid token" });
  if (isExpired(cand.expiresAt)) return res.status(403).json({ ok: false, error: "Token expired" });

  const secret = process.env.PORTAL_SESSION_SECRET;
  if (!secret) return res.status(500).json({ ok: false, error: "Server not configured" });

  // device binding
  const ua = req.headers["user-agent"] || "";
  const lang = req.headers["accept-language"] || "";
  const ip = (req.headers["x-forwarded-for"] || "").toString().split(",")[0].trim();

  const deviceHash = hashDevice({ ua, lang, ip });
  const deviceRes = await addDevice(cand.candidateId, deviceHash, 2);
  if (!deviceRes.ok) {
    return res.status(403).json({
      ok: false,
      error: "Device limit reached. Contact administration.",
    });
  }

  const payload = {
    candidateId: cand.candidateId,
    course: cand.course,
    expiresAt: cand.expiresAt,
    // short session lifetime; candidate lifetime still enforced
    iat: Date.now(),
    exp: Date.now() + 1000 * 60 * 60 * 24 * 7, // 7 days login session
  };

  const session = signSession(payload, secret);

  res.setHeader(
    "Set-Cookie",
    cookie("portal_session", session, {
      httpOnly: true,
      secure: true,
      sameSite: "Lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    })
  );

  return res.status(200).json({ ok: true });
}