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
        <div className="heroShade" />

        <div className="container heroContent">
          <span className="heroKicker">{c.kicker}</span>
          <h1 className="heroTitle">{c.h1}</h1>
          <p className="heroLead">{c.lead}</p>

          <Link href="/courses" locale={lang} className="heroCta">
            <span>{c.cta_courses}</span>
            <span className="ctaArrow">â†’</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

const sectionCopy = {
  digital: {
    en: {
      eyebrow: "Digital Empowerment",
      title: "Digital Empowerment for the Modern Cigar World",
      lead:
        "ICSI is developing a new generation of predictive cigar applications designed to support professionals, lounges, retailers, and serious aficionados in navigating today's increasingly complex blend landscape. From peak-flavor calibration and humidity intelligence to structured blend discovery and comparative analysis, these tools are being built to bring greater precision, consistency, and confidence to the global cigar community.",
      cta: "Explore ICSI Applications",
      href: "/partners",
    },
    fr: {
      eyebrow: "Autonomisation numÃ©rique",
      title: "Autonomisation numÃ©rique pour le monde moderne du cigare",
      lead:
        "L'ICSI dÃ©veloppe une nouvelle gÃ©nÃ©ration d'applications prÃ©dictives dÃ©diÃ©es au cigare, conÃ§ues pour accompagner les professionnels, lounges, dÃ©taillants et aficionados avertis dans un univers de mÃ©langes devenu toujours plus complexe. De la calibration Peak-Flavor Ã  l'intelligence hygromÃ©trique, en passant par la dÃ©couverte structurÃ©e de mÃ©langes et l'analyse comparative, ces outils sont conÃ§us pour apporter davantage de prÃ©cision, de constance et de confiance Ã  la communautÃ© mondiale du cigare.",
      cta: "Explorer les applications ICSI",
      href: "/partners",
    },
    de: {
      eyebrow: "Digitale StÃ¤rkung",
      title: "Digitale StÃ¤rkung fÃ¼r die moderne Zigarrenwelt",
      lead:
        "ICSI entwickelt eine neue Generation prÃ¤diktiver Zigarrenanwendungen, die Fachleute, Lounges, HÃ¤ndler und anspruchsvolle Aficionados dabei unterstÃ¼tzen sollen, sich in der heutigen zunehmend komplexen Blend-Landschaft sicher zu orientieren. Von der Peak-Flavor-Kalibrierung und Feuchtigkeitsintelligenz bis hin zur strukturierten Blend-Entdeckung und vergleichenden Analyse werden diese Tools entwickelt, um der globalen Zigarrengemeinschaft mehr PrÃ¤zision, Konsistenz und Sicherheit zu bieten.",
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
      eyebrow: "Excellence pÃ©dagogique",
      title: "Formation et certification de niveau international",
      lead:
        "L'ICSI propose des programmes de certification Ã  portÃ©e internationale pour les professionnels du cigare et les passionnÃ©s. Le programme associe rigueur scientifique et entraÃ®nement sensoriel afin de dÃ©velopper une vÃ©ritable expertise du cigare.",
      cta: "Explorer les formations",
      href: "/courses",
    },
    de: {
      eyebrow: "Ausbildungsexzellenz",
      title: "Weltklasse-Ausbildung & Zertifizierung",
      lead:
        "ICSI bietet international relevante Zertifizierungsprogramme fÃ¼r Zigarrenprofis und Enthusiasten. Das Curriculum verbindet wissenschaftliche Strenge mit sensorischem Training, um echte Zigarrenexpertise zu entwickeln.",
      cta: "Kurse entdecken",
      href: "/courses",
    },
  },
  science: {
    en: {
      eyebrow: "Scientific Framework",
      title: "The Cigar Peak-Flavor SystemÂ®",
      lead:
        "Our proprietary scientific framework applies thermodynamics, combustion science, blend architecture modeling, seed genetics, and terroir analysis to achieve repeatable cigar excellence.",
      cta: "Discover the System",
      href: "/system",
    },
    fr: {
      eyebrow: "Cadre scientifique",
      title: "Le Cigar Peak-Flavor SystemÂ®",
      lead:
        "Notre cadre scientifique propriÃ©taire applique la thermodynamique, la science de combustion, la modÃ©lisation de l'architecture des blends, la gÃ©nÃ©tique des semences et l'analyse du terroir afin d'atteindre une excellence reproductible du cigare.",
      cta: "DÃ©couvrir le systÃ¨me",
      href: "/system",
    },
    de: {
      eyebrow: "Wissenschaftliches Framework",
      title: "Das Cigar Peak-Flavor SystemÂ®",
      lead:
        "Unser proprietÃ¤res wissenschaftliches Framework verbindet Thermodynamik, Verbrennungswissenschaft, Blend-Architekturmodellierung, Saatgutgenetik und Terroiranalyse, um reproduzierbare Zigarrenexzellenz zu erreichen.",
      cta: "Das System entdecken",
      href: "/system",
    },
  },
  partnership: {
    en: {
      eyebrow: "Industry Partnerships",
      title: "Partnering for a Stronger Cigar Industry",
      lead:
        "ICSI collaborates with leading brands, manufacturers, and organizations to advance standards, drive innovation, and shape the future of the cigar world.",
      cta: "Become a Partner",
      href: "/partners",
    },
    fr: {
      eyebrow: "Partenariats sectoriels",
      title: "Construire une industrie du cigare plus forte",
      lead:
        "L'ICSI collabore avec des marques, fabricants et organisations de rÃ©fÃ©rence afin d'Ã©lever les standards, stimuler l'innovation et contribuer Ã  l'avenir du monde du cigare.",
      cta: "Devenir partenaire",
      href: "/partners",
    },
    de: {
      eyebrow: "Branchenpartnerschaften",
      title: "Partnerschaft fÃ¼r eine stÃ¤rkere Zigarrenbranche",
      lead:
        "ICSI arbeitet mit fÃ¼hrenden Marken, Herstellern und Branchenorganisationen zusammen, um Standards zu erhÃ¶hen, Innovation voranzutreiben und die Zukunft der Zigarrenwelt mitzugestalten.",
      cta: "Partner werden",
      href: "/partners",
    },
  },
};

