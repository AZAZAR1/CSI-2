// pages/api/portal/session.js
import { verifySession, getSessionCookieName } from "../../../lib/portalSession";
import { getProgress } from "../../../lib/portalStore";
import { getCandidateByToken } from "../../../lib/portalCandidatesBlob";

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

  const token = parseCookie(req, getSessionCookieName());
  const sess = verifySession(token);

  if (!sess) {
    return res.status(401).json({ ok: false, error: "Not signed in" });
  }

  const expiresAt = new Date(sess.expiresAt).getTime();
  if (!expiresAt || Date.now() > expiresAt) {
    return res.status(403).json({ ok: false, error: "Access expired" });
  }

  const candidate = await getCandidateByToken(sess.token);

  if (!candidate) {
    return res.status(401).json({ ok: false, error: "Candidate not found" });
  }

  const progress = await getProgress(candidate.candidateId);

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