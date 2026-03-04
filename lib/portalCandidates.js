// lib/portalCandidates.js

export const CANDIDATES = {
  "AB93KJ29": {
    candidateId: "CCS-2026-014",
    name: "John Smith",
    email: "john@example.com",
    course: "ccs",
    expiresAt: "2028-03-05T00:00:00.000Z",
    modules: [
      { slug: "module-1", title: "Module 1 — Foundations" },
      { slug: "module-2", title: "Module 2 — Combustion & Draw" },
      { slug: "module-3", title: "Module 3 — RH Dynamics" },
      { slug: "module-4", title: "Module 4 — Diagnostics" },
    ],
  },
};

export function getCandidateByToken(token) {
  if (!token) return null;
  return CANDIDATES[token] || null;
}

export function isExpired(expiresAt) {
  if (!expiresAt) return true;
  const t = new Date(expiresAt).getTime();
  if (Number.isNaN(t)) return true;
  return Date.now() > t;
}