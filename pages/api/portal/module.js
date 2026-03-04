// pages/api/portal/module.js
import fs from "fs";
import path from "path";
import { getCandidateByToken, isExpired } from "../../../lib/portalCandidates";

function escapeHtml(s) {
  return String(s || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default function handler(req, res) {
  const token = String(req.query.token || "").trim();
  const slug = String(req.query.slug || "").trim();

  const candidate = getCandidateByToken(token);

  // Security headers
  res.setHeader("Cache-Control", "no-store, max-age=0");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "no-referrer");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  // Tight CSP; adjust if you embed external images/fonts
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; frame-ancestors 'self';"
  );

  if (!candidate) {
    return res.status(401).send("Invalid token");
  }
  if (isExpired(candidate.expiresAt)) {
    return res.status(403).send("Token expired");
  }

  const allowed = (candidate.modules || []).some((m) => m.slug === slug);
  if (!allowed) {
    return res.status(403).send("Not authorized for this module");
  }

  const course = candidate.course;
  const filePath = path.join(process.cwd(), "content", course, `${slug}.html`);

  if (!fs.existsSync(filePath)) {
    return res.status(404).send("Module not found");
  }

  const raw = fs.readFileSync(filePath, "utf8");

  const watermarkText = `${candidate.name} · ${candidate.candidateId} · ${new Date().toISOString().slice(0, 10)}`;

  // Build a "view-only" HTML shell around your module content
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>ICSI Module</title>
<style>
  :root{--text:#121214;--muted:#5d5d66;--line:rgba(17,17,20,.10);}
  html,body{margin:0;padding:0;background:#fff;color:var(--text);font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;}
  /* Attempt to discourage copy */
  body{ -webkit-user-select:none; user-select:none; }
  a{color:inherit;text-decoration:none}
  .wrap{max-width:980px;margin:0 auto;padding:22px 18px 60px;}
  .topbar{
    position:sticky;top:0;background:rgba(255,255,255,.92);
    backdrop-filter:saturate(140%) blur(10px);
    border-bottom:1px solid var(--line);
    padding:12px 18px; z-index:10;
  }
  .topbar small{color:var(--muted);letter-spacing:.08em;text-transform:uppercase}
  /* Watermark overlay */
  .wm{
    position:fixed; inset:0; pointer-events:none; z-index:999;
    opacity:.12; mix-blend-mode:multiply;
    background-image: repeating-linear-gradient(-24deg,
      rgba(0,0,0,.18) 0px, rgba(0,0,0,.18) 1px,
      rgba(0,0,0,0) 1px, rgba(0,0,0,0) 160px);
  }
  .wmText{
    position:fixed; inset:0; pointer-events:none; z-index:1000;
    display:flex; align-items:center; justify-content:center;
    font-size:14px; color:rgba(0,0,0,.55);
    letter-spacing:.12em; text-transform:uppercase;
    transform:rotate(-20deg);
  }
  /* Print = blank */
  @media print{
    body{display:none !important}
  }
  /* Make headings look good even without your global CSS */
  h1{font-size:30px;line-height:1.15;margin:16px 0 12px}
  h2{font-size:22px;line-height:1.2;margin:18px 0 10px}
  p,li{line-height:1.8;color:rgba(18,18,20,.86);font-size:15px}
  ul{padding-left:18px}
</style>
</head>
<body>
  <div class="topbar">
    <small>ICSI · Private Course Material · View Only</small>
  </div>

  <div class="wrap">
    ${raw}
  </div>

  <div class="wm" aria-hidden="true"></div>
  <div class="wmText" aria-hidden="true">${escapeHtml(watermarkText)}</div>

<script>
  // Basic deterrence: no right-click
  document.addEventListener('contextmenu', e => e.preventDefault());

  // Block common download/print shortcuts
  document.addEventListener('keydown', (e) => {
    const key = (e.key || '').toLowerCase();
    const ctrl = e.ctrlKey || e.metaKey;
    if (ctrl && (key === 's' || key === 'p' || key === 'u')) { e.preventDefault(); }
    if (key === 'printscreen') { e.preventDefault(); }
  });

  // Try to stop dragging images/text
  document.addEventListener('dragstart', e => e.preventDefault());

  // Note: cannot fully prevent screenshots; watermark is the enforcement layer.
</script>
</body>
</html>`;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  return res.status(200).send(html);
}