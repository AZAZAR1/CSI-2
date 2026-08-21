import { verifySession } from "../../../lib/portalSession";
import { getCandidateFromBlob, getModuleMeta } from "../../../lib/portalBlob";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  const token = String(req.query.token || "").trim();
  const course = String(req.query.course || "").trim().toLowerCase();
  const module = String(req.query.module || "").trim();

  if (!token || !course || !module) {
    return res.status(400).json({ ok: false, error: "Missing params" });
  }

  // 1) must have a valid session cookie (device bound)
  const session = verifySession(req);
  if (!session?.token || session.token !== token) {
    return res.status(401).json({ ok: false, error: "Not logged in" });
  }

  // 2) validate candidate + entitlement
  const candidate = await getCandidateFromBlob(token);
  if (!candidate) return res.status(401).json({ ok: false, error: "Invalid token" });

  const candidateCourse = String(candidate.course || "").toLowerCase();
  if (candidateCourse !== course) {
    return res.status(403).json({ ok: false, error: "Not authorized for this course" });
  }

  const allowed = Array.isArray(candidate.modules)
    ? candidate.modules.some((m) => (m.slug || m.path) === module)
    : false;

  if (!allowed) {
    return res.status(404).json({ ok: false, error: "Module not assigned" });
  }

  // 3) return the blob's downloadUrl (private blob URL)
  const meta = await getModuleMeta(course, module);
  if (!meta?.downloadUrl) {
    return res.status(404).json({ ok: false, error: "Module file not found in Blob" });
  }

  // NOTE: Vercel Blob downloadUrl is already a signed URL-like access path for private blobs.
  // We can rotate by not sharing it directly and instead fetching server-side if you want max control.
  return res.status(200).json({ ok: true, url: meta.downloadUrl });
}