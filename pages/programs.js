import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { COPY } from "../components/copy";

export default function Programs() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();
  const c = COPY[lang] || COPY.en;

  const seo = {
    en: {
      title:
        "Programs | International Cigar Sommelier Institute",
      description:
        "Explore ICSI’s three pathways: CCS®, ACS®, and AMC™. Swiss institutional training and elite optimization grounded in the Peak-Flavor System™.",
      path: "/programs",
    },
    fr: {
      title:
        "Programmes | International Cigar Sommelier Institute",
      description:
        "Découvrez les trois parcours d’ICSI : CCS®, ACS® et AMC™. Formation institutionnelle suisse et optimisation élite fondées sur le Peak-Flavor System™.",
      path: "/programs",
    },
    de: {
      title:
        "Programme | International Cigar Sommelier Institute",
      description:
        "Entdecken Sie die drei Wege von ICSI: CCS®, ACS® und AMC™. Schweizer institutionelle Ausbildung und Elite-Optimierung auf Basis des Peak-Flavor-Systems™.",
      path: "/programs",
    },
  };

  const s = seo[lang] || seo.en;

  return (
    <Layout>
      <Seo title={s.title} description={s.description} path={s.path} />

      <div className="section">
        <div className="container">
          <h1>{c.programs_title}</h1>
          <p className="small">{c.programs_lead}</p>

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