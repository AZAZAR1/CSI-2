// pages/api/portal/validate.js
import { getCandidateFromBlob } from "../../../lib/portalBlobCandidates";

function isExpired(expiresAt) {
  if (!expiresAt) return true;
  const t = new Date(expiresAt).getTime();
  if (Number.isNaN(t)) return true;
  return Date.now() > t;
}

export default async function handler(req, res) {
  const token = String(req.query.token || "").trim();

  res.setHeader("Cache-Control", "no-store, max-age=0");

  const candidate = await getCandidateFromBlob(token);
  if (!candidate) {
    return res.status(401).json({ ok: false, error: "Invalid token" });
  }

  if (isExpired(candidate.expiresAt)) {
    return res.status(403).json({ ok: false, error: "Token expired" });
  }

  return res.status(200).json({
    ok: true,
    candidate: {
      candidateId: candidate.candidateId,
      name: candidate.name,
      course: candidate.course,
      expiresAt: candidate.expiresAt,
      modules: candidate.modules,
    },
  });
}