// pages/api/amc-pairing-submit.js
//
// Configure AMC_SUBMISSION_WEBHOOK_URL in Vercel with
// a secure server-to-server HTTPS endpoint.
//
// Never expose the webhook URL to the browser.

const WHISKIES = new Set([
  "Glen Grant 15",
  "Claxton Linkwood 13 2010",
  "Artist Collective Linkwood 12",
  "Jura Journey",
  "Tamnavulin Double Cask",
  "Nikka Super Nikka",
  "Isle of Skye 12y",
  "Benriach 12 Smoky",
  "SMOS Laphroaig 11 2014",
  "Dalmore Cigar Malt",
]);

const FAMILIES = new Set([
  "A",
  "B",
  "C",
  "C+",
  "D",
]);

const text = (value, max) =>
  typeof value === "string"
    ? value.trim().slice(0, max)
    : "";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Allow", "POST");

  if (req.method !== "POST") {
    return res.status(405).json({
      ok: false,
      error: "Method not allowed",
    });
  }

  const endpoint =
    process.env.AMC_SUBMISSION_WEBHOOK_URL;

  if (
    !endpoint ||
    !/^https:\/\//i.test(endpoint)
  ) {
    return res.status(503).json({
      ok: false,
      error:
        "Submission storage is not configured. Please contact the event organiser.",
    });
  }

  const body =
    req.body && typeof req.body === "object"
      ? req.body
      : {};

  const p = body.participant || {};

  const participant = {
    firstName: text(p.firstName, 80),
    lastName: text(p.lastName, 80),
    email: text(p.email, 254).toLowerCase(),
  };

  if (
    !participant.firstName ||
    !participant.lastName ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      participant.email
    ) ||
    body.consent !== true
  ) {
    return res.status(400).json({
      ok: false,
      error:
        "Invalid participant details or consent.",
    });
  }

  if (
    !Array.isArray(body.trials) ||
    body.trials.length !== 5
  ) {
    return res.status(400).json({
      ok: false,
      error:
        "Exactly five trials are required.",
    });
  }

  const trials = body.trials.map((t, i) => ({
    trialNumber: i + 1,
    cigar: text(t?.cigar, 180),
    family: text(t?.family, 4),
    whisky: text(t?.whisky, 100),
    rating: t?.rating,
  }));

  if (
    trials.some(
      (t) =>
        !t.cigar ||
        !FAMILIES.has(t.family) ||
        !WHISKIES.has(t.whisky) ||
        !Number.isInteger(t.rating) ||
        t.rating < 1 ||
        t.rating > 5
    ) ||
    new Set(
      trials.map((t) => t.whisky)
    ).size !== 5
  ) {
    return res.status(400).json({
      ok: false,
      error:
        "Invalid or duplicate whisky pairing trials.",
    });
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: "ICSI AMC Whisky & Cigar Pairing",
        submittedAt: new Date().toISOString(),
        participant,
        trials,
        consent: true,
      }),
      signal: AbortSignal.timeout(12000),
    });

    if (!response.ok) {
      throw new Error(
        `Storage returned ${response.status}`
      );
    }

    return res.status(200).json({
      ok: true,
    });
  } catch (err) {
    console.error(
      "AMC submission storage failure:",
      err
    );

    return res.status(502).json({
      ok: false,
      error:
        "Could not save your evaluation. Please try again.",
    });
  }
}
