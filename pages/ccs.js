import Layout from "../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { COPY } from "../components/copy";
import Seo from "../components/Seo";

export default function CCS() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();
  const c = COPY[lang] || COPY.en;

  const seo = {
    en: {
      title: "Certified Cigar Sommelier (CCS®) | ICSI",
      description:
        "CCS® is the professional standard in cigar mastery—control combustion, moisture, and flavor dynamics with scientific precision.",
      path: "/ccs",
    },
    fr: {
      title: "Certified Cigar Sommelier (CCS®) | ICSI",
      description:
        "CCS® est la norme professionnelle du sommelier cigare—maîtrisez combustion, humidité et dynamique aromatique avec précision scientifique.",
      path: "/ccs",
    },
    de: {
      title: "Certified Cigar Sommelier (CCS®) | ICSI",
      description:
        "CCS® ist der professionelle Standard für Zigarrenkompetenz—Verbrennung, Feuchte und Aromadynamik wissenschaftlich beherrschen.",
      path: "/ccs",
    },
  };

  const s = seo[lang] || seo.en;

  return (
    <Layout>
      <Seo title={s.title} description={s.description} path={s.path} />

      <div className="section">
        <div className="container">
          <h1>{c.ccs_title}</h1>
          <p className="small">{c.ccs_blurb}</p>

          <div className="ctaRow" style={{ marginTop: 12 }}>
            <a
              className="btn"
              href="/brochures/CCS_Certified_Cigar_Sommelier_Brochure.pdf"
              target="_blank"
              rel="noreferrer"
            >
              {c.download}
            </a>

            <Link
              className="btn primary"
              href={{
                pathname: "/contact",
                query: { subject: "Application — CCS", program: "ccs" },
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