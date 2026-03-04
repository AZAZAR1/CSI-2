// pages/portal/[token]/[slug].js
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import Seo from "../../../components/Seo";
import Link from "next/link";
import { useMemo } from "react";

export default function ModuleViewer() {
  const router = useRouter();
  const token = useMemo(() => String(router.query.token || ""), [router.query.token]);
  const slug = useMemo(() => String(router.query.slug || ""), [router.query.slug]);

  const src = token && slug
    ? `/api/portal/module?token=${encodeURIComponent(token)}&slug=${encodeURIComponent(slug)}`
    : "";

  return (
    <Layout>
      <Seo
        title="Module Viewer | ICSI"
        description="Private module viewer."
        path={`/portal/${token}/${slug}`}
      />

      <div className="section">
        <div className="container" style={{ maxWidth: 1100 }}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <Link className="btn" href={`/portal/${token}`}>
              ← Back to portal
            </Link>
            <span className="small" style={{ opacity: 0.85 }}>
              View-only module. Downloads and printing are disabled where possible.
            </span>
          </div>

          <div
            className="card"
            style={{ marginTop: 14, padding: 0, overflow: "hidden" }}
          >
            {src ? (
              <iframe
                title="ICSI Module"
                src={src}
                style={{ width: "100%", height: "78vh", border: 0 }}
                // keep it strict; module HTML already has scripts for deterrence
                sandbox="allow-same-origin allow-scripts"
              />
            ) : (
              <div style={{ padding: 18 }} className="small">Loading…</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}