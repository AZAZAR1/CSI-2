import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../../components/Layout";
import Seo from "../../../components/Seo";

function PdfPage({ pdf, pageNumber, watermark }) {
  const canvasRef = useRef(null);
  const pageWrapRef = useRef(null);
  const [pageError, setPageError] = useState("");

  useEffect(() => {
    let cancelled = false;
    let renderTask = null;

    const render = async () => {
      try {
        const page = await pdf.getPage(pageNumber);
        if (cancelled || !canvasRef.current || !pageWrapRef.current) return;

        const baseViewport = page.getViewport({ scale: 1 });
        const availableWidth = Math.max(
          280,
          pageWrapRef.current.clientWidth
        );
        const cssScale = availableWidth / baseViewport.width;
        const outputScale = Math.min(window.devicePixelRatio || 1, 2);
        const viewport = page.getViewport({ scale: cssScale * outputScale });
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d", { alpha: false });

        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        canvas.style.width = `${Math.floor(viewport.width / outputScale)}px`;
        canvas.style.height = `${Math.floor(viewport.height / outputScale)}px`;

        renderTask = page.render({ canvasContext: context, viewport });
        await renderTask.promise;
      } catch (error) {
        if (!cancelled && error?.name !== "RenderingCancelledException") {
          setPageError("This page could not be displayed.");
        }
      }
    };

    render();
    return () => {
      cancelled = true;
      if (renderTask) renderTask.cancel();
    };
  }, [pdf, pageNumber]);

  return (
    <div className="portalPdfPage" ref={pageWrapRef}>
      {pageError ? (
        <div className="notice">{pageError}</div>
      ) : (
        <canvas
          ref={canvasRef}
          className="portalPdfCanvas"
          aria-label={`Module page ${pageNumber}`}
        />
      )}
      <div className="portalPdfPageWatermarks" aria-hidden="true">
        {Array.from({ length: 9 }, (_, index) => (
          <span key={index}>{watermark}</span>
        ))}
      </div>
    </div>
  );
}

export default function PortalModule() {
  const router = useRouter();
  const { course, module } = router.query;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [candidate, setCandidate] = useState(null);
  const [pdfDocument, setPdfDocument] = useState(null);
  const [pdfLoading, setPdfLoading] = useState(false);

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
    const blockSaveOrPrint = (event) => {
      if ((event.ctrlKey || event.metaKey) && ["s", "p"].includes(event.key.toLowerCase())) {
        event.preventDefault();
      }
    };
    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("keydown", blockSaveOrPrint);
    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("keydown", blockSaveOrPrint);
    };
  }, []);

  const pdfUrl =
    course && module
      ? `/api/portal/module?course=${encodeURIComponent(
          String(course)
        )}&module=${encodeURIComponent(String(module))}`
      : "";
  const watermark = candidate
    ? `${candidate.candidateId} • ${candidate.name} • LICENSED ACCESS`
    : "";

  useEffect(() => {
    if (!candidate || !pdfUrl) return;
    let cancelled = false;
    let loadingTask = null;

    const loadPdf = async () => {
      setPdfLoading(true);
      try {
        const pdfjs = await import("pdfjs-dist/build/pdf.mjs");
        pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
        loadingTask = pdfjs.getDocument({
          url: pdfUrl,
          withCredentials: true,
          isEvalSupported: false,
        });
        const loadedPdf = await loadingTask.promise;
        if (!cancelled) setPdfDocument(loadedPdf);
      } catch {
        if (!cancelled) setError("The module PDF could not be displayed.");
      } finally {
        if (!cancelled) setPdfLoading(false);
      }
    };

    loadPdf();
    return () => {
      cancelled = true;
      if (loadingTask) loadingTask.destroy();
    };
  }, [candidate, pdfUrl]);

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
              {pdfLoading && (
                <div className="portalPdfLoading">Preparing your module…</div>
              )}
              {pdfDocument && (
                <div
                  className="portalPdfPages"
                  aria-label={`${String(module)} course module`}
                >
                  {Array.from(
                    { length: pdfDocument.numPages },
                    (_, index) => (
                      <PdfPage
                        key={index + 1}
                        pdf={pdfDocument}
                        pageNumber={index + 1}
                        watermark={watermark}
                      />
                    )
                  )}
                </div>
              )}
              <div className="portalPdfAccessLabel" aria-hidden="true">
                {watermark}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
