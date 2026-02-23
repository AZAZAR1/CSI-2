import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const ADMIN_TO = process.env.CSI_ADMIN_TO ?? 'CDCAdmin@cdc-advisory.com';
const CONFIRM_FROM = process.env.CSI_FROM_EMAIL ?? '';
const SMTP_HOST = process.env.CSI_SMTP_HOST ?? '';
const SMTP_PORT = parseInt(process.env.CSI_SMTP_PORT ?? '587', 10);
const SMTP_USER = process.env.CSI_SMTP_USER ?? '';
const SMTP_PASS = process.env.CSI_SMTP_PASS ?? '';
const SMTP_TLS = !['0', 'false', 'no', 'n'].includes(
  (process.env.CSI_SMTP_TLS ?? 'true').toLowerCase()
);

function sanitize(s: unknown, maxLen = 2000): string {
  if (!s) return '';
  return String(s)
    .trim()
    .replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g, '')
    .slice(0, maxLen);
}

async function sendEmail(to: string, subject: string, body: string, replyTo = '') {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONFIRM_FROM) {
    console.log('[CSI] Email not configured — would send to:', to, '|', subject);
    console.log(body);
    return false;
  }
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: !SMTP_TLS,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
  await transporter.sendMail({
    from: CONFIRM_FROM,
    to,
    subject,
    text: body,
    replyTo: replyTo || undefined,
  });
  return true;
}

export async function POST(req: NextRequest) {
  let data: Record<string, unknown>;
  const ctype = req.headers.get('content-type') ?? '';

  try {
    if (ctype.includes('application/json')) {
      data = await req.json();
    } else {
      const text = await req.text();
      const params = new URLSearchParams(text);
      data = Object.fromEntries(params.entries());
    }
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body' }, { status: 400 });
  }

  const first = sanitize(data.first_name);
  const last = sanitize(data.last_name);
  const city = sanitize(data.city);
  const email = sanitize(data.email, 254);
  const subject = sanitize(data.subject, 180);
  const comments = sanitize(data.comments, 4000);

  if (!first || !last || !city || !email || !subject || !comments) {
    return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'Invalid email address' }, { status: 400 });
  }

  const adminBody = `New CSI website submission\n\nName: ${first} ${last}\nCity: ${city}\nEmail: ${email}\nSubject: ${subject}\n\nComments:\n${comments}`;
  const confirmBody = `Hello ${first},\n\nThank you for contacting the Cigar Sommelier Institute (CSI). We have received your message and will respond shortly.\n\nSubject: ${subject}\n\n— CSI Administration\ncigarsommelierinstitute.com`;

  await sendEmail(ADMIN_TO, `[CSI] ${subject}`, adminBody, email);
  await sendEmail(email, 'CSI — We received your message', confirmBody, ADMIN_TO);

  return NextResponse.json({ ok: true, message: 'Submitted' });
}
