// pages/api/predictor/event-trial.js

import crypto from "crypto";

const PREDICTOR_BACKEND_URL =
  process.env.PREDICTOR_BACKEND_URL || "";

const PREDICTOR_API_KEY =
  process.env.PREDICTOR_API_KEY ||
  process.env.BACKEND_API_KEY ||
  process.env.API_KEY ||
  "";

const EVENT_TRIAL_SIGNING_SECRET =
  process.env.EVENT_TRIAL_SIGNING_SECRET || "";

const TRIAL_DAYS = 3;

function cleanEmail(value) {
  return String(value || "").trim().toLowerCase();
}

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function addDaysIso(days) {
  const now = new Date();
  const expiry = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );
  expiry.setUTCDate(expiry.getUTCDate() + days);
  return expiry.toISOString().slice(0, 10);
}

function getBackendBaseUrl() {
  return String(PREDICTOR_BACKEND_URL || "").trim().replace(/\/+$/, "");
}

async function readResponse(response) {
  const raw = await response.text();
  let data = {};
  try {
    data = raw ? JSON.parse(raw) : {};
  } catch {
    data = {};
  }
  return { raw, data };
}

function verifyActivationToken(token) {
  const raw = String(token || "").trim();
  const parts = raw.split(".");
  if (parts.length !== 2) throw new Error("Invalid activation link.");

  const [body, suppliedSignature] = parts;
  const expectedSignature = crypto
    .createHmac("sha256", EVENT_TRIAL_SIGNING_SECRET)
    .update(body)
    .digest("base64url");

  const a = Buffer.from(suppliedSignature);
  const b = Buffer.from(expectedSignature);

  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    throw new Error("Invalid activation link.");
  }

  let payload;
  try {
    payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
  } catch {
    throw new Error("Invalid activation link.");
  }

  if (payload?.purpose !== "predictorpro-event-trial") {
    throw new Error("Invalid activation link.");
  }

  const email = cleanEmail(payload?.email);
  if (!validEmail(email)) throw new Error("Invalid activation link.");

  const now = Math.floor(Date.now() / 1000);
  if (!Number.isFinite(payload?.exp) || payload.exp < now) {
    const error = new Error("This activation link has expired.");
    error.code = "TOKEN_EXPIRED";
    throw error;
  }

  return { email };
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  if (!EVENT_TRIAL_SIGNING_SECRET) {
    return res.status(500).json({
      ok: false,
      error: "Secure trial activation is not configured.",
    });
  }

  const backendUrl = getBackendBaseUrl();
  if (!backendUrl) {
    return res.status(500).json({
      ok: false,
      error: "Predictor backend is not configured.",
    });
  }

  if (!PREDICTOR_API_KEY) {
    return res.status(500).json({
      ok: false,
      error: "Predictor authentication is not configured.",
    });
  }

  let verified;
  try {
    verified = verifyActivationToken(req.body?.token);
  } catch (error) {
    return res.status(error?.code === "TOKEN_EXPIRED" ? 410 : 401).json({
      ok: false,
      error: error?.message || "Unable to verify this activation link.",
    });
  }

  const email = verified.email;
  const publicApiBase = `${backendUrl}/api/predictor`;

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "x-api-key": PREDICTOR_API_KEY,
  };

  try {
    const usersResponse = await fetch(`${publicApiBase}/admin/users`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "x-api-key": PREDICTOR_API_KEY,
      },
    });

    const { data: usersData, raw: usersRaw } = await readResponse(usersResponse);

    if (!usersResponse.ok) {
      console.error(
        "EVENT_TRIAL_USER_LIST_ERROR:",
        usersResponse.status,
        usersRaw
      );
      return res.status(502).json({
        ok: false,
        error:
          usersData?.detail ||
          usersData?.error ||
          `Unable to verify existing access (${usersResponse.status}).`,
      });
    }

    const users = Array.isArray(usersData?.users) ? usersData.users : [];
    const existingUser = users.find(
      (user) => cleanEmail(user?.email) === email
    );

    if (existingUser) {
      return res.status(200).json({
        ok: true,
        created: false,
        existing_user: true,
        email,
        tier: existingUser.tier || "",
        active: existingUser.active === true,
        pro_access: existingUser.pro_access === true,
        expires_at: existingUser.expires_at || "",
      });
    }

    const expiresAt = addDaysIso(TRIAL_DAYS);

    const payload = {
      email,
      tier: "trial",
      active: true,
      pro_access: true,
      inventory_folder: "global",
      expires_at: expiresAt,
    };

    const createResponse = await fetch(`${publicApiBase}/admin/users/upsert`, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    const { data: createData, raw: createRaw } = await readResponse(createResponse);

    if (!createResponse.ok) {
      console.error(
        "EVENT_TRIAL_CREATE_ERROR:",
        createResponse.status,
        createRaw
      );
      return res.status(createResponse.status).json({
        ok: false,
        error:
          createData?.detail ||
          createData?.error ||
          `Unable to activate PredictorPro trial access (${createResponse.status}).`,
      });
    }

    return res.status(200).json({
      ok: true,
      created: true,
      existing_user: false,
      email,
      tier: "trial",
      active: true,
      pro_access: true,
      expires_at: createData?.expires_at || expiresAt,
    });

  } catch (error) {
    console.error("EVENT_TRIAL_UNEXPECTED_ERROR:", error);
    return res.status(500).json({
      ok: false,
      error:
        error?.message ||
        "Unable to activate PredictorPro trial access.",
    });
  }
}
