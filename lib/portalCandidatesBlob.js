// lib/portalCandidatesBlob.js
import crypto from "crypto";
import { put, list } from "@vercel/blob";

const BLOB_KEY = "portal/candidates.json";

// --- helpers ---
function requireAdmin(req) {
  const got = String(req.headers["x-admin-key"] || "").trim();
  const expected = String(process.env.PORTAL_ADMIN_KEY || "").trim();
  if (!expected) return { ok: false, status: 500, error: "Missing PORTAL_ADMIN_KEY" };
  if (!got || got !== expected) return { ok: false, status: 401, error: "Unauthorized" };
  return { ok: true };
}

export function generateTokenHex(bytes = 16) {
  return crypto.randomBytes(bytes).toString("hex"); // 32 hex chars by default
}

export function isExpired(expiresAt) {
  if (!expiresAt) return true;
  const t = new Date(expiresAt).getTime();
  if (Number.isNaN(t)) return true;
  return Date.now() > t;
}

async function getBlobUrlIfExists() {
  const res = await list({ prefix: BLOB_KEY, limit: 10 });
  const match = res?.blobs?.find((b) => b.pathname === BLOB_KEY);
  return match?.url || null;
}

export async function readCandidatesMap() {
  // If Blob not present yet, return empty map
  const url = await getBlobUrlIfExists();
  if (!url) return {};

  const r = await fetch(url, { cache: "no-store" });
  if (!r.ok) return {};
  const data = await r.json();

  // We store candidates as: { "<token>": {candidate...}, ... }
  if (!data || typeof data !== "object" || Array.isArray(data)) return {};
  return data;
}

export async function writeCandidatesMap(map) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error("Missing BLOB_READ_WRITE_TOKEN");
  }
  const body = JSON.stringify(map, null, 2);
  const blob = await put(BLOB_KEY, body, {
    access: "public", // OK because content is not useful without valid tokens
    contentType: "application/json",
    addRandomSuffix: false, // keep stable key
  });
  return blob;
}

export async function getCandidateByToken(token) {
  const t = String(token || "").trim();
  if (!t) return null;
  const map = await readCandidatesMap();
  return map[t] || null;
}

export async function upsertCandidate(token, candidate) {
  const t = String(token || "").trim();
  if (!t) throw new Error("Missing token");

  const map = await readCandidatesMap();
  map[t] = candidate;
  await writeCandidatesMap(map);
  return { token: t, candidate: map[t] };
}

export async function deleteCandidate(token) {
  const t = String(token || "").trim();
  if (!t) throw new Error("Missing token");

  const map = await readCandidatesMap();
  if (!map[t]) return { deleted: false };
  delete map[t];
  await writeCandidatesMap(map);
  return { deleted: true };
}

export async function listCandidates() {
  const map = await readCandidatesMap();
  return Object.entries(map).map(([token, candidate]) => ({
    token,
    ...candidate,
    expired: isExpired(candidate?.expiresAt),
  }));
}

// ✅ This is the ONLY getAllCandidates export (no duplicates)
export async function getAllCandidates() {
  return await readCandidatesMap(); // returns { [token]: candidate }
}

export function adminGuard(req) {
  return requireAdmin(req);
}