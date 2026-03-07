export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  if (req.method !== "GET") {
    return res.status(405).json({
      ok: false,
      error: "Method not allowed",
    });
  }

  try {
    const email = String(req.query.email || "").trim();

    if (!email) {
      return res.status(400).json({
        ok: false,
        error: "Missing email",
      });
    }

    const backendUrl = String(process.env.PREDICTOR_BACKEND_URL || "").trim();
    const apiKey = String(process.env.PREDICTOR_API_KEY || "").trim();

    if (!backendUrl || !apiKey) {
      return res.status(500).json({
        ok: false,
        error: "Missing predictor env vars",
      });
    }

    const upstream = await fetch(
      `${backendUrl}/usage?email=${encodeURIComponent(email)}`,
      {
        method: "GET",
        headers: {
          "x-api-key": apiKey,
          Accept: "application/json",
        },
      }
    );

    const raw = await upstream.text();
    let data = {};

    try {
      data = raw ? JSON.parse(raw) : {};
    } catch {
      data = {
        ok: false,
        error: raw || "Invalid upstream response",
      };
    }

    return res.status(upstream.status).json(data);
  } catch (e) {
    return res.status(500).json({
      ok: false,
      error: e?.message || "Usage proxy failed",
    });
  }
}