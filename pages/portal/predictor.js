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
  "Kelner SAS",
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
  "Dominican",
  "Brazilian",
  "Corojo",
  "Corojo 99",
  "Criollo",
  "Criollo 98",
  "Connecticut Shade",
  "Connecticut Broadleaf",
  "Connecticut Habano",
  "Costarican",
  "Broadleaf",
  "Honduran",
  "San Andres",
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
  "Brazilian",
  "Peruvian",
  "Cameroon",
  "Costarican",
  "San Andres",
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
  "Cuban Viso",
  "Alta Viso",
  "Dominican Republic",
  "Nicaragua",
  "Honduras",
  "Mexico",
  "Costa Rica",
  "Panama",
  "Ecuador",
  "Brazil",
  "Peru",
  "Cameroon",
  "Colombia",
  "United States",
  "Piloto Cubano",
  "Olor Dominicano",
  "Corojo",
  "Criollo",
  "Ligero",
  "Ecuadorian Ligero",
  "Cuban Seco",
  "Cuban Volado",
  "Medio Tiempo",
];

const LIGERO_OPTIONS = ["", "none", "low", "moderate", "high"];

const SPECIAL_TOBACCO_FLAGS_OPTIONS = [
  "",
  "Medio Tiempo",
  "Alta Viso-heavy",
  "Piloto Cubano",
  "Olor Dominicano",
  "Dominican Bonao",
  "Pelo de Oro",
  "Corojo",
  "Criollo",
  "Andullo",
  "Cotui",
  "Yamasa",
  "San Vicente",
  "Somoto",
  "Brazilian Cubra",
  "Brazilian Mata Fina",
  "Brazilian Mata Norte",
  "Brazilian Arapiraca",
  "Masatepe",
  "Ometepe",
  "Pueblo Nuevo",
  "Jamastran",
  "Broadleaf-heavy",
  "San Andres-heavy",
  "SA Negrito",
  "HVA",
  "Jalapa",
  "Filipino Simaba",
  "Vuelta Abajo",
  "Aged filler",
  "Extra fermented",
  "Culebra style bunching",
  "Small-batch / experimental",
];

const SMOKER_STYLE_OPTIONS = ["both", "slow", "fast"];

const EMPTY_LOOKUP_FIELDS = {
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
};

const readOnlyGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 12,
  marginTop: 12,
};

const readOnlyFieldStyle = {
  border: "1px solid rgba(0,0,0,.08)",
  borderRadius: 10,
  padding: "12px",
  background: "rgba(0,0,0,.015)",
};

const readOnlyValueStyle = {
  marginTop: 4,
  fontWeight: 600,
  lineHeight: 1.45,
};

const EMPTY_VALUE = "—";

/* --------------------------
COMPONENT
-------------------------- */

