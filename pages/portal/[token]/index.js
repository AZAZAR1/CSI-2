import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import Seo from "../../../components/Seo";
import Link from "next/link";

export default function PortalHome() {
  const router = useRouter();
  const { token } = router.query;

  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [candidate, setCandidate] = useState(null);

  const portalBasePath = useMemo(() => {
    if (!token) return "/portal";
    return `/portal/${token}`;
  }, [token]);

  useEffect(() => {
    if (!token) return;

    const run = async () => {
      setLoading(true);
      setErr("");
      setCandidate(null);

      try {
        const vRes = await fetch(
          `/api/portal/validate?token=${encodeURIComponent(String(token))}`,
          { cache: "no-store" }
        );
        const vData = await vRes.json();

        if (!vRes.ok || !vData?.ok) {
          setErr(vData?.error || "Access denied");
          setLoading(false);
          return;
        }

        setCandidate(vData.candidate || null);
      } catch (e) {
        setErr("Network error");
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [token]);

  const title = candidate
    ? `Candidate Portal | ${candidate.candidateId} | ICSI`
    : "Candidate Portal | ICSI";

  return (
    <Layout>
      <Seo title={title} description="Secure candidate portal." path={portalBasePath} />

      <div className="section">
        <div className="container" style={{ maxWidth: 980 }}>
          <h1 style={{ marginBottom: 8 }}>Candidate Portal</h1>

          {loading && <p className="small">Loading…</p>}

          {!loading && err && (
            <div className="notice" style={{ marginTop: 14 }}>
              <b>Error:</b> {err}
            </div>
          )}

          {!loading && !err && candidate && (
            <>
              <div className="notice" style={{ marginTop: 14 }}>
                <div>
                  Candidate: <b>{candidate.candidateId}</b> — {candidate.name}
                </div>
                <div className="small" style={{ marginTop: 6 }}>
                  Course: <b>{String(candidate.course || "").toUpperCase()}</b> · Access expires:{" "}
                  <b>{new Date(candidate.expiresAt).toLocaleDateString()}</b>
                </div>
              </div>

              <div style={{ marginTop: 18 }}>
                <h3 style={{ marginBottom: 10 }}>Modules</h3>

                <div className="card" style={{ padding: 16 }}>
                  {Array.isArray(candidate.modules) && candidate.modules.length > 0 ? (
                    <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
                      {candidate.modules.map((m) => {
                        const slug = m?.slug || m?.path;
                        if (!slug) return null;
                        return (
                          <li key={slug}>
                            <Link
                              href={`/portal/${token}/${candidate.course}/${slug}`}
                              style={{ fontWeight: 600, borderBottom: "1px solid currentColor", paddingBottom: 1 }}
                            >
                              {m?.title || slug}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className="small" style={{ margin: 0 }}>
                      No modules assigned yet.
                    </p>
                  )}
                </div>

                <div style={{ marginTop: 14 }}>
                  <Link className="btn" href="/contact">
                    Need help? Contact ICSI
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}