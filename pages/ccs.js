import Layout from "../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { COPY } from "../components/copy";

export default function CCS() {
  const { locale } = useRouter();
  const lang = locale || "en";
  const c = COPY[lang];

  return (
    <Layout>
      <div className="section">
        <div className="container">
          <h2>{c.ccs_title}</h2>
          <p className="small">{c.ccs_blurb}</p>

          <div className="ctaRow" style={{ marginTop: 12 }}>
            <a className="btn" href="/brochures/CCS_Certified_Cigar_Sommelier_Brochure.pdf">{c.download}</a>
            <Link className="btn primary" href={`/contact?subject=${encodeURIComponent("Application — CCS")}`} locale={lang}>{c.apply}</Link>
          </div>

          <div className="notice" style={{ marginTop: 16 }}>
            <b>Note:</b> {c.note}
          </div>
        </div>
      </div>
    </Layout>
  );
}