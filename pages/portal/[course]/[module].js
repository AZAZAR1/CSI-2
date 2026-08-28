import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../../components/Layout";
import Seo from "../../../components/Seo";

const MIN_ZOOM = 0.75;
const MAX_ZOOM = 2;
const ZOOM_STEP = 0.25;

export default function PortalModule() {
  const router = useRouter();
  const { course, module } = router.query;
  const canvasRef = useRef(null);
  const readerRef = useRef(null);
  const viewerRef = useRef(null);
  const pdfRef = useRef(null);
  const renderTaskRef = useRef(null);
  const [sessionLoading, setSessionLoading] = useState(true);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [error, setError] = useState("");
  const [candidate, setCandidate] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [viewportVersion, setViewportVersion] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const normalizedCourse = course ? String(course).toLowerCase() : "";
  const moduleSlug = module ? String(module) : "";
  const pdfUrl = normalizedCourse && moduleSlug
    ? `/api/portal/module?course=${encodeURIComponent(normalizedCourse)}&module=${encodeURIComponent(moduleSlug)}`
    : "";
  const watermark = candidate
    ? `${candidate.candidateId} • ${candidate.name} • LICENSED ACCESS`
    : "";

  useEffect(() => {
    if (!normalizedCourse || !moduleSlug) return;
    let cancelled = false;

    async function loadSession() {
      setSessionLoading(true);
      setError("");
      try {
        const response = await fetch("/api/portal/session", {
          cache: "no-store",
          credentials: "same-origin",
        });
        const data = await response.json();
        if (!response.ok || !data?.ok) {
          window.location.assign("/portal/login");
          return;
        }

        const currentCandidate = data.candidate;
        const allowed =
          normalizedCourse === String(currentCandidate.course || "").toLowerCase() &&
          Array.isArray(currentCandidate.modules) &&
          currentCandidate.modules.some(
            (item) => String(item.slug || item.path) === moduleSlug
          );
        if (!allowed) throw new Error("Module not found or not assigned.");
        if (!cancelled) setCandidate(currentCandidate);

        fetch("/api/portal/track", {
          method: "POST",
          credentials: "same-origin",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ course: normalizedCourse, module: moduleSlug }),
        }).catch(() => {});
      } catch (loadError) {
        if (!cancelled) setError(loadError.message || "Network error");
      } finally {
        if (!cancelled) setSessionLoading(false);
      }
    }

    loadSession();
    return () => { cancelled = true; };
  }, [normalizedCourse, moduleSlug]);

  useEffect(() => {
    if (!candidate || !pdfUrl) return;
    let cancelled = false;
    let loadingTask;

    async function loadPdf() {
      setPdfLoading(true);
      setError("");
      setPageNumber(1);
      setPageCount(0);
      setZoom(1);
      try {
        const response = await fetch(pdfUrl, {
          cache: "no-store",
          credentials: "same-origin",
        });
        if (!response.ok) {
          let message = "Unable to load this module.";
          try {
            const data = await response.json();
            if (data?.error) message = data.error;
          } catch {}
          throw new Error(message);
        }

        const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
        pdfjs.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.mjs";
        loadingTask = pdfjs.getDocument({
          data: new Uint8Array(await response.arrayBuffer()),
          isEvalSupported: false,
          useSystemFonts: true,
        });
        const pdf = await loadingTask.promise;
        if (cancelled) {
          await pdf.destroy();
          return;
        }
        pdfRef.current = pdf;
        setPageCount(pdf.numPages);
      } catch (pdfError) {
        if (!cancelled) setError(pdfError.message || "Unable to load this module.");
      } finally {
        if (!cancelled) setPdfLoading(false);
      }
    }

    loadPdf();
    return () => {
      cancelled = true;
      renderTaskRef.current?.cancel();
      loadingTask?.destroy();
      pdfRef.current?.destroy();
      pdfRef.current = null;
    };
  }, [candidate, pdfUrl]);

  useEffect(() => {
    if (!pageCount || !pdfRef.current || !canvasRef.current) return;
    let cancelled = false;

    async function renderPage() {
      setPageLoading(true);
      try {
        renderTaskRef.current?.cancel();
        const page = await pdfRef.current.getPage(pageNumber);
        if (cancelled) return;
        const base = page.getViewport({ scale: 1 });
        const availableWidth = Math.max(280, (viewerRef.current?.clientWidth || 900) - 48);
        const fitScale = Math.min(availableWidth / base.width, 2);
        const viewport = page.getViewport({ scale: fitScale * zoom });
        const outputScale = Math.min(window.devicePixelRatio || 1, 2);
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d", { alpha: false });
        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;
        const task = page.render({
          canvasContext: context,
          viewport,
          transform: outputScale === 1 ? null : [outputScale, 0, 0, outputScale, 0, 0],
          background: "#ffffff",
        });
        renderTaskRef.current = task;
        await task.promise;
      } catch (renderError) {
        if (renderError?.name !== "RenderingCancelledException" && !cancelled) {
          setError("This page could not be rendered.");
        }
      } finally {
        if (!cancelled) setPageLoading(false);
      }
    }

    renderPage();
    return () => {
      cancelled = true;
      renderTaskRef.current?.cancel();
    };
  }, [pageCount, pageNumber, zoom, viewportVersion]);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer || typeof ResizeObserver === "undefined") return;
    let timer;
    const observer = new ResizeObserver(() => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setViewportVersion((value) => value + 1), 150);
    });
    observer.observe(viewer);
    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, [candidate]);

  useEffect(() => {
    const blockKeys = (event) => {
      const key = event.key.toLowerCase();
      if ((event.ctrlKey || event.metaKey) && ["p", "s", "u"].includes(key)) {
        event.preventDefault();
      }
    };
    const fullscreenChanged = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("keydown", blockKeys);
    document.addEventListener("fullscreenchange", fullscreenChanged);
    return () => {
      document.removeEventListener("keydown", blockKeys);
      document.removeEventListener("fullscreenchange", fullscreenChanged);
    };
  }, []);

  const changePage = useCallback((nextPage) => {
    setPageNumber(Math.min(pageCount, Math.max(1, nextPage)));
    viewerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [pageCount]);

  const changeZoom = useCallback((nextZoom) => {
    setZoom(Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, nextZoom)));
  }, []);

  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await readerRef.current?.requestFullscreen();
    } catch {
      setError("Full-screen mode is not available in this browser.");
    }
  }

  const busy = sessionLoading || pdfLoading;

  return (
    <Layout>
      <Seo
        title="CCS Module | ICSI"
        description="Secure CCS course module."
        path={`/portal/${course || ""}/${module || ""}`}
      />
      <div className="section portalPdfSection">
        <div className="portalPdfContainer">
          <div className="portalModuleHeader">
            <Link className="btn" href="/portal">← Back to portal</Link>
            {candidate && (
              <div className="small">
                Candidate: <b>{candidate.candidateId}</b> • Language:{" "}
                <b>{String(candidate.language || "en").toUpperCase()}</b>
              </div>
            )}
          </div>

          {busy && <p className="small">Loading protected module…</p>}
          {!busy && error && <div className="notice"><b>Error:</b> {error}</div>}

          {!sessionLoading && candidate && !error && (
            <section
              ref={readerRef}
              className="portalPdfReader"
              aria-label="Protected course module reader"
              onContextMenu={(event) => event.preventDefault()}
            >
              <div className="portalPdfToolbar">
                <div className="portalPdfToolbarGroup">
                  <button className="portalPdfControl" type="button"
                    onClick={() => changePage(pageNumber - 1)}
                    disabled={pageNumber <= 1 || pageLoading}>← Previous</button>
                  <span className="portalPdfPageStatus" aria-live="polite">
                    Page <b>{pageNumber}</b> of <b>{pageCount || "—"}</b>
                  </span>
                  <button className="portalPdfControl" type="button"
                    onClick={() => changePage(pageNumber + 1)}
                    disabled={pageNumber >= pageCount || pageLoading}>Next →</button>
                </div>
                <div className="portalPdfToolbarGroup">
                  <button className="portalPdfIconControl" type="button"
                    onClick={() => changeZoom(zoom - ZOOM_STEP)}
                    disabled={zoom <= MIN_ZOOM || pageLoading} aria-label="Zoom out">−</button>
                  <span className="portalPdfZoomStatus">{Math.round(zoom * 100)}%</span>
                  <button className="portalPdfIconControl" type="button"
                    onClick={() => changeZoom(zoom + ZOOM_STEP)}
                    disabled={zoom >= MAX_ZOOM || pageLoading} aria-label="Zoom in">+</button>
                  <button className="portalPdfControl" type="button" onClick={toggleFullscreen}>
                    {isFullscreen ? "Exit full screen" : "Full screen"}
                  </button>
                </div>
              </div>

              <div className="portalPdfViewport" ref={viewerRef}>
                {pageLoading && <div className="portalPdfPageLoading">Rendering page…</div>}
                <div className="portalPdfCanvasWrap">
                  <canvas ref={canvasRef} className="portalPdfCanvas"
                    aria-label={`Page ${pageNumber} of ${pageCount}`} />
                  <div className="portalPdfWatermarks" aria-hidden="true">
                    {Array.from({ length: 9 }, (_, index) => <span key={index}>{watermark}</span>)}
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </Layout>
  );
}
