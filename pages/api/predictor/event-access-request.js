// pages/api/predictor/event-access-request.js

import crypto from "crypto";
import { Resend } from "resend";

const RESEND_API_KEY =
  process.env.RESEND_API_KEY || "";

const STATICFORMS_EVENT_KEY =
  process.env.STATICFORMS_EVENT_KEY || "";

const EVENT_TRIAL_SIGNING_SECRET =
  process.env.EVENT_TRIAL_SIGNING_SECRET || "";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://cigarsommelierinstitute.com";

const RESEND_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ||
  "ICSI Admin Team <admin@cigarsommelierinstitute.com>";

const RESEND_REPLY_TO =
  process.env.RESEND_REPLY_TO ||
  "admin@cigarsommelierinstitute.com";

const TOKEN_TTL_MINUTES = 60;

function cleanEmail(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function base64UrlEncode(value) {
  return Buffer.from(value, "utf8").toString("base64url");
}

function signToken(payload) {
  const body = base64UrlEncode(JSON.stringify(payload));

  const signature = crypto
    .createHmac("sha256", EVENT_TRIAL_SIGNING_SECRET)
    .update(body)
    .digest("base64url");

  return `${body}.${signature}`;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function captureWithStaticForms({
  email,
  marketingConsent,
  source,
}) {
  /*
   * StaticForms is used only for lead / consent capture.
   * Its Auto-reply must be DISABLED for this event form.
   *
   * If StaticForms capture fails, we log the error but do not
   * block the attendee's activation email.
   */
  if (!STATICFORMS_EVENT_KEY) {
    console.warn(
      "STATICFORMS_EVENT_KEY missing. " +
      "PredictorPro activation email will still be sent."
    );
    return;
  }

  const body = new URLSearchParams();

  body.append("apiKey", STATICFORMS_EVENT_KEY);
  body.append("Form", "PredictorPro Event Access");
  body.append("subject", "PredictorPro Event Access Request");
  body.append("email", email);
  body.append(
    "Marketing Consent",
    marketingConsent ? "Yes" : "No"
  );
  body.append("Source", source);
  body.append("Requested At", new Date().toISOString());

  try {
    const response = await fetch(
      "https://api.staticforms.dev/submit",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded;charset=UTF-8",
          Accept: "application/json",
        },
        body: body.toString(),
      }
    );

    if (!response.ok) {
      const raw = await response.text();

      console.error(
        "STATICFORMS_CAPTURE_ERROR:",
        response.status,
        raw
      );
    }
  } catch (error) {
    console.error(
      "STATICFORMS_CAPTURE_UNEXPECTED_ERROR:",
      error
    );
  }
}

