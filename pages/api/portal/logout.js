// pages/api/portal/logout.js
export default function handler(req, res) {
  res.setHeader("Set-Cookie", "portal_session=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax");
  return res.status(200).json({ ok: true });
}