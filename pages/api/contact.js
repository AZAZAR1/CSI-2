import nodemailer from "nodemailer";

function sanitize(s, maxLen = 2000) {
  if (!s) return "";
  return String(s).trim().replace(/[\x00-\x1F\x7F]/g, "").slice(0, maxLen);
}

function isEmail(s) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
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

  const ADMIN_TO = process.env.CSI_ADMIN_TO || "CDCAdmin@cdc-advisory.com";
  const FROM = process.env.CSI_FROM_EMAIL || "";
  const HOST = process.env.CSI_SMTP_HOST || "";
  const PORT = parseInt(process.env.CSI_SMTP_PORT || "587", 10);
  const USER = process.env.CSI_SMTP_USER || "";
  const PASS = process.env.CSI_SMTP_PASS || "";
  const TLS = (process.env.CSI_SMTP_TLS || "true").toLowerCase() !== "false";

  // If SMTP isn't configured, accept submission (so you can deploy immediately).
  if (!FROM || !HOST || !USER || !PASS) {
    console.log("CSI email not configured. Submission:", { first, last, city, email, subject });
    return res.status(200).json({ ok: true, message: "Submitted (email not configured)" });
  }

  const transporter = nodemailer.createTransport({
    host: HOST,
    port: PORT,
    secure: false,
    auth: { user: USER, pass: PASS },
    tls: TLS ? { rejectUnauthorized: false } : undefined
  });

  const adminSubject = `[CSI] ${subject}`;
  const adminText = `New CSI website submission

Name: ${first} ${last}
City: ${city}
Email: ${email}
Subject: ${subject}

Comments:
${comments}
`;

  const confirmSubject = "CSI — We received your message";
  const confirmText = `Hello ${first},

Thank you for contacting the International Cigar Sommelier Institute (CSI).
We have received your message and will respond shortly.

Subject: ${subject}

— CSI Administration
cigarsommelierinstitute.com
`;

  try {
    await transporter.sendMail({
      from: FROM,
      to: ADMIN_TO,
      subject: adminSubject,
      text: adminText,
      replyTo: email
    });

    await transporter.sendMail({
      from: FROM,
      to: email,
      subject: confirmSubject,
      text: confirmText,
      replyTo: ADMIN_TO
    });

    return res.status(200).json({ ok: true, message: "Submitted" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: "Email send failed" });
  }
}