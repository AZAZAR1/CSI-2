// pages/api/admin/auth.js
export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const password = String(req.body?.password || "");
  const expected = process.env.ADMIN_PANEL_PASSWORD || "";

  if (!expected) {
    return res.status(500).json({
      ok: false,
      error: "ADMIN_PANEL_PASSWORD is not set in environment variables.",
    });
  }

  if (password !== expected) {
    return res.status(401).json({ ok: false, error: "Invalid password" });
  }

  return res.status(200).json({ ok: true });
}