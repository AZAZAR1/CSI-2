import { put, list, del, head } from "@vercel/blob";

const CANDIDATE_PREFIX = "candidates/";
const MODULE_PREFIX = "modules/";

// candidate JSON lives at: candidates/<token>.json
export function candidateKey(token) {
  return `${CANDIDATE_PREFIX}${token}.json`;
}

// module content lives at: modules/<course>/<slug>.html
export function moduleKey(course, slug) {
  return `${MODULE_PREFIX}${course}/${slug}.html`;
}

export async function saveCandidateToBlob(token, candidateObj) {
  const key = candidateKey(token);
  const body = JSON.stringify(candidateObj, null, 2);

  const res = await put(key, body, {
    access: "private",
    contentType: "application/json",
    addRandomSuffix: false,
  });

  return res;
}

export async function getCandidateFromBlob(token) {
  const key = candidateKey(token);

  // head() gives metadata + downloadUrl if exists
  const meta = await head(key).catch(() => null);
  if (!meta?.downloadUrl) return null;

  const r = await fetch(meta.downloadUrl, { cache: "no-store" });
  if (!r.ok) return null;
  return await r.json();
}

export async function saveModuleHtmlToBlob(course, slug, html) {
  const key = moduleKey(course, slug);

  const res = await put(key, html, {
    access: "private",
    contentType: "text/html; charset=utf-8",
    addRandomSuffix: false,
  });

  return res;
}

export async function getModuleMeta(course, slug) {
  const key = moduleKey(course, slug);
  return await head(key).catch(() => null);
}