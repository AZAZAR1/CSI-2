// lib/portalStore.js
import crypto from "crypto";
import { put, get } from "@vercel/blob";

const STORE_PREFIX = "portal-store";
const TTL_SECONDS = 60 * 60 * 24 * 365 * 3; // 3y storage safety

function keyFor(type, id) {
  return `${STORE_PREFIX}/${type}/${id}.json`;
}

async function readJson(type, id, fallback = null) {
  try {
    const res = await get(keyFor(type, id));
    if (!res?.url) return fallback;
    const r = await fetch(res.url, { cache: "no-store" });
    if (!r.ok) return fallback;
    return await r.json();
  } catch {
    return fallback;
  }
}

async function writeJson(type, id, obj) {
  await put(keyFor(type, id), JSON.stringify(obj, null, 2), {
    access: "private",
    addRandomSuffix: false,
    cacheControlMaxAge: TTL_SECONDS,
  });
}

export function hashDevice({ ua, lang, ip }) {
  const s = `${ua || ""}::${lang || ""}::${ip || ""}`;
  return crypto.createHash("sha256").update(s).digest("hex");
}

// ---- Devices (anti-forwarding) ----
export async function getDevices(candidateId) {
  return (await readJson("devices", candidateId, { devices: [] }))?.devices || [];
}

export async function addDevice(candidateId, deviceHash, maxDevices = 2) {
  const current = await readJson("devices", candidateId, { devices: [] });
  const devices = Array.isArray(current.devices) ? current.devices : [];

  if (!devices.includes(deviceHash)) {
    if (devices.length >= maxDevices) return { ok: false, reason: "device_limit" };
    devices.push(deviceHash);
    await writeJson("devices", candidateId, { devices });
  }

  return { ok: true, devices };
}

// ---- Progress tracking ----
export async function markOpened(candidateId, course, moduleSlug) {
  const current = await readJson("progress", candidateId, { opened: {} });
  const opened = current.opened || {};
  const k = `${course}:${moduleSlug}`;
  opened[k] = new Date().toISOString();
  await writeJson("progress", candidateId, { opened });
  return { ok: true };
}

export async function getProgress(candidateId) {
  const current = await readJson("progress", candidateId, { opened: {} });
  return current.opened || {};
}

// ---- Certificates ----
export async function saveCertificate(certId, payload) {
  await writeJson("cert", certId, payload);
}
export async function getCertificate(certId) {
  return await readJson("cert", certId, null);
}