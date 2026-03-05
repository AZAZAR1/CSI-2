// pages/api/portal/track.js
import { verifySession } from "../../../lib/portalSession";
import { markOpened } from "../../../lib/portalStore";

function parseCookie(req, name) {
  const raw = req.headers.cookie || "";
  const match = raw.split(";").map(s => s.trim()).find(s => s.startsWith(name + "="));
  if (!match) return "";
  return decodeURIComponent(match.split("=")[1] || "");
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false });
  res.setHeader("Cache-Control", "no-store, max-age=0");

  const secret = process.env.PORTAL_SESSION_SECRET;
  if (!secret) return res.status(500).json({ ok: false });

  const token = parseCookie(req, "portal_session");
  const sess = verifySession(token, secret);
  if (!sess) return res.status(401).json({ ok: false });

  const course = String(req.body?.course || "").toLowerCase();
  const moduleSlug = String(req.body?.module || "");
  if (!course || !moduleSlug) return res.status(400).json({ ok: false });

  await markOpened(sess.candidateId, course, moduleSlug);
  return res.status(200).json({ ok: true });
}