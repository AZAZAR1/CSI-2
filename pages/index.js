import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { COPY } from "../components/copy";

const sectionCopy = {
  digital: {
    en: {
      eyebrow: "Digital Empowerment",
      title: "Digital Empowerment for the Modern Cigar World",
      lead:
        "ICSI is developing a new generation of predictive cigar applications designed to support professionals, lounges, retailers, and serious aficionados in navigating today’s increasingly complex blend landscape. From peak-flavor calibration and humidity intelligence to structured blend discovery and comparative analysis, these tools are being built to bring greater precision, consistency, and confidence to the global cigar community.",
      cta: "Explore ICSI Applications",
      href: "/partners",
    },
    fr: {
      eyebrow: "Autonomisation numérique",
      title: "Autonomisation numérique pour le monde moderne du cigare",
      lead:
        "L’ICSI développe une nouvelle génération d’applications prédictives dédiées au cigare, conçues pour accompagner les professionnels, lounges, détaillants et aficionados avertis dans un univers de mélanges devenu toujours plus complexe. De la calibration Peak-Flavor à l’intelligence hygrométrique, en passant par la découverte structurée de mélanges et l’analyse comparative, ces outils sont conçus pour apporter davantage de précision, de constance et de confiance à la communauté mondiale du cigare.",
      cta: "Explorer les applications ICSI",
      href: "/partners",
    },
    de: {
      eyebrow: "Digitale Stärkung",
      title: "Digitale Stärkung für die moderne Zigarrenwelt",
      lead:
        "ICSI entwickelt eine neue Generation prädiktiver Zigarrenanwendungen, die Fachleute, Lounges, Händler und anspruchsvolle Aficionados dabei unterstützen sollen, sich in der heutigen zunehmend komplexen Blend-Landschaft sicher zu orientieren. Von der Peak-Flavor-Kalibrierung und Feuchtigkeitsintelligenz bis hin zur strukturierten Blend-Entdeckung und vergleichenden Analyse werden diese Tools entwickelt, um der globalen Zigarrengemeinschaft mehr Präzision, Konsistenz und Sicherheit zu bieten.",
      cta: "ICSI Anwendungen entdecken",
      href: "/partners",
    },
  },

  education: {
    en: {
      eyebrow: "Educational Excellence",
      title: "World-Class Education & Certification",
      lead:
        "ICSI offers globally relevant certification programs for cigar professionals and enthusiasts. The curriculum combines scientific rigor with sensory training to develop true cigar expertise.",
      cta: "Explore Courses",
      href: "/courses",
    },
    fr: {
      eyebrow: "Excellence pédagogique",
      title: "Formation et certification de niveau international",
      lead:
        "L’ICSI propose des programmes de certification à portée internationale pour les professionnels du cigare et les passionnés. Le programme associe rigueur scientifique et entraînement sensoriel afin de développer une véritable expertise du cigare.",
      cta: "Explorer les formations",
      href: "/courses",
    },
    de: {
      eyebrow: "Ausbildungsexzellenz",
      title: "Weltklasse-Ausbildung & Zertifizierung",
      lead:
        "ICSI bietet international relevante Zertifizierungsprogramme für Zigarrenprofis und Enthusiasten. Das Curriculum verbindet wissenschaftliche Strenge mit sensorischem Training, um echte Zigarrenexpertise zu entwickeln.",
      cta: "Kurse entdecken",
      href: "/courses",
    },
  },

  science: {
    en: {
      eyebrow: "Scientific Framework",
      title: "The Cigar Peak-Flavor System®",
      lead:
        "Our proprietary scientific framework applies thermodynamics, combustion science, blend architecture modeling, seed genetics, and terroir analysis to achieve repeatable cigar excellence.",
      cta: "Discover the System",
      href: "/system",
    },
    fr: {
      eyebrow: "Cadre scientifique",
      title: "Le Cigar Peak-Flavor System®",
      lead:
        "Notre cadre scientifique propriétaire applique la thermodynamique, la science de combustion, la modélisation de l’architecture des blends, la génétique des semences et l’analyse du terroir afin d’atteindre une excellence reproductible du cigare.",
      cta: "Découvrir le système",
      href: "/system",
    },
    de: {
      eyebrow: "Wissenschaftliches Framework",
      title: "Das Cigar Peak-Flavor System®",
      lead:
        "Unser proprietäres wissenschaftliches Framework verbindet Thermodynamik, Verbrennungswissenschaft, Blend-Architekturmodellierung, Saatgutgenetik und Terroiranalyse, um reproduzierbare Zigarrenexzellenz zu erreichen.",
      cta: "Das System entdecken",
      href: "/system",
    },
  },

  partnership: {
    en: {
      eyebrow: "Industry Partnerships",
      title: "Partnering for a Stronger Cigar Industry",
      lead:
        "ICSI collaborates with leading brands, manufacturers, lounges, retailers, educators, and organizations to advance standards, drive innovation, and shape the future of the cigar world.",
      cta: "Become a Partner",
      href: "/partners",
    },
    fr: {
      eyebrow: "Partenariats sectoriels",
      title: "Construire une industrie du cigare plus forte",
      lead:
        "L’ICSI collabore avec des marques, fabricants, lounges, détaillants, formateurs et organisations de référence afin d’élever les standards, stimuler l’innovation et contribuer à l’avenir du monde du cigare.",
      cta: "Devenir partenaire",
      href: "/partners",
    },
    de: {
      eyebrow: "Branchenpartnerschaften",
      title: "Partnerschaft für eine stärkere Zigarrenbranche",
      lead:
        "ICSI arbeitet mit führenden Marken, Herstellern, Lounges, Händlern, Ausbildern und Branchenorganisationen zusammen, um Standards zu erhöhen, Innovation voranzutreiben und die Zukunft der Zigarrenwelt mitzugestalten.",
      cta: "Partner werden",
      href: "/partners",
    },
  },
};

