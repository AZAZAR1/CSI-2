import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const pageCopy = {
  en: {
    kicker: "ICSI Professional Education",
    titleLine1: "Build expertise.",
    titleLine2: "Earn recognition.",
    titleLine3: "Progress professionally.",
    intro:
      "A structured four-level pathway designed to move learners from essential cigar knowledge to advanced professional mastery. With science, service and disciplined decision-making at its core.",
    heroCta: "Explore the four levels",

    pathwayEyebrow: "The ICSI pathway",
    pathwayTitle: "One progression. Four levels of mastery.",
    pathwayLead:
      "Each level builds on the one before it. Start with the foundations, develop professional service capability, deepen technical expertise, and progress toward advanced mastery.",

    levels: [
      {
        number: "I",
        label: "FOUNDATION & HUMIDOR SUPPORT",
        title: "ICSI Level I",
        audience: "For cigar enthusiasts, aspiring professionals and new entrants",
        body:
          "Build a disciplined foundation in cigar knowledge, care and appreciation. Level I introduces the core principles needed to understand cigars with greater confidence and consistency.",
        outcome: "Establish the language, habits and core knowledge required for further study.",
      },
      {
        number: "II",
        label: "PROFESSIONAL",
        title: "ICSI Level II",
        audience: "For hospitality, lounge and retail professionals",
        body:
          "Translate knowledge into professional service. Level II develops the practical and technical understanding required to support confident recommendations, storage decisions and a consistent guest experience.",
        outcome: "Move from personal knowledge to structured professional practice.",
      },
      {
        number: "III",
        label: "ADVANCED",
        title: "ICSI Level III",
        audience: "For experienced cigar and hospitality professionals",
        body:
          "Deepen technical and diagnostic capability across blend structure, performance, storage and service. Level III develops the analytical judgement required for more demanding professional environments.",
        outcome: "Develop advanced diagnostic reasoning and higher-level service judgement.",
      },
      {
        number: "IV",
        label: "MASTERY",
        title: "ICSI Level IV",
        audience: "For senior professionals seeking advanced mastery",
        body:
          "The highest level in the ICSI pathway. Level IV brings together scientific understanding, professional judgement and advanced application into a comprehensive standard of expertise.",
        outcome: "Demonstrate integrated mastery across knowledge, analysis and professional application.",
      },
    ],

    chooseEyebrow: "Where should I start?",
    chooseTitle: "Choose the level that matches your current experience.",
    chooseBody:
      "You do not need to guess your way into the pathway. Tell us about your background and intended use. Be it personal development, hospitality, retail or professional specialization, and ICSI will guide you to the appropriate starting level.",
    chooseCta: "Find my starting level",

    standardEyebrow: "The ICSI standard",
    standardTitle: "Education designed for professional application.",
    standardLead:
      "ICSI combines structured education with scientific reasoning and hospitality practice so that knowledge can be applied consistently.",
    pillars: [
      {
        number: "01",
        title: "Structured progression",
        body:
          "A clear four-level architecture gives learners a defined route from foundation to advanced mastery.",
      },
      {
        number: "02",
        title: "Science-led understanding",
        body:
          "The curriculum develops understanding of the physical, sensory and performance factors that influence the cigar experience.",
      },
      {
        number: "03",
        title: "Hospitality relevance",
        body:
          "Professional levels connect technical knowledge to real service decisions, consistency and guest experience.",
      },
      {
        number: "04",
        title: "Professional recognition",
        body:
          "Each stage is designed to make progression visible and to give serious learners a credible framework for development.",
      },
    ],

    finalEyebrow: "Begin your pathway",
    finalTitle: "Start at the right level. Build from there.",
    finalBody:
      "Explore the ICSI pathway or speak with us about the level best suited to your experience and professional objectives.",
    finalPrimary: "Discuss my pathway",
    finalSecondary: "Contact ICSI",

    levelCta: "Enquire about this level",
    outcomeLabel: "Progression outcome",
    seoTitle: "ICSI Professional Education | Level I–IV Certification Pathway",
    seoDescription:
      "Explore the ICSI four-level professional education pathway, progressing from foundational cigar knowledge to advanced professional mastery.",
  },

  fr: {
    kicker: "Formation professionnelle ICSI",
    titleLine1: "Développez votre expertise.",
    titleLine2: "Faites reconnaître votre niveau.",
    titleLine3: "Progressez professionnellement.",
    intro:
      "Un parcours structuré en quatre niveaux, conçu pour faire évoluer le candidat des connaissances essentielles du cigare vers une maîtrise professionnelle avancée, avec la science, le service et la rigueur de décision au cœur de l’approche.",
    heroCta: "Découvrir les quatre niveaux",

    pathwayEyebrow: "Découvrez les certifications ICSI",
    pathwayTitle: "Une progression. Quatre niveaux de maîtrise.",
    pathwayLead:
      "Chaque niveau s’appuie sur le précédent. Commencez par les fondamentaux, développez vos compétences de service professionnel, approfondissez votre expertise technique et progressez vers une maîtrise avancée.",

    levels: [
      {
        number: "I",
        label: "FONDAMENTAUX & SUPPORT HUMIDOR",
        title: "ICSI Niveau I",
        audience: "Pour les aficionados, futurs professionnels et nouveaux entrants",
        body:
          "Construisez une base rigoureuse de connaissances, de conservation et d’appréciation du cigare. Le Niveau I introduit les principes essentiels pour comprendre le cigare avec davantage de confiance et de constance.",
        outcome: "Acquérir le langage, les habitudes et les connaissances de base nécessaires pour poursuivre le parcours.",
      },
      {
        number: "II",
        label: "PROFESSIONNEL",
        title: "ICSI Niveau II",
        audience: "Pour les professionnels de l’hospitality, des lounges et du retail",
        body:
          "Transformez les connaissances en pratique professionnelle. Le Niveau II développe la compréhension pratique et technique nécessaire pour soutenir des recommandations fiables, de bonnes décisions de conservation et une expérience client cohérente.",
        outcome: "Passer d’une connaissance personnelle à une pratique professionnelle structurée.",
      },
      {
        number: "III",
        label: "AVANCÉ",
        title: "ICSI Niveau III",
        audience: "Pour les professionnels expérimentés du cigare et de l’hospitality",
        body:
          "Approfondissez vos capacités techniques et diagnostiques autour de la structure des blends, de la performance, de la conservation et du service. Le Niveau III développe le jugement analytique nécessaire dans les environnements professionnels plus exigeants.",
        outcome: "Développer un raisonnement diagnostique avancé et un niveau supérieur de jugement de service.",
      },
      {
        number: "IV",
        label: "MAÎTRISE",
        title: "ICSI Niveau IV",
        audience: "Pour les professionnels seniors recherchant une maîtrise avancée",
        body:
          "Le niveau le plus élevé du parcours ICSI. Le Niveau IV réunit compréhension scientifique, jugement professionnel et application avancée dans un standard global d’expertise.",
        outcome: "Démontrer une maîtrise intégrée des connaissances, de l’analyse et de l’application professionnelle.",
      },
    ],

    chooseEyebrow: "Par où commencer ?",
    chooseTitle: "Choisissez le niveau correspondant à votre expérience actuelle.",
    chooseBody:
      "Vous n’avez pas à déterminer seul votre point d’entrée. Présentez-nous votre parcours et votre objectif: développement personnel, hospitality, retail ou spécialisation professionnelle. L’ICSI vous orientera vers le niveau de départ approprié.",
    chooseCta: "Trouver mon niveau de départ",

    standardEyebrow: "Le standard ICSI",
    standardTitle: "Une formation conçue pour l’application professionnelle.",
    standardLead:
      "L’ICSI associe formation structurée, raisonnement scientifique et pratique de l’hospitality afin que les connaissances puissent être appliquées avec permanance.",
    pillars: [
      {
        number: "01",
        title: "Progression structurée",
        body:
          "Une architecture claire en quatre niveaux donne à chaque apprenant un parcours défini, des fondamentaux jusqu’à la maîtrise avancée.",
      },
      {
        number: "02",
        title: "Compréhension scientifique",
        body:
          "Le cursus développe la compréhension des facteurs physiques, sensoriels et de performance qui influencent l’expérience du cigare.",
      },
      {
        number: "03",
        title: "Pertinence hospitality",
        body:
          "Les niveaux professionnels relient les connaissances techniques aux décisions de service, à la constance et à l’expérience client.",
      },
      {
        number: "04",
        title: "Reconnaissance professionnelle",
        body:
          "Chaque étape rend la progression visible et offre aux apprenants engagés un cadre crédible de développement.",
      },
    ],

    finalEyebrow: "Commencez votre parcours",
    finalTitle: "Commencez au bon niveau. Progressez ensuite.",
    finalBody:
      "Découvrez le parcours ICSI ou échangez avec nous sur le niveau le mieux adapté à votre expérience et à vos objectifs professionnels.",
    finalPrimary: "Discuter de mon parcours",
    finalSecondary: "Contacter l’ICSI",

    levelCta: "Se renseigner sur ce niveau",
    outcomeLabel: "Objectif de progression",
    seoTitle: "Formation Professionnelle ICSI | Parcours Niveau I–IV",
    seoDescription:
      "Découvrez le parcours de formation professionnelle ICSI en quatre niveaux, des fondamentaux du cigare jusqu’à la maîtrise professionnelle avancée.",
  },

  de: {
    kicker: "ICSI Berufsausbildung",
    titleLine1: "Expertise aufbauen.",
    titleLine2: "Kompetenz sichtbar machen.",
    titleLine3: "Beruflich weiterentwickeln.",
    intro:
      "Ein strukturierter vierstufiger Bildungsweg, der von grundlegendem Zigarrenwissen bis zu fortgeschrittener professioneller Meisterschaft führt — mit Wissenschaft, Service und disziplinierter Entscheidungsfindung im Mittelpunkt.",
    heroCta: "Die vier Stufen entdecken",

    pathwayEyebrow: "Der ICSI Bildungsweg",
    pathwayTitle: "Ein Weg. Vier Stufen der Meisterschaft.",
    pathwayLead:
      "Jede Stufe baut auf der vorherigen auf. Beginnen Sie mit den Grundlagen, entwickeln Sie professionelle Servicekompetenz, vertiefen Sie Ihr technisches Wissen und arbeiten Sie auf fortgeschrittene Meisterschaft hin.",

    levels: [
      {
        number: "I",
        label: "UNTERSTUTZUNG FUR HUMIDORE & DEREN BASIS",
        title: "ICSI Level I",
        audience: "Für Aficionados, angehende Fachkräfte und Neueinsteiger",
        body:
          "Schaffen Sie eine fundierte Basis für Zigarrenwissen, Pflege und Wertschätzung. Level I vermittelt die zentralen Prinzipien, um Zigarren mit mehr Sicherheit und Konsequenz zu verstehen.",
        outcome: "Sprache, Gewohnheiten und Grundwissen für die weitere Ausbildung aufbauen.",
      },
      {
        number: "II",
        label: "PROFESSIONELL",
        title: "ICSI Level II",
        audience: "Für Hospitality-, Lounge- und Retail-Profis",
        body:
          "Übertragen Sie Wissen in professionelle Praxis. Level II entwickelt das praktische und technische Verständnis für fundierte Empfehlungen, Lagerentscheidungen und ein konsistentes Gästeerlebnis.",
        outcome: "Vom persönlichen Wissen zu strukturierter professioneller Praxis übergehen.",
      },
      {
        number: "III",
        label: "FORTGESCHRITTEN",
        title: "ICSI Level III",
        audience: "Für erfahrene Zigarren- und Hospitality-Profis",
        body:
          "Vertiefen Sie technische und diagnostische Fähigkeiten in den Bereichen Blend-Struktur, Performance, Lagerung und Service. Level III entwickelt das analytische Urteilsvermögen für anspruchsvollere professionelle Umgebungen.",
        outcome: "Fortgeschrittenes diagnostisches Denken und höheres Serviceurteil entwickeln.",
      },
      {
        number: "IV",
        label: "MEISTERSCHAFT",
        title: "ICSI Level IV",
        audience: "Für erfahrene Fachkräfte mit dem Ziel fortgeschrittener Meisterschaft",
        body:
          "Die höchste Stufe des ICSI Bildungswegs. Level IV verbindet wissenschaftliches Verständnis, professionelles Urteilsvermögen und fortgeschrittene Anwendung zu einem umfassenden Standard der Expertise.",
        outcome: "Integrierte Meisterschaft in Wissen, Analyse und professioneller Anwendung nachweisen.",
      },
    ],

    chooseEyebrow: "Wo sollte ich beginnen?",
    chooseTitle: "Wählen Sie die Stufe, die zu Ihrer heutigen Erfahrung passt.",
    chooseBody:
      "Sie müssen Ihren Einstieg nicht allein bestimmen. Teilen Sie uns Ihren Hintergrund und Ihr Ziel mit — persönliche Entwicklung, Hospitality, Retail oder professionelle Spezialisierung — und ICSI empfiehlt Ihnen die passende Einstiegsstufe.",
    chooseCta: "Meine Einstiegsstufe finden",

    standardEyebrow: "Der ICSI Standard",
    standardTitle: "Ausbildung für die professionelle Anwendung.",
    standardLead:
      "ICSI verbindet strukturierte Ausbildung mit wissenschaftlichem Denken und Hospitality-Praxis, damit Wissen konsequent angewendet — und nicht nur erinnert — werden kann.",
    pillars: [
      {
        number: "01",
        title: "Strukturierte Entwicklung",
        body:
          "Eine klare vierstufige Architektur schafft einen definierten Weg von den Grundlagen bis zur fortgeschrittenen Meisterschaft.",
      },
      {
        number: "02",
        title: "Wissenschaftliches Verständnis",
        body:
          "Das Curriculum entwickelt ein Verständnis der physischen, sensorischen und leistungsbezogenen Faktoren, die das Zigarrenerlebnis beeinflussen.",
      },
      {
        number: "03",
        title: "Hospitality-Relevanz",
        body:
          "Die professionellen Stufen verbinden technisches Wissen mit realen Serviceentscheidungen, Konsistenz und Gästeerlebnis.",
      },
      {
        number: "04",
        title: "Professionelle Anerkennung",
        body:
          "Jede Stufe macht Entwicklung sichtbar und bietet engagierten Lernenden einen glaubwürdigen Rahmen für ihre Weiterentwicklung.",
      },
    ],

    finalEyebrow: "Beginnen Sie Ihren Weg",
    finalTitle: "Auf der richtigen Stufe beginnen. Darauf aufbauen.",
    finalBody:
      "Entdecken Sie den ICSI Bildungsweg oder sprechen Sie mit uns über die Stufe, die am besten zu Ihrer Erfahrung und Ihren beruflichen Zielen passt.",
    finalPrimary: "Meinen Bildungsweg besprechen",
    finalSecondary: "ICSI kontaktieren",

    levelCta: "Diese Stufe anfragen",
    outcomeLabel: "Entwicklungsziel",
    seoTitle: "ICSI Berufsausbildung | Level I–IV Bildungsweg",
    seoDescription:
      "Entdecken Sie den vierstufigen ICSI Bildungsweg von grundlegendem Zigarrenwissen bis zu fortgeschrittener professioneller Meisterschaft.",
  },
};

