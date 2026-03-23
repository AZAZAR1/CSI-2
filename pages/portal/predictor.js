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

/* --------------------------
DATA CONSTANTS
-------------------------- */

const ORIGINS = [
  "",
  "Cuba",
  "Dominican Republic",
  "Nicaragua",
  "Honduras",
  "Mexico",
  "Costa Rica",
  "Panama",
  "Ecuador",
  "Brazil",
  "Peru",
  "United States",
  "Jamaica",
  "Philippines",
];

const FACTORIES = [
  "",
  "El Laguito",
  "H. Upmann",
  "Partagas",
  "La Corona",
  "TABACUBA",
  "My Father Cigars",
  "Tabacalera Garcia",
  "General Cigar Dominicana",
  "La Aurora",
  "La Flor Dominicana",
  "Quesada Cigars",
  "Tabacalera AJ Fernandez",
  "Plasencia Cigars",
  "Joya de Nicaragua",
  "Oliva Cigar Co.",
  "PDR Cigars",
  "Davidoff",
  "Tabadom",
  "Tabacos de Costa Rica",
  "Unknown / Mixed",
];

const WRAPPERS = [
  "",
  "Cuban",
  "Habano",
  "Nicaraguan Habano",
  "Habano 2000",
  "Corojo",
  "Corojo 99",
  "Criollo",
  "Criollo 98",
  "Connecticut Shade",
  "Connecticut Broadleaf",
  "Broadleaf",
  "San Andrés",
  "Cameroon",
  "Sumatra",
  "Ecuadorian Sumatra",
  "Ecuadorian Habano",
  "Ecuadorian Connecticut",
  "Maduro",
  "Oscuro",
  "Rosado",
  "Colorado",
  "Mexican",
  "Pennsylvania Broadleaf",
  "Hybrid / Other",
];

const WRAPPER_PROCESSES = [
  "",
  "Natural",
  "Claro",
  "Colorado",
  "Colorado Claro",
  "Colorado Maduro",
  "Rosado",
  "Maduro",
  "Oscuro",
  "Corojo-processed",
  "Sun Grown",
  "Shade Grown",
  "Double Fermented",
  "Barrel Aged",
  "Other",
];

const WRAPPER_THICKNESS_OPTIONS = ["thin", "medium", "thick"];
const WRAPPER_OILINESS_OPTIONS = ["low", "medium", "high"];

const BINDERS = [
  "",
  "Cuban",
  "Dominican",
  "Nicaraguan",
  "Honduran",
  "Mexican",
  "Cameroon",
  "San Andrés",
  "Connecticut",
  "Sumatra",
  "Ecuadorian",
  "Broadleaf",
  "Criollo",
  "Corojo",
  "Hybrid / Other",
];

const FILLER_OPTIONS = [
  "",
  "Cuba",
  "Dominican Republic",
  "Nicaragua",
  "Honduras",
  "Mexico",
  "Costa Rica",
  "Panama",
  "Ecuador",
  "Brazil",
  "Peru",
  "United States",
  "Piloto Cubano",
  "Olor Dominicano",
  "Corojo",
  "Criollo",
  "Ligero",
  "Seco",
  "Volado",
  "Medio Tiempo",
];

const LIGERO_OPTIONS = ["", "none", "low", "moderate", "high"];

const SPECIAL_TOBACCO_FLAGS_OPTIONS = [
  "",
  "Medio Tiempo",
  "Piloto Cubano",
  "Olor Dominicano",
  "Corojo",
  "Criollo",
  "Andullo",
  "Broadleaf-heavy",
  "San Andrés-heavy",
  "Aged filler",
  "Extra fermented",
  "Culebra style bunching",
  "Small-batch / experimental",
];

const SMOKER_STYLE_OPTIONS = ["both", "slow", "fast"];

const row3Style = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0,1fr))",
  gap: 12,
  marginTop: 8,
};

/* --------------------------
COMPONENT
-------------------------- */

