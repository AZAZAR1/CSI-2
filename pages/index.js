import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { COPY } from "../components/copy";

function HomeHero() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();
  const c = COPY[lang] || COPY.en;

  return (
    <section className="hero homeHero">
      <div className="heroImageWrap">
        <Image
          src="/img/hero.png"
          alt="Tobacco leaf macro"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center center" }}
        />

        <div className="heroImageOverlay" />

        <div className="container heroOverlayContent">
          <span className="kicker heroKicker">{c.kicker}</span>
          <h1 className="heroTitle">{c.h1}</h1>
          <p className="heroLead">{c.lead}</p>

          <nav className="heroInlineNav" aria-label="Primary homepage actions">
            <Link href="/courses" locale={lang} className="heroInlineLink">
              <span>{c.cta_courses}</span>
              <span className="arrow">→</span>
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}

function DigitalEmpowermentSection() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();

  const copy = {
    en: {
      title: "Digital Empowerment for the Modern Cigar World",
      eyebrow: "Digital Empowerment",
      lead:
        "ICSI is developing a new generation of predictive cigar applications designed to support professionals, lounges, retailers, and serious aficionados in navigating today’s increasingly complex blend landscape. From peak-flavor calibration and humidity intelligence to structured blend discovery and comparative analysis, these tools are being built to bring greater precision, consistency, and confidence to the global cigar community.",
      item1Title: "Peak-Flavor Prediction",
      item1Body:
        "Identify optimal smoking core relative humidity targets based on blend structure and performance logic.",
      item2Title: "Blend Intelligence",
      item2Body:
        "Compare cigars through structural similarity analysis to help smokers discover new profiles with greater confidence.",
      item3Title: "Digital Support for Professionals",
      item3Body:
        "Applications in development to assist lounges, retailers, and collectors in standardizing experience and improving consistency.",
      cta: "Explore ICSI Applications",
    },
    fr: {
      title: "Autonomisation numérique pour le monde moderne du cigare",
      eyebrow: "Autonomisation numérique",
      lead:
        "L’ICSI développe une nouvelle génération d’applications prédictives dédiées au cigare, conçues pour accompagner les professionnels, lounges, détaillants et aficionados avertis dans un univers de mélanges devenu toujours plus complexe. De la calibration Peak-Flavor à l’intelligence hygrométrique, en passant par la découverte structurée de mélanges et l’analyse comparative, ces outils sont conçus pour apporter davantage de précision, de constance et de confiance à la communauté mondiale du cigare.",
      item1Title: "Prédiction Peak-Flavor",
      item1Body:
        "Identifier les niveaux optimaux d’humidité relative au cœur du cigare selon la structure du mélange et sa logique de performance.",
      item2Title: "Intelligence des mélanges",
      item2Body:
        "Comparer les cigares par analyse de similarité structurelle afin d’aider les amateurs à découvrir de nouveaux profils avec davantage d’assurance.",
      item3Title: "Support numérique pour les professionnels",
      item3Body:
        "Des applications en cours de développement pour aider lounges, détaillants et collectionneurs à standardiser l’expérience et améliorer la constance.",
      cta: "Explorer les applications ICSI",
    },
    de: {
      title: "Digitale Stärkung für die moderne Zigarrenwelt",
      eyebrow: "Digitale Stärkung",
      lead:
        "ICSI entwickelt eine neue Generation prädiktiver Zigarrenanwendungen, die Fachleute, Lounges, Händler und anspruchsvolle Aficionados dabei unterstützen sollen, sich in der heutigen zunehmend komplexen Blend-Landschaft sicher zu orientieren. Von der Peak-Flavor-Kalibrierung und Feuchtigkeitsintelligenz bis hin zur strukturierten Blend-Entdeckung und vergleichenden Analyse werden diese Tools entwickelt, um der globalen Zigarrengemeinschaft mehr Präzision, Konsistenz und Sicherheit zu bieten.",
      item1Title: "Peak-Flavor-Prognose",
      item1Body:
        "Ermitteln Sie optimale Zielwerte für die relative Kernfeuchtigkeit beim Rauchen auf Grundlage der Blend-Struktur und ihrer Performance-Logik.",
      item2Title: "Blend-Intelligenz",
      item2Body:
        "Vergleichen Sie Zigarren anhand struktureller Ähnlichkeitsanalysen, um neue Profile mit größerer Sicherheit zu entdecken.",
      item3Title: "Digitale Unterstützung für Profis",
      item3Body:
        "Anwendungen in Entwicklung zur Unterstützung von Lounges, Händlern und Sammlern bei der Standardisierung des Erlebnisses und der Verbesserung der Konsistenz.",
      cta: "ICSI Anwendungen entdecken",
    },
  };

  const c = copy[lang] || copy.en;

  return (
    <section className="block blockDigital">
      <div className="blockMeta">
        <span className="blockNum">I</span>
        <span className="blockEyebrow">{c.eyebrow}</span>
      </div>

      <div className="blockBody">
        <h2 className="blockTitle">{c.title}</h2>
        <p className="bodyText digitalLead">{c.lead}</p>

        <div className="applicationList">
          <div className="applicationItem">
            <span className="applicationNum">01</span>
            <div>
              <h3 className="applicationTitle">{c.item1Title}</h3>
              <p className="bodyText small">{c.item1Body}</p>
            </div>
          </div>

          <div className="applicationItem">
            <span className="applicationNum">02</span>
            <div>
              <h3 className="applicationTitle">{c.item2Title}</h3>
              <p className="bodyText small">{c.item2Body}</p>
            </div>
          </div>

          <div className="applicationItem">
            <span className="applicationNum">03</span>
            <div>
              <h3 className="applicationTitle">{c.item3Title}</h3>
              <p className="bodyText small">{c.item3Body}</p>
            </div>
          </div>
        </div>

        <p className="textLink">
          <Link href="/partners" locale={lang}>
            {c.cta} <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </section>
  );
}