export default function PredictorPage() {
  const [brandSuggestions, setBrandSuggestions] = useState([]);
  const [lineSuggestions, setLineSuggestions] = useState([]);
  const [showBrandSuggestions, setShowBrandSuggestions] = useState(false);
  const [showLineSuggestions, setShowLineSuggestions] = useState(false);

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
  const [validatedEmail, setValidatedEmail] = useState("");
  const [isUserValidated, setIsUserValidated] = useState(false);

  const [result, setResult] = useState(null);
  const [tastingCard, setTastingCard] = useState(null);
  const [similarBlends, setSimilarBlends] = useState(null);
  const [err, setErr] = useState("");

  const [loadingUsage, setLoadingUsage] = useState(false);
  const [loadingPredict, setLoadingPredict] = useState(false);
  const [loadingLookup, setLoadingLookup] = useState(false);
  const [loadingSimilar, setLoadingSimilar] = useState(false);

  const [lookupStatus, setLookupStatus] = useState("");
  const [lookupSource, setLookupSource] = useState("");

  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
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

  const isAuthorizedUser =
    isUserValidated &&
    cleanText(validatedEmail).toLowerCase() ===
      cleanText(form.user_email).toLowerCase();

  /* --------------------------
AUTOCOMPLETE
-------------------------- */

  const uniqueByBrand = (items) => {
    const seen = new Set();
    const out = [];

    for (const item of items || []) {
      const brand = cleanText(item.brand);
      const key = brand.toLowerCase();

      if (brand && !seen.has(key)) {
        seen.add(key);
        out.push({ brand, label: brand });
      }
    }

    return out;
  };

  const uniqueLinesForBrand = (items, selectedBrand, q) => {
    const brandKey = cleanText(selectedBrand).toLowerCase();
    const lineQuery = cleanText(q).toLowerCase();
    const seen = new Set();
    const out = [];

    for (const item of items || []) {
      const itemBrand = cleanText(item.brand).toLowerCase();
      const line = cleanText(item.line);
      const lineKey = line.toLowerCase();

      if (!line || itemBrand !== brandKey) continue;
      if (lineQuery && !lineKey.includes(lineQuery)) continue;

      if (!seen.has(lineKey)) {
        seen.add(lineKey);
        out.push({ brand: cleanText(item.brand), line, label: line });
      }
    }

    return out;
  };

  const loadBrandSuggestions = async (q) => {
    const cleaned = cleanText(q);

    if (!cleaned || cleaned.length < 2) {
      setBrandSuggestions([]);
      setShowBrandSuggestions(false);
      return;
    }

    try {
      const res = await fetch(
        `/api/predictor/autocomplete?q=${encodeURIComponent(cleaned)}&limit=100`
      );
      const data = await res.json().catch(() => ({}));

      if (Array.isArray(data?.results)) {
        const brands = uniqueByBrand(data.results).slice(0, 12);
        setBrandSuggestions(brands);
        setShowBrandSuggestions(brands.length > 0);
      } else {
        setBrandSuggestions([]);
        setShowBrandSuggestions(false);
      }
    } catch {
      setBrandSuggestions([]);
      setShowBrandSuggestions(false);
    }
  };

  const loadLineSuggestions = async (brand, q) => {
    const selectedBrand = cleanText(brand);
    const cleanedLine = cleanText(q);

    if (!selectedBrand) {
      setLineSuggestions([]);
      setShowLineSuggestions(false);
      return;
    }

    try {
      const res = await fetch(
        `/api/predictor/autocomplete?q=${encodeURIComponent(selectedBrand)}&limit=250`
      );
      const data = await res.json().catch(() => ({}));

      if (Array.isArray(data?.results)) {
        const lines = uniqueLinesForBrand(data.results, selectedBrand, cleanedLine).slice(0, 20);
        setLineSuggestions(lines);
        setShowLineSuggestions(lines.length > 0);
      } else {
        setLineSuggestions([]);
        setShowLineSuggestions(false);
      }
    } catch {
      setLineSuggestions([]);
      setShowLineSuggestions(false);
    }
  };

  const selectBrandSuggestion = (item) => {
    update("brand", cleanText(item.brand || ""));
    update("line", "");
    setShowBrandSuggestions(false);
    setBrandSuggestions([]);
    setLineSuggestions([]);
    setShowLineSuggestions(false);
  };

  const selectLineSuggestion = (item) => {
    update("line", cleanText(item.line || ""));
    setShowLineSuggestions(false);
    setLineSuggestions([]);
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

  const buildUniqueList = (values) => {
    return [...new Set(values.map((v) => String(v || "").trim()).filter(Boolean))];
  };

  const mapLookupValue = (value, options) => {
    const v = cleanText(value);
    if (!v) return "";
    return options.includes(v) ? v : "";
  };

  const resetUserValidation = () => {
    setUsage(null);
    setValidatedEmail("");
    setIsUserValidated(false);
    setLookupStatus("");
    setLookupSource("");
  };

  const displayValue = (value) => {
    const cleaned = cleanText(value);
    return cleaned || EMPTY_VALUE;
  };

  const displayList = (values) => {
    const list = buildUniqueList(values);
    return list.length ? list.join(", ") : EMPTY_VALUE;
  };

  const ReadOnlyField = ({ label, value }) => (
    <div style={readOnlyFieldStyle}>
      <div className="small" style={{ opacity: 0.72 }}>
        {label}
      </div>
      <div style={readOnlyValueStyle}>{value || EMPTY_VALUE}</div>
    </div>
  );

  const applyLookupMatch = (match) => {
    const cleanedBrand = cleanText(match?.brand);
    const cleanedLine = cleanText(match?.line);

    const cleanedOrigin = mapLookupValue(match?.origin, ORIGINS);
    const cleanedFactory = mapLookupValue(match?.factory, FACTORIES);

    const rawWrapper = cleanText(match?.wrapper);
    const wrapperInList = rawWrapper && WRAPPERS.includes(rawWrapper);

    const rawBinder = cleanText(match?.binder);
    const binderInList = rawBinder && BINDERS.includes(rawBinder);

    const filler = Array.isArray(match?.filler)
      ? match.filler.map(cleanText).filter(Boolean)
      : [];

    const validFillers = filler.filter((x) => FILLER_OPTIONS.includes(x));

    const flags = Array.isArray(match?.special_tobacco_flags)
      ? match.special_tobacco_flags.map(cleanText).filter(Boolean)
      : [];

    const validFlags = flags.filter((x) =>
      SPECIAL_TOBACCO_FLAGS_OPTIONS.includes(x)
    );

    const cleanedLigero = mapLookupValue(match?.ligero, LIGERO_OPTIONS);
    const cleanedWrapperProcess = mapLookupValue(
      match?.wrapper_process,
      WRAPPER_PROCESSES
    );
    const cleanedWrapperThickness = mapLookupValue(
      match?.wrapper_thickness,
      WRAPPER_THICKNESS_OPTIONS
    );
    const cleanedWrapperOiliness = mapLookupValue(
      match?.wrapper_oiliness,
      WRAPPER_OILINESS_OPTIONS
    );

    setForm((f) => ({
      ...f,

      brand: cleanedBrand || f.brand,
      line: cleanedLine || f.line,

      ...EMPTY_LOOKUP_FIELDS,

      origin: cleanedOrigin,
      factory: cleanedFactory,

      wrapper: rawWrapper
        ? (wrapperInList ? rawWrapper : "Hybrid / Other")
        : "",
      wrapper_custom: rawWrapper && !wrapperInList ? rawWrapper : "",
      wrapper_process: cleanedWrapperProcess,
      wrapper_thickness: cleanedWrapperThickness || "medium",
      wrapper_oiliness: cleanedWrapperOiliness || "medium",

      binder: rawBinder
        ? (binderInList ? rawBinder : "Hybrid / Other")
        : "",
      binder_custom: rawBinder && !binderInList ? rawBinder : "",

      filler_1: validFillers[0] || "",
      filler_2: validFillers[1] || "",
      filler_3: validFillers[2] || "",

      ligero: cleanedLigero || "moderate",

      flag_1: validFlags[0] || "",
      flag_2: validFlags[1] || "",
      flag_3: validFlags[2] || "",
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
    setLookupStatus("");
    setLookupSource("");

    try {
      const cleanedEmail = cleanText(form.user_email);

      const res = await fetch(
        `/api/predictor/usage?email=${encodeURIComponent(cleanedEmail)}`
      );

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setIsUserValidated(false);
        setValidatedEmail("");
        throw new Error(data.error || data.detail || "Failed to load usage");
      }

      setUsage(data);
      setValidatedEmail(cleanedEmail);
      setIsUserValidated(true);
    } catch (e) {
      setIsUserValidated(false);
      setValidatedEmail("");
      setErr(e.message || "Usage request failed");
    } finally {
      setLoadingUsage(false);
    }
  };

  const lookupBlend = async () => {
    setErr("");
    setLookupSource("");

    if (!isAuthorizedUser) {
      setLookupStatus("Please enter your registered email and press Check User first.");
      return;
    }

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
        body: JSON.stringify({
          user_email: cleanText(form.user_email),
          brand,
          line,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok || !data.match) {
        setLookupStatus(data.error || data.detail || "No reliable blend match found.");
        return;
      }

      applyLookupMatch(data.match);
      setLookupSource(data.source?.label || "");
      setLookupStatus("Blend found and displayed below.");
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
          user_email: cleanText(form.user_email),
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
    setSimilarBlends(null);

    const cleanedBrand = cleanText(form.brand);
    const cleanedLine = cleanText(form.line);

    try {
      const res = await fetch(`/api/predictor/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildPayload()),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || data.detail || "Prediction failed");
      }

      setResult(data);
      await loadUsage();
      await loadTastingCard(cleanedBrand, cleanedLine);
    } catch (e) {
      setErr(e.message || "Prediction request failed");
    } finally {
      setLoadingPredict(false);
    }
  };

  const findSimilarBlends = async () => {
    setErr("");

    if (!isAuthorizedUser) {
      setErr("Please enter your registered email and press Check User first.");
      return;
    }

    setLoadingSimilar(true);
    setSimilarBlends(null);
    setResult(null);
    setTastingCard(null);

    try {
      const res = await fetch(`/api/predictor/similar-blends`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildPayload()),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        throw new Error(data.error || data.detail || "Similar blends lookup failed");
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
          <h1>Cigar Peak-Flavor Predictor (beta)</h1>

          <label>
            Instructions: The Predictor tool is available exclusively to approved
            subscribers. Enter your registered email address and press the "Check
            User" button to launch. In the Cigar Blend Lookup section, enter the
            blend Brand and Line then press "Blend Lookup" button. The blend
            specific details will automatically appear below as read-only values.
            By pressing the "Run Predictor" button, the application will produce
            the blend's optimal smoking leaf-level relative humidity %, and its
            tasting card. By pressing the "Find Similar Blends" button, the
            application will list the top blends that most closely match your
            selection.
            <br />
            <strong>Important note</strong>: Leaf-level relative humidity % is measured using a
            commercially available Cigar Humidity Meter.
          </label>

          {/* USER */}
          <div className="card" style={{ marginTop: 16 }}>
            <h3>User Login</h3>

            <label>Email</label>
            <input
              value={form.user_email}
              placeholder="Enter your subscription email"
              onChange={(e) => {
                update("user_email", e.target.value);
                resetUserValidation();
              }}
            />

            <div className="ctaRow" style={{ marginTop: 12 }}>
              <button className="btn" onClick={loadUsage} disabled={loadingUsage}>
                {loadingUsage ? "Loading..." : "Check User"}
              </button>
            </div>

            {!isAuthorizedUser && (
              <div className="small" style={{ marginTop: 10 }}>
                Please check your registered email first to enable Blend Lookup and
                Similar Blends.
              </div>
            )}

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
            <h3>Cigar Blend Lookup</h3>

            <div className="row2">
              <div style={{ position: "relative" }}>
                <label>Brand</label>
                <input
                  value={form.brand}
                  placeholder="Start typing brand..."
                  autoComplete="off"
                  onFocus={() => loadBrandSuggestions(form.brand)}
                  onChange={(e) => {
                    const value = e.target.value;
                    update("brand", value);
                    update("line", "");
                    setLineSuggestions([]);
                    setShowLineSuggestions(false);
                    loadBrandSuggestions(value);
                  }}
                  onBlur={() => {
                    setTimeout(() => setShowBrandSuggestions(false), 150);
                  }}
                />

                {showBrandSuggestions && brandSuggestions.length > 0 && (
                  <div style={autocompleteBox}>
                    {brandSuggestions.map((s, i) => (
                      <div
                        key={`${s.brand}-${i}`}
                        style={autocompleteItem}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          selectBrandSuggestion(s);
                        }}
                      >
                        {s.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div style={{ position: "relative" }}>
                <label>Line</label>
                <input
                  value={form.line}
                  autoComplete="off"
                  disabled={!cleanText(form.brand)}
                  onFocus={() => loadLineSuggestions(form.brand, form.line)}
                  onChange={(e) => {
                    const value = e.target.value;
                    update("line", value);
                    loadLineSuggestions(form.brand, value);
                  }}
                  onBlur={() => {
                    setTimeout(() => setShowLineSuggestions(false), 150);
                  }}
                  placeholder={
                    cleanText(form.brand)
                      ? "Start typing line..."
                      : "Select brand first"
                  }
                />

                {showLineSuggestions && lineSuggestions.length > 0 && (
                  <div style={autocompleteBox}>
                    {lineSuggestions.map((s, i) => (
                      <div
                        key={`${s.brand}-${s.line}-${i}`}
                        style={autocompleteItem}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          selectLineSuggestion(s);
                        }}
                      >
                        {s.label}
                      </div>
                    ))}
                  </div>
                )}
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
                disabled={loadingLookup || !isAuthorizedUser}
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

          {/* READ-ONLY BLEND CONSTRUCTION */}
          <div className="card" style={{ marginTop: 16 }}>
            <h3>Blend Details: Autofilled &amp; Read-Only</h3>

            <div style={readOnlyGridStyle}>
              <ReadOnlyField label="Origin" value={displayValue(form.origin)} />
              <ReadOnlyField label="Factory" value={displayValue(form.factory)} />
              <ReadOnlyField
                label="Wrapper"
                value={displayValue(buildCustomValue(form.wrapper, form.wrapper_custom))}
              />
              <ReadOnlyField
                label="Wrapper Process"
                value={displayValue(form.wrapper_process)}
              />
              <ReadOnlyField
                label="Wrapper Thickness"
                value={displayValue(form.wrapper_thickness)}
              />
              <ReadOnlyField
                label="Wrapper Oiliness"
                value={displayValue(form.wrapper_oiliness)}
              />
              <ReadOnlyField
                label="Binder"
                value={displayValue(buildCustomValue(form.binder, form.binder_custom))}
              />
              <ReadOnlyField label="Ligero" value={displayValue(form.ligero)} />
              <ReadOnlyField
                label="Filler Components"
                value={displayList([form.filler_1, form.filler_2, form.filler_3])}
              />
              <ReadOnlyField
                label="Special Tobacco Flags"
                value={displayList([form.flag_1, form.flag_2, form.flag_3])}
              />
              <ReadOnlyField label="Blend Age" value={displayValue(form.age_years)} />
              <ReadOnlyField label="Smoker Style" value={displayValue(form.smoker_style)} />
            </div>

            <div
              className="ctaRow"
              style={{
                marginTop: 16,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
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
                disabled={loadingSimilar || !isAuthorizedUser}
                type="button"
              >
                {loadingSimilar ? "Searching..." : "Find Similar Blends"}
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
              <h3>Blend Peak-Flavor Prediction Result</h3>

              <div className="small" style={{ lineHeight: 1.8 }}>
                <div>
                  Cigar Peak-Flavor System Family: <b>{result.family}</b>
                </div>
                <div>
                  Target Smoking Core Relative Humidity % (measured with Cigar Humidity Meter):{" "}
                  <b>{result.target_rh}</b>
                </div>
                <div>
                  Smoking Core Relative Humidity % Window: <b>{result.window_low}</b> to{" "}
                  <b>{result.window_high}</b>
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

          {similarBlends && (
            <div className="card" style={{ marginTop: 16 }}>
              <h3>Similar Blends</h3>

              {Array.isArray(similarBlends.results) && similarBlends.results.length > 0 ? (
                <div className="small" style={{ lineHeight: 1.8 }}>
                  {similarBlends.results.map((blend, idx) => (
                    <div
                      key={`${blend.brand || "brand"}-${blend.line || "line"}-${idx}`}
                      style={{
                        padding: "12px 0",
                        borderBottom:
                          idx === similarBlends.results.length - 1
                            ? "none"
                            : "1px solid rgba(0,0,0,.08)",
                      }}
                    >
                      <div>
                        <b>{blend.brand || "Unknown Brand"}</b>
                        {blend.line ? ` — ${blend.line}` : ""}
                      </div>

                      {blend.similarity_score != null && (
                        <div>
                          Similarity score: <b>{blend.similarity_score}%</b>
                        </div>
                      )}

                      {Array.isArray(blend.why_similar) &&
                        blend.why_similar.length > 0 && (
                          <div>Why similar: {blend.why_similar.join(", ")}</div>
                        )}

                      {blend.origin && <div>Origin: {blend.origin}</div>}
                      {blend.factory && <div>Factory: {blend.factory}</div>}
                      {blend.wrapper && <div>Wrapper: {blend.wrapper}</div>}
                      {blend.wrapper_process && (
                        <div>Wrapper process: {blend.wrapper_process}</div>
                      )}
                      {blend.binder && <div>Binder: {blend.binder}</div>}

                      {Array.isArray(blend.filler) && blend.filler.length > 0 && (
                        <div>Filler: {blend.filler.join(", ")}</div>
                      )}

                      {blend.ligero && <div>Ligero: {blend.ligero}</div>}

                      {Array.isArray(blend.special_tobacco_flags) &&
                        blend.special_tobacco_flags.length > 0 && (
                          <div>Flags: {blend.special_tobacco_flags.join(", ")}</div>
                        )}

                      {blend.source_label && <div>Source: {blend.source_label}</div>}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="small">No similar blends found.</div>
              )}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 800px) {
          .container {
            max-width: 100% !important;
          }

          .row2 {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 700px) {
          div[style*="repeat(2"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </Layout>
  );
}
