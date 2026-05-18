// api/predictor/pairing-card.js

/*
Standalone pairing-card endpoint.

Purpose
-------
Thin API wrapper around the EC2 Python pairing engine.

This route:
1. Accepts RH family + blend metadata
2. Forwards request to EC2 Python backend
3. Returns normalized pairing_card payload

Frontend flow
--------------
portal/predictor.js
    ↓
POST /api/predictor/pairing-card
    ↓
Vercel API proxy
    ↓
EC2 backend /pairing-card
    ↓
pairing_engine.py
*/

const EC2_PAIRING_ENGINE_URL =
  process.env.PREDICTOR_BACKEND_URL || "";

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

async function callPythonPairingEngine(payload) {
  if (!EC2_PAIRING_ENGINE_URL) {
    throw new Error(
      "PREDICTOR_BACKEND_URL environment variable is not configured."
    );
  }

  const backendUrl =
    EC2_PAIRING_ENGINE_URL.replace(/\/$/, "");

  const response = await fetch(
    backendUrl + "/pairing-card",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(payload),
    }
  );

  let data = null;

  try {
    data = await response.json();
  } catch (err) {
    throw new Error(
      "Invalid JSON returned from pairing engine."
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
