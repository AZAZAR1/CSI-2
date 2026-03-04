import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../../../components/Layout";
import Seo from "../../../../components/Seo";
import Link from "next/link";

export default function PortalModule() {
  const router = useRouter();
  const { token, course, module } = router.query;

  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [candidate, setCandidate] = useState(null);
  const [html, setHtml] = useState("");

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
      setHtml("");

      try {
        // 1) validate token + get modules list
        const vRes = await fetch(`/api/portal/validate?token=${encodeURIComponent(token)}`, {
          cache: "no-store",
        });
        const vData = await vRes.json();

        if (!vRes.ok || !vData?.ok) {
          setErr(vData?.error || "Access denied");
          setLoading(false);
          return;
        }

        const c = vData.candidate;
        setCandidate(c);

        // 2) check entitlement: course match + module exists
        const normalizedCourse = String(course || "").toLowerCase();
        const candidateCourse = String(c.course || "").toLowerCase();
        if (normalizedCourse !== candidateCourse) {
          setErr("Not authorized for this course.");
          setLoading(false);
          return;
        }

        const modSlug = String(module || "");
        const allowed = Array.isArray(c.modules)
          ? c.modules.some((m) => (m.slug || m.path) === modSlug)
          : false;

        if (!allowed) {
          setErr("Module not found or not assigned.");
          setLoading(false);
          return;
        }

        // 3) fetch module HTML (you will add this API route next)
        const mRes = await fetch(
          `/api/portal/module?token=${encodeURIComponent(token)}&course=${encodeURIComponent(
            normalizedCourse
          )}&module=${encodeURIComponent(modSlug)}`,
          { cache: "no-store" }
        );

        const mData = await mRes.json();
        if (!mRes.ok || !mData?.ok) {
          setErr(mData?.error || "Could not load module.");
          setLoading(false);
          return;
        }

        setHtml(mData.html || "");
      } catch (e) {
        setErr("Network error");
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [token, course, module]);

  // Lightweight “discouragement” controls (cannot truly prevent screenshots)
  useEffect(() => {
    const onContextMenu = (e) => e.preventDefault();
    const onKeyDown = (e) => {
      const k = (e.key || "").toLowerCase();
      const isMac = /mac/i.test(navigator.platform);

      // Block print and save shortcuts (discouragement only)
      if ((isMac && e.metaKey && k === "p") || (!isMac && e.ctrlKey && k === "p")) {
        e.preventDefault();
      }
      if ((isMac && e.metaKey && k === "s") || (!isMac && e.ctrlKey && k === "s")) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const title = candidate
    ? `${candidate.course?.toUpperCase?.() || candidate.course} Module | ICSI`
    : "Module | ICSI";

  return (
    <Layout>
      <Seo title={title} description="Secure module." path={`/portal/${token || ""}/${course || ""}/${module || ""}`} />

      <div className="section">
        <div className="container" style={{ maxWidth: 980 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn" href={portalBasePath}>
              ← Back to portal
            </Link>

            {candidate && (
              <div className="small" style={{ alignSelf: "center" }}>
                Candidate: <b>{candidate.candidateId}</b>
              </div>
            )}
          </div>

          {loading && <p className="small" style={{ marginTop: 14 }}>Loading module…</p>}

          {!loading && err && (
            <div className="notice" style={{ marginTop: 14 }}>
              <b>Error:</b> {err}
            </div>
          )}

          {!loading && !err && (
            <div style={{ position: "relative", marginTop: 18 }}>
              {/* Watermark overlay */}
              {candidate?.candidateId && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    opacity: 0.08,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: "rotate(-18deg)",
                    fontSize: 44,
                    fontWeight: 700,
                    letterSpacing: 2,
                    textAlign: "center",
                  }}
                >
                  {candidate.candidateId}
                </div>
              )}

              {/* Module content */}
              <article
                className="card articleProse"
                style={{ position: "relative" }}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}