import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Link from "next/link";
import Image from "next/image";
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
        <Link className="btn primary" href="/courses" locale={lang}>
          {c.cta_courses}
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
        <i>Powered by the scientific Cigar Peak-Flavor System®.</i>
      </div>
    </>
  );
}

function CoursesPreview() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();
  const c = COPY[lang] || COPY.en;

  return (
    <>
      <h2>{c.courses_title}</h2>
      <p className="small">{c.courses_lead}</p>

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
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();

  const seo = {
    en: {
      title: "International Cigar Sommelier Institute",
      description:
        "Swiss luxury. Scientific authority. ICSI equips candidates, lounges, and aficionados to achieve repeatable peak-flavor cigar performance.",
      path: "/",
    },
    fr: {
      title: "International Cigar Sommelier Institute",
      description:
        "Luxe suisse. Autorité scientifique. ICSI prépare les candidats, lounges et aficionados à une performance aromatique reproductible.",
      path: "/",
    },
    de: {
      title: "International Cigar Sommelier Institute",
      description:
        "Schweizer Luxus. Wissenschaftliche Autorität. ICSI befähigt Kandidaten, Lounges und Sammler zu reproduzierbarer Peak-Flavor-Performance.",
      path: "/",
    },
  };

  const s = seo[lang] || seo.en;

  return (
    <Layout>
      <Seo title={s.title} description={s.description} path={s.path} />

      <div className="hero">
        <div className="container heroGrid">
          <div>
            <HomeCopy />
          </div>

          <div className="heroCard heroCardTight">
            <div
              className="heroMediaSquare"
              style={{
                position: "relative",
                width: "520px",
                height: "520px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto",
              }}
            >
              <Image
                src="/img/hero.png"
                alt="Tobacco leaf macro"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 520px"
                style={{ objectFit: "cover" }}
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
          <CoursesPreview />
        </div>
      </div>
    </Layout>
  );
}