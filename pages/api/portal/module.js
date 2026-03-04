// pages/api/portal/module.js
import fs from "fs";
import path from "path";
import { getCandidateByToken, isExpired } from "../../../lib/portalCandidates";

// 1) Map portal slugs -> actual filenames on disk
// IMPORTANT: Linux/Vercel is case-sensitive. Filenames must match EXACTLY.
const MODULE_FILE_MAP = {
  ccs: {
    "module-1": "Module-1-tobacco-science.html",
    "module-2": "Module-2-water-RH.html",

    // Add the rest as you create them:
    // "module-3": "Module-3-....html",
    // "module-4": "Module-4-....html",
  },

  // Future-proofing:
  // acs: { ... },
  // amc: { ... },
};

function safeCourse(input) {
  return String(input || "").toLowerCase().replace(/[^a-z0-9_-]/g, "");
}

function safeSlug(input) {
  return String(input || "").toLowerCase().replace(/[^a-z0-9_-]/g, "");
}

export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  const token = String(req.query.token || "").trim();
  const course = safeCourse(req.query.course);
  const moduleSlug = safeSlug(req.query.module);

  if (!token || !course || !moduleSlug) {
    return res.status(400).json({ ok: false, error: "Missing parameters" });
  }

  const candidate = getCandidateByToken(token);
  if (!candidate) {
    return res.status(401).json({ ok: false, error: "Invalid token" });
  }

  if (isExpired(candidate.expiresAt)) {
    return res.status(403).json({ ok: false, error: "Token expired" });
  }

  // Must match candidate course
  if (String(candidate.course || "").toLowerCase() !== course) {
    return res.status(403).json({ ok: false, error: "Not authorized for this course" });
  }

  // Must be assigned module
  const assigned = Array.isArray(candidate.modules)
    ? candidate.modules.some((m) => String(m.slug || "").toLowerCase() === moduleSlug)
    : false;

  if (!assigned) {
    return res.status(404).json({ ok: false, error: "Module not assigned" });
  }

  // Map slug -> filename
  const filename = MODULE_FILE_MAP?.[course]?.[moduleSlug];
  if (!filename) {
    return res.status(404).json({
      ok: false,
      error: "Module file not mapped yet (update MODULE_FILE_MAP)",
    });
  }

  // 2) Read from /content/<course>/<filename>
  const filePath = path.join(process.cwd(), "content", course, filename);

  // Extra guard: ensure resolved path stays inside /content
  const contentRoot = path.join(process.cwd(), "content");
  const resolved = path.resolve(filePath);
  if (!resolved.startsWith(path.resolve(contentRoot))) {
    return res.status(400).json({ ok: false, error: "Invalid path" });
  }

  try {
    const html = fs.readFileSync(resolved, "utf8");

    // Optional hardening headers (deterrence)
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Referrer-Policy", "no-referrer");
    res.setHeader("X-Frame-Options", "DENY");

    return res.status(200).json({ ok: true, html });
  } catch (e) {
    return res.status(404).json({
      ok: false,
      error: `Module file not found: content/${course}/${filename}`,
    });
  }
}