function LevelCard({ level, c, lang }) {
  return (
    <article className={`courseLevelCard level-${level.number.toLowerCase()}`}>
      <div className="courseLevelTop">
        <div className="courseLevelNumber">{level.number}</div>
        <div className="courseLevelMeta">
          <span className="courseLevelLabel">{level.label}</span>
          <span className="courseLevelAudience">{level.audience}</span>
        </div>
      </div>

      <div className="courseLevelBody">
        <h3>{level.title}</h3>
        <p>{level.body}</p>

        <div className="courseLevelOutcome">
          <span>{c.outcomeLabel}</span>
          <p>{level.outcome}</p>
        </div>
      </div>

      <Link
        href={{ pathname: "/contact", query: { program: `level-${level.number.toLowerCase()}` } }}
        locale={lang}
        className="courseLevelCta"
      >
        <span>{c.levelCta}</span>
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

export default function Courses() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();
  const c = pageCopy[lang] || pageCopy.en;

  return (
    <Layout>
      <Seo title={c.seoTitle} description={c.seoDescription} path="/courses" />

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
                "A structured four-level professional education pathway from foundational cigar knowledge to advanced professional mastery.",
              hasCourse: [
                { "@type": "Course", name: "ICSI Level I" },
                { "@type": "Course", name: "ICSI Level II" },
                { "@type": "Course", name: "ICSI Level III" },
                { "@type": "Course", name: "ICSI Level IV" },
              ],
            }),
          }}
        />
      </Head>

      <div className={`coursesPage lang-${lang}`}>
        <section className="coursesHero">
          <div className="container coursesHeroInner">
            <div className="coursesHeroGrid">
              <div className="coursesHeroMeta">
                <span className="coursesEyebrow">{c.kicker}</span>
                <span className="coursesHeroRule" aria-hidden="true" />
              </div>

              <div className="coursesHeroContent">
                <h1>
                  <span>{c.titleLine1}</span>
                  <span>{c.titleLine2}</span>
                  <em>{c.titleLine3}</em>
                </h1>
                <p>{c.intro}</p>

                <a href="#levels" className="coursesPrimaryCta">
                  <span>{c.heroCta}</span>
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="coursesProgressionBand" aria-label={c.pathwayTitle}>
          <div className="container coursesProgressionInner">
            {c.levels.map((level, index) => (
              <div className="coursesProgressionStep" key={level.number}>
                <span className="progressionNumber">{level.number}</span>
                <span className="progressionLabel">{level.label}</span>
                {index < c.levels.length - 1 && (
                  <span className="progressionArrow" aria-hidden="true">→</span>
                )}
              </div>
            ))}
          </div>
        </section>

        <main>
          <section className="coursesPathwayIntro">
            <div className="container coursesEditorialGrid">
              <div className="coursesSectionMeta">
                <span className="coursesEyebrow crimson">{c.pathwayEyebrow}</span>
                <span className="coursesSectionIndex">01</span>
              </div>

              <div className="coursesSectionContent">
                <h2>{c.pathwayTitle}</h2>
                <p className="coursesSectionLead">{c.pathwayLead}</p>
              </div>
            </div>
          </section>

          <section id="levels" className="coursesLevelsSection">
            <div className="container">
              <div className="coursesLevelGrid">
                {c.levels.map((level) => (
                  <LevelCard key={level.number} level={level} c={c} lang={lang} />
                ))}
              </div>
            </div>
          </section>

          <section className="coursesChooser">
            <div className="container coursesChooserGrid">
              <div>
                <span className="coursesEyebrow gold">{c.chooseEyebrow}</span>
                <h2>{c.chooseTitle}</h2>
              </div>

              <div className="coursesChooserBody">
                <p>{c.chooseBody}</p>
                <Link
                  href={{ pathname: "/contact", query: { inquiry: "education-pathway" } }}
                  locale={lang}
                  className="coursesLightCta"
                >
                  <span>{c.chooseCta}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </section>

          <section className="coursesStandard">
            <div className="container coursesEditorialGrid">
              <div className="coursesSectionMeta">
                <span className="coursesEyebrow crimson">{c.standardEyebrow}</span>
                <span className="coursesSectionIndex">02</span>
              </div>

              <div className="coursesSectionContent">
                <h2>{c.standardTitle}</h2>
                <p className="coursesSectionLead">{c.standardLead}</p>

                <div className="coursesPillars">
                  {c.pillars.map((pillar) => (
                    <article className="coursesPillar" key={pillar.number}>
                      <span>{pillar.number}</span>
                      <h3>{pillar.title}</h3>
                      <p>{pillar.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="coursesFinalCta">
            <div className="container coursesFinalGrid">
              <div>
                <span className="coursesEyebrow light">{c.finalEyebrow}</span>
                <h2>{c.finalTitle}</h2>
              </div>

              <div className="coursesFinalBody">
                <p>{c.finalBody}</p>
                <div className="coursesFinalActions">
                  <Link
                    href={{ pathname: "/contact", query: { inquiry: "education-pathway" } }}
                    locale={lang}
                    className="coursesFinalPrimary"
                  >
                    <span>{c.finalPrimary}</span>
                    <span aria-hidden="true">→</span>
                  </Link>

                  <Link href="/contact" locale={lang} className="coursesFinalSecondary">
                    <span>{c.finalSecondary}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <style jsx global>{`
        .coursesPage {
          --ivory: #faf4e8;
          --ink: #16161f;
          --crimson: #c0242f;
          --bordeaux: #601818;
          --gold: #c8a24a;
          --light-gold: #e4cb8e;
          background: var(--ivory);
          color: var(--ink);
        }

        .coursesPage .coursesHero {
          background: var(--ivory);
          border-top: 1px solid rgba(22, 22, 31, 0.1);
        }

        .coursesPage .coursesHeroInner {
          padding-top: clamp(56px, 7vw, 105px);
          padding-bottom: clamp(70px, 9vw, 130px);
        }

        .coursesPage .coursesHeroGrid {
          display: grid;
          grid-template-columns: minmax(180px, 0.32fr) minmax(0, 1fr);
          gap: clamp(48px, 7vw, 110px);
          align-items: start;
        }

        .coursesPage .coursesHeroMeta {
          padding-top: 12px;
        }

        .coursesPage .coursesEyebrow {
          display: block;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 0.68rem;
          line-height: 1.4;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--ink);
        }

        .coursesPage .coursesEyebrow.crimson {
          color: var(--crimson);
        }

        .coursesPage .coursesEyebrow.gold {
          color: var(--light-gold);
        }

        .coursesPage .coursesEyebrow.light {
          color: var(--light-gold);
        }

        .coursesPage .coursesHeroRule {
          display: block;
          width: 56px;
          height: 1px;
          margin-top: 26px;
          background: var(--crimson);
        }

        .coursesPage .coursesHeroContent h1,
        .coursesPage .coursesSectionContent h2,
        .coursesPage .coursesChooser h2,
        .coursesPage .coursesFinalCta h2,
        .coursesPage .courseLevelBody h3,
        .coursesPage .coursesPillar h3 {
          font-family: "Playfair Display", Georgia, serif;
          font-weight: 400;
        }

        .coursesPage .coursesHeroContent h1 {
          margin: 0;
          max-width: 12ch;
          font-size: clamp(3.25rem, 6vw, 6.7rem);
          line-height: 0.92;
          letter-spacing: -0.055em;
          color: var(--ink);
        }

        .coursesPage .coursesHeroContent h1 span,
        .coursesPage .coursesHeroContent h1 em {
          display: block;
        }

        .coursesPage .coursesHeroContent h1 em {
          margin-top: 0.08em;
          color: var(--bordeaux);
          font-weight: 400;
        }

        .coursesPage .coursesHeroContent > p {
          max-width: 760px;
          margin: 42px 0 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: clamp(1rem, 1.25vw, 1.18rem);
          line-height: 1.75;
          font-weight: 300;
          color: rgba(22, 22, 31, 0.76);
        }

        .coursesPage .coursesPrimaryCta {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 34px;
          min-width: 300px;
          margin-top: 36px;
          padding: 18px 20px;
          border: 1px solid var(--ink);
          color: var(--ink);
          background: transparent;
          text-decoration: none;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .coursesPage .coursesPrimaryCta:hover {
          background: var(--ink);
          color: var(--ivory);
        }

        .coursesPage .coursesProgressionBand {
          background: var(--ink);
          color: var(--ivory);
        }

        .coursesPage .coursesProgressionInner {
          min-height: 112px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          align-items: stretch;
        }

        .coursesPage .coursesProgressionStep {
          position: relative;
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 28px 34px;
          border-left: 1px solid rgba(250, 244, 232, 0.16);
        }

        .coursesPage .coursesProgressionStep:last-child {
          border-right: 1px solid rgba(250, 244, 232, 0.16);
        }

        .coursesPage .progressionNumber {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 2.2rem;
          line-height: 1;
          color: var(--light-gold);
        }

        .coursesPage .progressionLabel {
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 0.61rem;
          line-height: 1.4;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 700;
          color: rgba(250, 244, 232, 0.72);
        }

        .coursesPage .progressionArrow {
          position: absolute;
          right: -9px;
          z-index: 2;
          font-size: 1.25rem;
          color: var(--gold);
        }

        .coursesPage .coursesPathwayIntro,
        .coursesPage .coursesStandard {
          padding: clamp(76px, 9vw, 130px) 0;
        }

        .coursesPage .coursesEditorialGrid {
          display: grid;
          grid-template-columns: minmax(170px, 0.3fr) minmax(0, 1fr);
          gap: clamp(48px, 7vw, 110px);
        }

        .coursesPage .coursesSectionMeta {
          position: relative;
          padding-top: 8px;
        }

        .coursesPage .coursesSectionIndex {
          display: block;
          margin-top: 30px;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 2rem;
          color: var(--gold);
        }

        .coursesPage .coursesSectionContent h2,
        .coursesPage .coursesChooser h2,
        .coursesPage .coursesFinalCta h2 {
          margin: 0;
          max-width: 17ch;
          font-size: clamp(2.35rem, 4.2vw, 4.8rem);
          line-height: 0.98;
          letter-spacing: -0.045em;
        }

        .coursesPage .coursesSectionLead {
          max-width: 760px;
          margin: 32px 0 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: clamp(1rem, 1.2vw, 1.14rem);
          line-height: 1.75;
          font-weight: 300;
          color: rgba(22, 22, 31, 0.74);
        }

        .coursesPage .coursesLevelsSection {
          padding: 0 0 clamp(86px, 10vw, 145px);
        }

        .coursesPage .coursesLevelGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid rgba(22, 22, 31, 0.18);
          border-left: 1px solid rgba(22, 22, 31, 0.18);
        }

        .coursesPage .courseLevelCard {
          min-height: 520px;
          display: flex;
          flex-direction: column;
          padding: clamp(30px, 4vw, 54px);
          border-right: 1px solid rgba(22, 22, 31, 0.18);
          border-bottom: 1px solid rgba(22, 22, 31, 0.18);
          background: rgba(250, 244, 232, 0.7);
        }

        .coursesPage .courseLevelCard.level-iv {
          background: var(--bordeaux);
          color: var(--ivory);
        }

        .coursesPage .courseLevelTop {
          display: grid;
          grid-template-columns: 78px 1fr;
          gap: 22px;
          align-items: start;
        }

        .coursesPage .courseLevelNumber {
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(3rem, 5vw, 5.2rem);
          line-height: 0.85;
          color: var(--gold);
        }

        .coursesPage .courseLevelLabel {
          display: block;
          margin-bottom: 14px;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 800;
          color: var(--crimson);
        }

        .coursesPage .courseLevelCard.level-iv .courseLevelLabel {
          color: var(--light-gold);
        }

        .coursesPage .courseLevelAudience {
          display: block;
          max-width: 36ch;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 0.78rem;
          line-height: 1.55;
          font-weight: 500;
          color: rgba(22, 22, 31, 0.62);
        }

        .coursesPage .courseLevelCard.level-iv .courseLevelAudience {
          color: rgba(250, 244, 232, 0.66);
        }

        .coursesPage .courseLevelBody {
          margin-top: 52px;
        }

        .coursesPage .courseLevelBody h3 {
          margin: 0;
          font-size: clamp(2rem, 3vw, 3.35rem);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .coursesPage .courseLevelBody > p {
          max-width: 58ch;
          margin: 26px 0 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 0.96rem;
          line-height: 1.72;
          font-weight: 300;
          color: rgba(22, 22, 31, 0.72);
        }

        .coursesPage .courseLevelCard.level-iv .courseLevelBody > p {
          color: rgba(250, 244, 232, 0.76);
        }

        .coursesPage .courseLevelOutcome {
          margin-top: 32px;
          padding-top: 22px;
          border-top: 1px solid rgba(22, 22, 31, 0.14);
        }

        .coursesPage .courseLevelCard.level-iv .courseLevelOutcome {
          border-color: rgba(250, 244, 232, 0.2);
        }

        .coursesPage .courseLevelOutcome > span {
          display: block;
          margin-bottom: 9px;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 0.58rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 800;
          color: var(--crimson);
        }

        .coursesPage .courseLevelCard.level-iv .courseLevelOutcome > span {
          color: var(--light-gold);
        }

        .coursesPage .courseLevelOutcome p {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 0.86rem;
          line-height: 1.65;
          color: rgba(22, 22, 31, 0.68);
        }

        .coursesPage .courseLevelCard.level-iv .courseLevelOutcome p {
          color: rgba(250, 244, 232, 0.72);
        }

        .coursesPage .courseLevelCta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-top: auto;
          padding-top: 34px;
          color: var(--ink);
          text-decoration: none;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 800;
          border-top: 1px solid rgba(22, 22, 31, 0.2);
        }

        .coursesPage .courseLevelCard.level-iv .courseLevelCta {
          color: var(--ivory);
          border-color: rgba(250, 244, 232, 0.24);
        }

        .coursesPage .courseLevelCta:hover {
          color: var(--crimson);
        }

        .coursesPage .courseLevelCard.level-iv .courseLevelCta:hover {
          color: var(--light-gold);
        }

        .coursesPage .coursesChooser {
          padding: clamp(70px, 8vw, 115px) 0;
          background: var(--ink);
          color: var(--ivory);
        }

        .coursesPage .coursesChooserGrid,
        .coursesPage .coursesFinalGrid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(340px, 0.65fr);
          gap: clamp(60px, 9vw, 140px);
          align-items: end;
        }

        .coursesPage .coursesChooser h2 {
          margin-top: 24px;
          color: var(--ivory);
        }

        .coursesPage .coursesChooserBody p,
        .coursesPage .coursesFinalBody p {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 0.98rem;
          line-height: 1.75;
          font-weight: 300;
        }

        .coursesPage .coursesChooserBody p {
          color: rgba(250, 244, 232, 0.72);
        }

        .coursesPage .coursesLightCta {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          min-width: 280px;
          margin-top: 30px;
          padding: 17px 0 10px;
          border-bottom: 1px solid var(--light-gold);
          color: var(--ivory);
          text-decoration: none;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .coursesPage .coursesLightCta:hover {
          color: var(--light-gold);
        }

        .coursesPage .coursesPillars {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: 66px;
          border-top: 1px solid rgba(22, 22, 31, 0.16);
          border-left: 1px solid rgba(22, 22, 31, 0.16);
        }

        .coursesPage .coursesPillar {
          min-height: 260px;
          padding: 30px;
          border-right: 1px solid rgba(22, 22, 31, 0.16);
          border-bottom: 1px solid rgba(22, 22, 31, 0.16);
        }

        .coursesPage .coursesPillar > span {
          display: block;
          margin-bottom: 42px;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.16em;
          font-weight: 800;
          color: var(--crimson);
        }

        .coursesPage .coursesPillar h3 {
          margin: 0;
          font-size: clamp(1.45rem, 2.1vw, 2.05rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
        }

        .coursesPage .coursesPillar p {
          margin: 18px 0 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 0.88rem;
          line-height: 1.68;
          font-weight: 300;
          color: rgba(22, 22, 31, 0.68);
        }

        .coursesPage .coursesFinalCta {
          padding: clamp(72px, 9vw, 125px) 0;
          background: var(--bordeaux);
          color: var(--ivory);
        }

        .coursesPage .coursesFinalCta h2 {
          margin-top: 24px;
          color: var(--ivory);
        }

        .coursesPage .coursesFinalBody p {
          color: rgba(250, 244, 232, 0.75);
        }

        .coursesPage .coursesFinalActions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 30px;
        }

        .coursesPage .coursesFinalPrimary,
        .coursesPage .coursesFinalSecondary {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          min-width: 220px;
          padding: 16px 18px;
          text-decoration: none;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 0.64rem;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          font-weight: 800;
        }

        .coursesPage .coursesFinalPrimary {
          background: var(--ivory);
          color: var(--bordeaux);
          border: 1px solid var(--ivory);
        }

        .coursesPage .coursesFinalSecondary {
          color: var(--ivory);
          border: 1px solid rgba(250, 244, 232, 0.5);
        }

        .coursesPage .coursesFinalPrimary:hover {
          background: var(--light-gold);
          border-color: var(--light-gold);
        }

        .coursesPage .coursesFinalSecondary:hover {
          border-color: var(--light-gold);
          color: var(--light-gold);
        }

        @media (max-width: 1000px) {
          .coursesPage .coursesHeroGrid,
          .coursesPage .coursesEditorialGrid {
            grid-template-columns: 150px minmax(0, 1fr);
            gap: 48px;
          }

          .coursesPage .coursesProgressionStep {
            padding: 24px 20px;
          }

          .coursesPage .coursesChooserGrid,
          .coursesPage .coursesFinalGrid {
            grid-template-columns: 1fr 1fr;
            gap: 56px;
          }
        }

        @media (max-width: 760px) {
          .coursesPage .coursesHeroGrid,
          .coursesPage .coursesEditorialGrid,
          .coursesPage .coursesChooserGrid,
          .coursesPage .coursesFinalGrid {
            grid-template-columns: 1fr;
            gap: 34px;
          }

          .coursesPage .coursesHeroMeta {
            display: flex;
            align-items: center;
            gap: 20px;
          }

          .coursesPage .coursesHeroRule {
            width: 42px;
            margin-top: 0;
          }

          .coursesPage .coursesHeroContent h1 {
            max-width: 11ch;
            font-size: clamp(2.8rem, 12vw, 4.6rem);
          }

          .coursesPage .coursesHeroContent > p {
            margin-top: 30px;
          }

          .coursesPage .coursesProgressionInner {
            grid-template-columns: repeat(2, 1fr);
          }

          .coursesPage .coursesProgressionStep:nth-child(3) {
            border-top: 1px solid rgba(250, 244, 232, 0.16);
          }

          .coursesPage .coursesProgressionStep:nth-child(4) {
            border-top: 1px solid rgba(250, 244, 232, 0.16);
          }

          .coursesPage .progressionArrow {
            display: none;
          }

          .coursesPage .coursesLevelGrid,
          .coursesPage .coursesPillars {
            grid-template-columns: 1fr;
          }

          .coursesPage .courseLevelCard {
            min-height: 0;
          }

          .coursesPage .coursesChooserGrid,
          .coursesPage .coursesFinalGrid {
            align-items: start;
          }
        }

        @media (max-width: 520px) {
          .coursesPage .coursesHeroInner {
            padding-top: 48px;
            padding-bottom: 66px;
          }

          .coursesPage .coursesPrimaryCta,
          .coursesPage .coursesLightCta {
            width: 100%;
            min-width: 0;
          }

          .coursesPage .coursesProgressionInner {
            grid-template-columns: 1fr;
          }

          .coursesPage .coursesProgressionStep {
            border-right: 1px solid rgba(250, 244, 232, 0.16);
            border-top: 1px solid rgba(250, 244, 232, 0.16);
          }

          .coursesPage .coursesProgressionStep:first-child {
            border-top: 0;
          }

          .coursesPage .courseLevelTop {
            grid-template-columns: 58px 1fr;
          }

          .coursesPage .courseLevelBody {
            margin-top: 38px;
          }

          .coursesPage .coursesFinalPrimary,
          .coursesPage .coursesFinalSecondary {
            width: 100%;
          }
        }
      `}</style>
    </Layout>
  );
}

