import { useState } from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

export default function PortalLogin() {
  const [token, setToken] = useState("");
  const [err, setErr] = useState("");
  const [ok, setOk] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    setOk(false);

    const r = await fetch("/api/portal/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
    const j = await r.json();
    if (!r.ok || !j.ok) {
      setErr(j.error || "Login failed");
      return;
    }
    setOk(true);
    window.location.href = "/portal";
  };

  return (
    <Layout>
      <Seo title="Candidate Portal | ICSI" description="Secure candidate portal." path="/portal/login" />
      <div className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <h1>Candidate Portal</h1>
          <p className="small">Enter the access token provided by ICSI.</p>

          <form className="form" onSubmit={submit}>
            <label>Access Token</label>
            <input value={token} onChange={(e) => setToken(e.target.value)} placeholder="Paste token…" />

            <button className="btn primary" type="submit">
              Sign in
            </button>

            {err && (
              <div className="notice">
                <b>Error:</b> {err}
              </div>
            )}
            {ok && <p className="small">Signed in. Redirecting…</p>}
          </form>
        </div>
      </div>
    </Layout>
  );
}