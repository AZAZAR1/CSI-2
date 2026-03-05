// pages/api/portal/certificate.js
import crypto from "crypto";
import { PDFDocument, StandardFonts } from "pdf-lib";
import { verifySession } from "../../../lib/portalSession";
import { saveCertificate } from "../../../lib/portalStore";

function parseCookie(req, name) {
  const raw = req.headers.cookie || "";
  const match = raw.split(";").map(s => s.trim()).find(s => s.startsWith(name + "="));
  if (!match) return "";
  return decodeURIComponent(match.split("=")[1] || "");
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  const secret = process.env.PORTAL_SESSION_SECRET;
  const siteUrl = process.env.SITE_URL || "https://cigarsommelierinstitute.com";
  if (!secret) return res.status(500).json({ ok: false });

  const token = parseCookie(req, "portal_session");
  const sess = verifySession(token, secret);
  if (!sess) return res.status(401).json({ ok: false, error: "Not signed in" });

  const candidateId = sess.candidateId;
  const course = String(sess.course || "").toUpperCase();

  const certId = crypto.randomBytes(10).toString("hex"); // short, unique
  const verifyUrl = `${siteUrl}/verify/${certId}`;

  // Create PDF
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([842, 595]); // landscape A4-ish
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  page.drawText("International Cigar Sommelier Institute", { x: 90, y: 500, size: 26, font: fontBold });
  page.drawText("Certificate of Completion", { x: 90, y: 455, size: 20, font: fontBold });

  page.drawText(`Issued to: ${candidateId}`, { x: 90, y: 400, size: 16, font });
  page.drawText(`Program: ${course}`, { x: 90, y: 375, size: 16, font });

  page.drawText(`Certificate ID: ${certId}`, { x: 90, y: 110, size: 12, font });
  page.drawText(`Verify: ${verifyUrl}`, { x: 90, y: 90, size: 12, font });

  const pdfBytes = await pdfDoc.save();

  // Persist cert record for public verification
  await saveCertificate(certId, {
    certId,
    candidateId,
    course,
    issuedAt: new Date().toISOString(),
    verifyUrl,
  });

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", `inline; filename="ICSI-${candidateId}-${course}.pdf"`);
  return res.status(200).send(Buffer.from(pdfBytes));
}