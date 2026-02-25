import Layout from "../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { COPY } from "../components/copy";

function HomeCopy() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();
  const c = COPY[lang] || COPY.en;

  return (
    <>
      <div className="kicker">{c.kicker}</div>
      <h1>{c.h1}</h1>
      <p className="lead">{c.lead}</p>

      <div className="ctaRow">
        <Link className="btn primary" href="/programs" locale={lang}>
          {c.cta_programs}
        </Link>

        <a
          className="btn"
          href="/brochures/Cigar-Predictive-Mastery.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {c.learn_more}
        </a>

        <Link className="btn" href="/contact" locale={lang}>
          {c.nav_contact}
        </Link>

        <Link className="btn" href="/partners" locale={lang}>
          {c.cta_partner}
        </Link>
      </div>

      <div className="small" style={{ marginTop: 14 }}>
        <i>Powered by the Scientific Peak-Flavor System™.</i>
      </div>
    </>
  );
}

function ProgramsPreview() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();
  const c = COPY[lang] || COPY.en;

  return (
    <>
      <h2>{c.programs_title}</h2>
      <p className="small">{c.programs_lead}</p>

      <div className="grid3" style={{ marginTop: 14 }}>
        <div className="card">
          <h3>{c.ccs_title}</h3>
          <p>{c.ccs_blurb}</p>
          <hr className="sep" />
          <Link
            className="btn primary"
            href={{ pathname: "/contact", query: { program: "ccs" } }}
            locale={lang}
          >
            {c.apply}
          </Link>
        </div>

        <div className="card">
          <h3>{c.acs_title}</h3>
          <p>{c.acs_blurb}</p>
          <hr className="sep" />
          <Link
            className="btn primary"
            href={{ pathname: "/contact", query: { program: "acs" } }}
            locale={lang}
          >
            {c.apply}
          </Link>
        </div>

        <div className="card">
          <h3>{c.amc_title}</h3>
          <p>{c.amc_blurb}</p>
          <hr className="sep" />
          <Link
            className="btn primary"
            href={{ pathname: "/contact", query: { program: "amc" } }}
            locale={lang}
          >
            {c.request_invite}
          </Link>
        </div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <Layout>
      <div className="hero">
        <div className="container heroGrid">
          <div>
            <HomeCopy />
          </div>

          <div className="heroCard heroCardTight">
            <div className="heroMediaSquare">
              <img
                src="/img/hero.png"
                alt="Tobacco leaf macro"
                className="heroMediaImg"
              />
              <div className="heroMediaOverlay">
                Conditioning · Aging · Mastery
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <ProgramsPreview />
        </div>
      </div>
    </Layout>
  );
}