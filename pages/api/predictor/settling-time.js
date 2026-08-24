// pages/api/predictor/settling-time.js

/*
ICSI Settling Time Calculator proxy.

Purpose
-------
Thin Vercel API wrapper between PredictorPro and the EC2 FastAPI backend.

Browser:
POST /api/predictor/settling-time

Vercel forwards to:
POST <PREDICTOR_BACKEND_URL>/settling-time

The backend API key stays server-side and is never exposed to the browser.
The registered device token is forwarded in both the body and x-device-token header.
*/

const PREDICTOR_BACKEND_URL =
  process.env.PREDICTOR_BACKEND_URL || "";

const PREDICTOR_API_KEY =
  process.env.PREDICTOR_API_KEY ||
  process.env.BACKEND_API_KEY ||
  process.env.API_KEY ||
  "";

function truncate(value, maxLength = 800) {
  const text = String(value || "");
  return text.length <= maxLength
    ? text
    : text.slice(0, maxLength) + "...";
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

  if (!PREDICTOR_BACKEND_URL) {
    return res.status(500).json({
      ok: false,
      error: "PREDICTOR_BACKEND_URL environment variable is not configured.",
    });
  }

  if (!PREDICTOR_API_KEY) {
    return res.status(500).json({
      ok: false,
      error:
        "Backend API key is not configured. Expected PREDICTOR_API_KEY, BACKEND_API_KEY, or API_KEY.",
    });
  }

  try {
    const payload =
      req.body && typeof req.body === "object"
        ? { ...req.body }
        : {};

    const deviceToken =
      String(
        payload.device_token ||
        req.headers["x-device-token"] ||
        ""
      ).trim();

    if (deviceToken && !payload.device_token) {
      payload.device_token = deviceToken;
    }

    const backendUrl =
      PREDICTOR_BACKEND_URL.replace(/\/$/, "") +
      "/settling-time";

    const backendResponse = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": PREDICTOR_API_KEY,
        ...(deviceToken
          ? { "x-device-token": deviceToken }
          : {}),
      },
      body: JSON.stringify(payload),
    });

    const rawText = await backendResponse.text();

    let data = null;

    try {
      data = rawText ? JSON.parse(rawText) : {};
    } catch (err) {
      console.error(
        "SETTLING_TIME_INVALID_JSON:",
        backendResponse.status,
        truncate(rawText)
      );

      return res.status(502).json({
        ok: false,
        error:
          "Invalid response from settling backend. HTTP status: " +
          backendResponse.status +
          ". Response preview: " +
          truncate(rawText, 500),
      });
    }

    if (!backendResponse.ok) {
      return res.status(backendResponse.status).json({
        ok: false,
        error:
          data?.error ||
          data?.detail ||
          `Settling backend request failed (${backendResponse.status}).`,
        backend_detail: data,
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("SETTLING_TIME_PROXY_ERROR:", error);

    return res.status(500).json({
      ok: false,
      error:
        error?.message ||
        "Failed to calculate settling time.",
    });
  }
}
