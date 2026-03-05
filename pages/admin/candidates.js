// pages/admin/candidates.js
import { useEffect, useMemo, useState } from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

export default function AdminCandidates() {
  const [adminKey, setAdminKey] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [err, setErr] = useState("");

  const [form, setForm] = useState({
    token: "",
    candidateId: "",
    name: "",
    email: "",
    course: "ccs",
    expiresAt: "2028-12-31T00:00:00.000Z",
    modulesText: "module-1|Module 1 — Tobacco Science\nmodule-2|Module 2 — Water & RH",
  });

  // Persist admin key locally (browser only)
  useEffect(() => {
    const k = window.sessionStorage.getItem("ICSI_ADMIN_KEY") || "";
    if (k) setAdminKey(k);
  }, []);
  useEffect(() => {
    if (adminKey) window.sessionStorage.setItem("ICSI_ADMIN_KEY", adminKey);
  }, [adminKey]);

  const portalBase = useMemo(() => {
    if (typeof window === "undefined") return "";
    return window.location.origin;
  }, []);

  const fetchList = async () => {
    setErr("");
    setLoaded(false);
    try {
      const r = await fetch("/api/portal/admin/listCandidates", {
        headers: { "x-admin-key": adminKey },
        cache: "no-store",
      });
      const d = await r.json();
      if (!r.ok || !d?.ok) throw new Error(d?.error || "Failed");
      setItems(d.candidates || []);
    } catch (e) {
      setErr(e.message || "Error");
    } finally {
      setLoaded(true);
    }
  };

  useEffect(() => {
    if (adminKey) fetchList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminKey]);

  const parseModules = () => {
    // lines: slug|Title
    const lines = String(form.modulesText || "")
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);

    return lines
      .map((line) => {
        const [slug, ...rest] = line.split("|");
        return { slug: (slug || "").trim(), title: rest.join("|").trim() };
      })
      .filter((m) => m.slug && m.title);
  };

  const onSave = async () => {
    setErr("");
    try {
      const payload = {
        token: form.token.trim() || undefined,
        candidate: {
          candidateId: form.candidateId.trim(),
          name: form.name.trim(),
          email: form.email.trim(),
          course: form.course.trim().toLowerCase(),
          expiresAt: form.expiresAt.trim(),
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
      const d = await r.json();
      if (!r.ok || !d?.ok) throw new Error(d?.error || "Save failed");

      // refresh list + auto-fill token if new
      setForm((f) => ({ ...f, token: d.token }));
      await fetchList();
      alert(`Saved. Portal URL:\n${portalBase}/portal/${d.token}`);
    } catch (e) {
      setErr(e.message || "Error");
    }
  };

  const onDelete = async (token) => {
    if (!confirm(`Delete candidate token?\n${token}`)) return;
    setErr("");
    try {
      const r = await fetch("/api/portal/admin/deleteCandidate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminKey,
        },
        body: JSON.stringify({ token }),
      });
      const d = await r.json();
      if (!r.ok || !d?.ok) throw new Error(d?.error || "Delete failed");
      await fetchList();
    } catch (e) {
      setErr(e.message || "Error");
    }
  };

  return (
    <Layout>
      <Seo title="ICSI Admin — Candidates" description="Candidate admin panel." path="/admin/candidates" />

      <div className="section">
        <div className="container" style={{ maxWidth: 980 }}>
          <h1>ICSI Candidate Admin</h1>
          <p className="small">
            Manage candidates stored in Vercel Blob. Create/edit candidates, generate portal links, and revoke access.
          </p>

          <div className="card" style={{ marginTop: 16 }}>
            <label>Admin Key</label>
            <input
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
              placeholder="Paste PORTAL_ADMIN_KEY"
              style={{ marginTop: 6 }}
            />
            <div className="small" style={{ marginTop: 8 }}>
              This is stored only in your browser session (sessionStorage).
            </div>

            <div className="ctaRow" style={{ marginTop: 12 }}>
              <button className="btn primary" onClick={fetchList} disabled={!adminKey}>
                Refresh list
              </button>
            </div>

            {err && (
              <div className="notice" style={{ marginTop: 12 }}>
                <b>Error:</b> {err}
              </div>
            )}
          </div>

          {/* Create / edit */}
          <div className="card" style={{ marginTop: 16 }}>
            <h3>Create / Update Candidate</h3>

            <div className="row2" style={{ marginTop: 10 }}>
              <div>
                <label>Token (leave blank to auto-generate)</label>
                <input value={form.token} onChange={(e) => setForm({ ...form, token: e.target.value })} />
              </div>

              <div>
                <label>Candidate ID</label>
                <input value={form.candidateId} onChange={(e) => setForm({ ...form, candidateId: e.target.value })} />
              </div>
            </div>

            <div className="row2" style={{ marginTop: 10 }}>
              <div>
                <label>Name</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>

              <div>
                <label>Email</label>
                <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
            </div>

            <div className="row2" style={{ marginTop: 10 }}>
              <div>
                <label>Course</label>
                <input value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })} />
                <div className="small">Use: ccs / acs / amc (must match your portal routing)</div>
              </div>

              <div>
                <label>Expires At (ISO)</label>
                <input value={form.expiresAt} onChange={(e) => setForm({ ...form, expiresAt: e.target.value })} />
              </div>
            </div>

            <div style={{ marginTop: 10 }}>
              <label>Modules (one per line): slug|Title</label>
              <textarea
                value={form.modulesText}
                onChange={(e) => setForm({ ...form, modulesText: e.target.value })}
                style={{ marginTop: 6 }}
              />
            </div>

            <div className="ctaRow" style={{ marginTop: 12 }}>
              <button className="btn primary" onClick={onSave} disabled={!adminKey}>
                Save candidate
              </button>
            </div>

            {form.token && (
              <div className="small" style={{ marginTop: 10 }}>
                Portal URL:{" "}
                <b>
                  {portalBase}/portal/{form.token}
                </b>
              </div>
            )}
          </div>

          {/* List */}
          <div className="card" style={{ marginTop: 16 }}>
            <h3>Candidate List</h3>
            {!loaded && <p className="small">Loading…</p>}

            {loaded && items.length === 0 && <p className="small">No candidates yet.</p>}

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
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
                      <div className="small">
                        <b>{x.candidateId}</b> — {x.name} ({x.course})
                        <div>
                          Token: <b>{x.token}</b>
                        </div>
                        <div>
                          Expires: <b>{x.expiresAt}</b> {x.expired ? "— ❗expired" : ""}
                        </div>
                        <div>
                          Link:{" "}
                          <b>
                            {portalBase}/portal/{x.token}
                          </b>
                        </div>
                      </div>

                      <div className="ctaRow" style={{ marginTop: 0 }}>
                        <button
                          className="btn"
                          onClick={() => {
                            setForm({
                              token: x.token,
                              candidateId: x.candidateId || "",
                              name: x.name || "",
                              email: x.email || "",
                              course: x.course || "ccs",
                              expiresAt: x.expiresAt || "",
                              modulesText: (x.modules || [])
                                .map((m) => `${m.slug}|${m.title}`)
                                .join("\n"),
                            });
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          Edit
                        </button>

                        <button className="btn" onClick={() => onDelete(x.token)}>
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