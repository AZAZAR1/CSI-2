import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import Link from "next/link";

export default function PortalHome() {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    const run = async () => {
      setLoading(true);
      const r = await fetch("/api/portal/session", { cache: "no-store" });
      const j = await r.json();
      if (!r.ok || !j.ok) {
        window.location.href = "/portal/login";
        return;
      }
      setData(j.candidate);
      setLoading(false);
    };
    run();
  }, []);

  const logout = async () => {
    await fetch("/api/portal/logout");
    window.location.href = "/portal/login";
  };

  return (
    <Layout>
      <Seo title="Portal | ICSI" description="Candidate portal dashboard." path="/portal" />

      <div className="section">
        <div className="container" style={{ maxWidth: 980 }}>
          {loading && <p className="small">Loading…</p>}
          {!loading && err && <div className="notice">{err}</div>}

          {!loading && data && (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                <div>
                  <h1 style={{ marginBottom: 6 }}>Welcome</h1>
                  <p className="small">
                    Candidate: <b>{data.candidateId}</b> • Course: <b>{String(data.course).toUpperCase()}</b>
                  </p>
                </div>

                <button className="btn" onClick={logout}>
                  Sign out
                </button>
              </div>

              <div className="card" style={{ marginTop: 18 }}>
                <h3>Modules</h3>
                <ul style={{ lineHeight: 1.9 }}>
                  {data.modules.map((m) => (
                    <li key={m.slug}>
                      <Link href={`/portal/${data.course}/${m.slug}`}>
                        {m.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: 18 }}>
                <a className="btn primary" href="/api/portal/certificate" target="_blank" rel="noreferrer">
                  Generate Certificate (PDF)
                </a>
                <p className="small" style={{ marginTop: 10 }}>
                  Certificates include a public verification link.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}