function InstitutePathwaysSection() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();

  const copy = {
    en: {
      title: "World-Class Education & Certification",
      eyebrow: "Educational Excellence",
      lead:
        "ICSI connects formal cigar education, scientific conditioning logic, and applied hospitality practice into one structured professional pathway.",
      cta: "Explore Courses",
      ccs: "Certified Cigar Sommelier",
      acs: "Advanced Cigar Sommelier",
      amc: "Aficionado Master Class",
    },
    fr: {
      title: "Formation et certification de niveau international",
      eyebrow: "Excellence pédagogique",
      lead:
        "L’ICSI relie la formation formelle au cigare, la logique scientifique de conditionnement et la pratique appliquée de l’hospitalité dans un parcours professionnel structuré.",
      cta: "Explorer les formations",
      ccs: "Certified Cigar Sommelier",
      acs: "Advanced Cigar Sommelier",
      amc: "Aficionado Master Class",
    },
    de: {
      title: "Weltklasse-Ausbildung & Zertifizierung",
      eyebrow: "Ausbildungsexzellenz",
      lead:
        "ICSI verbindet formale Zigarrenausbildung, wissenschaftliche Konditionierungslogik und angewandte Hospitality-Praxis zu einem strukturierten professionellen Weg.",
      cta: "Kurse entdecken",
      ccs: "Certified Cigar Sommelier",
      acs: "Advanced Cigar Sommelier",
      amc: "Aficionado Master Class",
    },
  };

  const c = copy[lang] || copy.en;

  return (
    <section className="block blockPathways">
      <div className="blockMeta">
        <span className="blockNum">II</span>
        <span className="blockEyebrow">{c.eyebrow}</span>
      </div>

      <div className="blockBody">
        <h2 className="blockTitle">{c.title}</h2>
        <p className="bodyText">{c.lead}</p>

        <nav className="programNav">
          <Link href="/ccs" locale={lang} className="programItem">
            <span className="programName">{c.ccs}</span>
            <span className="programCredential">CCS®</span>
          </Link>

          <Link href="/acs" locale={lang} className="programItem">
            <span className="programName">{c.acs}</span>
            <span className="programCredential">ACS®</span>
          </Link>

          <Link href="/amc" locale={lang} className="programItem">
            <span className="programName">{c.amc}</span>
            <span className="programCredential">AMC®</span>
          </Link>
        </nav>

        <p className="textLink">
          <Link href="/courses" locale={lang}>
            {c.cta} <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </section>
  );
}

