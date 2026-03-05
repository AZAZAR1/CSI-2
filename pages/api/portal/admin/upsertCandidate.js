// pages/api/portal/admin/upsertCandidate.js
import {
  adminGuard,
  generateTokenHex,
  upsertCandidate,
} from "../../../../lib/portalCandidatesBlob";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  const g = adminGuard(req);
  if (!g.ok) return res.status(g.status).json({ ok: false, error: g.error });

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const token = String(body?.token || "").trim() || generateTokenHex(16);

    const candidate = body?.candidate || {};
    const cleaned = {
      candidateId: String(candidate.candidateId || "").trim(),
      name: String(candidate.name || "").trim(),
      email: String(candidate.email || "").trim(),
      course: String(candidate.course || "").trim().toLowerCase(),
      expiresAt: String(candidate.expiresAt || "").trim(),
      modules: Array.isArray(candidate.modules) ? candidate.modules : [],
    };

    if (!cleaned.candidateId || !cleaned.name || !cleaned.course || !cleaned.expiresAt) {
      return res.status(400).json({ ok: false, error: "Missing required fields" });
    }

    cleaned.modules = cleaned.modules
      .map((m) => ({
        slug: String(m?.slug || "").trim(),
        title: String(m?.title || "").trim(),
      }))
      .filter((m) => m.slug && m.title);

    const saved = await upsertCandidate(token, cleaned);

    return res.status(200).json({
      ok: true,
      token: saved.token,
      candidate: saved.candidate,
      portalUrl: `/portal/${saved.token}`,
    });
  } catch (e) {
    console.error("upsertCandidate failed:", e);
    return res.status(500).json({
      ok: false,
      error: e?.message || "Failed to save candidate",
    });
  }
}