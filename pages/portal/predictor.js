import { useState } from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

export default function PredictorPage() {
  const [form, setForm] = useState({
    user_email: "light@example.com",
    brand: "",
    line: "",
    origin: "",
    factory: "",
    wrapper: "",
    wrapper_process: "",
    wrapper_thickness: "medium",
    wrapper_oiliness: "medium",
    binder: "",
    filler: "",
    ligero: "moderate",
    special_tobacco_flags: "",
    vitola: "",
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

  const parseList = (value) =>
    String(value || "")
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean);

  const loadUsage = async () => {
    setErr("");
    setLoadingUsage(true);
    setUsage(null);

    try {
      const res = await fetch(
        `${API_BASE}/usage?email=${encodeURIComponent(form.user_email)}`,
        {
          headers: {
            "x-api-key": API_KEY,
          },
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Failed to load usage");
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
      const payload = {
        user_email: form.user_email,
        brand: form.brand,
        line: form.line,
        origin: form.origin,
        factory: form.factory,
        wrapper: form.wrapper,
        wrapper_process: form.wrapper_process,
        wrapper_thickness: form.wrapper_thickness,
        wrapper_oiliness: form.wrapper_oiliness,
        binder: form.binder,
        filler: parseList(form.filler),
        ligero: form.ligero,
        special_tobacco_flags: parseList(form.special_tobacco_flags),
        vitola: form.vitola,
        bunch_density: form.bunch_density,
        age_years: form.age_years ? Number(form.age_years) : null,
        smoker_style: form.smoker_style,
      };

      const res = await fetch(`${API_BASE}/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Prediction failed");
      setResult(data);
      loadUsage();
    } catch (e) {
      setErr(e.message || "Prediction request failed");
    } finally {
      setLoadingPredict(false);
    }
  };

  return (
    <Layout>
      <Seo title="Predictor | ICSI" description="Private predictor prototype." path="/portal/predictor" />

      <div className="section">
        <div className="container" style={{ maxWidth: 980 }}>
          <h1>Predictor Prototype</h1>
          <p className="small">Local portal-to-backend integration test.</p>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>User</h3>
            <label>Email</label>
            <input
              value={form.user_email}
              onChange={(e) => update("user_email", e.target.value)}
            />

            <div className="ctaRow" style={{ marginTop: 12 }}>
              <button className="btn" onClick={loadUsage} disabled={loadingUsage}>
                {loadingUsage ? "Loading..." : "Check usage"}
              </button>
            </div>

            {usage && (
              <div className="small" style={{ marginTop: 12, lineHeight: 1.8 }}>
                <div>Tier: <b>{usage.tier}</b></div>
                <div>Annual: <b>{usage.runs_used}</b> used / <b>{usage.annual_limit}</b></div>
                <div>Remaining: <b>{usage.runs_remaining}</b></div>
                <div>Today: <b>{usage.daily_used}</b> used / <b>{usage.daily_limit}</b></div>
                <div>Daily remaining: <b>{usage.daily_remaining}</b></div>
              </div>
            )}
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>Cigar Inputs</h3>

            <div className="row2">
              <div>
                <label>Brand</label>
                <input value={form.brand} onChange={(e) => update("brand", e.target.value)} />
              </div>
              <div>
                <label>Line</label>
                <input value={form.line} onChange={(e) => update("line", e.target.value)} />
              </div>
            </div>

            <div className="row2" style={{ marginTop: 10 }}>
              <div>
                <label>Origin</label>
                <input value={form.origin} onChange={(e) => update("origin", e.target.value)} />
              </div>
              <div>
                <label>Factory</label>
                <input value={form.factory} onChange={(e) => update("factory", e.target.value)} />
              </div>
            </div>

            <div className="row2" style={{ marginTop: 10 }}>
              <div>
                <label>Wrapper</label>
                <input value={form.wrapper} onChange={(e) => update("wrapper", e.target.value)} />
              </div>
              <div>
                <label>Wrapper Process</label>
                <input value={form.wrapper_process} onChange={(e) => update("wrapper_process", e.target.value)} />
              </div>
            </div>

            <div className="row2" style={{ marginTop: 10 }}>
              <div>
                <label>Wrapper Thickness</label>
                <input value={form.wrapper_thickness} onChange={(e) => update("wrapper_thickness", e.target.value)} />
              </div>
              <div>
                <label>Wrapper Oiliness</label>
                <input value={form.wrapper_oiliness} onChange={(e) => update("wrapper_oiliness", e.target.value)} />
              </div>
            </div>

            <div className="row2" style={{ marginTop: 10 }}>
              <div>
                <label>Binder</label>
                <input value={form.binder} onChange={(e) => update("binder", e.target.value)} />
              </div>
              <div>
                <label>Filler (comma-separated)</label>
                <input value={form.filler} onChange={(e) => update("filler", e.target.value)} />
              </div>
            </div>

            <div className="row2" style={{ marginTop: 10 }}>
              <div>
                <label>Ligero</label>
                <input value={form.ligero} onChange={(e) => update("ligero", e.target.value)} />
              </div>
              <div>
                <label>Special Flags (comma-separated)</label>
                <input value={form.special_tobacco_flags} onChange={(e) => update("special_tobacco_flags", e.target.value)} />
              </div>
            </div>

            <div className="row2" style={{ marginTop: 10 }}>
              <div>
                <label>Vitola</label>
                <input value={form.vitola} onChange={(e) => update("vitola", e.target.value)} />
              </div>
              <div>
                <label>Bunch Density</label>
                <input value={form.bunch_density} onChange={(e) => update("bunch_density", e.target.value)} />
              </div>
            </div>

            <div className="row2" style={{ marginTop: 10 }}>
              <div>
                <label>Age (years)</label>
                <input value={form.age_years} onChange={(e) => update("age_years", e.target.value)} />
              </div>
              <div>
                <label>Smoker Style</label>
                <input value={form.smoker_style} onChange={(e) => update("smoker_style", e.target.value)} />
              </div>
            </div>

            <div className="ctaRow" style={{ marginTop: 16 }}>
              <button className="btn primary" onClick={runPrediction} disabled={loadingPredict}>
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
                <div>Family: <b>{result.family}</b></div>
                <div>Target RH: <b>{result.target_rh}</b></div>
                <div>Window: <b>{result.window_low}</b> to <b>{result.window_high}</b></div>
                <div>Runs used: <b>{result.runs_used}</b></div>
                <div>Runs remaining: <b>{result.runs_remaining}</b></div>
                <div>Daily used: <b>{result.daily_used}</b></div>
                <div>Daily remaining: <b>{result.daily_remaining}</b></div>
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