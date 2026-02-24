import Layout from "../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { COPY } from "../components/copy";

export default function Programs() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();
  const c = COPY[lang] || COPY.en;

  return (
    <Layout>
      <div className="section">
        <div className="container">
          <h2>{c.programs_title}</h2>
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