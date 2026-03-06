// lib/portalSession.js
import crypto from "crypto";

const COOKIE_NAME = "portal_session";

function getSecret() {
  const secret = process.env.PORTAL_SESSION_SECRET || "";
  if (!secret) {
    throw new Error("Missing PORTAL_SESSION_SECRET");
  }
  return secret;
}

function b64urlEncode(input) {
  return Buffer.from(input).toString("base64url");
}

function b64urlDecode(input) {
  return Buffer.from(input, "base64url").toString("utf8");
}

export function getSessionCookieName() {
  return COOKIE_NAME;
}

export function signSession(payload) {
  const secret = getSecret();

  const header = { alg: "HS256", typ: "JWT" };
  const h = b64urlEncode(JSON.stringify(header));
  const p = b64urlEncode(JSON.stringify(payload));
  const data = `${h}.${p}`;

  const sig = crypto
    .createHmac("sha256", secret)
    .update(data)
    .digest("base64url");

  return `${data}.${sig}`;
}

export function verifySession(token) {
  const secret = getSecret();

  if (!token || typeof token !== "string") return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;

  const [h, p, sig] = parts;
  const data = `${h}.${p}`;
  const expected = crypto
    .createHmac("sha256", secret)
    .update(data)
    .digest("base64url");

  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return null;
  if (!crypto.timingSafeEqual(a, b)) return null;

  try {
    return JSON.parse(b64urlDecode(p));
  } catch {
    return null;
  }
}