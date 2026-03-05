import { useEffect, useMemo, useState } from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

function isoFromTodayPlusMonths(months) {
  const d = new Date();
  d.setMonth(d.getMonth() + Number(months || 0));
  return d.toISOString();
}

function secureTokenHex(bytes = 16) {
  // 16 bytes = 32 hex chars
  const arr = new Uint8Array(bytes);
  if (typeof window !== "undefined" && window.crypto?.getRandomValues) {
    window.crypto.getRandomValues(arr);
  } else {
    // fallback (should not happen in browser)
    for (let i = 0; i < arr.length; i++) arr[i] = Math.floor(Math.random() * 256);
  }
  return Array.from(arr)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default function CandidateAdmin() {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [pw, setPw] = useState("");
  const [authErr, setAuthErr] = useState("");

  // Candidate fields
  const [course, setCourse] = useState("ccs");
  const [candidateId, setCandidateId] = useState("CCS-2026-016");
  const [name, setName] = useState("First Last");
  const [email, setEmail] = useState("candidate@email.com");
  const [months, setMonths] = useState(24);

  // Modules (edit as needed)
  const defaultModules = useMemo(
    () => ({
      ccs: [
        { slug: "module-1", title: "Module 1 — Tobacco Science" },
        { slug: "module-2", title: "Module 2 — Water & RH" },
        { slug: "module-3", title: "Module 3 — RH Dynamics" },
        { slug: "module-4", title: "Module 4 — Diagnostics" },
      ],
      acs: [
        { slug: "module-1", title: "Module 1 — Advanced Diagnostics" },
        { slug: "module-2", title: "Module 2 — Predictive Modeling" },
      ],
      amc: [
        { slug: "module-1", title: "Module 1 — Collector Optimization" },
      ],
    }),
    []
  );

  const [modules, setModules] = useState(defaultModules.ccs);

  // Generated outputs
  const [token, setToken] = useState("");
  const expiresAt = useMemo(() => isoFromTodayPlusMonths(months), [months]);

  const siteBaseUrl = "https://cigarsommelierinstitute.com";

  // Your portal login page (session-cookie architecture)
  const loginUrl = useMemo(() => {
    if (!token) return "";
    // Candidate enters token here, logs in, gets session cookie
    return `${siteBaseUrl}/portal/login`;
  }, [token]);

  // Prefilled email body to send candidate
  const mailtoHref = useMemo(() => {
    const subj = `ICSI Portal Access — ${candidateId}`;
    const body = [
      `Hello ${name},`,
      ``,
      `Your secure portal access is ready.`,
      ``,
      `1) Open: ${siteBaseUrl}/portal/login`,
      `2) Enter this access token: ${token || "(generate token first)"}`,
      ``,
      `Access expires: ${expiresAt}`,
      ``,
      `— ICSI Administration`,
    ].join("\n");

    return `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
      subj
    )}&body=${encodeURIComponent(body)}`;
  }, [candidateId, email, expiresAt, name, token]);

  const candidateJsonObject = useMemo(() => {
    if (!token) return "";
    const obj = {
      [token]: {
        candidateId,
        name,
        email,
        course,
        expiresAt,
        modules,
      },
    };
    return JSON.stringify(obj, null, 2);
  }, [candidateId, course, email, expiresAt, modules, name, token]);

  const mergeHint = useMemo(() => {
    if (!token) return "";
    return `Paste the object into lib/candidates.json at the top level, separated by commas.`;
  }, [token]);

  // Load auth state from sessionStorage
  useEffect(() => {
    const ok = typeof window !== "undefined" && sessionStorage.getItem("icsi_admin_ok") === "1";
    setAuthed(ok);
    setChecking(false);
  }, []);

  // Update modules when course changes
  useEffect(() => {
    setModules(defaultModules[course] || []);
  }, [course, defaultModules]);

  const doAuth = async () => {
    setAuthErr("");
    try {
      const r = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pw }),
      });
      const data = await r.json();
      if (!r.ok || !data?.ok) {
        setAuthErr(data?.error || "Access denied");
        return;
      }
      sessionStorage.setItem("icsi_admin_ok", "1");
      setAuthed(true);
    } catch {
      setAuthErr("Network error");
    }
  };

  const logout = () => {
    sessionStorage.removeItem("icsi_admin_ok");
    setAuthed(false);
    setPw("");
    setToken("");
  };

  const generate = () => {
    setToken(secureTokenHex(16)); // 32-char token
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied.");
    } catch {
      alert("Copy failed. Select text and copy manually.");
    }
  };

  return (
    <Layout>
      <Seo
        title="ICSI Admin — Candidates"
        description="Candidate provisioning panel."
        path="/admin/candidates"
      />

      <div className="section">
        <div className="container" style={{ maxWidth: 980 }}>
          <h1>ICSI Candidate Admin</h1>
          <p className="small" style={{ marginTop: 10 }}>
            Generate a candidate token + JSON entry for <code>lib/candidates.json</code>.
          </p>

          {checking ? (
            <p className="small" style={{ marginTop: 14 }}>
              Loading…
            </p>
          ) : !authed ? (
            <div className="card" style={{ marginTop: 14, maxWidth: 520 }}>
              <h3>Admin login</h3>
              <p className="small" style={{ marginTop: 6 }}>
                Enter the admin password (server-verified).
              </p>

              <div className="form" style={{ marginTop: 12 }}>
                <label>Password</label>
                <input
                  type="password"
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  placeholder="ADMIN_PANEL_PASSWORD"
                />

                {authErr && (
                  <div className="notice">
                    <b>Error:</b> {authErr}
                  </div>
                )}

                <button className="btn primary" type="button" onClick={doAuth}>
                  Unlock Admin
                </button>
              </div>
            </div>
          ) : (
            <>
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
                <button className="btn" type="button" onClick={logout}>
                  Logout
                </button>
              </div>

              <div className="card" style={{ marginTop: 14 }}>
                <h3>Candidate details</h3>

                <div className="form" style={{ marginTop: 10 }}>
                  <div className="row2">
                    <div>
                      <label>Course</label>
                      <input
                        value={course}
                        onChange={(e) => setCourse(e.target.value.toLowerCase())}
                        placeholder="ccs / acs / amc"
                      />
                    </div>
                    <div>
                      <label>Candidate ID</label>
                      <input
                        value={candidateId}
                        onChange={(e) => setCandidateId(e.target.value)}
                        placeholder="CCS-2026-016"
                      />
                    </div>
                  </div>

                  <div className="row2">
                    <div>
                      <label>Name</label>
                      <input value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                      <label>Email</label>
                      <input value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                  </div>

                  <div className="row2">
                    <div>
                      <label>Access duration (months)</label>
                      <input
                        type="number"
                        min="1"
                        max="60"
                        value={months}
                        onChange={(e) => setMonths(e.target.value)}
                      />
                    </div>
                    <div>
                      <label>Expires at (auto)</label>
                      <input value={expiresAt} readOnly />
                    </div>
                  </div>

                  <div>
                    <label>Modules (auto from course — edit JSON later if needed)</label>
                    <textarea
                      value={JSON.stringify(modules, null, 2)}
                      onChange={(e) => {
                        try {
                          const parsed = JSON.parse(e.target.value);
                          if (Array.isArray(parsed)) setModules(parsed);
                        } catch {
                          // ignore partial edits
                        }
                      }}
                    />
                    <div className="small" style={{ marginTop: 8 }}>
                      Ensure slugs match your HTML files in <code>content/{course}/</code> (e.g. <code>module-1.html</code>).
                    </div>
                  </div>

                  <div className="ctaRow">
                    <button className="btn primary" type="button" onClick={generate}>
                      Generate token
                    </button>
                    {token && (
                      <button
                        className="btn"
                        type="button"
                        onClick={() => copyToClipboard(token)}
                      >
                        Copy token
                      </button>
                    )}
                  </div>

                  {token && (
                    <>
                      <hr className="sep" />

                      <h3>Send candidate access</h3>

                      <div className="small" style={{ marginTop: 8 }}>
                        Candidate logs in at: <b>{siteBaseUrl}/portal/login</b>
                        <br />
                        Token: <b>{token}</b>
                      </div>

                      <div className="ctaRow" style={{ marginTop: 12 }}>
                        <a className="btn primary" href={mailtoHref}>
                          Email candidate (mailto)
                        </a>
                        <button
                          className="btn"
                          type="button"
                          onClick={() => copyToClipboard(`${siteBaseUrl}/portal/login`)}
                        >
                          Copy login URL
                        </button>
                      </div>

                      <hr className="sep" />

                      <h3>JSON to paste into lib/candidates.json</h3>
                      <p className="small" style={{ marginTop: 6 }}>
                        {mergeHint}
                      </p>

                      <textarea
                        value={candidateJsonObject}
                        readOnly
                        style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" }}
                      />

                      <div className="ctaRow" style={{ marginTop: 12 }}>
                        <button
                          className="btn primary"
                          type="button"
                          onClick={() => copyToClipboard(candidateJsonObject)}
                        >
                          Copy JSON
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="notice" style={{ marginTop: 14 }}>
                <b>Important:</b> This Phase-1 panel generates entries but does not persist them automatically (no DB).
                You still paste into <code>lib/candidates.json</code>, commit, push.
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}