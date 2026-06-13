import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

const copy = {
  en: {
    kicker: "Institutional Profile",
    title: "About ICSI",
    intro:
      "The International Cigar Sommelier Institute (ICSI) is a Switzerland-based institution dedicated to establishing professional standards in the evaluation, service, and understanding of premium cigars. Built on Swiss principles of precision and rigor, ICSI introduces a structured, scientific framework to an industry historically shaped by informal knowledge and tradition.",

    qualityEyebrow: "Quality System",
    qualityTitle: "Quality Assurance Charter",
    qualityBody: [
      "ICSI is built upon a structured quality framework aligned with ISO/IEC 17024. This framework defines clear domains of competence across sensory analysis, combustion dynamics, humidity optimization, and client advisory, ensuring that certification reflects real-world professional capability.",
      "The Institute applies a rigorous methodology combining job-task analysis, competence mapping, and multi-layered assessment systems integrating theoretical knowledge, sensory evaluation, and applied reasoning. Each certification outcome is measurable, auditable, and directly linked to industry practice.",
      "To ensure long-term credibility, ICSI maintains continuous validation mechanisms including expert review, industry consultation, and performance-based feedback loops. Certification schemes are systematically reviewed and refined in line with evolving cigar production techniques, storage technologies, and luxury service standards.",
      "ICSI operates under a quality management approach designed for transparency, consistency, and traceability, with a formal ISO-aligned certification pathway currently in development.",
    ],

    founderEyebrow: "Founder",
    founderTitle: "Anthony Azar",
    founderBody:
      "Anthony Azar is emerging as an authority in the science and appreciation of premium cigars. His work sits at the intersection of craftsmanship, science, and modern luxury. Redefining how cigars are understood, evaluated, and experienced. Educated at Imperial College London, Anthony holds a Master of Engineering (M.Eng.) specializing in Thermodynamics & Combustion Science and a Master of Business Administration (MBA), with a focus on the design and development of boosting technologies for high-performance engines. During his distinguished 25-year career as a corporate executive, he led global initiatives in advanced training systems, operational excellence and digital transformation. His lifelong passion for cigars, spanning more than three decades, led to the creation of the Cigar Peak-Flavor System, a proprietary scientific framework designed to unlock optimal flavour expression through thermodynamic balance. Now embedded in a suite of digital applications, this system offers a new standard for performance and consistency across all cigar blends. Through his institute, Anthony curates a refined educational experience for discerning aficionados and professionals, elevating cigar appreciation into a discipline of precision, insight, and mastery.",

    companyEyebrow: "Corporate Structure",
    companyTitle: "CreateDeliverCapture Sàrl",
    footer:
      "ICSI is part of CreateDeliverCapture Sàrl, a Geneva-based technical consultancy.",

    seoTitle: "About ICSI | International Cigar Sommelier Institute",
    seoDescription:
      "Discover ICSI, a Swiss institution bringing scientific rigor, structured certification, and ISO-aligned quality frameworks to the world of premium cigars.",
  },

  fr: {
    kicker: "Profil institutionnel",
    title: "À propos de l’ICSI",
    intro:
      "L’International Cigar Sommelier Institute (ICSI) est une institution basée en Suisse dédiée à l’établissement de standards professionnels dans l’évaluation, le service et la compréhension des cigares premium. Fondé sur des principes suisses de précision et de rigueur, l’ICSI introduit un cadre scientifique structuré dans un secteur historiquement dominé par des pratiques informelles.",

    qualityEyebrow: "Système qualité",
    qualityTitle: "Système de qualité",
    qualityBody: [
      "ICSI est fondé sur un cadre de qualité structuré conforme à ISO/IEC 17024. Ce cadre définit des domaines de compétence clairs en analyse sensorielle, dynamique de combustion, optimisation de l'humidité et conseil client, garantissant que la certification reflète la compétence professionnelle dans le monde réel.",
      "L'Institut applique une méthodologie rigoureuse combinant l'analyse des tâches professionnelles, la cartographie des compétences et des systèmes d'évaluation à plusieurs niveaux intégrant les connaissances théoriques, l'évaluation sensorielle et le raisonnement appliqué. Chaque résultat de certification est mesurable, vérifiable et directement lié à la pratique industrielle.",
      "Pour garantir une crédibilité à long terme, l'ICSI maintient des mécanismes de validation continus incluant l'examen par des experts, la consultation de l'industrie et des boucles de rétroaction basées sur la performance. Les régimes de certification sont systématiquement examinés et affinés en fonction de l'évolution des techniques de production de cigares, des technologies de stockage et des normes de service de luxe.",
      "ICSI fonctionne selon une approche de gestion de la qualité conçue pour la transparence, la cohérence et la traçabilité, avec un parcours de certification formel aligné sur les normes ISO actuellement en cours de développement.",
    ],

    founderEyebrow: "Fondateur",
    founderTitle: "Anthony Azar",
    founderBody:
      "Anthony Azar s’impose progressivement comme une référence dans la science et l’appréciation des cigares haut de gamme. Son travail se situe à l’intersection de l’artisanat, de la science et du luxe contemporain, redéfinissant la manière dont les cigares sont compris, évalués et dégustés. Diplômé de l’Imperial College London, Anthony est titulaire d’un Master of Engineering (M.Eng.) spécialisé en thermodynamique et science de la combustion, ainsi que d’un Master of Business Administration (MBA). Dans le cadre de ses études d’ingénierie, il s’est spécialisé dans la conception et le développement de technologies de suralimentation destinées aux moteurs haute performance. Au cours d’une carrière internationale de plus de vingt-cinq ans à des postes de direction, il a piloté des initiatives mondiales dans les domaines des systèmes de formation avancés, de l’excellence opérationnelle et de la transformation numérique. Sa passion pour le cigare, cultivée depuis plus de trois décennies, l’a conduit à développer le Cigar Peak-Flavor System®, un cadre scientifique propriétaire conçu pour révéler l’expression aromatique optimale grâce à l’équilibre thermodynamique. Aujourd’hui intégré à une suite d’applications numériques, ce système établit une nouvelle référence en matière de performance, de constance et de reproductibilité à travers un large éventail de blends de cigares. À travers son institut, Anthony propose une approche éducative exigeante destinée aux amateurs éclairés et aux professionnels, élevant l’appréciation du cigare au rang d’une discipline fondée sur la précision, la compréhension et la maîtrise.",

    companyEyebrow: "Structure corporate",
    companyTitle: "CreateDeliverCapture Sàrl",
    footer:
      "ICSI fait partie de CreateDeliverCapture Sàrl.",

    seoTitle: "À propos de l’ICSI",
    seoDescription:
      "Institution suisse apportant rigueur scientifique et cadre qualité structuré.",
  },

  de: {
    kicker: "Institutionelles Profil",
    title: "Über ICSI",
    intro:
      "Das International Cigar Sommelier Institute (ICSI) ist eine Schweizer Institution zur Etablierung professioneller Standards für Premium-Zigarren.",

    qualityEyebrow: "Qualitätssystem",
    qualityTitle: "Qualitätssicherungs-Charta",
    qualityBody: [
      "ICSI basiert auf einem strukturierten Qualitätsrahmen, der an ISO/IEC 17024 ausgerichtet ist. Dieser Rahmen definiert klare Kompetenzbereiche in den Bereichen sensorische Analyse, Verbrennungsdynamik, Feuchtigkeitsoptimierung und Kundenberatung, wodurch sichergestellt wird, dass die Zertifizierung die berufliche Leistungsfähigkeit in der Praxis widerspiegelt.",
      "Das Institut wendet eine strenge Methodik an, die Aufgaben- und Tätigkeitsanalysen, Kompetenzzuordnung und mehrstufige Bewertungsverfahren kombiniert, die theoretisches Wissen, sensorische Beurteilung und angewandtes Denken integrieren. Jedes Zertifizierungsergebnis ist messbar, überprüfbar und direkt mit der Praxis in der Industrie verbunden.",
      "Um die langfristige Glaubwürdigkeit zu gewährleisten, unterhält ICSI kontinuierliche Validierungsmechanismen, einschließlich Expertenbewertungen, Branchenkonsultationen und leistungsbasierten Rückkopplungsschleifen. Zertifizierungsprogramme werden systematisch überprüft und an die sich entwickelnden Techniken der Zigarrenproduktion, Lagermethoden und Luxusdienstleistungsstandards angepasst.",
      "ICSI arbeitet nach einem Qualitätsmanagementansatz, der auf Transparenz, Konsistenz und Rückverfolgbarkeit ausgelegt ist, wobei derzeit ein formaler, an ISO angepasster Zertifizierungsweg entwickelt wird.",
    ],

    founderEyebrow: "Gründer",
    founderTitle: "Anthony Azar",
    founderBody:
      "Anthony Azar entwickelt sich zu einer Autorität in der Wissenschaft und Wertschätzung von Premiumzigarren. Seine Arbeit befindet sich an der Schnittstelle von Handwerkskunst, Wissenschaft und modernem Luxus. Er verändert grundlegend, wie Zigarren verstanden, bewertet und erlebt werden. Anthony absolvierte sein Studium am Imperial College London und besitzt einen Master of Engineering (M.Eng.) mit Spezialisierung auf Thermodynamik und Verbrennungswissenschaften sowie einen Master of Business Administration (MBA). Im Rahmen seines Ingenieurstudiums konzentrierte er sich auf die Entwicklung von Aufladungstechnologien für Hochleistungsmotoren. Während seiner mehr als 25-jährigen internationalen Karriere als Führungskraft leitete er globale Initiativen in den Bereichen fortschrittliche Ausbildungssysteme, operative Exzellenz und digitale Transformation. Seine lebenslange Leidenschaft für Zigarren, die sich über mehr als drei Jahrzehnte erstreckt, führte zur Entwicklung des Cigar Peak-Flavor Systems®, eines proprietären wissenschaftlichen Rahmens, der darauf ausgelegt ist, durch thermodynamisches Gleichgewicht eine optimale Geschmacksentfaltung zu ermöglichen. Heute ist dieses System in eine Reihe digitaler Anwendungen integriert und setzt neue Maßstäbe für Leistung, Konsistenz und Reproduzierbarkeit über ein breites Spektrum von Zigarrenblends hinweg. Durch sein Institut bietet Anthony anspruchsvollen Aficionados und Fachleuten eine hochwertige Ausbildung, die die Wertschätzung von Zigarren zu einer Disziplin der Präzision, Erkenntnis und Meisterschaft erhebt.",

    companyEyebrow: "Unternehmensstruktur",
    companyTitle: "CreateDeliverCapture Sàrl",
    footer:
      "Teil von CreateDeliverCapture Sàrl.",

    seoTitle: "Über ICSI",
    seoDescription:
      "Schweizer Institution für strukturierte Zigarrenkompetenz.",
  },
};

