import { getCertificate } from "../../lib/portalStore";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");
  const cert = String(req.query.cert || "");
  if (!cert) return res.status(400).json({ ok: false, error: "Missing cert" });

  const data = await getCertificate(cert);
  if (!data) return res.status(404).json({ ok: false, error: "Certificate not found" });

  return res.status(200).json({ ok: true, cert: data });
}