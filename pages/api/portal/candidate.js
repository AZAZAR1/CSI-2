import { getCandidateFromBlob } from "../../../lib/portalBlob";
import { isExpired } from "../../../lib/portalCandidatesFile"; // reuse your helper if you want

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  const token = String(req.query.token || "").trim();
  if (!token) return res.status(400).json({ ok: false, error: "Missing token" });

  const candidate = await getCandidateFromBlob(token);
  if (!candidate) return res.status(401).json({ ok: false, error: "Invalid token" });

  if (isExpired(candidate.expiresAt)) {
    return res.status(403).json({ ok: false, error: "Token expired" });
  }

  return res.status(200).json({ ok: true, candidate });
}