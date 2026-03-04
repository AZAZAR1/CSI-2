import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import Seo from "../../../components/Seo";
import Link from "next/link";

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default function PortalIndex() {
  const router = useRouter();
  const { token } = router.query;

  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [candidate, setCandidate] = useState(null);

  useEffect(() => {
    if (!token) return;

    const run = async () => {
      setLoading(true);
      setErr("");

      try {
        const res = await fetch(`/api/portal/validate?token=${encodeURIComponent(token)}`, {
          cache: "no-store",
        });

        const data = await res.json();

        if (!res.ok || !data?.ok) {
          setErr(data?.error || "Access denied");
          setCandidate(null);
          setLoading(false);
          return;
        }

        setCandidate(data.candidate);
      } catch (e) {
        setErr("Network error");
        setCandidate(null);
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [token]);

  const title = "Candidate Portal | ICSI";
  const description = "Secure course portal.";

  return (
    <Layout>
      <Seo title={title} description={description} path={`/portal/${token || ""}`} />

      <div className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <h1 style={{ marginBottom: 8 }}>Candidate Portal</h1>

          {loading && <p className="small">Loading…</p>}

          {!loading && err && (
            <div className="notice" style={{ marginTop: 12 }}>
              <b>Access error:</b> {err}
            </div>
          )}

          {!loading && candidate && (
            <>
              <div className="notice" style={{ marginTop: 12 }}>
                <div style={{ display: "grid", gap: 6 }}>
                  <div>
                    <b>Candidate:</b> {candidate.name}{" "}
                    <span style={{ color: "rgba(18,18,20,.70)" }}>
                      ({candidate.candidateId})
                    </span>
                  </div>
                  <div>
                    <b>Course:</b> {candidate.course?.toUpperCase?.() || candidate.course}
                  </div>
                  <div>
                    <b>Access until:</b> {formatDate(candidate.expiresAt)}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 22 }}>
                <h2 style={{ marginBottom: 10 }}>Modules</h2>

                {Array.isArray(candidate.modules) && candidate.modules.length > 0 ? (
                  <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
                    {candidate.modules.map((m) => (
                      <li key={m.slug || m.path || m.title}>
                        <Link href={`/portal/${token}/${candidate.course}/${m.slug || m.path}`}>
                          {m.title || m.slug || m.path}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="small">No modules assigned yet.</p>
                )}
              </div>

              <div className="small" style={{ marginTop: 22 }}>
                This portal link is personal and should not be shared.
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}