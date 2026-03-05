// pages/api/portal/admin/inspect.js
import { adminGuard, getAllCandidates } from "../../../../lib/portalCandidatesBlob";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  const g = adminGuard(req);
  if (!g.ok) return res.status(g.status).json({ ok: false, error: g.error });

  if (req.method !== "GET") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const map = await getAllCandidates(); // { token: candidate }
    const tokens = Object.keys(map || {}).sort();

    const candidates = tokens.map((token) => {
      const c = map[token] || {};
      return {
        token,
        candidateId: c.candidateId || "",
        name: c.name || "",
        email: c.email || "",
        course: c.course || "",
        expiresAt: c.expiresAt || "",
        modulesCount: Array.isArray(c.modules) ? c.modules.length : 0,
        expired: !!c.expiresAt ? (Date.now() > new Date(c.expiresAt).getTime()) : true,
      };
    });

    return res.status(200).json({ ok: true, tokens, candidates });
  } catch (e) {
    return res.status(500).json({ ok: false, error: "Failed to load candidates" });
  }
}