// pages/api/portal/admin/listCandidates.js
import { adminGuard, listCandidates } from "../../../../lib/portalCandidatesBlob";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  const g = adminGuard(req);
  if (!g.ok) return res.status(g.status).json({ ok: false, error: g.error });

  if (req.method !== "GET") return res.status(405).json({ ok: false, error: "Method not allowed" });

  try {
    const items = await listCandidates();
    return res.status(200).json({ ok: true, candidates: items });
  } catch (e) {
    return res.status(500).json({ ok: false, error: "Failed to list candidates" });
  }
}