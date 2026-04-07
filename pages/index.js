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
      <h1 className="heroTitle">{c.h1}</h1>
      <p className="lead heroLead">{c.lead}</p>

      <div className="heroButtons">
        <Link className="btn primary heroBtnPrimary" href="/courses" locale={lang}>
          {c.cta_courses}
        </Link>

        <a
          className="btn heroBtnSecondary"
          href="/brochures/Cigar-Predictive-Mastery.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {c.learn_more}
        </a>

        <Link className="btn heroBtnSecondary" href="/contact" locale={lang}>
          {c.nav_contact}
        </Link>

        <Link className="btn heroBtnSecondary" href="/partners" locale={lang}>
          {c.cta_partner}
        </Link>
      </div>

      <div className="small heroPowered">
        <i>Powered by the scientific Cigar Peak-Flavor System®.</i>
      </div>
    </>
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
    <div className="section digitalSection">
      <div className="container">
        <h2>{c.title}</h2>
        <p className="small digitalLead">{c.lead}</p>

        <div className="grid3 digitalGrid" style={{ marginTop: 18 }}>
          <div className="card">
            <h3>{c.card1Title}</h3>
            <p>{c.card1Body}</p>
          </div>

          <div className="card">
            <h3>{c.card2Title}</h3>
            <p>{c.card2Body}</p>
          </div>

          <div className="card">
            <h3>{c.card3Title}</h3>
            <p>{c.card3Body}</p>
          </div>
        </div>

        <div className="ctaRow digitalCtaRow" style={{ marginTop: 18 }}>
          <Link className="btn primary" href="/partners" locale={lang}>
            {c.cta}
          </Link>
        </div>
      </div>
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

      <div className="hero homeHero">
        <div className="container heroGridResponsive">
          <div className="heroTextCol">
            <HomeCopy />
          </div>

          <div className="heroImageCol">
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
                sizes="(max-width: 900px) 92vw, 520px"
                style={{ objectFit: "cover" }}
              />

              <div className="heroMediaOverlay">
                Conditioning · Aging · Mastery
              </div>
            </div>
          </div>
        </div>
      </div>

      <DigitalEmpowermentSection />

      <style jsx>{`
        .homeHero {
          padding-top: 44px;
          padding-bottom: 54px;
        }

        .heroGridResponsive {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(420px, 520px);
          gap: 44px;
          align-items: center;
        }

        .heroTextCol {
          min-width: 0;
        }

        .heroImageCol {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .heroTitle {
          font-size: clamp(3.8rem, 6vw, 5.8rem);
          line-height: 0.96;
          letter-spacing: -0.04em;
          margin-bottom: 20px;
        }

        .heroLead {
          max-width: 18.5ch;
          font-size: clamp(1.12rem, 1.55vw, 1.45rem);
          line-height: 1.52;
          margin-bottom: 0;
        }

        .heroButtons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 26px;
        }

        .heroBtnPrimary {
          min-width: 172px;
        }

        .heroBtnSecondary {
          min-width: 132px;
        }

        .heroPowered {
          margin-top: 16px;
          font-size: 1rem;
          opacity: 0.9;
        }

        .heroMediaOverlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: #fff;
          font-size: 1.05rem;
          letter-spacing: 0.18em;
          font-weight: 600;
          text-transform: uppercase;
          width: 78%;
          text-shadow: 0 2px 18px rgba(0, 0, 0, 0.3);
          line-height: 1.35;
        }

        .digitalSection {
          padding-top: 34px;
        }

        .digitalLead {
          max-width: 980px;
          line-height: 1.72;
          font-size: 1rem;
        }

        @media (max-width: 1100px) {
          .heroGridResponsive {
            grid-template-columns: minmax(0, 1fr) minmax(340px, 440px);
            gap: 28px;
          }

          .heroTitle {
            max-width: 10ch;
          }
        }

        @media (max-width: 900px) {
          .homeHero {
            padding-top: 24px;
            padding-bottom: 34px;
          }

          .heroGridResponsive {
            grid-template-columns: 1fr;
            gap: 26px;
          }

          .heroImageCol {
            order: 1;
          }

          .heroTextCol {
            order: 2;
          }

          .heroMediaSquare {
            width: min(92vw, 560px) !important;
            height: min(92vw, 560px) !important;
          }

          .heroTitle {
            font-size: clamp(2.8rem, 11vw, 4.2rem);
            line-height: 0.96;
            max-width: 11ch;
            margin-bottom: 16px;
          }

          .heroLead {
            max-width: none;
            font-size: 1.26rem;
            line-height: 1.6;
          }

          .heroButtons {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
            margin-top: 22px;
          }

          .heroBtnPrimary,
          .heroBtnSecondary {
            width: 100%;
            min-width: 0;
            justify-content: center;
          }

          .heroPowered {
            margin-top: 14px;
            font-size: 0.98rem;
          }

          .heroMediaOverlay {
            font-size: 0.95rem;
            letter-spacing: 0.15em;
            width: 74%;
          }
        }

        @media (max-width: 640px) {
          .homeHero {
            padding-top: 18px;
            padding-bottom: 26px;
          }

          .heroGridResponsive {
            gap: 20px;
          }

          .heroMediaSquare {
            width: 92vw !important;
            height: 92vw !important;
          }

          .heroTitle {
            font-size: clamp(2.45rem, 12vw, 3.5rem);
            line-height: 0.97;
            letter-spacing: -0.045em;
          }

          .heroLead {
            font-size: 1.18rem;
            line-height: 1.58;
          }

          .heroButtons {
            gap: 10px;
          }

          .heroMediaOverlay {
            font-size: 0.88rem;
            letter-spacing: 0.13em;
            width: 78%;
          }
        }
      `}</style>
    </Layout>
  );
}
