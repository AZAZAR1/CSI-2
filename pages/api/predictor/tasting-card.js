export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  if (req.method !== "POST") {
    return res.status(405).json({
      ok: false,
      error: "Method not allowed",
    });
  }

  try {
    const backendUrl = String(process.env.PREDICTOR_BACKEND_URL || "").trim();
    const apiKey = String(process.env.PREDICTOR_API_KEY || "").trim();

    if (!backendUrl || !apiKey) {
      return res.status(500).json({
        ok: false,
        error: "Missing predictor env vars",
      });
    }

    const body =
      typeof req.body === "string"
        ? JSON.parse(req.body || "{}")
        : (req.body || {});

    const brand = String(body.brand || "").trim();
    const line = String(body.line || "").trim();

    if (!brand || !line) {
      return res.status(400).json({
        ok: false,
        error: "Missing brand or line",
      });
    }

    const upstream = await fetch(`${backendUrl}/tasting-card`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        Accept: "application/json",
      },
      body: JSON.stringify({ brand, line }),
    });

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
      error: e?.message || "Tasting card proxy failed",
    });
  }
}
