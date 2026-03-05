import fs from "fs";
import path from "path";

function loadCandidates() {
  try {
    const filePath = path.join(process.cwd(), "data", "candidates.json");
    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to load candidates.json");
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