function EditorialSection({ number, copyKey, lang }) {
  const c = sectionCopy[copyKey][lang] || sectionCopy[copyKey].en;

  return (
    <section className="homeEditorialSection">
      <div className="homeSectionMeta">
        <span className="homeSectionNum">{number}</span>
        <span className="homeSectionEyebrow">{c.eyebrow}</span>
      </div>

      <div className="homeSectionDivider" />

      <div className="homeSectionBody">
        <h2 className="homeSectionTitle">{c.title}</h2>
        <p className="homeSectionText">{c.lead}</p>

        <Link href={c.href} locale={lang} className="homeTextCta">
          <span>{c.cta}</span>
          <span className="homeCtaArrow">→</span>
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();
  const heroCopy = COPY[lang] || COPY.en;

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

      <div className="homePage">
        <section className="homeHero">
          <div className="homeHeroImageWrap">
            <Image
              src="/img/hero.png"
              alt="Tobacco leaf macro"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />

            <div className="homeHeroShade" />

            <div className="container homeHeroContent">
              <span className="homeHeroKicker">{heroCopy.kicker}</span>
              <h1 className="homeHeroTitle">{heroCopy.h1}</h1>
              <p className="homeHeroLead">{heroCopy.lead}</p>

              <Link href="/courses" locale={lang} className="homeHeroCta">
                <span>{heroCopy.cta_courses}</span>
                <span className="homeCtaArrow">→</span>
              </Link>
            </div>
          </div>
        </section>

        <main className="container homeMain">
          <EditorialSection number="01" copyKey="digital" lang={lang} />
          <EditorialSection number="02" copyKey="education" lang={lang} />
          <EditorialSection number="03" copyKey="science" lang={lang} />
          <EditorialSection number="04" copyKey="partnership" lang={lang} />

          <section className="homeQualityNote">
            <p className="homeQualityKicker">ISO/IEC 17024 Quality System Framework</p>
            <p className="homeQualitySub">
              <i>Powered by the scientific Cigar Peak-Flavor System®</i>
            </p>
          </section>
        </main>
      </div>

      <style jsx global>{`
        /* =========================================================
           INDEX PAGE ONLY
           Global scope is intentional because this page uses child
           components and the repo has global .hero, h1, h2, .section,
           .btn, .card and .lead styles that otherwise interfere.
        ========================================================= */

        .homePage {
          background: #fff;
          color: #121214;
        }

        .homePage .homeHero {
          margin: 0;
          padding: 0;
          border: 0;
          background: none;
        }

        .homePage .homeHeroImageWrap {
          position: relative;
          width: 100%;
          height: 540px;
          overflow: hidden;
          background: #16110d;
        }

        .homePage .homeHeroShade {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(
              to right,
              rgba(0, 0, 0, 0.72) 0%,
              rgba(0, 0, 0, 0.58) 34%,
              rgba(0, 0, 0, 0.2) 66%,
              rgba(0, 0, 0, 0.08) 100%
            ),
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.08) 0%,
              rgba(0, 0, 0, 0.03) 56%,
              rgba(0, 0, 0, 0.26) 100%
            );
          pointer-events: none;
        }

        .homePage .homeHeroContent {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          color: #fff;
          padding-top: 18px;
          padding-bottom: 18px;
        }

        .homePage .homeHeroKicker {
          display: block;
          margin: 0 0 20px;
          color: #fff;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.72rem;
          line-height: 1;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-weight: 700;
          opacity: 0.86;
        }

        .homePage .homeHeroTitle {
          margin: 0 0 24px;
          max-width: 12.5ch;
          color: #fff;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(3rem, 4.6vw, 4.85rem);
          line-height: 0.98;
          letter-spacing: -0.052em;
          font-weight: 400;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.24);
        }

        .homePage .homeHeroLead {
          margin: 0 0 27px;
          max-width: 62ch;
          color: #fff;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 1rem;
          line-height: 1.62;
          font-weight: 300;
          opacity: 0.94;
          text-shadow: 0 2px 18px rgba(0, 0, 0, 0.24);
        }

        .homePage .homeHeroCta,
        .homePage .homeTextCta {
          display: inline-flex;
          align-items: center;
          gap: 24px;
          width: fit-content;
          min-height: 0;
          padding: 0 0 7px;
          border-radius: 0;
          background: transparent;
          box-shadow: none;
          text-decoration: none;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.7rem;
          line-height: 1;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 700;
          transition: opacity 0.2s ease;
        }

        .homePage .homeHeroCta {
          color: #fff;
          border: 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.72);
        }

        .homePage .homeTextCta {
          color: #121214;
          border: 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.42);
        }

        .homePage .homeHeroCta:hover,
        .homePage .homeTextCta:hover {
          opacity: 0.48;
          background: transparent;
        }

        .homePage .homeCtaArrow {
          font-size: 1.34rem;
          line-height: 0.7;
          letter-spacing: 0;
          font-weight: 300;
        }

        .homePage .homeMain {
          padding-top: 0;
          padding-bottom: 42px;
        }

        .homePage .homeEditorialSection {
          display: grid;
          grid-template-columns: 220px 1px minmax(0, 1fr);
          column-gap: 72px;
          padding: 48px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.18);
        }

        .homePage .homeSectionMeta {
          padding-top: 2px;
        }

        .homePage .homeSectionNum {
          display: block;
          margin: 0 0 24px;
          color: #121214;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(1.85rem, 2.4vw, 2.35rem);
          line-height: 1;
          letter-spacing: -0.04em;
          font-weight: 300;
          opacity: 0.9;
        }

        .homePage .homeSectionEyebrow {
          display: block;
          max-width: 24ch;
          color: #121214;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.64rem;
          line-height: 1.45;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 600;
          opacity: 0.58;
        }

        .homePage .homeSectionDivider {
          width: 1px;
          min-height: 230px;
          background: rgba(0, 0, 0, 0.08);
        }

        .homePage .homeSectionBody {
          max-width: 760px;
          padding-top: 1px;
        }

        .homePage .homeSectionTitle {
          margin: 0 0 22px;
          max-width: 22ch;
          color: #121214;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(1.85rem, 2.35vw, 2.55rem);
          line-height: 1.08;
          letter-spacing: -0.052em;
          font-weight: 400;
        }

        .homePage .homeSectionText {
          margin: 0 0 28px;
          max-width: 74ch;
          color: #121214;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.95rem;
          line-height: 1.72;
          font-weight: 300;
          opacity: 0.76;
        }

        .homePage .homeQualityNote {
          text-align: center;
          padding: 28px 0 0;
        }

        .homePage .homeQualityKicker {
          margin: 0 0 13px;
          color: #121214;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-weight: 600;
          opacity: 0.62;
        }

        .homePage .homeQualitySub {
          margin: 0;
          color: #121214;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.92rem;
          line-height: 1.6;
          opacity: 0.58;
        }

        @media (max-width: 1100px) {
          .homePage .homeHeroImageWrap {
            height: 520px;
          }

          .homePage .homeEditorialSection {
            grid-template-columns: 180px 1px minmax(0, 1fr);
            column-gap: 48px;
          }

          .homePage .homeSectionTitle {
            max-width: 24ch;
          }
        }

        @media (max-width: 820px) {
          .homePage .homeHeroImageWrap {
            height: 540px;
          }

          .homePage .homeHeroTitle {
            font-size: clamp(2.55rem, 9vw, 3.85rem);
            max-width: 12ch;
          }

          .homePage .homeHeroLead {
            font-size: 0.96rem;
            max-width: 52ch;
          }

          .homePage .homeEditorialSection {
            grid-template-columns: 1fr;
            row-gap: 22px;
            padding: 42px 0;
          }

          .homePage .homeSectionDivider {
            display: none;
          }

          .homePage .homeSectionNum {
            margin-bottom: 12px;
          }

          .homePage .homeSectionBody {
            max-width: none;
          }

          .homePage .homeSectionTitle {
            max-width: none;
          }
        }

        @media (max-width: 520px) {
          .homePage .homeHeroImageWrap {
            height: 555px;
          }

          .homePage .homeHeroContent {
            justify-content: flex-end;
            padding-bottom: 42px;
          }

          .homePage .homeHeroKicker {
            font-size: 0.6rem;
            letter-spacing: 0.22em;
          }

          .homePage .homeHeroTitle {
            font-size: clamp(2.1rem, 11vw, 2.85rem);
          }

          .homePage .homeHeroLead {
            font-size: 0.9rem;
            line-height: 1.58;
          }

          .homePage .homeHeroCta,
          .homePage .homeTextCta {
            font-size: 0.64rem;
            letter-spacing: 0.15em;
            gap: 16px;
          }

          .homePage .homeSectionTitle {
            font-size: clamp(1.65rem, 7vw, 2.15rem);
          }

          .homePage .homeSectionText {
            font-size: 0.92rem;
            line-height: 1.68;
          }

          .homePage .homeQualityKicker {
            font-size: 0.62rem;
            letter-spacing: 0.2em;
          }
        }
      `}</style>
    </Layout>
  );
}

