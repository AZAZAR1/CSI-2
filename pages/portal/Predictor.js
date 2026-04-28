import { useState } from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

/* --------------------------
AUTOCOMPLETE UI STYLE
-------------------------- */

const autocompleteBox = {
  position: "absolute",
  background: "#fff",
  border: "1px solid rgba(0,0,0,.1)",
  borderRadius: 8,
  width: "100%",
  zIndex: 50,
  maxHeight: 220,
  overflowY: "auto",
  marginTop: 6,
};

const autocompleteItem = {
  padding: "10px 12px",
  cursor: "pointer",
  borderBottom: "1px solid rgba(0,0,0,.06)",
};

const readOnlyGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 12,
  marginTop: 14,
};

const readOnlyBox = {
  border: "1px solid rgba(0,0,0,.08)",
  borderRadius: 10,
  padding: "12px",
  background: "rgba(0,0,0,.015)",
};

const valueStyle = {
  marginTop: 4,
  fontWeight: 600,
};

const emptyValue = "—";

/* --------------------------
HELPERS
-------------------------- */

const cleanText = (value) => {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
};

const normalizeList = (value) => {
  if (Array.isArray(value)) {
    return [...new Set(value.map(cleanText).filter(Boolean))];
  }

  if (typeof value === "string" && value.trim()) {
    return value
      .split(/[;,|]/)
      .map(cleanText)
      .filter(Boolean);
  }

  return [];
};

const displayList = (value) => {
  const list = normalizeList(value);
  return list.length ? list.join(", ") : emptyValue;
};

const getBlendValue = (blend, key) => {
  const value = cleanText(blend?.[key]);
  return value || emptyValue;
};

const buildPayloadFromBlend = ({ userEmail, brand, line, blend }) => ({
  user_email: cleanText(userEmail),

  brand: cleanText(brand || blend?.brand),
  line: cleanText(line || blend?.line),

  origin: cleanText(blend?.origin),
  factory: cleanText(blend?.factory),

  wrapper: cleanText(blend?.wrapper),
  wrapper_process: cleanText(blend?.wrapper_process),
  wrapper_thickness: cleanText(blend?.wrapper_thickness || "medium"),
  wrapper_oiliness: cleanText(blend?.wrapper_oiliness || "medium"),

  binder: cleanText(blend?.binder),

  filler: normalizeList(blend?.filler),

  ligero: cleanText(blend?.ligero || "moderate"),

  special_tobacco_flags: normalizeList(blend?.special_tobacco_flags),

  age_years: null,
  smoker_style: "both",

  vitola: "",
  bunch_density: "medium",
});

function ReadOnlyField({ label, value }) {
  return (
    <div style={readOnlyBox}>
      <div className="small" style={{ opacity: 0.75 }}>
        {label}
      </div>
      <div style={valueStyle}>{value || emptyValue}</div>
    </div>
  );
}

/* --------------------------
COMPONENT
-------------------------- */

