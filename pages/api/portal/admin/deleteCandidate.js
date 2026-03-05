// pages/api/portal/admin/deleteCandidate.js
import { adminGuard, deleteCandidate } from "../../../../lib/portalCandidatesBlob";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  const g = adminGuard(req);
  if (!g.ok) return res.status(g.status).json({ ok: false, error: g.error });

  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" });

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const token = String(body?.token || "").trim();
    if (!token) return res.status(400).json({ ok: false, error: "Missing token" });

    const out = await deleteCandidate(token);
    return res.status(200).json({ ok: true, ...out });
  } catch (e) {
    return res.status(500).json({ ok: false, error: "Failed to delete candidate" });
  }
}