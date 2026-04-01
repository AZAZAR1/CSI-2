export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");
  res.setHeader("Allow", "POST");

  if (req.method !== "POST") {
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

  let payload = {};

  try {
    payload =
      typeof req.body === "string"
        ? JSON.parse(req.body || "{}")
        : req.body && typeof req.body === "object"
        ? req.body
        : {};
  } catch {
    return res.status(400).json({
      ok: false,
      error: "Invalid JSON request body",
    });
  }

  const normalizedBackendUrl = backendUrl.replace(/\/+$/, "");
  const targetUrl = `${normalizedBackendUrl}/similar-blends`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);

  try {
    const upstream = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify(payload),
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

    if (!upstream.ok) {
      return res.status(upstream.status).json({
        ok: false,
        error:
          data?.error ||
          data?.detail ||
          "Similar blends backend request failed",
      });
    }

    return res.status(200).json({
      ok: true,
      ...data,
    });
  } catch (e) {
    if (e?.name === "AbortError") {
      return res.status(504).json({
        ok: false,
        error: "Similar blends request timed out",
      });
    }

    return res.status(500).json({
      ok: false,
      error: e?.message || "Similar blends proxy failed",
    });
  } finally {
    clearTimeout(timeout);
  }
}
