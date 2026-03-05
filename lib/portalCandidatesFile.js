// lib/portalCandidatesFile.js
import fs from "fs";
import path from "path";

const FILE_PATH = path.join(process.cwd(), "data", "candidates.json");

export function getCandidateByToken(token) {
  if (!token) return null;
  const raw = fs.readFileSync(FILE_PATH, "utf8");
  const data = JSON.parse(raw);
  return data[token] || null;
}

export function isExpired(expiresAt) {
  if (!expiresAt) return true;
  const t = new Date(expiresAt).getTime();
  if (Number.isNaN(t)) return true;
  return Date.now() > t;
}