function ScientificFrameworkSection() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();

  const copy = {
    en: {
      title: "The Cigar Peak-Flavor System®",
      eyebrow: "Scientific Framework",
      lead:
        "The ICSI learning model is anchored in the Cigar Peak-Flavor System®, a proprietary framework for understanding cigar performance through tobacco structure, moisture behavior, sensory chemistry, and combustion dynamics.",
      link: "Discover the System",
    },
    fr: {
      title: "Le Cigar Peak-Flavor System®",
      eyebrow: "Cadre scientifique",
      lead:
        "Le modèle pédagogique de l’ICSI s’appuie sur le Cigar Peak-Flavor System®, un cadre propriétaire permettant de comprendre la performance du cigare à travers la structure du tabac, le comportement hygrométrique, la chimie sensorielle et la dynamique de combustion.",
      link: "Découvrir le système",
    },
    de: {
      title: "Das Cigar Peak-Flavor System®",
      eyebrow: "Wissenschaftliches Framework",
      lead:
        "Das ICSI-Lernmodell basiert auf dem Cigar Peak-Flavor System®, einem proprietären Framework zum Verständnis der Zigarrenperformance durch Tabakstruktur, Feuchtigkeitsverhalten, sensorische Chemie und Verbrennungsdynamik.",
      link: "Das System entdecken",
    },
  };

  const c = copy[lang] || copy.en;

  return (
    <section className="block blockFramework">
      <div className="blockMeta">
        <span className="blockNum">III</span>
        <span className="blockEyebrow">{c.eyebrow}</span>
      </div>

      <div className="blockBody">
        <h2 className="blockTitle">{c.title}</h2>
        <p className="bodyText">{c.lead}</p>

        <p className="textLink">
          <Link href="/system" locale={lang}>
            {c.link} <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </section>
  );
}

function PartnershipSection() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();

  const copy = {
    en: {
      title: "Partnering for a Stronger Cigar Industry",
      eyebrow: "Industry Partnerships",
      lead:
        "ICSI collaborates with lounges, retailers, educators, and industry partners to raise service standards, improve consistency, and support a more knowledgeable cigar community.",
      link: "Become a Partner",
    },
    fr: {
      title: "Construire une industrie du cigare plus forte",
      eyebrow: "Partenariats sectoriels",
      lead:
        "L’ICSI collabore avec lounges, détaillants, formateurs et partenaires de l’industrie afin d’élever les standards de service, améliorer la constance et soutenir une communauté cigare plus compétente.",
      link: "Devenir partenaire",
    },
    de: {
      title: "Partnerschaft für eine stärkere Zigarrenbranche",
      eyebrow: "Branchenpartnerschaften",
      lead:
        "ICSI arbeitet mit Lounges, Händlern, Ausbildern und Branchenpartnern zusammen, um Servicestandards zu erhöhen, Konsistenz zu verbessern und eine kompetentere Zigarrengemeinschaft zu fördern.",
      link: "Partner werden",
    },
  };

  const c = copy[lang] || copy.en;

  return (
    <section className="block blockPartnership">
      <div className="blockMeta">
        <span className="blockNum">IV</span>
        <span className="blockEyebrow">{c.eyebrow}</span>
      </div>

      <div className="blockBody">
        <h2 className="blockTitle">{c.title}</h2>
        <p className="bodyText">{c.lead}</p>

        <p className="textLink">
          <Link href="/partners" locale={lang}>
            {c.link} <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </section>
  );
}

