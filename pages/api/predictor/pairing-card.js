// pages/api/predictor/pairing-card.js

/*
Standalone pairing-card endpoint.

Purpose
-------
Thin Vercel API wrapper around the EC2 Python pairing engine.

This route:
1. Accepts RH family + blend metadata from PredictorPro
2. Preserves account identity (user_email + device_token)
3. Forwards the request to EC2 backend /api/predictor/pairing-card
4. Sends the backend API key header
5. Forwards x-device-token when available
6. Returns normalized pairing_card payload
7. Preserves backend inventory diagnostics
8. Surfaces useful debug detail if EC2 returns HTML/text instead of JSON

Why account identity matters
----------------------------
The EC2 backend uses user_email to resolve the PredictorPro user's
inventory_folder, then dynamically loads:

  inventories/<inventory_folder>/spirits_current.csv

This allows Local Pairing to be account-specific without hard-coding
venue folder names in this Vercel route.
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

function cleanText(value) {
  return String(value || "").trim();
}

function normalizeFamily(value) {
  const raw = String(value || "")
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "")
    .replace("PLUS", "+");

  const aliases = {
    A: "A",
    FAMILYA: "A",

    B: "B",
    FAMILYB: "B",

    C: "C",
    FAMILYC: "C",

    "C+": "C+",
    CPLUS: "C+",
    FAMILYCPLUS: "C+",
    "FAMILYC+": "C+",

    D: "D",
    FAMILYD: "D",
  };

  return aliases[raw] || "";
}

function toArray(value) {
  if (Array.isArray(value)) {
    return value
      .map((item) => cleanText(item))
      .filter(Boolean);
  }

  if (value) {
    const cleaned = cleanText(value);

    if (cleaned) {
      return [cleaned];
    }
  }

  return [];
}

function truncate(value, maxLength) {
  const text = String(value || "");

  if (text.length <= maxLength) {
    return text;
  }

  return text.slice(0, maxLength) + "...";
}


/* ============================================================
   PAYLOAD NORMALIZATION
   ============================================================ */

function cleanPayload(body, requestDeviceToken = "") {
  body = body || {};

  const bodyDeviceToken =
    cleanText(
      body.device_token ||
      body.deviceToken
    );

  const deviceToken =
    bodyDeviceToken ||
    cleanText(requestDeviceToken);

  return {
    /*
    Account identity.
    Required by EC2 so it can resolve the user's inventory_folder.
    */
    user_email:
      cleanText(
        body.user_email ||
        body.userEmail ||
        body.email
      ).toLowerCase(),

    device_token:
      deviceToken,

    /*
    CPFS family.
    */
    family:
      normalizeFamily(
        body.family ||
        body.rh_family ||
        body.cps_family ||
        body.peak_flavor_family ||
        body.cigar_peak_flavor_system_family
      ) || "",

    /*
    Blend identity.
    */
    brand:
      cleanText(body.brand),

    line:
      cleanText(body.line),

    /*
    Blend architecture used by pairing_engine.py.
    */
    wrapper:
      cleanText(body.wrapper),

    wrapper_process:
      cleanText(
        body.wrapper_process ||
        body.wrapperProcess ||
        body.process
      ),

    wrapper_thickness:
      cleanText(
        body.wrapper_thickness ||
        body.wrapperThickness
      ),

    wrapper_oiliness:
      cleanText(
        body.wrapper_oiliness ||
        body.wrapperOiliness
      ),

    ligero:
      cleanText(body.ligero),

    origin:
      cleanText(body.origin),

    filler:
      toArray(body.filler),

    special_tobacco_flags:
      toArray(
        body.special_tobacco_flags
      ),

    /*
    Preserve optional blend fields.
    Current Python pairing logic may not use every one of these, but keeping
    them makes the wrapper compatible with PredictorPro's full payload and
    future backend extensions.
    */
    binder:
      cleanText(body.binder),

    binder_1:
      cleanText(body.binder_1),

    binder_2:
      cleanText(body.binder_2),

    binders:
      toArray(body.binders),

    age_years:
      body.age_years === null ||
      body.age_years === undefined ||
      body.age_years === ""
        ? null
        : Number(body.age_years),

    smoker_style:
      cleanText(body.smoker_style),
  };
}


/* ============================================================
   EC2 PAIRING ENGINE
   ============================================================ */

