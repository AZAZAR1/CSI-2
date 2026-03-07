export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const email = String(req.query.email || "").trim();
    if (!email) {
      return res.status(400).json({ ok: false, error: "Missing email" });
    }

    const backendUrl = process.env.PREDICTOR_BACKEND_URL;
    const apiKey = process.env.PREDICTOR_API_KEY;

    if (!backendUrl || !apiKey) {
      return res.status(500).json({ ok: false, error: "Missing predictor env vars" });
    }

    const upstream = await fetch(
      `${backendUrl}/usage?email=${encodeURIComponent(email)}`,
      {
        method: "GET",
        headers: {
          "x-api-key": apiKey,
        },
      }
    );

    const data = await upstream.json().catch(() => ({}));
    return res.status(upstream.status).json(data);
  } catch (e) {
    return res.status(500).json({ ok: false, error: e?.message || "Usage proxy failed" });
  }
}