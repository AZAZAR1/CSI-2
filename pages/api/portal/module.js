// pages/api/portal/module.js
import fs from "fs";
import path from "path";
import { verifySession, getSessionCookieName } from "../../../lib/portalSession";

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

  const course = String(req.query.course || "").trim().toLowerCase();
  const moduleSlug = String(req.query.module || "").trim();

  if (!course || !moduleSlug) {
    return res.status(400).json({ ok: false, error: "Missing parameter" });
  }

  // candidate is only allowed to access their own course
  if (course !== String(sess.course || "").toLowerCase()) {
    return res.status(403).json({ ok: false, error: "Not authorized for this course" });
  }

  const filePath = path.join(process.cwd(), "content", course, `${moduleSlug}.html`);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ ok: false, error: "Module file not found" });
  }

  const html = fs.readFileSync(filePath, "utf8");

  return res.status(200).json({
    ok: true,
    html,
  });
}