function AboutSection({ number, eyebrow, title, children }) {
  return (
    <section className="aboutEditorialSection">
      <div className="aboutSectionMeta">
        <span className="aboutSectionNum">{number}</span>
        <span className="aboutSectionEyebrow">{eyebrow}</span>
      </div>

      <div className="aboutSectionDivider" />

      <div className="aboutSectionBody">
        <h2 className="aboutSectionTitle">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default function About() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();
  const c = copy[lang] || copy.en;

  return (
    <Layout>
      <Seo title={c.seoTitle} description={c.seoDescription} path="/about" />

      <div className={`aboutPage lang-${lang}`}>
        <section className="aboutHero">
          <div className="container aboutHeroInner">
            <span className="aboutKicker">{c.kicker}</span>
            <h1 className="aboutHeroTitle">{c.title}</h1>
            <p className="aboutHeroLead">{c.intro}</p>
          </div>
        </section>

        <main className="container aboutMain">
          <AboutSection
            number="01"
            eyebrow={c.qualityEyebrow}
            title={c.qualityTitle}
          >
            <div className="aboutTextStack">
              {c.qualityBody.map((paragraph) => (
                <p key={paragraph} className="aboutSectionText">
                  {paragraph}
                </p>
              ))}
            </div>
          </AboutSection>

          <AboutSection
            number="02"
            eyebrow={c.founderEyebrow}
            title={c.founderTitle}
          >
            <p className="aboutSectionText founderText">{c.founderBody}</p>
          </AboutSection>

          <AboutSection
            number="03"
            eyebrow={c.companyEyebrow}
            title={c.companyTitle}
          >
            <p className="aboutSectionText companyText">{c.footer}</p>
          </AboutSection>
        </main>
      </div>

      <style jsx global>{`
        /* =========================================================
           ABOUT PAGE ONLY
           Global scope is intentional to neutralize repo-level .section,
           .card, .btn, .lead, h1 and h2 styling conflicts.
        ========================================================= */

        .aboutPage {
          background: #fff;
          color: #121214;
        }

        .aboutPage .aboutHero {
          margin: 0;
          padding: 0;
          background: #fff;
          border: 0;
        }

        .aboutPage .aboutHeroInner {
          padding-top: 60px;
          padding-bottom: 82px;
        }

        .aboutPage .aboutKicker {
          display: block;
          margin: 0 0 22px;
          color: #121214;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.68rem;
          line-height: 1;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 500;
          opacity: 0.42;
        }

        .aboutPage .aboutHeroTitle {
          margin: 0 0 42px;
          max-width: 14ch;
          color: #121214;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(3rem, 5.2vw, 5.4rem);
          line-height: 0.98;
          letter-spacing: -0.055em;
          font-weight: 400;
        }

        .aboutPage .aboutHeroLead {
          margin: 0;
          max-width: 78ch;
          padding-left: max(0px, 33%);
          color: #121214;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: clamp(1.05rem, 1.4vw, 1.25rem);
          line-height: 1.72;
          font-weight: 300;
          opacity: 0.72;
        }

        .aboutPage.lang-fr .aboutHeroTitle,
        .aboutPage.lang-de .aboutHeroTitle {
          max-width: 18ch;
          font-size: clamp(2.55rem, 4.3vw, 4.65rem);
        }

        .aboutPage.lang-fr .aboutHeroLead,
        .aboutPage.lang-de .aboutHeroLead {
          max-width: 88ch;
          font-size: clamp(0.98rem, 1.18vw, 1.12rem);
          line-height: 1.66;
        }

        .aboutPage .aboutMain {
          padding-bottom: 100px;
        }

        .aboutPage .aboutEditorialSection {
          display: grid;
          grid-template-columns: 220px 1px minmax(0, 1fr);
          column-gap: 72px;
          padding: 58px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .aboutPage .aboutSectionMeta {
          padding-top: 2px;
        }

        .aboutPage .aboutSectionNum {
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

        .aboutPage .aboutSectionEyebrow {
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

        .aboutPage .aboutSectionDivider {
          width: 1px;
          min-height: 220px;
          background: rgba(0, 0, 0, 0.08);
        }

        .aboutPage .aboutSectionBody {
          max-width: 820px;
          padding-top: 1px;
        }

        .aboutPage .aboutSectionTitle {
          margin: 0 0 24px;
          max-width: 18ch;
          color: #121214;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(1.85rem, 2.35vw, 2.55rem);
          line-height: 1.08;
          letter-spacing: -0.052em;
          font-weight: 400;
        }

        .aboutPage .aboutTextStack {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .aboutPage .aboutSectionText {
          margin: 0;
          max-width: 76ch;
          color: #121214;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.98rem;
          line-height: 1.78;
          font-weight: 300;
          opacity: 0.75;
        }

        .aboutPage .founderText {
          max-width: 82ch;
        }

        .aboutPage .companyText {
          max-width: 62ch;
        }

        @media (max-width: 1100px) {
          .aboutPage .aboutEditorialSection {
            grid-template-columns: 180px 1px minmax(0, 1fr);
            column-gap: 48px;
          }

          .aboutPage .aboutHeroLead {
            padding-left: 0;
          }
        }

        @media (max-width: 820px) {
          .aboutPage .aboutHeroInner {
            padding-top: 46px;
            padding-bottom: 62px;
          }

          .aboutPage .aboutHeroTitle,
          .aboutPage.lang-fr .aboutHeroTitle,
          .aboutPage.lang-de .aboutHeroTitle {
            max-width: none;
            font-size: clamp(2.45rem, 9vw, 3.85rem);
          }

          .aboutPage .aboutHeroLead,
          .aboutPage.lang-fr .aboutHeroLead,
          .aboutPage.lang-de .aboutHeroLead {
            max-width: none;
            font-size: 0.98rem;
            line-height: 1.62;
          }

          .aboutPage .aboutEditorialSection {
            grid-template-columns: 1fr;
            row-gap: 24px;
            padding: 44px 0;
          }

          .aboutPage .aboutSectionDivider {
            display: none;
          }

          .aboutPage .aboutSectionNum {
            margin-bottom: 12px;
          }

          .aboutPage .aboutSectionBody {
            max-width: none;
          }

          .aboutPage .aboutSectionTitle {
            max-width: none;
          }
        }

        @media (max-width: 560px) {
          .aboutPage .aboutHeroInner {
            padding-top: 40px;
            padding-bottom: 52px;
          }

          .aboutPage .aboutHeroTitle,
          .aboutPage.lang-fr .aboutHeroTitle,
          .aboutPage.lang-de .aboutHeroTitle {
            font-size: clamp(2.05rem, 10vw, 2.85rem);
          }

          .aboutPage .aboutHeroLead,
          .aboutPage.lang-fr .aboutHeroLead,
          .aboutPage.lang-de .aboutHeroLead {
            font-size: 0.92rem;
            line-height: 1.58;
          }

          .aboutPage .aboutEditorialSection {
            padding: 38px 0;
          }

          .aboutPage .aboutSectionTitle {
            font-size: clamp(1.65rem, 7vw, 2.15rem);
          }

          .aboutPage .aboutSectionText {
            font-size: 0.92rem;
            line-height: 1.68;
          }

          .aboutPage .aboutTextStack {
            gap: 16px;
          }
        }
      `}</style>
    </Layout>
  );
}

