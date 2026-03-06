// pages/admin/candidates.js
import { useEffect, useMemo, useState } from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

export default function AdminCandidates() {
  const [adminKey, setAdminKey] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [err, setErr] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [form, setForm] = useState({
    token: "",
    candidateId: "",
    name: "",
    email: "",
    course: "ccs",
    expiresAt: "2028-12-31T00:00:00.000Z",
    modulesText:
      "module-1|Module 1 — Tobacco Science\nmodule-2|Module 2 — Water & RH",
  });

  const portalBase = useMemo(() => {
    if (typeof window === "undefined") return "";
    return window.location.origin;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.sessionStorage.getItem("ICSI_ADMIN_KEY") || "";
    if (stored) setAdminKey(stored);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (adminKey) {
      window.sessionStorage.setItem("ICSI_ADMIN_KEY", adminKey);
    } else {
      window.sessionStorage.removeItem("ICSI_ADMIN_KEY");
    }
  }, [adminKey]);

  const resetMessages = () => {
    setErr("");
    setSuccessMsg("");
  };

  const fetchList = async () => {
    resetMessages();
    setLoaded(false);

    try {
      const r = await fetch("/api/portal/admin/inspect", {
        headers: {
          "x-admin-key": adminKey,
        },
        cache: "no-store",
      });

      const d = await r.json().catch(() => ({}));

      if (!r.ok || !d?.ok) {
        throw new Error(d?.error || `Failed to load candidates (${r.status})`);
      }

      setItems(d.candidates || []);
    } catch (e) {
      setErr(e.message || "Error");
      setItems([]);
    } finally {
      setLoaded(true);
    }
  };

  useEffect(() => {
    if (adminKey) {
      fetchList();
    } else {
      setLoaded(true);
      setItems([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminKey]);

  const parseModules = () => {
    const lines = String(form.modulesText || "")
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);

    return lines
      .map((line) => {
        const [slug, ...rest] = line.split("|");
        return {
          slug: String(slug || "").trim(),
          title: String(rest.join("|") || "").trim(),
        };
      })
      .filter((m) => m.slug && m.title);
  };

  const clearForm = () => {
    setForm({
      token: "",
      candidateId: "",
      name: "",
      email: "",
      course: "ccs",
      expiresAt: "2028-12-31T00:00:00.000Z",
      modulesText:
        "module-1|Module 1 — Tobacco Science\nmodule-2|Module 2 — Water & RH",
    });
  };

  const onSave = async () => {
    resetMessages();

    try {
      const payload = {
        token: String(form.token || "").trim() || undefined,
        candidate: {
          candidateId: String(form.candidateId || "").trim(),
          name: String(form.name || "").trim(),
          email: String(form.email || "").trim(),
          course: String(form.course || "").trim().toLowerCase(),
          expiresAt: String(form.expiresAt || "").trim(),
          modules: parseModules(),
        },
      };

      const r = await fetch("/api/portal/admin/upsertCandidate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminKey,
        },
        body: JSON.stringify(payload),
      });

      const d = await r.json().catch(() => ({}));

      if (!r.ok || !d?.ok) {
        throw new Error(d?.error || `Failed to save candidate (${r.status})`);
      }

      setForm((prev) => ({
        ...prev,
        token: d.token || prev.token,
      }));

      setSuccessMsg(
        `Candidate saved. Login URL: ${portalBase}/portal/login | Access Token: ${d.token}`
      );

      await fetchList();
    } catch (e) {
      setErr(e.message || "Error");
    }
  };

  const onDelete = async (token) => {
    resetMessages();

    if (!window.confirm(`Revoke candidate access?\n\nToken: ${token}`)) return;

    try {
      const r = await fetch("/api/portal/admin/deleteCandidate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminKey,
        },
        body: JSON.stringify({ token }),
      });

      const d = await r.json().catch(() => ({}));

      if (!r.ok || !d?.ok) {
        throw new Error(d?.error || `Failed to delete candidate (${r.status})`);
      }

      setSuccessMsg("Candidate access revoked.");
      await fetchList();
    } catch (e) {
      setErr(e.message || "Error");
    }
  };

  const copyText = async (text, label = "Copied") => {
    resetMessages();

    try {
      await navigator.clipboard.writeText(text);
      setSuccessMsg(label);
    } catch {
      setErr("Copy failed");
    }
  };

  const populateFormFromItem = (x) => {
    resetMessages();

    setForm({
      token: x.token || "",
      candidateId: x.candidateId || "",
      name: x.name || "",
      email: x.email || "",
      course: x.course || "ccs",
      expiresAt: x.expiresAt || "2028-12-31T00:00:00.000Z",
      modulesText: Array.isArray(x.modules)
        ? x.modules.map((m) => `${m.slug}|${m.title}`).join("\n")
        : "",
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentLoginUrl = `${portalBase}/portal/login`;
  const currentToken = String(form.token || "").trim();

  return (
    <Layout>
      <Seo
        title="ICSI Admin — Candidates"
        description="Candidate administration panel."
        path="/admin/candidates"
      />

      <div className="section">
        <div className="container" style={{ maxWidth: 980 }}>
          <h1>ICSI Candidate Admin</h1>
          <p className="small" style={{ marginTop: 8 }}>
            Create and manage candidate access. Candidates should use{" "}
            <b>/portal/login</b> and paste their token there.
          </p>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>Admin Access</h3>

            <div style={{ marginTop: 10 }}>
              <label>Admin Key</label>
              <input
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                placeholder="Paste PORTAL_ADMIN_KEY"
                style={{ marginTop: 6 }}
              />
            </div>

            <div className="ctaRow" style={{ marginTop: 12 }}>
              <button
                className="btn primary"
                type="button"
                onClick={fetchList}
                disabled={!adminKey}
              >
                Refresh candidates
              </button>

              <button
                className="btn"
                type="button"
                onClick={() => {
                  setAdminKey("");
                  clearForm();
                  setItems([]);
                  resetMessages();
                }}
              >
                Clear admin session
              </button>
            </div>

            {err && (
              <div className="notice" style={{ marginTop: 12 }}>
                <b>Error:</b> {err}
              </div>
            )}

            {successMsg && (
              <div className="notice" style={{ marginTop: 12 }}>
                {successMsg}
              </div>
            )}
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>Create / Update Candidate</h3>

            <div className="row2" style={{ marginTop: 10 }}>
              <div>
                <label>Token (leave blank to auto-generate)</label>
                <input
                  value={form.token}
                  onChange={(e) =>
                    setForm({ ...form, token: e.target.value })
                  }
                  placeholder="Auto-generated if blank"
                />
              </div>

              <div>
                <label>Candidate ID</label>
                <input
                  value={form.candidateId}
                  onChange={(e) =>
                    setForm({ ...form, candidateId: e.target.value })
                  }
                  placeholder="CCS-2026-016"
                />
              </div>
            </div>

            <div className="row2" style={{ marginTop: 10 }}>
              <div>
                <label>Name</label>
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Candidate full name"
                />
              </div>

              <div>
                <label>Email</label>
                <input
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="candidate@email.com"
                />
              </div>
            </div>

            <div className="row2" style={{ marginTop: 10 }}>
              <div>
                <label>Course</label>
                <input
                  value={form.course}
                  onChange={(e) =>
                    setForm({ ...form, course: e.target.value.toLowerCase() })
                  }
                  placeholder="ccs / acs / amc"
                />
                <div className="small" style={{ marginTop: 6 }}>
                  Must match your portal module folder, e.g. <b>ccs</b>.
                </div>
              </div>

              <div>
                <label>Expires At (ISO)</label>
                <input
                  value={form.expiresAt}
                  onChange={(e) =>
                    setForm({ ...form, expiresAt: e.target.value })
                  }
                  placeholder="2028-12-31T00:00:00.000Z"
                />
              </div>
            </div>

            <div style={{ marginTop: 10 }}>
              <label>Modules (one per line: slug|Title)</label>
              <textarea
                value={form.modulesText}
                onChange={(e) =>
                  setForm({ ...form, modulesText: e.target.value })
                }
                style={{ marginTop: 6 }}
              />
              <div className="small" style={{ marginTop: 6 }}>
                Example: <code>module-1|Module 1 — Tobacco Science</code>
              </div>
            </div>

            <div className="ctaRow" style={{ marginTop: 14 }}>
              <button
                className="btn primary"
                type="button"
                onClick={onSave}
                disabled={!adminKey}
              >
                Save candidate
              </button>

              <button
                className="btn"
                type="button"
                onClick={clearForm}
              >
                Clear form
              </button>
            </div>

            <hr className="sep" />

            <h3>Candidate Access Details</h3>

            <div className="small" style={{ marginTop: 10, lineHeight: 1.8 }}>
              <div>
                <b>Login URL:</b> {currentLoginUrl}
              </div>
              <div>
                <b>Access Token:</b>{" "}
                {currentToken ? currentToken : "Save candidate to generate token"}
              </div>
            </div>

            <div className="ctaRow" style={{ marginTop: 12 }}>
              <button
                className="btn"
                type="button"
                onClick={() => copyText(currentLoginUrl, "Login URL copied")}
              >
                Copy login URL
              </button>

              <button
                className="btn"
                type="button"
                disabled={!currentToken}
                onClick={() => copyText(currentToken, "Access token copied")}
              >
                Copy token
              </button>

              <button
                className="btn"
                type="button"
                disabled={!form.email || !currentToken}
                onClick={() => {
                  const subject = encodeURIComponent(
                    "ICSI Candidate Portal Access"
                  );
                  const body = encodeURIComponent(
                    `Hello ${form.name || ""},

Your access to the ICSI Candidate Portal is now active.

Login URL:
${currentLoginUrl}

Access Token:
${currentToken}

Please keep this token confidential.

Best regards,
ICSI`
                  );

                  window.location.href = `mailto:${encodeURIComponent(
                    form.email
                  )}?subject=${subject}&body=${body}`;
                }}
              >
                Email access details
              </button>
            </div>
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>Candidate List</h3>

            {!loaded && <p className="small">Loading…</p>}

            {loaded && items.length === 0 && (
              <p className="small" style={{ marginTop: 10 }}>
                No candidates found.
              </p>
            )}

            {loaded && items.length > 0 && (
              <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
                {items.map((x) => (
                  <div
                    key={x.token}
                    style={{
                      border: "1px solid rgba(17,17,20,.10)",
                      borderRadius: 14,
                      padding: 12,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 12,
                        flexWrap: "wrap",
                      }}
                    >
                      <div className="small" style={{ lineHeight: 1.8 }}>
                        <div>
                          <b>{x.candidateId}</b> — {x.name}
                        </div>
                        <div>
                          Course: <b>{String(x.course || "").toUpperCase()}</b>
                        </div>
                        <div>
                          Email: {x.email || "—"}
                        </div>
                        <div>
                          Expires: <b>{x.expiresAt || "—"}</b>{" "}
                          {x.expired ? "— expired" : ""}
                        </div>
                        <div>
                          Token: <b>{x.token}</b>
                        </div>
                        <div>
                          Login: <b>{portalBase}/portal/login</b>
                        </div>
                      </div>

                      <div className="ctaRow" style={{ marginTop: 0 }}>
                        <button
                          className="btn"
                          type="button"
                          onClick={() => populateFormFromItem(x)}
                        >
                          Edit
                        </button>

                        <button
                          className="btn"
                          type="button"
                          onClick={() =>
                            copyText(
                              `${portalBase}/portal/login\n\nToken: ${x.token}`,
                              "Login details copied"
                            )
                          }
                        >
                          Copy access
                        </button>

                        <button
                          className="btn"
                          type="button"
                          onClick={() => onDelete(x.token)}
                        >
                          Revoke
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}