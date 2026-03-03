import Layout from "../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { COPY } from "../components/copy";
import Seo from "../components/Seo";

export default function AMC() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();
  const c = COPY[lang] || COPY.en;

  // Localized SEO
  const seo = {
    en: {
      title: "Aficionado Master Class (AMC™) | ICSI",
      description:
        "AMC™ is ICSI’s invite-only master class for elite collectors—precision staging, diagnostics, and peak performance without guesswork.",
      path: "/amc",
    },
    fr: {
      title: "Aficionado Master Class (AMC™) | ICSI",
      description:
        "AMC™ est la masterclass sur invitation d’ICSI pour collectionneurs—staging précis, diagnostics et performance maximale sans hasard.",
      path: "/amc",
    },
    de: {
      title: "Aficionado Master Class (AMC™) | ICSI",
      description:
        "AMC™ ist die Invite-only Masterclass von ICSI für Sammler—präzises Staging, Diagnostik und Peak Performance ohne Rätselraten.",
      path: "/amc",
    },
  };

  const s = seo[lang] || seo.en;

  return (
    <Layout>
      <Seo title={s.title} description={s.description} path={s.path} />

      <div className="section">
        <div className="container">
          <h1>{c.amc_title}</h1>
          <p className="small">{c.amc_blurb}</p>

          <div className="ctaRow" style={{ marginTop: 12 }}>
            <a
              className="btn"
              href="/brochures/AMC_Aficionado_Master_Class_Brochure_v2.pdf"
            >
              {c.download}
            </a>

            <Link
              className="btn primary"
              href={{
                pathname: "/contact",
                query: { subject: "Invite Request — AMC", program: "amc" },
              }}
              locale={lang}
            >
              {c.request_invite}
            </Link>
          </div>

          <div className="notice" style={{ marginTop: 16 }}>
            <b>Note:</b> {c.note}
          </div>
        </div>
      </div>
    </Layout>
  );
}