export default function PredictorPage() {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [form, setForm] = useState({
    user_email: "",
    brand: "",
    line: "",

    origin: "",
    factory: "",

    wrapper: "",
    wrapper_custom: "",
    wrapper_process: "",
    wrapper_thickness: "medium",
    wrapper_oiliness: "medium",

    binder: "",
    binder_custom: "",

    filler_1: "",
    filler_2: "",
    filler_3: "",

    ligero: "moderate",

    flag_1: "",
    flag_2: "",
    flag_3: "",

    age_years: "",
    smoker_style: "both",

    /* hidden fields for backend compatibility */
    vitola: "",
    bunch_density: "medium",
  });

  const [usage, setUsage] = useState(null);
  const [result, setResult] = useState(null);
  const [tastingCard, setTastingCard] = useState(null);
  const [err, setErr] = useState("");

  const [loadingUsage, setLoadingUsage] = useState(false);
  const [loadingPredict, setLoadingPredict] = useState(false);
  const [loadingLookup, setLoadingLookup] = useState(false);

  const [lookupStatus, setLookupStatus] = useState("");
  const [lookupSource, setLookupSource] = useState("");

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
HELPERS
-------------------------- */

  const buildCustomValue = (choice, custom) => {
    if (choice === "Custom / Other" || choice === "Hybrid / Other") {
      return String(custom || "").trim();
    }
    return choice;
  };

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

  const buildUniqueList = (values) => {
    return [...new Set(values.map((v) => String(v || "").trim()).filter(Boolean))];
  };

  const mapLookupValue = (value, options) => {
    const v = String(value || "").trim();
    if (!v) return "";
    return options.includes(v) ? v : "";
  };

  const applyLookupMatch = (match) => {
    const filler = Array.isArray(match?.filler) ? match.filler : [];
    const flags = Array.isArray(match?.special_tobacco_flags)
      ? match.special_tobacco_flags
      : [];

    setForm((f) => ({
      ...f,
      brand: match?.brand || f.brand,
      line: match?.line || f.line,
      origin: mapLookupValue(match?.origin, ORIGINS) || f.origin,
      factory: mapLookupValue(match?.factory, FACTORIES) || f.factory,

      wrapper:
        mapLookupValue(match?.wrapper, WRAPPERS) ||
        (match?.wrapper ? "Hybrid / Other" : f.wrapper),
      wrapper_custom:
        match?.wrapper && !WRAPPERS.includes(match.wrapper)
          ? match.wrapper
          : f.wrapper_custom,

      wrapper_process:
        mapLookupValue(match?.wrapper_process, WRAPPER_PROCESSES) ||
        f.wrapper_process,

      wrapper_thickness:
        mapLookupValue(match?.wrapper_thickness, WRAPPER_THICKNESS_OPTIONS) ||
        f.wrapper_thickness,

      wrapper_oiliness:
        mapLookupValue(match?.wrapper_oiliness, WRAPPER_OILINESS_OPTIONS) ||
        f.wrapper_oiliness,

      binder:
        mapLookupValue(match?.binder, BINDERS) ||
        (match?.binder ? "Hybrid / Other" : f.binder),
      binder_custom:
        match?.binder && !BINDERS.includes(match.binder)
          ? match.binder
          : f.binder_custom,

      filler_1:
        filler[0] && FILLER_OPTIONS.includes(filler[0]) ? filler[0] : f.filler_1,
      filler_2:
        filler[1] && FILLER_OPTIONS.includes(filler[1]) ? filler[1] : f.filler_2,
      filler_3:
        filler[2] && FILLER_OPTIONS.includes(filler[2]) ? filler[2] : f.filler_3,

      ligero: mapLookupValue(match?.ligero, LIGERO_OPTIONS) || f.ligero,

      flag_1:
        flags[0] && SPECIAL_TOBACCO_FLAGS_OPTIONS.includes(flags[0])
          ? flags[0]
          : f.flag_1,
      flag_2:
        flags[1] && SPECIAL_TOBACCO_FLAGS_OPTIONS.includes(flags[1])
          ? flags[1]
          : f.flag_2,
      flag_3:
        flags[2] && SPECIAL_TOBACCO_FLAGS_OPTIONS.includes(flags[2])
          ? flags[2]
          : f.flag_3,
    }));
  };

  const buildPayload = () => ({
  user_email: cleanText(form.user_email),

  brand: cleanText(form.brand),
  line: cleanText(form.line),

  origin: cleanText(form.origin),
  factory: cleanText(form.factory),

  wrapper: cleanText(buildCustomValue(form.wrapper, form.wrapper_custom)),
  wrapper_process: cleanText(form.wrapper_process),
  wrapper_thickness: cleanText(form.wrapper_thickness),
  wrapper_oiliness: cleanText(form.wrapper_oiliness),

  binder: cleanText(buildCustomValue(form.binder, form.binder_custom)),

  filler: buildUniqueList([
    cleanText(form.filler_1),
    cleanText(form.filler_2),
    cleanText(form.filler_3),
  ]),

  ligero: cleanText(form.ligero),

  special_tobacco_flags: buildUniqueList([
    cleanText(form.flag_1),
    cleanText(form.flag_2),
    cleanText(form.flag_3),
  ]),

  age_years: form.age_years === "" ? null : Number(form.age_years),
  smoker_style: cleanText(form.smoker_style),

  vitola: "",
  bunch_density: "medium",
  });

  /* --------------------------
API CALLS
-------------------------- */

  const loadUsage = async () => {
    setErr("");
    setLoadingUsage(true);
    setUsage(null);

    try {
      const res = await fetch(
        `/api/predictor/usage?email=${encodeURIComponent(form.user_email)}`
      );

      const data = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(data.error || data.detail || "Failed to load usage");

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

    if (!String(form.brand || "").trim() || !String(form.line || "").trim()) {
      setLookupStatus("Enter brand and line first.");
      return;
    }

    setLoadingLookup(true);
    setLookupStatus("Searching ICSI blend database...");

    try {
      const res = await fetch(`/api/predictor/lookup-blend`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          brand: String(form.brand || "").trim(),
          line: String(form.line || "").trim(),
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok || !data.match) {
        setLookupStatus(data.error || "No reliable blend match found.");
        return;
      }

      applyLookupMatch(data.match);
      setLookupSource(data.source?.label || "");
      setLookupStatus("Blend found and applied to the form.");
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
          brand: String(brand || "").trim(),
          line: String(line || "").trim(),
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
      const res = await fetch(`/api/predictor/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildPayload()),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(data.error || data.detail || "Prediction failed");

      setResult(data);
      await loadUsage();
      await loadTastingCard(form.brand, form.line);
    } catch (e) {
      setErr(e.message || "Prediction request failed");
    } finally {
      setLoadingPredict(false);
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
          <h1>Predictor (beta)</h1>

          {/* USER */}
          <div className="card" style={{ marginTop: 16 }}>
            <h3>User</h3>

            <label>Email</label>
            <input
              value={form.user_email}
              placeholder="Enter your subscription email"
              onChange={(e) => update("user_email", e.target.value)}
            />

            <div className="ctaRow" style={{ marginTop: 12 }}>
              <button className="btn" onClick={loadUsage} disabled={loadingUsage}>
                {loadingUsage ? "Loading..." : "Check usage"}
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

          {/* CIGAR IDENTITY */}
          <div className="card" style={{ marginTop: 16 }}>
            <h3>Cigar Identity</h3>

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

            <div className="row2" style={{ marginTop: 10 }}>
              <div>
                <label>Origin</label>
                <select
                  value={form.origin}
                  onChange={(e) => update("origin", e.target.value)}
                >
                  {ORIGINS.map((x) => (
                    <option key={x || "blank-origin"} value={x}>
                      {x || "Select origin"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>Factory</label>
                <select
                  value={form.factory}
                  onChange={(e) => update("factory", e.target.value)}
                >
                  {FACTORIES.map((x) => (
                    <option key={x || "blank-factory"} value={x}>
                      {x || "Select factory"}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
                    {/* BLEND CONSTRUCTION */}
          <div className="card" style={{ marginTop: 16 }}>
            <h3>Blend Construction</h3>

            <div className="row2">
              <div>
                <label>Wrapper</label>
                <select
                  value={form.wrapper}
                  onChange={(e) => update("wrapper", e.target.value)}
                >
                  {WRAPPERS.map((x) => (
                    <option key={x || "blank-wrapper"} value={x}>
                      {x || "Select wrapper"}
                    </option>
                  ))}
                </select>

                {form.wrapper === "Hybrid / Other" && (
                  <>
                    <label style={{ marginTop: 10, display: "block" }}>
                      Custom Wrapper
                    </label>
                    <input
                      value={form.wrapper_custom}
                      onChange={(e) => update("wrapper_custom", e.target.value)}
                      placeholder="e.g. Ecuador Hybrid"
                    />
                  </>
                )}
              </div>

              <div>
                <label>Wrapper Process</label>
                <select
                  value={form.wrapper_process}
                  onChange={(e) => update("wrapper_process", e.target.value)}
                >
                  {WRAPPER_PROCESSES.map((x) => (
                    <option key={x || "blank-wrapper-process"} value={x}>
                      {x || "Select wrapper process"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row2" style={{ marginTop: 10 }}>
              <div>
                <label>Wrapper Thickness</label>
                <select
                  value={form.wrapper_thickness}
                  onChange={(e) => update("wrapper_thickness", e.target.value)}
                >
                  {WRAPPER_THICKNESS_OPTIONS.map((x) => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>Wrapper Oiliness</label>
                <select
                  value={form.wrapper_oiliness}
                  onChange={(e) => update("wrapper_oiliness", e.target.value)}
                >
                  {WRAPPER_OILINESS_OPTIONS.map((x) => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row2" style={{ marginTop: 10 }}>
              <div>
                <label>Binder</label>
                <select
                  value={form.binder}
                  onChange={(e) => update("binder", e.target.value)}
                >
                  {BINDERS.map((x) => (
                    <option key={x || "blank-binder"} value={x}>
                      {x || "Select binder"}
                    </option>
                  ))}
                </select>

                {form.binder === "Hybrid / Other" && (
                  <>
                    <label style={{ marginTop: 10, display: "block" }}>
                      Custom Binder
                    </label>
                    <input
                      value={form.binder_custom}
                      onChange={(e) => update("binder_custom", e.target.value)}
                      placeholder="e.g. Ecuador Hybrid"
                    />
                  </>
                )}
              </div>

              <div>
                <label>Ligero</label>
                <select
                  value={form.ligero}
                  onChange={(e) => update("ligero", e.target.value)}
                >
                  {LIGERO_OPTIONS.map((x) => (
                    <option key={x || "blank-ligero"} value={x}>
                      {x || "Select ligero level"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ marginTop: 14 }}>
              <label>Filler Components</label>
              <div style={row3Style}>
                <div>
                  <label className="small" style={{ display: "block", marginBottom: 6 }}>
                    Filler 1
                  </label>
                  <select
                    value={form.filler_1}
                    onChange={(e) => update("filler_1", e.target.value)}
                  >
                    {FILLER_OPTIONS.map((x) => (
                      <option key={`f1-${x || "blank"}`} value={x}>
                        {x || "Select filler"}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="small" style={{ display: "block", marginBottom: 6 }}>
                    Filler 2
                  </label>
                  <select
                    value={form.filler_2}
                    onChange={(e) => update("filler_2", e.target.value)}
                  >
                    {FILLER_OPTIONS.map((x) => (
                      <option key={`f2-${x || "blank"}`} value={x}>
                        {x || "Select filler"}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="small" style={{ display: "block", marginBottom: 6 }}>
                    Filler 3
                  </label>
                  <select
                    value={form.filler_3}
                    onChange={(e) => update("filler_3", e.target.value)}
                  >
                    {FILLER_OPTIONS.map((x) => (
                      <option key={`f3-${x || "blank"}`} value={x}>
                        {x || "Select filler"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 14 }}>
              <label>Special Tobacco Flags</label>
              <div style={row3Style}>
                <div>
                  <label className="small" style={{ display: "block", marginBottom: 6 }}>
                    Flag 1
                  </label>
                  <select
                    value={form.flag_1}
                    onChange={(e) => update("flag_1", e.target.value)}
                  >
                    {SPECIAL_TOBACCO_FLAGS_OPTIONS.map((x) => (
                      <option key={`flag1-${x || "blank"}`} value={x}>
                        {x || "Select flag"}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="small" style={{ display: "block", marginBottom: 6 }}>
                    Flag 2
                  </label>
                  <select
                    value={form.flag_2}
                    onChange={(e) => update("flag_2", e.target.value)}
                  >
                    {SPECIAL_TOBACCO_FLAGS_OPTIONS.map((x) => (
                      <option key={`flag2-${x || "blank"}`} value={x}>
                        {x || "Select flag"}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="small" style={{ display: "block", marginBottom: 6 }}>
                    Flag 3
                  </label>
                  <select
                    value={form.flag_3}
                    onChange={(e) => update("flag_3", e.target.value)}
                  >
                    {SPECIAL_TOBACCO_FLAGS_OPTIONS.map((x) => (
                      <option key={`flag3-${x || "blank"}`} value={x}>
                        {x || "Select flag"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* SMOKING PROFILE */}
          <div className="card" style={{ marginTop: 16 }}>
            <h3>Smoking Profile</h3>

            <div className="row2">
              <div>
                <label>Age (years)</label>
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  value={form.age_years}
                  onChange={(e) => update("age_years", e.target.value)}
                />
              </div>

              <div>
                <label>Smoker Style</label>
                <select
                  value={form.smoker_style}
                  onChange={(e) => update("smoker_style", e.target.value)}
                >
                  {SMOKER_STYLE_OPTIONS.map((x) => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="ctaRow" style={{ marginTop: 16 }}>
              <button
                className="btn primary"
                onClick={runPrediction}
                disabled={loadingPredict}
                type="button"
              >
                {loadingPredict ? "Running..." : "Run Predictor"}
              </button>
            </div>
          </div>

          {err && (
            <div className="notice" style={{ marginTop: 16 }}>
              <b>Error:</b> {err}
            </div>
          )}

          {result && (
            <div className="card" style={{ marginTop: 16 }}>
              <h3>Prediction Result</h3>

              <div className="small" style={{ lineHeight: 1.8 }}>
                <div>
                  Family: <b>{result.family}</b>
                </div>
                <div>
                  Target RH: <b>{result.target_rh}</b>
                </div>
                <div>
                  Window: <b>{result.window_low}</b> to <b>{result.window_high}</b>
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

              <hr className="sep" />

              <h3>Controlled Report Summary</h3>
              <p>{result.report_summary}</p>

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
        </div>
      </div>
    </Layout>
  );
}