export default function PredictorPage() {
  const [form, setForm] = useState({
    user_email: "",
    brand: "",
    line: "",
  });

  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [usage, setUsage] = useState(null);
  const [blend, setBlend] = useState(null);
  const [lookupSource, setLookupSource] = useState("");
  const [lookupStatus, setLookupStatus] = useState("");

  const [result, setResult] = useState(null);
  const [tastingCard, setTastingCard] = useState(null);
  const [similarBlends, setSimilarBlends] = useState(null);

  const [err, setErr] = useState("");

  const [loadingUsage, setLoadingUsage] = useState(false);
  const [loadingLookup, setLoadingLookup] = useState(false);
  const [loadingPredict, setLoadingPredict] = useState(false);
  const [loadingSimilar, setLoadingSimilar] = useState(false);

  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  /* --------------------------
AUTOCOMPLETE
-------------------------- */

  const loadSuggestions = async (q) => {
    const cleaned = cleanText(q);

    if (!cleaned || cleaned.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    try {
      const res = await fetch(
        `/api/predictor/autocomplete?q=${encodeURIComponent(cleaned)}`
      );
      const data = await res.json().catch(() => ({}));

      if (Array.isArray(data?.results)) {
        setSuggestions(data.results);
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    } catch {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const selectSuggestion = (item) => {
    update("brand", cleanText(item.brand || ""));
    update("line", cleanText(item.line || ""));
    setShowSuggestions(false);
    setSuggestions([]);
  };

  /* --------------------------
API CALLS
-------------------------- */

  const loadUsage = async () => {
    setErr("");
    setLoadingUsage(true);
    setUsage(null);

    try {
      const email = cleanText(form.user_email);

      if (!email) {
        throw new Error("Enter your registered email address first.");
      }

      const res = await fetch(
        `/api/predictor/usage?email=${encodeURIComponent(email)}`
      );

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || data.detail || "Failed to load usage");
      }

      setUsage(data);
    } catch (e) {
      setErr(e.message || "Usage request failed");
    } finally {
      setLoadingUsage(false);
    }
  };

  const lookupBlend = async () => {
    setErr("");
    setLookupSource("");
    setLookupStatus("");
    setBlend(null);
    setResult(null);
    setTastingCard(null);
    setSimilarBlends(null);

    const brand = cleanText(form.brand);
    const line = cleanText(form.line);

    if (!brand || !line) {
      setLookupStatus("Enter brand and line first.");
      return;
    }

    setLoadingLookup(true);
    setLookupStatus("Searching ICSI blend database...");

    try {
      const res = await fetch(`/api/predictor/lookup-blend`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ brand, line }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok || !data.match) {
        setLookupStatus(data.error || "No reliable blend match found.");
        return;
      }

      const match = data.match || {};

      setBlend(match);
      setLookupSource(data.source?.label || match.source_label || "");
      setLookupStatus("Blend found.");
    } catch {
      setLookupStatus("Lookup failed.");
    } finally {
      setLoadingLookup(false);
    }
  };

  const loadTastingCard = async (brand, line) => {
    try {
      const res = await fetch(`/api/predictor/tasting-card`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          brand: cleanText(brand),
          line: cleanText(line),
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok || !data.tasting_card) {
        setTastingCard(null);
        return;
      }

      setTastingCard(data.tasting_card);
    } catch {
      setTastingCard(null);
    }
  };

  const runPrediction = async () => {
    setErr("");
    setLoadingPredict(true);
    setResult(null);
    setTastingCard(null);

    try {
      if (!blend) {
        throw new Error("Lookup a blend first.");
      }

      const payload = buildPayloadFromBlend({
        userEmail: form.user_email,
        brand: form.brand,
        line: form.line,
        blend,
      });

      const res = await fetch(`/api/predictor/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || data.detail || "Prediction failed");
      }

      setResult(data);
      await loadUsage();
      await loadTastingCard(payload.brand, payload.line);
    } catch (e) {
      setErr(e.message || "Prediction request failed");
    } finally {
      setLoadingPredict(false);
    }
  };

  const findSimilarBlends = async () => {
    setErr("");
    setLoadingSimilar(true);
    setSimilarBlends(null);

    try {
      if (!blend) {
        throw new Error("Lookup a blend first.");
      }

      const payload = buildPayloadFromBlend({
        userEmail: form.user_email,
        brand: form.brand,
        line: form.line,
        blend,
      });

      const res = await fetch(`/api/predictor/similar-blends`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || data.detail || "Similar blends request failed");
      }

      setSimilarBlends(data);
      await loadUsage();
    } catch (e) {
      setErr(e.message || "Similar blends request failed");
    } finally {
      setLoadingSimilar(false);
    }
  };

  /* --------------------------
UI
-------------------------- */

  return (
    <Layout>
      <Seo title="Predictor | ICSI" path="/portal/predictor" />

      <div className="section">
        <div className="container" style={{ maxWidth: 980 }}>
          <h1>ICSI Predictor</h1>

          <p className="small" style={{ lineHeight: 1.7 }}>
            Search a cigar by brand and line to view its blend profile, generate
            a Peak-Flavor diagnostic, and discover structurally similar blends.
            Blend details are displayed as read-only values in this version.
          </p>

          {/* USER */}
          <div className="card" style={{ marginTop: 16 }}>
            <h3>User Access</h3>

            <label>Email</label>
            <input
              value={form.user_email}
              placeholder="Enter your registered email"
              onChange={(e) => update("user_email", e.target.value)}
            />

            <div className="ctaRow" style={{ marginTop: 12 }}>
              <button className="btn" onClick={loadUsage} disabled={loadingUsage}>
                {loadingUsage ? "Loading..." : "Check User"}
              </button>
            </div>

            {usage && (
              <div className="small" style={{ marginTop: 12, lineHeight: 1.8 }}>
                <div>
                  Tier: <b>{usage.tier}</b>
                </div>
                <div>
                  Annual: <b>{usage.runs_used}</b> used / <b>{usage.annual_limit}</b>
                </div>
                <div>
                  Remaining: <b>{usage.runs_remaining}</b>
                </div>
                <div>
                  Today: <b>{usage.daily_used}</b> used / <b>{usage.daily_limit}</b>
                </div>
                <div>
                  Daily remaining: <b>{usage.daily_remaining}</b>
                </div>
                <div>
                  Period: <b>{usage.period_start}</b> → <b>{usage.period_end}</b>
                </div>
              </div>
            )}
          </div>

          {/* LOOKUP */}
          <div className="card" style={{ marginTop: 16 }}>
            <h3>Blend Lookup</h3>

            <div className="row2">
              <div style={{ position: "relative" }}>
                <label>Brand</label>
                <input
                  value={form.brand}
                  placeholder="Start typing brand..."
                  onChange={(e) => {
                    update("brand", e.target.value);
                    loadSuggestions(e.target.value);
                  }}
                />

                {showSuggestions && suggestions.length > 0 && (
                  <div style={autocompleteBox}>
                    {suggestions.map((s, i) => (
                      <div
                        key={i}
                        style={autocompleteItem}
                        onClick={() => selectSuggestion(s)}
                      >
                        {s.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label>Line</label>
                <input
                  value={form.line}
                  onChange={(e) => update("line", e.target.value)}
                  placeholder="e.g. No. 2"
                />
              </div>
            </div>

            <div
              style={{
                marginTop: 14,
                display: "flex",
                alignItems: "center",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <button
                className="btn"
                type="button"
                onClick={lookupBlend}
                disabled={loadingLookup}
              >
                {loadingLookup ? "Searching..." : "Lookup Blend"}
              </button>

              {lookupStatus && (
                <span className="small" style={{ lineHeight: 1.4 }}>
                  {lookupStatus}
                </span>
              )}
            </div>

            {lookupSource && (
              <p className="small" style={{ marginTop: 8 }}>
                Source: <b>{lookupSource}</b>
              </p>
            )}
          </div>

          {/* READ-ONLY BLEND PROFILE */}
          {blend && (
            <div className="card" style={{ marginTop: 16 }}>
              <h3>Blend Profile</h3>

              <div style={readOnlyGrid}>
                <ReadOnlyField label="Brand" value={getBlendValue(blend, "brand") || form.brand} />
                <ReadOnlyField label="Line" value={getBlendValue(blend, "line") || form.line} />
                <ReadOnlyField label="Origin" value={getBlendValue(blend, "origin")} />
                <ReadOnlyField label="Factory" value={getBlendValue(blend, "factory")} />
                <ReadOnlyField label="Wrapper" value={getBlendValue(blend, "wrapper")} />
                <ReadOnlyField label="Wrapper Process" value={getBlendValue(blend, "wrapper_process")} />
                <ReadOnlyField label="Wrapper Thickness" value={getBlendValue(blend, "wrapper_thickness")} />
                <ReadOnlyField label="Wrapper Oiliness" value={getBlendValue(blend, "wrapper_oiliness")} />
                <ReadOnlyField label="Binder" value={getBlendValue(blend, "binder")} />
                <ReadOnlyField label="Ligero" value={getBlendValue(blend, "ligero")} />
                <ReadOnlyField label="Filler" value={displayList(blend?.filler)} />
                <ReadOnlyField
                  label="Special Tobacco Flags"
                  value={displayList(blend?.special_tobacco_flags)}
                />
              </div>

              <div className="ctaRow" style={{ marginTop: 18 }}>
                <button
                  className="btn primary"
                  onClick={runPrediction}
                  disabled={loadingPredict}
                  type="button"
                >
                  {loadingPredict ? "Running..." : "Run Predictor"}
                </button>

                <button
                  className="btn"
                  onClick={findSimilarBlends}
                  disabled={loadingSimilar}
                  type="button"
                >
                  {loadingSimilar ? "Searching..." : "Find Similar Blends"}
                </button>
              </div>
            </div>
          )}

          {err && (
            <div className="notice" style={{ marginTop: 16 }}>
              <b>Error:</b> {err}
            </div>
          )}

          {/* RESULT */}
          {result && (
            <div className="card" style={{ marginTop: 16 }}>
              <h3>Blend Peak-Flavor Prediction Result</h3>

              <div className="small" style={{ lineHeight: 1.8 }}>
                <div>
                  Cigar Peak-Flavor System Family: <b>{result.family}</b>
                </div>
                <div>
                  Target Smoking Core Relative Humidity %: <b>{result.target_rh}</b>
                </div>
                <div>
                  Smoking Core Relative Humidity % Window:{" "}
                  <b>{result.window_low}</b> to <b>{result.window_high}</b>
                </div>
                <div>
                  Runs used: <b>{result.runs_used}</b>
                </div>
                <div>
                  Runs remaining: <b>{result.runs_remaining}</b>
                </div>
                <div>
                  Daily used: <b>{result.daily_used}</b>
                </div>
                <div>
                  Daily remaining: <b>{result.daily_remaining}</b>
                </div>
              </div>

              {tastingCard && (
                <>
                  <hr className="sep" />

                  <h3>Tasting Card</h3>

                  <div className="row2" style={{ marginTop: 12 }}>
                    <div className="card" style={{ marginTop: 0 }}>
                      <h4 style={{ marginTop: 0 }}>Palate</h4>

                      <div className="small" style={{ lineHeight: 1.8 }}>
                        <div>
                          <b>Primary:</b>{" "}
                          {(tastingCard?.palate?.primary || []).join(", ") || "—"}
                        </div>
                        <div>
                          <b>Secondary:</b>{" "}
                          {(tastingCard?.palate?.secondary || []).join(", ") || "—"}
                        </div>
                        <div>
                          <b>Texture:</b>{" "}
                          {(tastingCard?.palate?.texture || []).join(", ") || "—"}
                        </div>
                        <div>
                          <b>Finish:</b>{" "}
                          {(tastingCard?.palate?.finish || []).join(", ") || "—"}
                        </div>
                      </div>
                    </div>

                    <div className="card" style={{ marginTop: 0 }}>
                      <h4 style={{ marginTop: 0 }}>Retrohale</h4>

                      <div className="small" style={{ lineHeight: 1.8 }}>
                        <div>
                          <b>Primary:</b>{" "}
                          {(tastingCard?.retrohale?.primary || []).join(", ") || "—"}
                        </div>
                        <div>
                          <b>Secondary:</b>{" "}
                          {(tastingCard?.retrohale?.secondary || []).join(", ") || "—"}
                        </div>
                        <div>
                          <b>Finish:</b>{" "}
                          {(tastingCard?.retrohale?.finish || []).join(", ") || "—"}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* SIMILAR BLENDS */}
          {similarBlends && (
            <div className="card" style={{ marginTop: 16 }}>
              <h3>Similar Blends</h3>

              {Array.isArray(similarBlends?.results) &&
              similarBlends.results.length > 0 ? (
                <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
                  {similarBlends.results.map((item, i) => (
                    <div key={i} className="card" style={{ marginTop: 0 }}>
                      <h4 style={{ marginTop: 0 }}>
                        {item.brand || "Unknown Brand"} — {item.line || "Unknown Line"}
                      </h4>

                      <div className="small" style={{ lineHeight: 1.7 }}>
                        <div>
                          Similarity: <b>{item.similarity_score ?? "—"}%</b>
                        </div>
                        <div>
                          Wrapper: <b>{item.wrapper || "—"}</b>
                        </div>
                        <div>
                          Process: <b>{item.wrapper_process || "—"}</b>
                        </div>
                        <div>
                          Binder: <b>{item.binder || "—"}</b>
                        </div>
                        <div>
                          Ligero: <b>{item.ligero || "—"}</b>
                        </div>
                        <div>
                          Why similar:{" "}
                          <b>{(item.why_similar || []).join(", ") || "—"}</b>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="small" style={{ marginTop: 10 }}>
                  No similar blends found.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
