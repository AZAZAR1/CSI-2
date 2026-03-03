import Layout from "../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { COPY } from "../components/copy";
import Seo from "../components/Seo";

export default function ACS() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();
  const c = COPY[lang] || COPY.en;

  // Localized SEO (recommended)
  const seo = {
    en: {
      title: "Advanced Cigar Sommelier (ACS®) | ICSI",
      description:
        "ACS® is ICSI’s advanced pathway: predictive modeling, diagnostics, and calibrated expertise across blends, environments, and vintages.",
      path: "/acs",
    },
    fr: {
      title: "Advanced Cigar Sommelier (ACS®) | ICSI",
      description:
        "ACS® est le parcours avancé d’ICSI : modélisation prédictive, diagnostics et expertise calibrée selon les blends, environnements et millésimes.",
      path: "/acs",
    },
    de: {
      title: "Advanced Cigar Sommelier (ACS®) | ICSI",
      description:
        "ACS® ist der Advanced-Track von ICSI: prädiktive Modellierung, Diagnostik und kalibrierte Expertise über Blends, Umgebungen und Jahrgänge.",
      path: "/acs",
    },
  };

  const s = seo[lang] || seo.en;

  return (
    <Layout>
      <Seo title={s.title} description={s.description} path={s.path} />

      <div className="section">
        <div className="container">
          <h1>{c.acs_title}</h1>
          <p className="small">{c.acs_blurb}</p>

          <div className="ctaRow" style={{ marginTop: 12 }}>
            <a
              className="btn"
              href="/brochures/ACS_Advanced_Cigar_Sommelier_Brochure.pdf"
            >
              {c.download}
            </a>

            <Link
              className="btn primary"
              href={{
                pathname: "/contact",
                query: { subject: "Application — ACS", program: "acs" },
              }}
              locale={lang}
            >
              {c.apply}
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