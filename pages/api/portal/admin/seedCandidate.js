// pages/api/portal/admin/seedCandidate.js
import { saveCandidateToBlob } from "../../../../lib/portalBlobCandidates";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "POST only" });
  }

  const adminKey = String(req.headers["x-admin-key"] || "");
  if (!process.env.PORTAL_ADMIN_KEY || adminKey !== process.env.PORTAL_ADMIN_KEY) {
    return res.status(401).json({ ok: false, error: "Unauthorized" });
  }

  const { token, candidate } = req.body || {};
  const t = String(token || "").trim();

  if (!t || !candidate?.candidateId || !candidate?.course) {
    return res.status(400).json({ ok: false, error: "Missing token or candidate fields" });
  }

  await saveCandidateToBlob(t, candidate);
  return res.status(200).json({ ok: true });
}