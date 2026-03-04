// pages/portal/[token].js
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import Link from "next/link";

export default function Portal() {
  const router = useRouter();
  const token = useMemo(() => String(router.query.token || ""), [router.query.token]);

  const [state, setState] = useState({ loading: true, error: "", candidate: null });

  useEffect(() => {
    if (!token) return;

    let cancelled = false;

    async function run() {
      try {
        const r = await fetch(`/api/portal/validate?token=${encodeURIComponent(token)}`);
        const j = await r.json();
        if (cancelled) return;

        if (!j.ok) {
          setState({ loading: false, error: j.error || "Access denied", candidate: null });
          return;
        }

        setState({ loading: false, error: "", candidate: j.candidate });
      } catch (e) {
        if (cancelled) return;
        setState({ loading: false, error: "Unable to validate access", candidate: null });
      }
    }

    run();
    return () => { cancelled = true; };
  }, [token]);

  return (
    <Layout>
      <Seo
        title="Course Portal | ICSI"
        description="Private course portal for ICSI candidates."
        path={`/portal/${token ? token : ""}`}
      />

      <div className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <h1>Candidate Portal</h1>

          {state.loading && (
            <p className="small" style={{ marginTop: 12 }}>Validating access…</p>
          )}

          {!state.loading && state.error && (
            <div className="notice" style={{ marginTop: 14 }}>
              <b>Access denied:</b> {state.error}
            </div>
          )}

          {!state.loading && state.candidate && (
            <>
              <div className="notice" style={{ marginTop: 14 }}>
                <b>{state.candidate.name}</b> · {state.candidate.candidateId}<br />
                Course: <b>{String(state.candidate.course || "").toUpperCase()}</b><br />
                Access valid until: <b>{new Date(state.candidate.expiresAt).toLocaleDateString()}</b>
              </div>

              <div className="card" style={{ marginTop: 16 }}>
                <h3 style={{ marginTop: 0 }}>Modules (view-only)</h3>
                <ul style={{ marginTop: 10, lineHeight: 1.9 }}>
                  {(state.candidate.modules || []).map((m) => (
                    <li key={m.slug}>
                      <Link
                        href={{
                          pathname: `/portal/${token}/${m.slug}`,
                        }}
                      >
                        {m.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                <p className="small" style={{ marginTop: 14 }}>
                  Content is watermarked and monitored. Redistribution is prohibited.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}