export default async function handler(req, res) {
  try {
    const { q = "", limit = "100" } = req.query;

    const backend = process.env.NEXT_PUBLIC_PREDICTOR_API;

    const r = await fetch(
      `${backend}/autocomplete-blends?q=${encodeURIComponent(q)}&limit=${limit}`
    );

    const data = await r.json();

    return res.status(r.status).json(data);
  } catch (err) {
    return res.status(500).json({
      ok: false,
      error: "Autocomplete proxy failed",
    });
  }
}