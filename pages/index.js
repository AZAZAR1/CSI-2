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
      <div className="container">
        <span className="kicker">{c.kicker}</span>
        <h1 className="heroTitle">{c.h1}</h1>
      </div>

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
      </div>

      <div className="container">
        <p className="heroLead">{c.lead}</p>

        <nav className="heroNav" aria-label="Primary homepage actions">
          <Link href="/courses" locale={lang} className="heroNavItem">
            <span className="heroNavLabel">{c.cta_courses}</span>
            <span className="heroNavMeta">01</span>
          </Link>

          <a
            className="heroNavItem"
            href="/brochures/Cigar-Predictive-Mastery.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="heroNavLabel">{c.learn_more}</span>
            <span className="heroNavMeta">02</span>
          </a>

          <Link href="/contact" locale={lang} className="heroNavItem">
            <span className="heroNavLabel">{c.nav_contact}</span>
            <span className="heroNavMeta">03</span>
          </Link>

          <Link href="/partners" locale={lang} className="heroNavItem">
            <span className="heroNavLabel">{c.cta_partner}</span>
            <span className="heroNavMeta">04</span>
          </Link>
        </nav>

        <p className="heroPowered">
          <i>ISO/IEC 17024 Quality System Framework. Powered by the scientific Cigar Peak-Flavor System®.</i>
        </p>
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
      lead:
        "ICSI is developing a new generation of predictive cigar applications designed to support professionals, lounges, retailers, and serious aficionados in navigating today’s increasingly complex blend landscape. From peak-flavor calibration and humidity intelligence to structured blend discovery and comparative analysis, these tools are being built to bring greater precision, consistency, and confidence to the global cigar community.",
      card1Title: "Peak-Flavor Prediction",
      card1Body:
        "Identify optimal smoking core relative humidity targets based on blend structure and performance logic.",
      card2Title: "Blend Intelligence",
      card2Body:
        "Compare cigars through structural similarity analysis to help smokers discover new profiles with greater confidence.",
      card3Title: "Digital Support for Professionals",
      card3Body:
        "Applications in development to assist lounges, retailers, and collectors in standardizing experience and improving consistency.",
      cta: "Explore ICSI Applications",
    },
    fr: {
      title: "Autonomisation numérique pour le monde moderne du cigare",
      lead:
        "L’ICSI développe une nouvelle génération d’applications prédictives dédiées au cigare, conçues pour accompagner les professionnels, lounges, détaillants et aficionados avertis dans un univers de mélanges devenu toujours plus complexe. De la calibration Peak-Flavor à l’intelligence hygrométrique, en passant par la découverte structurée de mélanges et l’analyse comparative, ces outils sont conçus pour apporter davantage de précision, de constance et de confiance à la communauté mondiale du cigare.",
      card1Title: "Prédiction Peak-Flavor",
      card1Body:
        "Identifier les niveaux optimaux d’humidité relative au cœur du cigare selon la structure du mélange et sa logique de performance.",
      card2Title: "Intelligence des mélanges",
      card2Body:
        "Comparer les cigares par analyse de similarité structurelle afin d’aider les amateurs à découvrir de nouveaux profils avec davantage d’assurance.",
      card3Title: "Support numérique pour les professionnels",
      card3Body:
        "Des applications en cours de développement pour aider lounges, détaillants et collectionneurs à standardiser l’expérience et améliorer la constance.",
      cta: "Explorer les applications ICSI",
    },
    de: {
      title: "Digitale Stärkung für die moderne Zigarrenwelt",
      lead:
        "ICSI entwickelt eine neue Generation prädiktiver Zigarrenanwendungen, die Fachleute, Lounges, Händler und anspruchsvolle Aficionados dabei unterstützen sollen, sich in der heutigen zunehmend komplexen Blend-Landschaft sicher zu orientieren. Von der Peak-Flavor-Kalibrierung und Feuchtigkeitsintelligenz bis hin zur strukturierten Blend-Entdeckung und vergleichenden Analyse werden diese Tools entwickelt, um der globalen Zigarrengemeinschaft mehr Präzision, Konsistenz und Sicherheit zu bieten.",
      card1Title: "Peak-Flavor-Prognose",
      card1Body:
        "Ermitteln Sie optimale Zielwerte für die relative Kernfeuchtigkeit beim Rauchen auf Grundlage der Blend-Struktur und ihrer Performance-Logik.",
      card2Title: "Blend-Intelligenz",
      card2Body:
        "Vergleichen Sie Zigarren anhand struktureller Ähnlichkeitsanalysen, um neue Profile mit größerer Sicherheit zu entdecken.",
      card3Title: "Digitale Unterstützung für Profis",
      card3Body:
        "Anwendungen in Entwicklung zur Unterstützung von Lounges, Händlern und Sammlern bei der Standardisierung des Erlebnisses und der Verbesserung der Konsistenz.",
      cta: "ICSI Anwendungen entdecken",
    },
  };

  const c = copy[lang] || copy.en;

  return (
    <section className="block blockDigital">
      <div className="blockMeta">
        <span className="blockNum">I</span>
        <h2 className="blockTitle">{c.title}</h2>
      </div>

      <div className="blockBody">
        <p className="bodyText digitalLead">{c.lead}</p>

        <div className="applicationList">
          <div className="applicationItem">
            <span className="applicationNum">01</span>
            <div>
              <h3 className="applicationTitle">{c.card1Title}</h3>
              <p className="bodyText small">{c.card1Body}</p>
            </div>
          </div>

          <div className="applicationItem">
            <span className="applicationNum">02</span>
            <div>
              <h3 className="applicationTitle">{c.card2Title}</h3>
              <p className="bodyText small">{c.card2Body}</p>
            </div>
          </div>

          <div className="applicationItem">
            <span className="applicationNum">03</span>
            <div>
              <h3 className="applicationTitle">{c.card3Title}</h3>
              <p className="bodyText small">{c.card3Body}</p>
            </div>
          </div>
        </div>

        <nav className="programNav">
          <Link href="/partners" locale={lang} className="programItem">
            <span className="programName">{c.cta}</span>
            <span className="programCredential">ICSI</span>
          </Link>
        </nav>
      </div>
    </section>
  );
}

