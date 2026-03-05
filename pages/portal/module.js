// pages/api/portal/module.js
import fs from "fs";
import path from "path";
import { verifySession } from "../../../lib/portalSession";

function parseCookie(req, name) {
  const raw = req.headers.cookie || "";
  const match = raw.split(";").map(s => s.trim()).find(s => s.startsWith(name + "="));
  if (!match) return "";
  return decodeURIComponent(match.split("=")[1] || "");
}

export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  const secret = process.env.PORTAL_SESSION_SECRET;
  if (!secret) return res.status(500).json({ ok: false });

  const token = parseCookie(req, "portal_session");
  const sess = verifySession(token, secret);
  if (!sess) return res.status(401).json({ ok: false, error: "Not signed in" });

  const expiresAt = new Date(sess.expiresAt).getTime();
  if (!expiresAt || Date.now() > expiresAt) return res.status(403).json({ ok: false, error: "Access expired" });

  const course = String(req.query.course || "").toLowerCase();
  const moduleSlug = String(req.query.module || "");

  if (!course || !moduleSlug) return res.status(400).json({ ok: false, error: "Missing params" });
  if (course !== String(sess.course || "").toLowerCase()) return res.status(403).json({ ok: false, error: "Unauthorized" });

  const filePath = path.join(process.cwd(), "content", course, `${moduleSlug}.html`);
  if (!fs.existsSync(filePath)) return res.status(404).json({ ok: false, error: "Module file not found" });

  const html = fs.readFileSync(filePath, "utf8");
  return res.status(200).json({ ok: true, html });
}