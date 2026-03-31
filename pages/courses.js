import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { COPY } from "../components/copy";

export default function Courses() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();
  const c = COPY[lang] || COPY.en;

  const intro = {
    en: "The International Cigar Sommelier Institute offers structured pathways for individuals, lounges, and cigar retailers seeking to master the science and commercial value of the cigar experience. Each course is built upon the proprietary Peak-Flavor System®, combining tobacco knowledge, combustion dynamics, and post-factory conditioning to achieve consistent aromatic performance. Certified professionals develop the analytical skills required to understand cigar construction, humidity behavior, and flavor evolution; enabling lounges and shops to deliver superior cigar experiences that strengthen customer loyalty and increase cigar sales.",
    fr: "L’International Cigar Sommelier Institute propose des parcours structurés destinés aux particuliers, lounges et détaillants souhaitant maîtriser à la fois la science et la valeur commerciale de l’expérience cigare. Chaque programme repose sur le système propriétaire Peak-Flavor®, combinant connaissance du tabac, dynamique de combustion et conditionnement post-fabrication afin d’obtenir une performance aromatique constante. Les professionnels certifiés développent une compréhension analytique de la construction du cigare, du comportement de l’humidité et de l’évolution des arômes, permettant aux lounges et boutiques d’offrir une expérience supérieure qui renforce la fidélité des clients et stimule les ventes.",
    de: "Das International Cigar Sommelier Institute bietet strukturierte Ausbildungswege für Einzelpersonen, Lounges und Zigarrenfachhändler, die sowohl die wissenschaftlichen als auch die kommerziellen Aspekte des Zigarrenerlebnisses beherrschen möchten. Jeder Kurs basiert auf dem proprietären Peak-Flavor-System®, das Tabakwissen, Verbrennungsdynamik und Post-Factory-Conditioning kombiniert, um eine konsistente Aromaperformance zu erreichen. Zertifizierte Fachkräfte entwickeln ein analytisches Verständnis für Zigarrenkonstruktion, Feuchteverhalten und Aromadynamik, wodurch Lounges und Geschäfte ein überlegenes Zigarrenerlebnis bieten können, das Kundenbindung stärkt und den Zigarrenverkauf steigert.",
  };

  const seo = {
    en: {
      title: "Cigar Certification Courses (CCS®, ACS®, AMC®) | ICSI",
      description:
        "ICSI’s cigar certification courses help professionals, lounges, and retailers increase customer loyalty and cigar sales through scientific post-factory conditioning and peak-flavor performance.",
      path: "/courses",
    },
    fr: {
      title: "Cours & Certifications Cigare (CCS®, ACS®, AMC®) | ICSI",
      description:
        "Les cours et certifications ICSI aident professionnels, lounges et détaillants à renforcer la fidélité et augmenter les ventes grâce au conditionnement post-fabrication et à la performance aromatique.",
      path: "/courses",
    },
    de: {
      title: "Zigarren-Zertifizierungskurse (CCS®, ACS®, AMC®) | ICSI",
      description:
        "ICSI-Zertifizierungskurse unterstützen Professionals, Lounges und Händler dabei, Kundenbindung und Zigarrenverkauf zu steigern—durch Post-Factory-Conditioning und reproduzierbare Peak-Flavor-Performance.",
      path: "/courses",
    },
  };

  const s = seo[lang] || seo.en;
  const introText = intro[lang] || intro.en;

  return (
    <Layout>
      <Seo title={s.title} description={s.description} path={s.path} />

      {/* Structured data for Google */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "International Cigar Sommelier Institute",
              url: "https://cigarsommelierinstitute.com",
              description:
                "Professional cigar sommelier training and certification based on the scientific Peak-Flavor System.",
              hasCourse: [
                { "@type": "Course", name: "Certified Cigar Sommelier (CCS®)" },
                { "@type": "Course", name: "Advanced Cigar Sommelier (ACS®)" },
                { "@type": "Course", name: "Aficionado Master Class (AMC®)" },
              ],
            }),
          }}
        />
      </Head>

      <div className="section">
        <div className="container">
          {/* Keep page H1 consistent (great for SEO) */}
          <h1>{c.courses_title || c.programs_title}</h1>

          {/* SEO intro paragraph */}
          <p className="lead" style={{ maxWidth: "78ch", marginTop: 12 }}>
            {introText}
          </p>

          <p className="small" style={{ marginTop: 12 }}>
            {c.courses_lead || c.programs_lead}
          </p>

          <div className="grid3" style={{ marginTop: 14 }}>
            {/* CCS */}
            <div className="card programCard">
              <div className="programBody">
                <h3>{c.ccs_title}</h3>
                <p>{c.ccs_blurb}</p>
              </div>

              <div className="ctaRow programButtons">
                <Link
                  className="btn primary"
                  href={{ pathname: "/contact", query: { program: "ccs" } }}
                  locale={lang}
                >
                  {c.apply}
                </Link>

                <a
                  className="btn"
                  href="/brochures/CCS_Certified_Cigar_Sommelier_Brochure.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  {c.download}
                </a>
              </div>
            </div>

            {/* ACS */}
            <div className="card programCard">
              <div className="programBody">
                <h3>{c.acs_title}</h3>
                <p>{c.acs_blurb}</p>
              </div>

              <div className="ctaRow programButtons">
                <Link
                  className="btn primary"
                  href={{ pathname: "/contact", query: { program: "acs" } }}
                  locale={lang}
                >
                  {c.apply}
                </Link>

                <a
                  className="btn"
                  href="/brochures/ACS_Advanced_Cigar_Sommelier_Brochure.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  {c.download}
                </a>
              </div>
            </div>

            {/* AMC */}
            <div className="card programCard">
              <div className="programBody">
                <h3>{c.amc_title}</h3>
                <p>{c.amc_blurb}</p>
              </div>

              <div className="ctaRow programButtons">
                <Link
                  className="btn primary"
                  href={{ pathname: "/contact", query: { program: "amc" } }}
                  locale={lang}
                >
                  {c.request_invite}
                </Link>

                <a
                  className="btn"
                  href="/brochures/AMC_Aficionado_Master_Class_Brochure_v2.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  {c.download}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