async function callPythonPairingEngine(payload) {
  if (!PREDICTOR_BACKEND_URL) {
    throw new Error(
      "PREDICTOR_BACKEND_URL environment variable is not configured."
    );
  }

  if (!PREDICTOR_API_KEY) {
    throw new Error(
      "Backend API key environment variable is not configured. " +
      "Expected PREDICTOR_API_KEY, BACKEND_API_KEY, or API_KEY."
    );
  }

  const backendUrl =
    PREDICTOR_BACKEND_URL.replace(/\/$/, "");

  const headers = {
    "Content-Type": "application/json",
    "x-api-key": PREDICTOR_API_KEY,
  };

  /*
  Forward the device token if available.

  The current EC2 pairing endpoint intentionally does not enforce device
  binding, but forwarding the token keeps this route consistent with the
  rest of PredictorPro and future-proofs the request.
  */
  if (payload.device_token) {
    headers["x-device-token"] =
      payload.device_token;
  }

  const response = await fetch(
    backendUrl + "/api/predictor/pairing-card",
    {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    }
  );

  const rawText =
    await response.text();

  let data = null;

  try {
    data =
      rawText
        ? JSON.parse(rawText)
        : null;
  } catch (err) {
    throw new Error(
      "Invalid JSON returned from pairing engine. HTTP status: " +
        response.status +
        ". Response preview: " +
        truncate(rawText, 500)
    );
  }

  if (!response.ok) {
    throw new Error(
      (data &&
        (
          data.error ||
          data.detail ||
          data.message
        )) ||
      (
        "Pairing engine request failed (" +
        response.status +
        ")."
      )
    );
  }

  return data;
}


/* ============================================================
   ROUTE HANDLER
   ============================================================ */

export default async function handler(req, res) {
  res.setHeader(
    "Cache-Control",
    "no-store"
  );

  if (req.method !== "POST") {
    res.setHeader(
      "Allow",
      "POST"
    );

    return res.status(405).json({
      ok: false,
      error:
        "Method not allowed. Use POST.",
    });
  }

  try {
    const requestDeviceToken =
      cleanText(
        req.headers["x-device-token"]
      );

    const payload =
      cleanPayload(
        req.body || {},
        requestDeviceToken
      );


    /* ----------------------------------------------------------
       VALIDATION
       ---------------------------------------------------------- */

    if (!payload.family) {
      return res.status(400).json({
        ok: false,
        error:
          "Missing RH family. Expected one of: A, B, C, C+, D.",
      });
    }

    /*
    user_email is required because EC2 uses it to resolve:
      user -> inventory_folder -> spirits_current.csv
    */
    if (!payload.user_email) {
      return res.status(400).json({
        ok: false,
        error:
          "Missing PredictorPro user email.",
      });
    }


    /* ----------------------------------------------------------
       CALL EC2
       ---------------------------------------------------------- */

    const engineResponse =
      await callPythonPairingEngine(
        payload
      );


    /* ----------------------------------------------------------
       NORMALIZE RESPONSE
       ---------------------------------------------------------- */

    const pairingCard =
      engineResponse &&
      engineResponse.pairing_card
        ? engineResponse.pairing_card
        : engineResponse;

    if (
      !pairingCard ||
      typeof pairingCard !== "object"
    ) {
      throw new Error(
        "Pairing engine returned an empty or invalid pairing card."
      );
    }


    /* ----------------------------------------------------------
       RETURN TO PREDICTORPRO
       ---------------------------------------------------------- */

    return res.status(200).json({
      ok: true,

      pairing_card:
        pairingCard,

      /*
      These fields are useful for verification and diagnostics.
      They do not affect the existing PredictorPro pairing_card contract.
      */
      inventory_folder:
        engineResponse &&
        engineResponse.inventory_folder
          ? engineResponse.inventory_folder
          : "",

      local_spirits_inventory:
        engineResponse &&
        typeof engineResponse.local_spirits_inventory === "boolean"
          ? engineResponse.local_spirits_inventory
          : null,
    });

  } catch (error) {
    console.error(
      "PAIRING_CARD_ERROR:",
      error
    );

    return res.status(500).json({
      ok: false,

      error:
        (error && error.message) ||
        "Failed to generate pairing card.",
    });
  }
}
