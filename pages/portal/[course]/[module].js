import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../../components/Layout";
import Seo from "../../../components/Seo";

export default function PortalModule() {
  const router = useRouter();
  const { course, module } = router.query;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [candidate, setCandidate] = useState(null);

  useEffect(() => {
    if (!course || !module) return;

    const load = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch("/api/portal/session", { cache: "no-store" });
        const data = await response.json();
        if (!response.ok || !data?.ok) {
          window.location.href = "/portal/login";
          return;
        }

        const currentCandidate = data.candidate;
        const normalizedCourse = String(course).toLowerCase();
        const moduleSlug = String(module);
        const allowed =
          normalizedCourse === String(currentCandidate.course || "").toLowerCase() &&
          Array.isArray(currentCandidate.modules) &&
          currentCandidate.modules.some(
            (item) => (item.slug || item.path) === moduleSlug
          );

        if (!allowed) {
          setError("Module not found or not assigned.");
          return;
        }

        setCandidate(currentCandidate);
        await fetch("/api/portal/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ course: normalizedCourse, module: moduleSlug }),
        });
      } catch {
        setError("Network error");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [course, module]);

  useEffect(() => {
    const blockContextMenu = (event) => event.preventDefault();
    document.addEventListener("contextmenu", blockContextMenu);
    return () => document.removeEventListener("contextmenu", blockContextMenu);
  }, []);

  const pdfUrl =
    course && module
      ? `/api/portal/module?course=${encodeURIComponent(
          String(course)
        )}&module=${encodeURIComponent(String(module))}#toolbar=0&navpanes=0`
      : "";
  const watermark = candidate
    ? `${candidate.candidateId} • ${candidate.name} • LICENSED ACCESS`
    : "";

  return (
    <Layout>
      <Seo
        title="CCS Module | ICSI"
        description="Secure CCS course module."
        path={`/portal/${course || ""}/${module || ""}`}
      />
      <div className="section">
        <div className="container portalPdfContainer">
          <div className="portalModuleHeader">
            <Link className="btn" href="/portal">
              ← Back to portal
            </Link>
            {candidate && (
              <div className="small">
                Candidate: <b>{candidate.candidateId}</b> • Language:{" "}
                <b>{String(candidate.language || "en").toUpperCase()}</b>
              </div>
            )}
          </div>

          {loading && <p className="small">Loading module…</p>}
          {!loading && error && (
            <div className="notice">
              <b>Error:</b> {error}
            </div>
          )}
          {!loading && !error && candidate && (
            <div className="portalPdfShell">
              <iframe
                className="portalPdfFrame"
                src={pdfUrl}
                title={`${String(module)} course module`}
              />
              <div className="portalPdfWatermark" aria-hidden="true">
                {watermark}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
