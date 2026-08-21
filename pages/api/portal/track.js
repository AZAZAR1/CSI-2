// pages/api/portal/track.js
import { verifySession, getSessionCookieName } from "../../../lib/portalSession";
import { markOpened } from "../../../lib/portalStore";

function parseCookie(req, name) {
  const raw = req.headers.cookie || "";
  const match = raw
    .split(";")
    .map((s) => s.trim())
    .find((s) => s.startsWith(name + "="));

  if (!match) return "";
  return decodeURIComponent(match.split("=")[1] || "");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  res.setHeader("Cache-Control", "no-store, max-age=0");

  const sessionToken = parseCookie(req, getSessionCookieName());
  const sess = verifySession(sessionToken);

  if (!sess) {
    return res.status(401).json({ ok: false, error: "Not signed in" });
  }

  const expiresAt = new Date(sess.expiresAt).getTime();
  if (!expiresAt || Date.now() > expiresAt) {
    return res.status(403).json({ ok: false, error: "Access expired" });
  }

  const course = String(req.body?.course || "").trim().toLowerCase();
  const moduleSlug = String(req.body?.module || "").trim();

  if (!course || !moduleSlug) {
    return res.status(400).json({ ok: false, error: "Missing parameter" });
  }

  await markOpened(sess.candidateId, course, moduleSlug);

  return res.status(200).json({ ok: true });
}