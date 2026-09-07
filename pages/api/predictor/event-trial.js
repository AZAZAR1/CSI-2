// pages/api/predictor/event-trial.js

const PREDICTOR_BACKEND_URL =
  process.env.PREDICTOR_BACKEND_URL || "";

const PREDICTOR_API_KEY =
  process.env.PREDICTOR_API_KEY ||
  process.env.BACKEND_API_KEY ||
  process.env.API_KEY ||
  "";

function cleanEmail(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function addDaysIso(days) {
  const now = new Date();

  const expiry = new Date(
    Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate()
    )
  );

  expiry.setUTCDate(expiry.getUTCDate() + days);

  return expiry.toISOString().slice(0, 10);
}

function getBackendBaseUrl() {
  return String(PREDICTOR_BACKEND_URL || "")
    .trim()
    .replace(/\/+$/, "");
}

async function readResponse(response) {
  const raw = await response.text();

  let data = {};

  try {
    data = raw ? JSON.parse(raw) : {};
  } catch {
    data = {};
  }

  return {
    raw,
    data,
  };
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");

    return res.status(405).json({
      ok: false,
      error: "Method not allowed.",
    });
  }

  const backendUrl = getBackendBaseUrl();

  if (!backendUrl) {
    console.error(
      "EVENT_TRIAL_ERROR: PREDICTOR_BACKEND_URL missing"
    );

    return res.status(500).json({
      ok: false,
      error: "Predictor backend is not configured.",
    });
  }

  if (!PREDICTOR_API_KEY) {
    console.error(
      "EVENT_TRIAL_ERROR: PREDICTOR_API_KEY missing"
    );

    return res.status(500).json({
      ok: false,
      error: "Predictor authentication is not configured.",
    });
  }

  const email = cleanEmail(req.body?.email);

  if (!email) {
    return res.status(400).json({
      ok: false,
      error: "Please enter your email address.",
    });
  }

  if (!validEmail(email)) {
    return res.status(400).json({
      ok: false,
      error: "Please enter a valid email address.",
    });
  }

  /*
   * IMPORTANT
   *
   * PREDICTOR_BACKEND_URL points to the public EC2/Nginx host.
   * Public Predictor backend routes sit under:
   *
   * /api/predictor/
   */
  const publicApiBase =
    `${backendUrl}/api/predictor`;

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "x-api-key": PREDICTOR_API_KEY,
  };

  try {
    /*
     * Check existing users first so we do not downgrade
     * an existing Standard or Pro account into Trial.
     */
    const usersResponse = await fetch(
      `${publicApiBase}/admin/users`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "x-api-key": PREDICTOR_API_KEY,
        },
      }
    );

    const {
      data: usersData,
      raw: usersRaw,
    } = await readResponse(usersResponse);

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

    const users = Array.isArray(usersData?.users)
      ? usersData.users
      : [];

    const existingUser = users.find(
      (user) =>
        cleanEmail(user?.email) === email
    );

    /*
     * Existing user:
     * preserve the account exactly as it is.
     */
    if (existingUser) {
      return res.status(200).json({
        ok: true,
        created: false,
        existing_user: true,

        email,

        tier: existingUser.tier || "",
        active: existingUser.active === true,

        pro_access:
          existingUser.pro_access === true,

        expires_at:
          existingUser.expires_at || "",
      });
    }

    /*
     * New event attendee:
     * create 30-day PredictorPro trial.
     */
    const expiresAt = addDaysIso(30);

    const payload = {
      email,

      tier: "trial",

      active: true,

      /*
       * Trial attendee gets PredictorPro interface.
       */
      pro_access: true,

      /*
       * Event access uses master ICSI inventory.
       */
      inventory_folder: "global",

      expires_at: expiresAt,
    };

    const createResponse = await fetch(
      `${publicApiBase}/admin/users/upsert`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      }
    );

    const {
      data: createData,
      raw: createRaw,
    } = await readResponse(createResponse);

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

      expires_at:
        createData?.expires_at ||
        expiresAt,
    });

  } catch (error) {
    console.error(
      "EVENT_TRIAL_UNEXPECTED_ERROR:",
      error
    );

    return res.status(500).json({
      ok: false,
      error:
        error?.message ||
        "Unable to activate PredictorPro trial access.",
    });
  }
}