function QualityFooterNote() {
  return (
    <div className="qualityNote">
      <p className="qualityKicker">ISO/IEC 17024 Quality System Framework</p>
      <p className="qualitySub">
        <i>Powered by the scientific Cigar Peak-Flavor System®</i>
      </p>
    </div>
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

      <HomeHero />

      <div className="container contentWrap">
        <DigitalEmpowermentSection />
        <InstitutePathwaysSection />
        <ScientificFrameworkSection />
        <PartnershipSection />
        <QualityFooterNote />
      </div>

      <style jsx>{`
        /* ─── HERO ─────────────────────────────────────────────── */

        .hero {
          margin: 0;
          padding: 0;
        }

        .heroImageWrap {
          position: relative;
          width: 100%;
          min-height: clamp(520px, 64vw, 760px);
          overflow: hidden;
        }

        .heroImageOverlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              to right,
              rgba(0, 0, 0, 0.68) 0%,
              rgba(0, 0, 0, 0.5) 34%,
              rgba(0, 0, 0, 0.12) 72%,
              rgba(0, 0, 0, 0.04) 100%
            ),
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.14) 0%,
              rgba(0, 0, 0, 0.06) 58%,
              rgba(0, 0, 0, 0.32) 100%
            );
        }

        .heroOverlayContent {
          position: relative;
          z-index: 2;
          min-height: clamp(520px, 64vw, 760px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          color: #fff;
          padding-top: 72px;
          padding-bottom: 72px;
        }

        .kicker {
          display: block;
          font-size: 0.68rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          opacity: 0.78;
          font-weight: 600;
          margin-bottom: 22px;
        }

        .heroTitle {
          font-size: clamp(2.8rem, 4.8vw, 5.2rem);
          line-height: 1;
          letter-spacing: -0.035em;
          font-weight: 600;
          margin: 0 0 28px;
          max-width: 12ch;
          text-shadow: 0 2px 22px rgba(0, 0, 0, 0.28);
        }

        .heroLead {
          font-size: clamp(1rem, 1.25vw, 1.18rem);
          line-height: 1.72;
          font-weight: 300;
          max-width: 58ch;
          opacity: 0.92;
          margin: 0 0 34px;
          text-shadow: 0 2px 18px rgba(0, 0, 0, 0.28);
        }

        .heroInlineNav {
          margin-top: 2px;
        }

        .heroInlineLink {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          color: #fff;
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 700;
          text-decoration: none;
          padding-bottom: 7px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.72);
          transition: opacity 0.2s ease;
        }

        .heroInlineLink:hover {
          opacity: 0.58;
        }

        .arrow {
          font-size: 1.2rem;
          line-height: 1;
          letter-spacing: 0;
          font-weight: 300;
        }

        /* ─── CONTENT ─────────────────────────────────────────── */

        .contentWrap {
          padding-top: 0;
          padding-bottom: 96px;
        }

        /* ─── BLOCK ───────────────────────────────────────────── */

        .block {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 0 80px;
          padding: 64px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .block:first-child {
          border-top: 0;
        }

        .blockMeta {
          padding-top: 4px;
        }

        .blockNum {
          display: block;
          font-size: clamp(1.7rem, 2.2vw, 2.25rem);
          line-height: 1;
          letter-spacing: -0.03em;
          opacity: 0.82;
          font-weight: 300;
          margin-bottom: 18px;
        }

        .blockEyebrow {
          display: block;
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0.48;
          font-weight: 600;
          max-width: 22ch;
        }

        .blockTitle {
          font-size: clamp(1.7rem, 2.4vw, 2.45rem);
          font-weight: 400;
          line-height: 1.12;
          letter-spacing: -0.035em;
          margin: 0 0 24px;
          max-width: 18ch;
        }

        .blockBody {
          max-width: 680px;
        }

        /* ─── BODY TEXT ───────────────────────────────────────── */

        .bodyText {
          font-size: 1rem;
          line-height: 1.78;
          font-weight: 300;
          opacity: 0.75;
          margin: 0 0 18px;
        }

        .bodyText.small {
          font-size: 0.92rem;
          margin: 0;
        }

        .digitalLead {
          margin-bottom: 34px;
        }

        /* ─── APPLICATION LIST ────────────────────────────────── */

        .applicationList {
          display: flex;
          flex-direction: column;
          margin-top: 34px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }

        .applicationItem {
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 20px;
          padding: 24px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .applicationNum {
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          font-weight: 700;
          opacity: 0.28;
          padding-top: 7px;
        }

        .applicationTitle {
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 600;
          opacity: 0.42;
          margin: 0 0 12px;
        }

        /* ─── PROGRAM NAV ─────────────────────────────────────── */

        .programNav {
          margin-top: 36px;
          display: flex;
          flex-direction: column;
        }

        .programItem {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          padding: 18px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          text-decoration: none;
          transition: opacity 0.2s ease;
          gap: 24px;
        }

        .programItem:first-child {
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }

        .programItem:hover {
          opacity: 0.45;
        }

        .programName {
          font-size: 1.05rem;
          font-weight: 300;
          letter-spacing: -0.01em;
        }

        .programCredential {
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          font-weight: 700;
          opacity: 0.35;
          white-space: nowrap;
        }

        /* ─── TEXT LINKS ──────────────────────────────────────── */

        .textLink {
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 700;
          margin: 34px 0 0;
        }

        .textLink a {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          text-decoration: none;
          padding-bottom: 7px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.34);
          transition: opacity 0.2s ease;
        }

        .textLink a:hover {
          opacity: 0.48;
        }

        .textLink span {
          font-size: 1.2rem;
          line-height: 1;
          letter-spacing: 0;
          font-weight: 300;
        }

        /* ─── QUALITY NOTE ────────────────────────────────────── */

        .qualityNote {
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          padding: 34px 0 0;
          text-align: center;
        }

        .qualityKicker {
          font-size: 0.68rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          font-weight: 600;
          opacity: 0.55;
          margin: 0 0 12px;
        }

        .qualitySub {
          font-size: 0.9rem;
          line-height: 1.6;
          opacity: 0.52;
          margin: 0;
        }

        /* ─── RESPONSIVE ──────────────────────────────────────── */

        @media (max-width: 960px) {
          .heroImageWrap,
          .heroOverlayContent {
            min-height: 600px;
          }

          .block {
            grid-template-columns: 1fr 1.6fr;
            gap: 0 48px;
          }
        }

        @media (max-width: 720px) {
          .heroImageWrap,
          .heroOverlayContent {
            min-height: 560px;
          }

          .heroOverlayContent {
            padding-top: 58px;
            padding-bottom: 58px;
          }

          .heroTitle {
            font-size: clamp(2.2rem, 8vw, 3.6rem);
            max-width: 11ch;
          }

          .heroLead {
            font-size: 0.98rem;
            max-width: 100%;
          }

          .block {
            grid-template-columns: 1fr;
            gap: 28px 0;
            padding: 48px 0;
          }

          .blockTitle {
            max-width: none;
          }

          .blockBody {
            max-width: none;
          }
        }

        @media (max-width: 480px) {
          .heroImageWrap,
          .heroOverlayContent {
            min-height: 520px;
          }

          .heroTitle {
            font-size: clamp(2rem, 10vw, 3rem);
          }

          .block {
            padding: 38px 0;
          }

          .applicationItem {
            grid-template-columns: 34px 1fr;
            gap: 16px;
          }

          .programName {
            font-size: 0.98rem;
          }

          .qualityNote {
            padding-top: 28px;
          }
        }
      `}</style>
    </Layout>
  );
}
