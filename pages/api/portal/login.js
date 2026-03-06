// pages/api/portal/login.js
import { getCandidateByToken, isExpired } from "../../../lib/portalCandidatesBlob";
import { signSession, getSessionCookieName } from "../../../lib/portalSession";

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
  res.setHeader("Cache-Control", "no-store, max-age=0");

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const token = String(req.body?.token || "").trim();

    if (!token) {
      return res.status(400).json({ ok: false, error: "Missing token" });
    }

    const candidate = await getCandidateByToken(token);

    if (!candidate) {
      return res.status(401).json({ ok: false, error: "Invalid token" });
    }

    if (isExpired(candidate.expiresAt)) {
      return res.status(403).json({ ok: false, error: "Token expired" });
    }

    const sessionValue = signSession({
      token,
      candidateId: candidate.candidateId,
      course: candidate.course,
      expiresAt: candidate.expiresAt,
    });

    res.setHeader(
      "Set-Cookie",
      cookie(getSessionCookieName(), sessionValue, {
        httpOnly: true,
        secure: true,
        sameSite: "Lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })
    );

    return res.status(200).json({
      ok: true,
      candidate: {
        candidateId: candidate.candidateId,
        name: candidate.name,
        course: candidate.course,
        expiresAt: candidate.expiresAt,
      },
    });
  } catch (e) {
    return res.status(500).json({
      ok: false,
      error: e?.message || "Login failed",
    });
  }
}