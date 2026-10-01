// pages/api/portal/module.js
//
// Secure PDF module endpoint for the ICSI candidate portal.
// Returns the assigned course PDF as binary bytes after validating:
//   1) signed portal session
//   2) session expiry
//   3) candidate record
//   4) course entitlement
//   5) module entitlement
//   6) supported language
//
// Current repository structure:
//   content/<course>/<language>/<module-slug>.pdf
//
// Example:
//   content/ccs/en/module-1.pdf
//   content/ccs/fr/module-1.pdf

import fs from "fs/promises";
import path from "path";

import {
  verifySession,
  getSessionCookieName,
} from "../../../lib/portalSession";

import {
  getCandidateByToken,
  isExpired,
} from "../../../lib/portalCandidatesBlob";

function parseCookie(req, name) {
  const raw = req.headers.cookie || "";

  const match = raw
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`));

  if (!match) return "";

  return decodeURIComponent(
    match.slice(name.length + 1)
  );
}

function cleanSegment(value) {
  const segment = String(value || "").trim().toLowerCase();

  // Only allow safe path segments such as:
  // ccs, module-0, module-1, etc.
  if (!/^[a-z0-9_-]+$/.test(segment)) {
    return "";
  }

  return segment;
}

function moduleIsAssigned(candidate, moduleSlug) {
  if (!Array.isArray(candidate?.modules)) return false;

  return candidate.modules.some((item) => {
    const assigned = cleanSegment(
      item?.slug || item?.path || ""
    );

    return assigned === moduleSlug;
  });
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "private, no-store, max-age=0");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("X-Content-Type-Options", "nosniff");

  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");

    return res.status(405).json({
      ok: false,
      error: "Method not allowed",
    });
  }

  try {
    const course = cleanSegment(req.query?.course);
    const moduleSlug = cleanSegment(req.query?.module);

    if (!course || !moduleSlug) {
      return res.status(400).json({
        ok: false,
        error: "Missing or invalid module parameters.",
      });
    }

    /*
     * 1. Validate the signed portal session cookie.
     */
    const sessionCookie = parseCookie(
      req,
      getSessionCookieName()
    );

    const session = verifySession(sessionCookie);

    if (!session?.token) {
      return res.status(401).json({
        ok: false,
        error: "Not signed in.",
      });
    }

    /*
     * 2. Validate session expiry.
     */
    const sessionExpiry = new Date(
      session.expiresAt || ""
    ).getTime();

    if (
      !sessionExpiry ||
      Number.isNaN(sessionExpiry) ||
      Date.now() > sessionExpiry
    ) {
      return res.status(403).json({
        ok: false,
        error: "Access expired.",
      });
    }

    /*
     * 3. Load the candidate from the same Vercel Blob
     * candidate store used by login.js and session.js.
     */
    const candidate = await getCandidateByToken(
      session.token
    );

    if (!candidate) {
      return res.status(401).json({
        ok: false,
        error: "Candidate not found.",
      });
    }

    if (isExpired(candidate.expiresAt)) {
      return res.status(403).json({
        ok: false,
        error: "Candidate access expired.",
      });
    }

    /*
     * 4. Validate course entitlement.
     */
    const candidateCourse = cleanSegment(
      candidate.course
    );

    if (
      !candidateCourse ||
      candidateCourse !== course
    ) {
      return res.status(403).json({
        ok: false,
        error: "Not authorized for this course.",
      });
    }

    /*
     * 5. Validate module entitlement.
     */
    if (!moduleIsAssigned(candidate, moduleSlug)) {
      return res.status(404).json({
        ok: false,
        error: "Module not found or not assigned.",
      });
    }

    /*
     * 6. Resolve language from the candidate record.
     * The current portal admin only permits EN or FR.
     */
    const language = String(
      candidate.language || "en"
    )
      .trim()
      .toLowerCase();

    if (!["en", "fr"].includes(language)) {
      return res.status(400).json({
        ok: false,
        error: "Unsupported course language.",
      });
    }

    /*
     * 7. Resolve the protected PDF from the repository.
     *
     * This matches the structure in the supplied site ZIP:
     * content/ccs/en/module-0.pdf
     * content/ccs/en/module-1.pdf
     * ...
     * content/ccs/fr/module-0.pdf
     * ...
     */
    const pdfPath = path.join(
      process.cwd(),
      "content",
      course,
      language,
      `${moduleSlug}.pdf`
    );

    let pdfBuffer;

    try {
      pdfBuffer = await fs.readFile(pdfPath);
    } catch (fileError) {
      if (fileError?.code === "ENOENT") {
        console.error(
          "PORTAL_MODULE_FILE_NOT_FOUND:",
          pdfPath
        );

        return res.status(404).json({
          ok: false,
          error:
            "The assigned module file is not available.",
        });
      }

      throw fileError;
    }

    /*
     * 8. Return PDF bytes directly to the existing PDF.js
     * viewer. Do not expose a public file URL.
     */
    res.setHeader(
      "Content-Type",
      "application/pdf"
    );

    res.setHeader(
      "Content-Disposition",
      `inline; filename="${course}-${moduleSlug}.pdf"`
    );

    res.setHeader(
      "Content-Length",
      String(pdfBuffer.length)
    );

    return res.status(200).send(pdfBuffer);

  } catch (error) {
    console.error(
      "PORTAL_MODULE_ERROR:",
      error
    );

    return res.status(500).json({
      ok: false,
      error:
        error?.message ||
        "Unable to load this module.",
    });
  }
}