function EditorialSection({ num, copyKey, locale }) {
  const lang = (locale || "en").toLowerCase();
  const c = sectionCopy[copyKey][lang] || sectionCopy[copyKey].en;

  return (
    <section className="editorialSection">
      <div className="sectionMeta">
        <span className="sectionNum">{num}</span>
        <span className="sectionEyebrow">{c.eyebrow}</span>
      </div>

      <div className="sectionRule" />

      <div className="sectionBody">
        <h2 className="sectionTitle">{c.title}</h2>
        <p className="sectionText">{c.lead}</p>
        <Link href={c.href} locale={lang} className="textCta">
          <span>{c.cta}</span>
          <span className="ctaArrow">â†’</span>
        </Link>
      </div>
    </section>
  );
}

function QualityNote() {
  return (
    <section className="qualityNote">
      <p className="qualityKicker">ISO/IEC 17024 Quality System Framework</p>
      <p className="qualitySub">
        <i>Powered by the scientific Cigar Peak-Flavor SystemÂ®</i>
      </p>
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
        "Luxe suisse. AutoritÃ© scientifique. ICSI prÃ©pare les candidats, lounges et aficionados Ã  une performance aromatique reproductible.",
      path: "/",
    },
    de: {
      title: "International Cigar Sommelier Institute",
      description:
        "Schweizer Luxus. Wissenschaftliche AutoritÃ¤t. ICSI befÃ¤higt Kandidaten, Lounges und Sammler zu reproduzierbarer Peak-Flavor-Performance.",
      path: "/",
    },
  };

  const s = seo[lang] || seo.en;

  return (
    <Layout>
      <Seo title={s.title} description={s.description} path={s.path} />

      <HomeHero />

      <main className="container pageBody">
        <EditorialSection num="01" copyKey="digital" locale={lang} />
        <EditorialSection num="02" copyKey="education" locale={lang} />
        <EditorialSection num="03" copyKey="science" locale={lang} />
        <EditorialSection num="04" copyKey="partnership" locale={lang} />
        <QualityNote />
      </main>

      <style jsx>{`
        /* --- HERO ----------------------------------------------- */

        .homeHero {
          margin: 0;
          padding: 0;
          position: relative;
          display: block;
          width: 100%;
        }

        .homeHeroImageWrap {
          position: relative;
          display: block;
          width: 100%;
          height: 635px;
          overflow: hidden;
          isolation: isolate;
        }

        .heroShade {
          position: absolute;
          inset: 0;
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
          z-index: 1;
        }

        .heroContent {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          color: #fff;
          padding-top: 16px;
        }

        .heroKicker {
          display: block;
          font-size: 0.74rem;
          line-height: 1;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          font-weight: 700;
          opacity: 0.86;
          margin-bottom: 24px;
        }

        .heroTitle {
          font-size: clamp(3.5rem, 5.3vw, 5.85rem);
          line-height: 0.98;
          letter-spacing: -0.052em;
          font-weight: 400;
          margin: 0 0 30px;
          max-width: 11.7ch;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.24);
        }

        .heroLead {
          font-size: 1.05rem;
          line-height: 1.68;
          font-weight: 300;
          max-width: 55ch;
          opacity: 0.94;
          margin: 0 0 31px;
          text-shadow: 0 2px 18px rgba(0, 0, 0, 0.24);
        }

        .heroCta,
        .textCta {
          display: inline-flex;
          align-items: center;
          gap: 26px;
          width: fit-content;
          text-decoration: none;
          font-size: 0.74rem;
          line-height: 1;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 700;
          padding-bottom: 8px;
          transition: opacity 0.2s ease;
        }

        .heroCta {
          color: #fff;
          border-bottom: 1px solid rgba(255, 255, 255, 0.72);
        }

        .heroCta:hover,
        .textCta:hover {
          opacity: 0.45;
        }

        .ctaArrow {
          font-size: 1.45rem;
          line-height: 0.7;
          letter-spacing: 0;
          font-weight: 300;
        }

        /* --- PAGE BODY ----------------------------------------- */

        .pageBody {
          padding-top: 0;
          padding-bottom: 42px;
        }

        /* --- EDITORIAL SECTIONS (aligned to system.js .block pattern) -- */

        .editorialSection {
          display: grid;
          grid-template-columns: 230px 1px minmax(0, 1fr);
          column-gap: 78px;
          padding: 64px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .editorialSection:first-child {
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .sectionMeta {
          padding-top: 4px;
        }

        .sectionNum {
          display: block;
          font-size: clamp(2rem, 2.7vw, 2.65rem);
          line-height: 1;
          letter-spacing: -0.04em;
          font-weight: 300;
          opacity: 0.3;
          margin-bottom: 16px;
        }

        .sectionEyebrow {
          display: block;
          font-size: 0.68rem;
          line-height: 1.45;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 600;
          opacity: 0.42;
        }

        .sectionRule {
          width: 1px;
          min-height: 1px;
          background: transparent;
        }

        .sectionBody {
          max-width: 620px;
          padding-top: 1px;
        }

        .sectionTitle {
          font-size: clamp(1.3rem, 1.8vw, 1.7rem);
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0 0 18px;
          position: sticky;
          top: 24px;
        }

        .sectionText {
          font-size: 1rem;
          line-height: 1.78;
          font-weight: 300;
          opacity: 0.75;
          margin: 0 0 32px;
          max-width: 68ch;
        }

        .textCta {
          color: currentColor;
          border-bottom: 1px solid rgba(0, 0, 0, 0.42);
        }

        /* --- QUALITY NOTE -------------------------------------- */

        .qualityNote {
          text-align: center;
          padding: 48px 0 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          margin-top: 16px;
        }

        .qualityKicker {
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-weight: 600;
          opacity: 0.5;
          margin: 0 0 13px;
        }

        .qualitySub {
          font-size: 0.92rem;
          line-height: 1.6;
          opacity: 0.58;
          margin: 0;
        }

        /* --- RESPONSIVE ---------------------------------------- */

        @media (max-width: 1100px) {
          .homeHeroImageWrap {
            height: 600px;
          }

          .editorialSection {
            grid-template-columns: 190px 1px minmax(0, 1fr);
            column-gap: 54px;
          }
        }

        @media (max-width: 960px) {
          .editorialSection {
            grid-template-columns: 1fr 1.6fr;
            column-gap: 48px;
          }

          .sectionRule {
            display: none;
          }
        }

        @media (max-width: 820px) {
          .homeHeroImageWrap {
            height: 590px;
          }

          .heroTitle {
            font-size: clamp(2.8rem, 10vw, 4.25rem);
            max-width: 11ch;
          }

          .heroLead {
            font-size: 1rem;
            max-width: 48ch;
          }
        }

        @media (max-width: 720px) {
          .editorialSection {
            grid-template-columns: 1fr;
            row-gap: 26px;
            padding: 48px 0;
          }

          .sectionTitle {
            position: static;
          }
        }

        @media (max-width: 520px) {
          .homeHeroImageWrap {
            height: 560px;
          }

          .heroContent {
            justify-content: flex-end;
            padding-bottom: 46px;
          }

          .heroKicker {
            font-size: 0.62rem;
            letter-spacing: 0.24em;
          }

          .heroTitle {
            font-size: clamp(2.35rem, 12vw, 3.15rem);
          }

          .heroLead {
            font-size: 0.94rem;
            line-height: 1.62;
          }

          .heroCta,
          .textCta {
            font-size: 0.66rem;
            letter-spacing: 0.16em;
            gap: 18px;
          }

          .sectionTitle {
            font-size: clamp(1.7rem, 8vw, 2.3rem);
          }

          .sectionText {
            font-size: 0.94rem;
          }

          .qualityKicker {
            font-size: 0.62rem;
            letter-spacing: 0.2em;
          }
        }
      `}</style>
    </Layout>
  );
}