async function sendActivationEmail({
  resend,
  email,
  activationUrl,
}) {
  const safeActivationUrl = escapeHtml(activationUrl);

  const html = `
    <!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          @media only screen and (max-width: 600px) {
            .icsi-email-shell { padding:20px 12px !important; }
            .icsi-email-card { padding:32px 24px !important; }
            .icsi-email-title {
              font-size:34px !important;
              line-height:1.08 !important;
            }
          }
        </style>
      </head>
      <body
        style="
          margin:0;
          padding:0;
          background:#faf4e8;
          color:#16161f;
          font-family:Arial,Helvetica,sans-serif;
        "
      >
        <div
          class="icsi-email-shell"
          style="
            width:100%;
            padding:36px 18px;
            box-sizing:border-box;
          "
        >
          <div
            class="icsi-email-card"
            style="
              max-width:640px;
              margin:0 auto;
              background:#ffffff;
              border-top:4px solid #601818;
              padding:42px 38px;
              box-sizing:border-box;
            "
          >
            <div
              style="
                margin-bottom:16px;
                color:#c0242f;
                font-size:11px;
                line-height:1.4;
                letter-spacing:2px;
                text-transform:uppercase;
                font-weight:700;
              "
            >
              International Cigar Sommelier Institute
            </div>

            <h1
              class="icsi-email-title"
              style="
                margin:0 0 22px;
                font-family:Georgia,'Times New Roman',serif;
                font-size:38px;
                line-height:1.08;
                font-weight:400;
                color:#16161f;
                word-break:normal;
                overflow-wrap:normal;
              "
            >
              Activate your PredictorPro trial
            </h1>

            <p
              style="
                margin:0 0 18px;
                font-size:16px;
                line-height:1.7;
                color:#4f4b48;
              "
            >
              Thank you for requesting access to PredictorPro.
            </p>

            <p
              style="
                margin:0 0 30px;
                font-size:16px;
                line-height:1.7;
                color:#4f4b48;
              "
            >
              Please verify your email address to activate your
              3-day PredictorPro trial.
            </p>

            <p style="margin:0 0 28px;">
              <a
                href="${safeActivationUrl}"
                style="
                  display:inline-block;
                  padding:17px 28px;
                  background:#601818;
                  color:#ffffff;
                  text-decoration:none;
                  font-size:12px;
                  line-height:1;
                  letter-spacing:1.8px;
                  text-transform:uppercase;
                  font-weight:700;
                "
              >
                Activate PredictorPro
              </a>
            </p>

            <p
              style="
                margin:0 0 10px;
                font-size:13px;
                line-height:1.6;
                color:#77716b;
              "
            >
              This secure activation link is valid for 60 minutes.
            </p>

            <p
              style="
                margin:0 0 26px;
                font-size:13px;
                line-height:1.6;
                color:#77716b;
              "
            >
              After verification, PredictorPro will open automatically
              on the device you are using.
            </p>

            <p
              style="
                margin:0 0 8px;
                font-size:12px;
                line-height:1.6;
                color:#88817a;
              "
            >
              If the button does not work, copy and paste this link
              into your browser:
            </p>

            <p
              style="
                margin:0 0 34px;
                word-break:break-all;
                font-size:11px;
                line-height:1.6;
              "
            >
              <a
                href="${safeActivationUrl}"
                style="
                  color:#601818;
                  text-decoration:underline;
                "
              >
                ${safeActivationUrl}
              </a>
            </p>

            <div
              style="
                border-top:1px solid #ddd2c4;
                padding-top:20px;
                font-size:12px;
                line-height:1.65;
                color:#77716b;
              "
            >
              International Cigar Sommelier Institute<br />
              Cigar Peak-Flavor System®
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  const text = [
    "Thank you for requesting access to PredictorPro.",
    "",
    "Please verify your email address to activate your 3-day PredictorPro trial:",
    "",
    activationUrl,
    "",
    "This secure activation link is valid for 60 minutes.",
    "",
    "After verification, PredictorPro will open automatically on your device.",
    "",
    "International Cigar Sommelier Institute",
    "Cigar Peak-Flavor System®",
  ].join("\n");

  const { data, error } = await resend.emails.send({
    from: RESEND_FROM_EMAIL,
    to: [email],
    replyTo: RESEND_REPLY_TO,
    subject: "Your PredictorPro Event Access | ICSI",
    html,
    text,
  });

  if (error) {
    console.error(
      "RESEND_EMAIL_ERROR:",
      error
    );

    throw new Error(
      "Unable to send your PredictorPro activation email."
    );
  }

  return data;
}

export default async function handler(req, res) {
  res.setHeader(
    "Cache-Control",
    "no-store, max-age=0"
  );

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");

    return res.status(405).json({
      ok: false,
      error: "Method not allowed.",
    });
  }

  /*
   * Configuration validation
   */
  if (!RESEND_API_KEY) {
    console.error(
      "EVENT_ACCESS_ERROR: RESEND_API_KEY missing"
    );

    return res.status(500).json({
      ok: false,
      error:
        "PredictorPro email delivery is not configured.",
    });
  }

  if (!EVENT_TRIAL_SIGNING_SECRET) {
    console.error(
      "EVENT_ACCESS_ERROR: EVENT_TRIAL_SIGNING_SECRET missing"
    );

    return res.status(500).json({
      ok: false,
      error:
        "Secure PredictorPro activation is not configured.",
    });
  }

  const email = cleanEmail(req.body?.email);

  const marketingConsent =
    req.body?.marketing_consent === true;

  const source = String(
    req.body?.source || "event"
  ).trim();

  if (!email || !validEmail(email)) {
    return res.status(400).json({
      ok: false,
      error:
        "Please enter a valid email address.",
    });
  }

  /*
   * Create a short-lived signed activation token.
   *
   * Important:
   * The activation URL is NEVER returned to the browser.
   * It is delivered only to the email address supplied.
   */
  const now = Math.floor(
    Date.now() / 1000
  );

  const exp =
    now +
    TOKEN_TTL_MINUTES * 60;

  const token = signToken({
    email,
    purpose:
      "predictorpro-event-trial",
    iat: now,
    exp,
  });

  const activationUrl =
    `${SITE_URL.replace(/\/+$/, "")}` +
    `/event/activate?token=` +
    encodeURIComponent(token);

  const resend = new Resend(
    RESEND_API_KEY
  );

  try {
    /*
     * Send the secure activation email first.
     *
     * A trial is NOT created here.
     * The trial is only created later, after the user
     * clicks the signed link and /event/activate verifies it.
     */
    await sendActivationEmail({
      resend,
      email,
      activationUrl,
    });

    /*
     * Capture event lead / marketing consent separately.
     * Failure here does not prevent the activation email.
     */
    await captureWithStaticForms({
      email,
      marketingConsent,
      source,
    });

    /*
     * Do not expose token or activation URL to the client.
     */
    return res.status(200).json({
      ok: true,
      email,
    });

  } catch (error) {
    console.error(
      "EVENT_ACCESS_REQUEST_ERROR:",
      error
    );

    return res.status(502).json({
      ok: false,
      error:
        error?.message ||
        "Unable to send your PredictorPro access link.",
    });
  }
}

