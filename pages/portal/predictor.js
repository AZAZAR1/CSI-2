import { useState } from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

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

const VITOLA_OPTIONS = [
  "",
  "Lancero",
  "Panetela",
  "Lonsdale",
  "Corona",
  "Corona Gorda",
  "Petit Corona",
  "Robusto",
  "Double Robusto",
  "Toro",
  "Gordo",
  "Churchill",
  "Double Corona",
  "Belicoso",
  "Piramide",
  "Torpedo",
  "Perfecto",
  "Salomon",
  "Petit Robusto",
  "Petit Toro",
  "Grand Toro",
  "Wide Churchill",
  "Short Churchill",
  "Custom / Other",
];

const BUNCH_DENSITY_OPTIONS = ["low", "medium", "high"];
const SMOKER_STYLE_OPTIONS = ["both", "slow", "fast"];

export default function PredictorPage() {
  const [form, setForm] = useState({
    user_email: "light@example.com",
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
    filler: [],
    ligero: "moderate",
    special_tobacco_flags: [],
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

  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const toggleMulti = (key, value) => {
    setForm((f) => {
      const current = Array.isArray(f[key]) ? f[key] : [];
      const next = current.includes(value)
        ? current.filter((x) => x !== value)
        : [...current, value];
      return { ...f, [key]: next };
    });
  };

  const buildCustomValue = (choice, customValue) => {
    if (choice === "Custom / Other" || choice === "Hybrid / Other") {
      return String(customValue || "").trim();
    }
    return choice;
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
    filler: Array.isArray(form.filler) ? form.filler : [],
    ligero: form.ligero,
    special_tobacco_flags: Array.isArray(form.special_tobacco_flags)
      ? form.special_tobacco_flags
      : [],
    vitola: buildCustomValue(form.vitola, form.vitola_custom),
    bunch_density: form.bunch_density,
    age_years: form.age_years === "" ? null : Number(form.age_years),
    smoker_style: form.smoker_style,
  });

  const loadUsage = async () => {
    setErr("");
    setLoadingUsage(true);
    setUsage(null);

    try {
      const res = await fetch(
        `/api/predictor/usage?email=${encodeURIComponent(form.user_email)}`
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

  const runPrediction = async () => {
    setErr("");
    setLoadingPredict(true);
    setResult(null);

    try {
      const payload = buildPayload();

      const res = await fetch(`/api/predictor/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || data.detail || "Prediction failed");
      }

      setResult(data);
      await loadUsage();
    } catch (e) {
      setErr(e.message || "Prediction request failed");
    } finally {
      setLoadingPredict(false);
    }
  };

  const checkboxGridStyle = {
    marginTop: 8,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 12,
    maxWidth: 920,
    marginLeft: "auto",
    marginRight: "auto",
  };

  const checkboxLabelStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    fontSize: 14,
    color: "rgba(18,18,20,.86)",
    lineHeight: 1.35,
    minHeight: 40,
  };

  const checkboxTextStyle = {
    display: "block",
    whiteSpace: "normal",
    overflowWrap: "anywhere",
    wordBreak: "break-word",
  };

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
          <p className="small">Portal-to-backend integration test.</p>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>User</h3>

            <label>Email</label>
            <input
              value={form.user_email}
              onChange={(e) => update("user_email", e.target.value)}
            />

            <div className="ctaRow" style={{ marginTop: 12 }}>
              <button
                className="btn"
                onClick={loadUsage}
                disabled={loadingUsage}
                type="button"
              >
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

          <div className="card" style={{ marginTop: 16 }}>
            <h3>Cigar Identity</h3>

            <div className="row2">
              <div>
                <label>Brand</label>
                <input
                  value={form.brand}
                  onChange={(e) => update("brand", e.target.value)}
                  placeholder="e.g. Montecristo"
                />
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

            <div style={{ marginTop: 10 }}>
              <label>Filler Components</label>
              <div style={checkboxGridStyle}>
                {FILLER_OPTIONS.map((item) => (
                  <label key={item} style={checkboxLabelStyle}>
                    <input
                      type="checkbox"
                      checked={form.filler.includes(item)}
                      onChange={() => toggleMulti("filler", item)}
                      style={{ marginTop: 2, flexShrink: 0 }}
                    />
                    <span style={checkboxTextStyle}>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 14 }}>
              <label>Special Tobacco Flags</label>
              <div style={checkboxGridStyle}>
                {SPECIAL_TOBACCO_FLAGS_OPTIONS.map((item) => (
                  <label key={item} style={checkboxLabelStyle}>
                    <input
                      type="checkbox"
                      checked={form.special_tobacco_flags.includes(item)}
                      onChange={() => toggleMulti("special_tobacco_flags", item)}
                      style={{ marginTop: 2, flexShrink: 0 }}
                    />
                    <span style={checkboxTextStyle}>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>Vitola & Smoking Profile</h3>

            <div className="row2">
              <div>
                <label>Vitola</label>
                <select
                  value={form.vitola}
                  onChange={(e) => update("vitola", e.target.value)}
                >
                  {VITOLA_OPTIONS.map((x) => (
                    <option key={x || "blank-vitola"} value={x}>
                      {x || "Select vitola"}
                    </option>
                  ))}
                </select>

                {form.vitola === "Custom / Other" && (
                  <>
                    <label style={{ marginTop: 10, display: "block" }}>
                      Custom Vitola
                    </label>
                    <input
                      value={form.vitola_custom}
                      onChange={(e) => update("vitola_custom", e.target.value)}
                      placeholder="e.g. Hermoso No. 4"
                    />
                  </>
                )}
              </div>

              <div>
                <label>Bunch Density</label>
                <select
                  value={form.bunch_density}
                  onChange={(e) => update("bunch_density", e.target.value)}
                >
                  {BUNCH_DENSITY_OPTIONS.map((x) => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row2" style={{ marginTop: 10 }}>
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
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}