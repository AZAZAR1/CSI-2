import fs from "fs";
import path from "path";
import { verifySession, getSessionCookieName } from "../../../lib/portalSession";
import { getCandidateByToken, isExpired } from "../../../lib/portalCandidatesBlob";

function parseCookie(req, name) {
  const raw = req.headers.cookie || "";
  const match = raw
    .split(";")
    .map((value) => value.trim())
    .find((value) => value.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : "";
}

function safeSegment(value) {
  const segment = String(value || "").trim().toLowerCase();
  return /^[a-z0-9-]+$/.test(segment) ? segment : "";
}

export default async function handler(req, res) {
  res.setHeader(
    "Cache-Control",
    "private, no-store, no-cache, must-revalidate, max-age=0"
  );
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
  res.setHeader("Cross-Origin-Resource-Policy", "same-origin");
  res.setHeader("Referrer-Policy", "no-referrer");
  res.setHeader("Content-Security-Policy", "frame-ancestors 'self'");

  if (req.method !== "GET") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const sessionToken = parseCookie(req, getSessionCookieName());
  const session = verifySession(sessionToken);
  if (!session) {
    return res.status(401).json({ ok: false, error: "Not signed in" });
  }

  const candidate = await getCandidateByToken(session.token);
  if (!candidate) {
    return res.status(401).json({ ok: false, error: "Candidate not found" });
  }
  if (isExpired(candidate.expiresAt)) {
    return res.status(403).json({ ok: false, error: "Access expired" });
  }

  const course = safeSegment(req.query.course);
  const moduleSlug = safeSegment(req.query.module);
  const language = safeSegment(candidate.language || "en");

  if (!course || !moduleSlug || !["en", "fr"].includes(language)) {
    return res.status(400).json({ ok: false, error: "Invalid parameter" });
  }
  if (course !== String(candidate.course || "").trim().toLowerCase()) {
    return res.status(403).json({ ok: false, error: "Not authorized for this course" });
  }

  const allowed = Array.isArray(candidate.modules)
    ? candidate.modules.some((item) => safeSegment(item?.slug || item?.path) === moduleSlug)
    : false;
  if (!allowed) {
    return res.status(403).json({ ok: false, error: "Module not assigned" });
  }

  const filePath = path.join(process.cwd(), "content", course, language, `${moduleSlug}.pdf`);
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({
      ok: false,
      error: `The ${language.toUpperCase()} PDF for this module is not available yet`,
    });
  }

  const stat = fs.statSync(filePath);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Length", String(stat.size));
  res.setHeader("Content-Disposition", "inline");
  res.setHeader("Accept-Ranges", "none");
  return fs.createReadStream(filePath).pipe(res);
}
