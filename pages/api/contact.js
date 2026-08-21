import nodemailer from "nodemailer";

/* ----------------------------- BASIC RATE LIMIT ---------------------------- */

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

const requestMap = new Map();

function rateLimit(ip) {
  const now = Date.now();
  const data = requestMap.get(ip) || { count: 0, time: now };

  if (now - data.time > RATE_LIMIT_WINDOW) {
    data.count = 0;
    data.time = now;
  }

  data.count += 1;
  requestMap.set(ip, data);

  return data.count <= MAX_REQUESTS;
}

/* ----------------------------- SANITIZATION ---------------------------- */

function sanitize(s, maxLen = 2000) {
  if (!s) return "";
  return String(s).trim().replace(/[\x00-\x1F\x7F]/g, "").slice(0, maxLen);
}

function isEmail(s) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s);
}

/* ----------------------------- HANDLER ---------------------------- */

export default async function handler(req, res) {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const ip =
    req.headers["x-forwarded-for"] ||
    req.socket.remoteAddress ||
    "unknown";

  if (!rateLimit(ip)) {
    return res.status(429).json({ ok: false, error: "Too many requests" });
  }

  // Honeypot field (add hidden field named "company" in form if you ever use form again)
  if (req.body.company) {
    return res.status(400).json({ ok: false });
  }

  const first = sanitize(req.body.first_name);
  const last = sanitize(req.body.last_name);
  const city = sanitize(req.body.city);
  const email = sanitize(req.body.email, 254);
  const subject = sanitize(req.body.subject, 180);
  const comments = sanitize(req.body.comments, 4000);

  if (!first || !last || !city || !email || !subject || !comments) {
    return res.status(400).json({ ok: false, error: "Missing required fields" });
  }

  if (!isEmail(email)) {
    return res.status(400).json({ ok: false, error: "Invalid email address" });
  }

  /* ----------------------------- ENV CONFIG ---------------------------- */

  const ADMIN_TO = process.env.CSI_ADMIN_TO || "CDCAdmin@cdc-advisory.com";
  const FROM = process.env.CSI_FROM_EMAIL || "";
  const HOST = process.env.CSI_SMTP_HOST || "";
  const PORT = parseInt(process.env.CSI_SMTP_PORT || "587", 10);
  const USER = process.env.CSI_SMTP_USER || "";
  const PASS = process.env.CSI_SMTP_PASS || "";
  const TLS =
    (process.env.CSI_SMTP_TLS || "true").toLowerCase() !== "false";

  if (!FROM || !HOST || !USER || !PASS) {
    console.log("CSI email not configured. Submission:", {
      first,
      last,
      city,
      email,
      subject,
    });

    return res
      .status(200)
      .json({ ok: true, message: "Submitted (email not configured)" });
  }

  /* ----------------------------- TRANSPORT ---------------------------- */

  const transporter = nodemailer.createTransport({
    host: HOST,
    port: PORT,
    secure: false,
    auth: { user: USER, pass: PASS },
    tls: TLS ? { rejectUnauthorized: false } : undefined,
  });

  /* ----------------------------- ADMIN EMAIL ---------------------------- */

  const adminSubject = `[ICSI] ${subject}`;

  const adminText = `
New ICSI Website Submission

Name: ${first} ${last}
City: ${city}
Email: ${email}
Subject: ${subject}

Comments:
${comments}
`;

  const adminHtml = `
  <h2>New ICSI Website Submission</h2>
  <p><strong>Name:</strong> ${first} ${last}</p>
  <p><strong>City:</strong> ${city}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Subject:</strong> ${subject}</p>
  <hr />
  <p><strong>Comments:</strong></p>
  <p>${comments.replace(/\n/g, "<br/>")}</p>
  `;

  /* ----------------------------- CONFIRMATION EMAIL ---------------------------- */

  const confirmSubject =
    "International Cigar Sommelier Institute — Message Received";

  const confirmText = `
Hello ${first},

Thank you for contacting the International Cigar Sommelier Institute (ICSI).

Your message has been received and will be reviewed shortly.

Subject: ${subject}

— ICSI Administration
cigarsommelierinstitute.com
`;

  const confirmHtml = `
  <p>Hello ${first},</p>
  <p>Thank you for contacting the <strong>International Cigar Sommelier Institute</strong>.</p>
  <p>Your message has been received and will be reviewed shortly.</p>
  <p><strong>Subject:</strong> ${subject}</p>
  <br/>
  <p>— ICSI Administration<br/>cigarsommelierinstitute.com</p>
  `;

  /* ----------------------------- SEND EMAILS ---------------------------- */

  try {
    await transporter.sendMail({
      from: FROM,
      to: ADMIN_TO,
      subject: adminSubject,
      text: adminText,
      html: adminHtml,
      replyTo: email,
    });

    await transporter.sendMail({
      from: FROM,
      to: email,
      subject: confirmSubject,
      text: confirmText,
      html: confirmHtml,
      replyTo: ADMIN_TO,
    });

    return res.status(200).json({ ok: true, message: "Submitted" });
  } catch (err) {
    console.error("CSI email error:", err);
    return res.status(500).json({ ok: false, error: "Email send failed" });
  }
}