// lib/portalBlobCandidates.js
import { put, head } from "@vercel/blob";

const PREFIX = "candidates/"; // stored in Blob

function keyForToken(token) {
  return `${PREFIX}${token}.json`;
}

export async function saveCandidateToBlob(token, candidateObj) {
  const key = keyForToken(token);

  return await put(key, JSON.stringify(candidateObj, null, 2), {
    access: "private",
    contentType: "application/json",
    addRandomSuffix: false,
  });
}

export async function getCandidateFromBlob(token) {
  if (!token) return null;

  const key = keyForToken(token);
  const meta = await head(key).catch(() => null);
  if (!meta?.downloadUrl) return null;

  const r = await fetch(meta.downloadUrl, { cache: "no-store" });
  if (!r.ok) return null;
  return await r.json();
}