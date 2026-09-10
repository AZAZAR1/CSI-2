// pages/api/predictor/event-access-request.js

import crypto from "crypto";

const STATICFORMS_EVENT_KEY =
  process.env.STATICFORMS_EVENT_KEY ||
  process.env.NEXT_PUBLIC_STATICFORMS_EVENT_KEY ||
  "";

const EVENT_TRIAL_SIGNING_SECRET =
  process.env.EVENT_TRIAL_SIGNING_SECRET || "";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://cigarsommelierinstitute.com";

const TOKEN_TTL_MINUTES = 60;

function cleanEmail(value) {
  return String(value || "").trim().toLowerCase();
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

async function submitToStaticForms(fields) {
  const body = new URLSearchParams();
  Object.entries(fields).forEach(([key, value]) => {
    body.append(key, String(value ?? ""));
  });

  const response = await fetch("https://api.staticforms.dev/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      Accept: "application/json",
    },
    body: body.toString(),
  });

  const raw = await response.text();
  let data = {};
  try {
    data = raw ? JSON.parse(raw) : {};
  } catch {
    data = {};
  }

  if (!response.ok) {
    console.error("EVENT_ACCESS_STATICFORMS_ERROR:", response.status, raw);
    throw new Error(
      data?.error ||
      data?.message ||
      "Unable to send the activation email."
    );
  }
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  if (!STATICFORMS_EVENT_KEY) {
    console.error("EVENT_ACCESS_ERROR: STATICFORMS_EVENT_KEY missing");
    return res.status(500).json({
      ok: false,
      error: "Event email delivery is not configured.",
    });
  }

  if (!EVENT_TRIAL_SIGNING_SECRET) {
    console.error("EVENT_ACCESS_ERROR: EVENT_TRIAL_SIGNING_SECRET missing");
    return res.status(500).json({
      ok: false,
      error: "Secure event activation is not configured.",
    });
  }

  const email = cleanEmail(req.body?.email);
  const marketingConsent = req.body?.marketing_consent === true;
  const source = String(req.body?.source || "event").trim();

  if (!validEmail(email)) {
    return res.status(400).json({
      ok: false,
      error: "Please enter a valid email address.",
    });
  }

  const now = Math.floor(Date.now() / 1000);
  const exp = now + TOKEN_TTL_MINUTES * 60;

  const token = signToken({
    email,
    purpose: "predictorpro-event-trial",
    iat: now,
    exp,
  });

  const activationUrl =
    `${SITE_URL.replace(/\/+$/, "")}/event/activate?token=${encodeURIComponent(token)}`;

  try {
    await submitToStaticForms({
      apiKey: STATICFORMS_EVENT_KEY,
      form: "PredictorPro Event Access",
      subject: "PredictorPro Event Access Request",
      email,
      activation_url: activationUrl,
      marketing_consent: marketingConsent ? "yes" : "no",
      source,
      requested_at: new Date().toISOString(),
    });

    return res.status(200).json({ ok: true, email });
  } catch (error) {
    console.error("EVENT_ACCESS_REQUEST_ERROR:", error);
    return res.status(502).json({
      ok: false,
      error:
        error?.message ||
        "Unable to send your PredictorPro access link.",
    });
  }
}
