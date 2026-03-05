// pages/api/portal/session.js
import { verifySession } from "../../../lib/portalSession";
import { getProgress } from "../../../lib/portalStore";
import fs from "fs";
import path from "path";

function parseCookie(req, name) {
  const raw = req.headers.cookie || "";
  const match = raw.split(";").map(s => s.trim()).find(s => s.startsWith(name + "="));
  if (!match) return "";
  return decodeURIComponent(match.split("=")[1] || "");
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");
  const secret = process.env.PORTAL_SESSION_SECRET;
  if (!secret) return res.status(500).json({ ok: false });

  const token = parseCookie(req, "portal_session");
  const sess = verifySession(token, secret);
  if (!sess) return res.status(401).json({ ok: false, error: "Not signed in" });

  // enforce candidate access window (24 months, etc.)
  const expiresAt = new Date(sess.expiresAt).getTime();
  if (!expiresAt || Date.now() > expiresAt) return res.status(403).json({ ok: false, error: "Access expired" });

  // read candidates.json to get name/modules
  const FILE_PATH = path.join(process.cwd(), "data", "candidates.json");
  const raw = fs.readFileSync(FILE_PATH, "utf8");
  const data = JSON.parse(raw);

  // find candidate record by candidateId
  const candidate = Object.values(data).find((x) => x?.candidateId === sess.candidateId);
  if (!candidate) return res.status(401).json({ ok: false, error: "Candidate not found" });

  const progress = await getProgress(sess.candidateId);

  return res.status(200).json({
    ok: true,
    candidate: {
      candidateId: candidate.candidateId,
      name: candidate.name,
      course: candidate.course,
      expiresAt: candidate.expiresAt,
      modules: candidate.modules,
      progress,
    },
  });
}