function InstitutePathwaysSection() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();

  const copy = {
    en: {
      title: "Professional Education Pathways",
      lead:
        "ICSI connects formal cigar education, scientific conditioning logic, and applied hospitality practice into one structured professional pathway.",
      ccs: "Certified Cigar Sommelier",
      acs: "Advanced Cigar Sommelier",
      amc: "Aficionado Master Class",
    },
    fr: {
      title: "Parcours de formation professionnelle",
      lead:
        "L’ICSI relie la formation formelle au cigare, la logique scientifique de conditionnement et la pratique appliquée de l’hospitalité dans un parcours professionnel structuré.",
      ccs: "Certified Cigar Sommelier",
      acs: "Advanced Cigar Sommelier",
      amc: "Aficionado Master Class",
    },
    de: {
      title: "Professionelle Ausbildungswege",
      lead:
        "ICSI verbindet formale Zigarrenausbildung, wissenschaftliche Konditionierungslogik und angewandte Hospitality-Praxis zu einem strukturierten professionellen Weg.",
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
        <h2 className="blockTitle">{c.title}</h2>
      </div>

      <div className="blockBody">
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
      </div>
    </section>
  );
}

function ScientificFrameworkSection() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();

  const copy = {
    en: {
      title: "Scientific Framework",
      lead:
        "The ICSI learning model is anchored in the Cigar Peak-Flavor System®, a proprietary framework for understanding cigar performance through tobacco structure, moisture behavior, sensory chemistry, and combustion dynamics.",
      link: "Explore the Cigar Peak-Flavor System®",
    },
    fr: {
      title: "Cadre scientifique",
      lead:
        "Le modèle pédagogique de l’ICSI s’appuie sur le Cigar Peak-Flavor System®, un cadre propriétaire permettant de comprendre la performance du cigare à travers la structure du tabac, le comportement hygrométrique, la chimie sensorielle et la dynamique de combustion.",
      link: "Explorer le Cigar Peak-Flavor System®",
    },
    de: {
      title: "Wissenschaftliches Framework",
      lead:
        "Das ICSI-Lernmodell basiert auf dem Cigar Peak-Flavor System®, einem proprietären Framework zum Verständnis der Zigarrenperformance durch Tabakstruktur, Feuchtigkeitsverhalten, sensorische Chemie und Verbrennungsdynamik.",
      link: "Das Cigar Peak-Flavor System® entdecken",
    },
  };

  const c = copy[lang] || copy.en;

  return (
    <section className="block blockFramework">
      <div className="blockMeta">
        <span className="blockNum">III</span>
        <h2 className="blockTitle">{c.title}</h2>
      </div>

      <div className="blockBody">
        <p className="bodyText">{c.lead}</p>

        <p className="furtherReading">
          <Link href="/system" locale={lang}>
            {c.link}
          </Link>
        </p>
      </div>
    </section>
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
      </div>

      <style jsx>{`
        /* ─── HERO ─────────────────────────────────────────────── */

        .hero {
          padding-top: 60px;
        }

        .kicker {
          display: block;
          font-size: 0.68rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          opacity: 0.42;
          font-weight: 500;
          margin-bottom: 22px;
        }

        .heroTitle {
          font-size: clamp(2.8rem, 4.2vw, 4.8rem);
          line-height: 1;
          letter-spacing: -0.02em;
          font-weight: 700;
          margin: 0 0 40px;
          max-width: 12ch;
        }

        .heroImageWrap {
          position: relative;
          width: 100%;
          height: clamp(300px, 46vw, 620px);
          overflow: hidden;
          margin-bottom: 52px;
        }

        .heroImageOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 55%,
            rgba(var(--bg-rgb, 255, 255, 255), 0.18) 100%
          );
        }

        .heroLead {
          font-size: clamp(1.05rem, 1.4vw, 1.3rem);
          line-height: 1.78;
          font-weight: 300;
          max-width: 72ch;
          opacity: 0.7;
          margin: 0 0 42px;
          padding-left: max(0px, 33%);
        }

        .heroPowered {
          font-size: 0.82rem;
          line-height: 1.6;
          opacity: 0.5;
          margin: 24px 0 88px;
          padding-left: max(0px, 33%);
          max-width: 72ch;
        }

        /* ─── HERO NAV ─────────────────────────────────────────── */

        .heroNav {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .heroNavItem {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          min-height: 72px;
          padding: 22px 20px;
          border-right: 1px solid rgba(0, 0, 0, 0.08);
          text-decoration: none;
          transition: opacity 0.2s ease;
          gap: 20px;
        }

        .heroNavItem:first-child {
          padding-left: 0;
        }

        .heroNavItem:last-child {
          border-right: 0;
          padding-right: 0;
        }

        .heroNavItem:hover {
          opacity: 0.45;
        }

        .heroNavLabel {
          font-size: 0.95rem;
          line-height: 1.35;
          font-weight: 300;
          letter-spacing: -0.01em;
        }

        .heroNavMeta {
          font-size: 0.6rem;
          letter-spacing: 0.18em;
          font-weight: 700;
          opacity: 0.3;
          white-space: nowrap;
        }

        /* ─── CONTENT ─────────────────────────────────────────── */

        .contentWrap {
          padding-bottom: 100px;
        }

        /* ─── BLOCK ───────────────────────────────────────────── */

        .block {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 0 80px;
          padding: 64px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .blockMeta {
          padding-top: 4px;
        }

        .blockNum {
          display: block;
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0.3;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .blockTitle {
          font-size: clamp(1.3rem, 1.8vw, 1.7rem);
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0;
          position: sticky;
          top: 24px;
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
          font-size: 0.9rem;
          margin: 0;
        }

        .digitalLead {
          max-width: 72ch;
          margin-bottom: 40px;
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
          opacity: 0.38;
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

        /* ─── FURTHER READING ─────────────────────────────────── */

        .furtherReading {
          font-size: 0.82rem;
          opacity: 0.5;
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          font-weight: 400;
        }

        .furtherReading a {
          font-weight: 500;
          text-decoration: underline;
          text-underline-offset: 4px;
          text-decoration-thickness: 1px;
          opacity: 1;
        }

        /* ─── RESPONSIVE ──────────────────────────────────────── */

        @media (max-width: 960px) {
          .block {
            grid-template-columns: 1fr 1.6fr;
            gap: 0 48px;
          }

          .heroLead,
          .heroPowered {
            padding-left: 0;
          }

          .heroNav {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .heroNavItem:nth-child(2) {
            border-right: 0;
            padding-right: 0;
          }

          .heroNavItem:nth-child(3) {
            padding-left: 0;
            border-top: 1px solid rgba(0, 0, 0, 0.08);
          }

          .heroNavItem:nth-child(4) {
            border-top: 1px solid rgba(0, 0, 0, 0.08);
          }
        }

        @media (max-width: 720px) {
          .hero {
            padding-top: 40px;
          }

          .heroTitle {
            font-size: clamp(2.2rem, 7vw, 3.4rem);
            max-width: none;
          }

          .heroImageWrap {
            margin-bottom: 42px;
          }

          .heroLead {
            margin-bottom: 34px;
          }

          .heroPowered {
            margin-bottom: 60px;
          }

          .heroNav {
            grid-template-columns: 1fr;
          }

          .heroNavItem,
          .heroNavItem:first-child,
          .heroNavItem:last-child,
          .heroNavItem:nth-child(2),
          .heroNavItem:nth-child(3),
          .heroNavItem:nth-child(4) {
            min-height: 0;
            padding: 18px 0;
            border-right: 0;
            border-top: 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          }

          .heroNavItem:last-child {
            border-bottom: 0;
          }

          .block {
            grid-template-columns: 1fr;
            gap: 28px 0;
            padding: 48px 0;
          }

          .blockTitle {
            position: static;
          }
        }

        @media (max-width: 480px) {
          .heroTitle {
            font-size: clamp(1.9rem, 8vw, 2.8rem);
          }

          .heroImageWrap {
            height: 260px;
          }

          .block {
            padding: 36px 0;
          }

          .applicationItem {
            grid-template-columns: 34px 1fr;
            gap: 16px;
          }

          .programName {
            font-size: 0.98rem;
          }
        }
      `}</style>
    </Layout>
  );
}
