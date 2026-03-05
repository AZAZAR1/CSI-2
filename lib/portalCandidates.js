// lib/portalCandidates.js

function loadCandidates() {
  try {
    const raw = process.env.PORTAL_CANDIDATES || "{}";
    return JSON.parse(raw);
  } catch (e) {
    console.error("Invalid PORTAL_CANDIDATES JSON");
    return {};
  }
}

export function getCandidateByToken(token) {
  if (!token) return null;

  const candidates = loadCandidates();

  return candidates[token] || null;
}

export function isExpired(expiresAt) {
  if (!expiresAt) return true;

  const t = new Date(expiresAt).getTime();

  if (Number.isNaN(t)) return true;

  return Date.now() > t;
}