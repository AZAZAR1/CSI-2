import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import Seo from "../../../components/Seo";
import Link from "next/link";

export default function PortalModule() {
  const router = useRouter();
  const { course, module } = router.query;

  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [candidate, setCandidate] = useState(null);
  const [html, setHtml] = useState("");

  useEffect(() => {
    if (!course || !module) return;

    const run = async () => {
      setLoading(true);
      setErr("");
      setCandidate(null);
      setHtml("");

      try {
        const sRes = await fetch("/api/portal/session", { cache: "no-store" });
        const sData = await sRes.json();

        if (!sRes.ok || !sData?.ok) {
          window.location.href = "/portal/login";
          return;
        }

        const c = sData.candidate;
        setCandidate(c);

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

        const mRes = await fetch(
          `/api/portal/module?course=${encodeURIComponent(
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

        await fetch("/api/portal/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            course: normalizedCourse,
            module: modSlug,
          }),
        });
      } catch {
        setErr("Network error");
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [course, module]);

  useEffect(() => {
    const onContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", onContextMenu);
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
    };
  }, []);

  const title = candidate
    ? `${candidate.course?.toUpperCase?.() || candidate.course} Module | ICSI`
    : "Module | ICSI";

  const watermarkText = candidate
    ? `${candidate.candidateId} • ${candidate.name} • LICENSED ACCESS`
    : "";

  return (
    <Layout>
      <Seo
        title={title}
        description="Secure module."
        path={`/portal/${course || ""}/${module || ""}`}
      />

      <div className="section">
        <div className="container" style={{ maxWidth: 980 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <Link className="btn" href="/portal">
              ← Back to portal
            </Link>

            {candidate && (
              <div className="small" style={{ alignSelf: "center" }}>
                Candidate: <b>{candidate.candidateId}</b>
              </div>
            )}
          </div>

          {loading && (
            <p className="small" style={{ marginTop: 14 }}>
              Loading module…
            </p>
          )}

          {!loading && err && (
            <div className="notice" style={{ marginTop: 14 }}>
              <b>Error:</b> {err}
            </div>
          )}

          {!loading && !err && (
            <div className="portalModuleOuter" style={{ marginTop: 18 }}>
              <div className="card articleProse portalArticleCard">
                {candidate?.candidateId && (
                  <div className="portalDiagonalWatermark" aria-hidden="true">
                    {watermarkText}
                  </div>
                )}

                <div
                  className="portalArticleContent"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}