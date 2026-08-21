export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");
  res.setHeader("Allow", "GET");

  if (req.method !== "GET") {
    return res.status(405).json({
      ok: false,
      error: "Method not allowed",
    });
  }

  const backendUrl = String(process.env.PREDICTOR_BACKEND_URL || "").trim();
  const apiKey = String(process.env.PREDICTOR_API_KEY || "").trim();

  if (!backendUrl || !apiKey) {
    return res.status(500).json({
      ok: false,
      error: "Missing predictor environment variables",
    });
  }

  const q = String(req.query.q || "").trim();
  const limitRaw = String(req.query.limit || "100").trim();
  const limitNumber = Number(limitRaw);
  const limit =
    Number.isFinite(limitNumber) && limitNumber > 0
      ? Math.min(Math.floor(limitNumber), 250)
      : 100;

  const normalizedBackendUrl = backendUrl.replace(/\/+$/, "");
  const targetUrl =
    `${normalizedBackendUrl}/api/predictor/autocomplete-blends` +
    `?q=${encodeURIComponent(q)}&limit=${encodeURIComponent(String(limit))}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);

  try {
    const upstream = await fetch(targetUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "x-api-key": apiKey,
      },
      signal: controller.signal,
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
    if (e?.name === "AbortError") {
      return res.status(504).json({
        ok: false,
        error: "Autocomplete request timed out",
      });
    }

    return res.status(500).json({
      ok: false,
      error: e?.message || "Autocomplete proxy failed",
    });
  } finally {
    clearTimeout(timeout);
  }
}