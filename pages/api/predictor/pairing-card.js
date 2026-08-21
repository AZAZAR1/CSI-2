// pages/api/predictor/pairing-card.js

/*
Standalone pairing-card endpoint.

Purpose
-------
Thin Vercel API wrapper around the EC2 Python pairing engine.

This route:
1. Accepts RH family + blend metadata from portal/predictor.js
2. Forwards the request to EC2 backend /pairing-card
3. Sends the backend API key header
4. Returns normalized pairing_card payload
5. Surfaces useful debug detail if EC2 returns HTML/text instead of JSON
*/

const PREDICTOR_BACKEND_URL =
  process.env.PREDICTOR_BACKEND_URL || "";

const PREDICTOR_API_KEY =
  process.env.PREDICTOR_API_KEY ||
  process.env.BACKEND_API_KEY ||
  process.env.API_KEY ||
  "";

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
    return value;
  }

  if (value) {
    return [value];
  }

  return [];
}

function cleanPayload(body) {
  body = body || {};

  return {
    family:
      normalizeFamily(
        body.family ||
          body.rh_family ||
          body.cps_family ||
          body.peak_flavor_family ||
          body.cigar_peak_flavor_system_family
      ) || "",

    wrapper: body.wrapper || "",

    wrapper_process:
      body.wrapper_process ||
      body.wrapperProcess ||
      body.process ||
      "",

    wrapper_thickness:
      body.wrapper_thickness ||
      body.wrapperThickness ||
      "",

    wrapper_oiliness:
      body.wrapper_oiliness ||
      body.wrapperOiliness ||
      "",

    ligero: body.ligero || "",

    origin: body.origin || "",

    filler: toArray(body.filler),

    special_tobacco_flags: toArray(
      body.special_tobacco_flags
    ),
  };
}

function truncate(value, maxLength) {
  const text = String(value || "");

  if (text.length <= maxLength) {
    return text;
  }

  return text.slice(0, maxLength) + "...";
}

async function callPythonPairingEngine(payload) {
  if (!PREDICTOR_BACKEND_URL) {
    throw new Error(
      "PREDICTOR_BACKEND_URL environment variable is not configured."
    );
  }

  if (!PREDICTOR_API_KEY) {
    throw new Error(
      "Backend API key environment variable is not configured. Expected PREDICTOR_API_KEY, BACKEND_API_KEY, or API_KEY."
    );
  }

  const backendUrl =
    PREDICTOR_BACKEND_URL.replace(/\/$/, "");

  const response = await fetch(
    backendUrl + "/api/predictor/pairing-card",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "x-api-key": PREDICTOR_API_KEY,
      },

      body: JSON.stringify(payload),
    }
  );

  const rawText = await response.text();

  let data = null;

  try {
    data = rawText ? JSON.parse(rawText) : null;
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
      (data && (data.error || data.detail)) ||
        "Pairing engine request failed (" +
          response.status +
          ")."
    );
  }

  return data;
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");

    return res.status(405).json({
      ok: false,
      error: "Method not allowed. Use POST.",
    });
  }

  try {
    const payload = cleanPayload(req.body || {});

    if (!payload.family) {
      return res.status(400).json({
        ok: false,

        error:
          "Missing RH family. Expected one of: A, B, C, C+, D.",
      });
    }

    const engineResponse =
      await callPythonPairingEngine(payload);

    const pairingCard =
      engineResponse &&
      engineResponse.pairing_card
        ? engineResponse.pairing_card
        : engineResponse;

    return res.status(200).json({
      ok: true,
      pairing_card: pairingCard,
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
