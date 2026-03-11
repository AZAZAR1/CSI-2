import { useState } from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

/* -------------------------
AUTOCOMPLETE UI STYLES
------------------------- */

const autocompleteBox = {
  position: "absolute",
  background: "white",
  border: "1px solid #ddd",
  width: "100%",
  zIndex: 20,
  maxHeight: 200,
  overflowY: "auto",
};

const autocompleteItem = {
  padding: "8px 10px",
  cursor: "pointer",
};

/* -------------------------
DATA CONSTANTS
------------------------- */

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

/* (all your other constant arrays remain unchanged) */

export default function PredictorPage() {

  /* -------------------------
  AUTOCOMPLETE STATE
  ------------------------- */

  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  /* -------------------------
  FORM STATE
  ------------------------- */

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
    vitola: "",
    vitola_custom: "",
    bunch_density: "medium",
    age_years: "",
    smoker_style: "both",
  });

  const [usage, setUsage] = useState(null);
  const [result, setResult] = useState(null);
  const [err, setErr] = useState("");

  const [loadingUsage, setLoadingUsage] = useState(false);
  const [loadingPredict, setLoadingPredict] = useState(false);
  const [loadingLookup, setLoadingLookup] = useState(false);

  const [lookupStatus, setLookupStatus] = useState("");
  const [lookupSource, setLookupSource] = useState("");

  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  /* -------------------------
  AUTOCOMPLETE LOADER
  ------------------------- */

  const loadSuggestions = async (query) => {

    if (!query || query.length < 2) {
      setSuggestions([]);
      return;
    }

    try {

      const res = await fetch(
        `/api/predictor/autocomplete?q=${encodeURIComponent(query)}`
      );

      const data = await res.json();

      if (data?.results) {
        setSuggestions(data.results);
        setShowSuggestions(true);
      }

    } catch (e) {
      console.error(e);
    }
  };

  const selectSuggestion = (s) => {

    update("brand", s.brand);
    update("line", s.line);

    setShowSuggestions(false);
  };

  /* -------------------------
  REMAINDER OF YOUR ORIGINAL FUNCTIONS
  (unchanged)
  ------------------------- */

  const buildCustomValue = (choice, customValue) => {
    if (choice === "Custom / Other" || choice === "Hybrid / Other") {
      return String(customValue || "").trim();
    }
    return choice;
  };

  const buildUniqueList = (values) => {
    return [...new Set(values.map((v) => String(v || "").trim()).filter(Boolean))];
  };

  const buildPayload = () => ({
    user_email: String(form.user_email || "").trim(),
    brand: String(form.brand || "").trim(),
    line: String(form.line || "").trim(),
    origin: form.origin,
    factory: form.factory,
    wrapper: buildCustomValue(form.wrapper, form.wrapper_custom),
    wrapper_process: form.wrapper_process,
    wrapper_thickness: form.wrapper_thickness,
    wrapper_oiliness: form.wrapper_oiliness,
    binder: buildCustomValue(form.binder, form.binder_custom),
    filler: buildUniqueList([form.filler_1, form.filler_2, form.filler_3]),
    ligero: form.ligero,
    special_tobacco_flags: buildUniqueList([form.flag_1, form.flag_2, form.flag_3]),
    vitola: buildCustomValue(form.vitola, form.vitola_custom),
    bunch_density: form.bunch_density,
    age_years: form.age_years === "" ? null : Number(form.age_years),
    smoker_style: form.smoker_style,
  });

  /* -------------------------
  UI
  ------------------------- */

  return (
    <Layout>
      <Seo
        title="Predictor | ICSI"
        description="Private predictor prototype."
        path="/portal/predictor"
      />

      <div className="section">
        <div className="container" style={{ maxWidth: 980 }}>

          <h1>Predictor Prototype</h1>

          {/* -------------------------
          USER
          ------------------------- */}

          <div className="card" style={{ marginTop: 16 }}>
            <h3>User</h3>

            <label>Email</label>

            <input
              value={form.user_email}
              placeholder="Enter your subscription email"
              onChange={(e) => update("user_email", e.target.value)}
            />

          </div>

          {/* -------------------------
          CIGAR IDENTITY
          ------------------------- */}

          <div className="card" style={{ marginTop: 16 }}>

            <h3>Cigar Identity</h3>

            <div className="row2">

              {/* BRAND WITH AUTOCOMPLETE */}

              <div style={{ position: "relative" }}>

                <label>Brand</label>

                <input
                  value={form.brand}
                  placeholder="Start typing brand..."
                  onChange={(e) => {

                    const value = e.target.value;

                    update("brand", value);

                    loadSuggestions(value);
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

              {/* LINE */}

              <div>

                <label>Line</label>

                <input
                  value={form.line}
                  onChange={(e) => update("line", e.target.value)}
                  placeholder="e.g. No. 2"
                />

              </div>

            </div>

          </div>

          {/* the remainder of your original UI remains unchanged */}

        </div>
      </div>
    </Layout>
  );
}