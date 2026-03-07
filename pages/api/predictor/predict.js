export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const backendUrl = process.env.PREDICTOR_BACKEND_URL;
    const apiKey = process.env.PREDICTOR_API_KEY;

    if (!backendUrl || !apiKey) {
      return res.status(500).json({ ok: false, error: "Missing predictor env vars" });
    }

    const upstream = await fetch(`${backendUrl}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify(req.body || {}),
    });

    const data = await upstream.json().catch(() => ({}));
    return res.status(upstream.status).json(data);
  } catch (e) {
    return res.status(500).json({ ok: false, error: e?.message || "Predict proxy failed" });
  }
}