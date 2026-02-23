import Layout from "../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { COPY } from "../components/copy";

export default function AMC() {
  const { locale } = useRouter();
  const lang = locale || "en";
  const c = COPY[lang];

  return (
    <Layout>
      <div className="section">
        <div className="container">
          <h2>{c.amc_title}</h2>
          <p className="small">{c.amc_blurb}</p>

          <div className="ctaRow" style={{ marginTop: 12 }}>
            <a className="btn" href="/brochures/AMC_Aficionado_Master_Class_Brochure_v2.pdf">{c.download}</a>
            <Link className="btn primary" href={`/contact?subject=${encodeURIComponent("Invite Request — AMC")}`} locale={lang}>{c.request_invite}</Link>
          </div>

          <div className="notice" style={{ marginTop: 16 }}>
            <b>Note:</b> {c.note}
          </div>
        </div>
      </div>
    </Layout>
  );
}