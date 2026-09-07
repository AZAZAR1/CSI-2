// pages/api/predictor/event-trial.js

/*
ICSI Event Trial Registration
-----------------------------

Public-facing registration endpoint used by /event.

Purpose:
1. Receive attendee email from the public event page
2. Validate email server-side
3. Check whether user already exists
4. Preserve existing subscriber accounts unchanged
5. Create a new 30-day PredictorPro trial when required
6. Keep the backend API key completely server-side

IMPORTANT:
The browser never receives PREDICTOR_API_KEY.
*/

const PREDICTOR_BACKEND_URL =
  process.env.PREDICTOR_BACKEND_URL || "";

const PREDICTOR_API_KEY =
  process.env.PREDICTOR_API_KEY ||
  process.env.BACKEND_API_KEY ||
  process.env.API_KEY ||
  "";


/* ============================================================
   HELPERS
   ============================================================ */

function cleanEmail(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}


function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


function backendBaseUrl() {
  return String(PREDICTOR_BACKEND_URL || "")
    .trim()
    .replace(/\/+$/, "");
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


async function parseBackendResponse(response) {
  const text = await response.text();

  if (!text) {
    return {
      data: {},
      raw: "",
    };
  }

  try {
    return {
      data: JSON.parse(text),
      raw: text,
    };
  } catch {
    return {
      data: {},
      raw: text,
    };
  }
}


/* ============================================================
   HANDLER
   ============================================================ */

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);

    return res.status(405).json({
      ok: false,
      error: "Method not allowed.",
    });
  }


  /* ----------------------------------------------------------
     CONFIG VALIDATION
     ---------------------------------------------------------- */

  const baseUrl = backendBaseUrl();

  if (!baseUrl) {
    console.error(
      "event-trial: PREDICTOR_BACKEND_URL is missing"
    );

    return res.status(500).json({
      ok: false,
      error: "Predictor service is not configured.",
    });
  }


  if (!PREDICTOR_API_KEY) {
    console.error(
      "event-trial: Predictor API key is missing"
    );

    return res.status(500).json({
      ok: false,
      error: "Predictor service authentication is not configured.",
    });
  }


  /* ----------------------------------------------------------
     EMAIL VALIDATION
     ---------------------------------------------------------- */

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


  const apiHeaders = {
    "Content-Type": "application/json",
    "x-api-key": PREDICTOR_API_KEY,
  };


  try {

    /* ========================================================
       1. CHECK WHETHER USER ALREADY EXISTS

       This prevents an existing paid subscriber from being
       overwritten with trial settings.
       ======================================================== */

    const usersResponse = await fetch(
      `${baseUrl}/admin/users`,
      {
        method: "GET",
        headers: {
          "x-api-key": PREDICTOR_API_KEY,
        },
      }
    );


    const {
      data: usersData,
      raw: usersRaw,
    } = await parseBackendResponse(usersResponse);


    if (!usersResponse.ok) {
      console.error(
        "event-trial: failed to retrieve authorized users",
        usersResponse.status,
        usersRaw
      );

      return res.status(502).json({
        ok: false,
        error:
          usersData?.detail ||
          usersData?.error ||
          "Unable to verify PredictorPro access.",
      });
    }


    const users = Array.isArray(usersData?.users)
      ? usersData.users
      : [];


    const existingUser = users.find(
      (user) =>
        cleanEmail(user?.email) === email
    );


    /* ========================================================
       2. EXISTING ACCOUNT

       Leave everything untouched.

       This is important for:
       - existing Pro users
       - existing Standard users
       - existing Trial users
       ======================================================== */

    if (existingUser) {
      return res.status(200).json({
        ok: true,
        created: false,
        existing_user: true,
        email,
        tier: existingUser.tier || "",
        pro_access:
          existingUser.pro_access === true,
        expires_at:
          existingUser.expires_at || "",
      });
    }


    /* ========================================================
       3. CREATE NEW EVENT TRIAL
       ======================================================== */

    const expiresAt = addDaysIso(30);


    const trialPayload = {
      email,

      tier: "trial",

      active: true,

      /*
       Event visitors need access to PredictorPro rather than
       the standard Predictor interface.
       */
      pro_access: true,

      /*
       Use ICSI's global catalogue rather than venue-specific
       inventory.
       */
      inventory_folder: "global",

      expires_at: expiresAt,
    };


    const createResponse = await fetch(
      `${baseUrl}/admin/users/upsert`,
      {
        method: "POST",
        headers: apiHeaders,
        body: JSON.stringify(trialPayload),
      }
    );


    const {
      data: createData,
      raw: createRaw,
    } = await parseBackendResponse(createResponse);


    if (!createResponse.ok) {
      console.error(
        "event-trial: backend user creation failed",
        createResponse.status,
        createRaw
      );

      return res.status(createResponse.status).json({
        ok: false,
        error:
          createData?.detail ||
          createData?.error ||
          "Unable to activate PredictorPro trial access.",
      });
    }


    /* ========================================================
       SUCCESS
       ======================================================== */

    return res.status(200).json({
      ok: true,
      created: true,
      existing_user: false,

      email,

      tier: "trial",
      pro_access: true,
      expires_at: expiresAt,
    });

  } catch (error) {
    console.error(
      "event-trial: unexpected error",
      error
    );

    return res.status(500).json({
      ok: false,
      error:
        "Unable to activate PredictorPro access. Please try again.",
    });
  }
}
