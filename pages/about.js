import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

export default function About() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();

  const copy = {
    en: {
      title: "About ICSI",
      intro:
        "The International Cigar Sommelier Institute (ICSI) is a Switzerland-based institution dedicated to establishing professional standards in the evaluation, service, and understanding of premium cigars. Built on Swiss principles of precision and rigor, ICSI introduces a structured, scientific framework to an industry historically shaped by informal knowledge and tradition.",

      qualityTitle: "Quality Assurance Charter",
      qualityBody1:
        "ICSI is built upon a structured quality framework aligned with internationally recognized certification principles, including ISO/IEC 17024. This framework defines clear domains of competence across sensory analysis, combustion dynamics, humidity optimization, and client advisory, ensuring that certification reflects real-world professional capability.",
      qualityBody2:
        "The Institute applies a rigorous methodology combining job-task analysis, competence mapping, and multi-layered assessment systems integrating theoretical knowledge, sensory evaluation, and applied reasoning. Each certification outcome is measurable, auditable, and directly linked to industry practice.",
      qualityBody3:
        "To ensure long-term credibility, ICSI maintains continuous validation mechanisms including expert review, industry consultation, and performance-based feedback loops. Certification schemes are systematically reviewed and refined in line with evolving cigar production techniques, storage technologies, and luxury service standards.",
      qualityBody4:
        "ICSI operates under a quality management approach designed for transparency, consistency, and traceability, with a formal ISO-aligned certification pathway currently in development.",

      founderTitle: "Founder",
      founderBody:
        "Anthony Azar is emerging as an authority in the science and appreciation of premium cigars. His work sits at the intersection of craftsmanship, science, and modern luxury. Redefining how cigars are understood, evaluated, and experienced. Educated at Imperial College London, where he earned Master’s degrees in Thermodynamics & Combustion Science and Business Administration, Anthony brings a rare depth of technical and strategic expertise to the cigar world. During his distinguished 25-year career as a corporate executive, he led global initiatives in advanced training systems, operational excellence and digital transformation. His lifelong passion for cigars, spanning more than three decades, led to the creation of the Cigar Peak-Flavor System, a proprietary scientific framework designed to unlock optimal flavour expression through thermodynamic balance. Now embedded in a suite of digital applications, this system offers a new standard for performance and consistency across all cigar blends. Through his institute, Anthony curates a refined educational experience for discerning aficionados and professionals, elevating cigar appreciation into a discipline of precision, insight, and mastery.",

      footer:
        "ICSI is part of CreateDeliverCapture Sàrl, a Geneva-based technical consultancy.",

      seoTitle: "About ICSI | International Cigar Sommelier Institute",
      seoDescription:
        "Discover ICSI, a Swiss institution bringing scientific rigor, structured certification, and ISO-aligned quality frameworks to the world of premium cigars.",
    },

    fr: {
      title: "À propos de l’ICSI",
      intro:
        "L’International Cigar Sommelier Institute (ICSI) est une institution basée en Suisse dédiée à l’établissement de standards professionnels dans l’évaluation, le service et la compréhension des cigares premium. Fondé sur des principes suisses de précision et de rigueur, l’ICSI introduit un cadre scientifique structuré dans un secteur historiquement dominé par des pratiques informelles.",

      qualityTitle: "Système De Qualité",
      qualityBody1:
        "ICSI repose sur un cadre qualité structuré aligné sur des principes de certification internationaux, notamment ISO/IEC 17024.",
      qualityBody2:
        "L’Institut applique une méthodologie rigoureuse combinant analyse des tâches, cartographie des compétences et systèmes d’évaluation multi-niveaux.",
      qualityBody3:
        "ICSI maintient des mécanismes de validation continue incluant des revues d’experts et des retours de l’industrie.",
      qualityBody4:
        "L’Institut opère selon une approche qualité assurant transparence et cohérence, avec un processus ISO en cours.",

      founderTitle: "Fondateur",
      founderBody:
        "Anthony Azar devient une référence dans la science et l'appréciation des cigares haut de gamme. Son travail se situe à l'intersection de l'artisanat, de la science et du luxe moderne. Il redéfinit la manière dont les cigares sont compris, évalués et expérimentés. Diplômé de l'Imperial College de Londres, où il a obtenu des maîtrises en thermodynamique et science de la combustion ainsi qu'en administration des affaires, Anthony apporte une rare profondeur d'expertise technique et stratégique dans le monde du cigare. Au cours d'une remarquable carrière de dirigeant de 25 ans, il a dirigé des initiatives mondiales dans les systèmes de formation avancés, l'excellence opérationnelle et la transformation numérique. Sa passion de toute une vie pour les cigares, qui s'étend sur plus de trois décennies, a conduit à la création du Cigar Peak-Flavor System, un cadre scientifique propriétaire conçu pour révéler l'expression optimale des saveurs grâce à l'équilibre thermodynamique. Désormais intégré dans une suite d'applications numériques, ce système offre une nouvelle norme de performance et de constance pour tous les blends de cigares.À travers son institut, Anthony propose une expérience éducative raffinée pour les amateurs et les professionnels avertis, élevant l'appréciation du cigare en une discipline de précision, de perspicacité et de maîtrise.",

      footer:
        "ICSI fait partie de CreateDeliverCapture Sàrl.",

      seoTitle: "À propos de l’ICSI",
      seoDescription:
        "Institution suisse apportant rigueur scientifique et cadre qualité structuré.",
    },

    de: {
      title: "Über ICSI",
      intro:
        "Das International Cigar Sommelier Institute (ICSI) ist eine Schweizer Institution zur Etablierung professioneller Standards für Premium-Zigarren.",

      qualityTitle: "Qualitätssicherungs-Charta",
      qualityBody1:
        "ICSI basiert auf einem strukturierten Qualitätsrahmen nach internationalen Prinzipien.",
      qualityBody2:
        "Das Institut nutzt Kompetenzmapping und mehrstufige Bewertungssysteme.",
      qualityBody3:
        "Kontinuierliche Validierung erfolgt durch Experten und Marktfeedback.",
      qualityBody4:
        "Ein ISO-Zertifizierungsprozess ist in Entwicklung.",

      founderTitle: "Gründer",
      founderBody:
        "Anthony Azar entwickelt sich zu einer Autorität in der Wissenschaft und Wertschätzung von Premium-Zigarren. Seine Arbeit liegt an der Schnittstelle von Handwerkskunst, Wissenschaft und modernem Luxus. Er definiert neu, wie Zigarren verstanden, bewertet und erlebt werden. Ausgebildet am Imperial College London, wo er Master-Abschlüsse in Thermodynamik & Verbrennungswissenschaft und Betriebswirtschaft erworben hat, bringt Anthony eine seltene Tiefe an technischer und strategischer Expertise in die Zigarrenwelt ein. Während einer renommierten 25-jährigen Führungslaufbahn leitete er globale Initiativen in den Bereichen fortschrittliche Trainingssysteme, operative Exzellenz und digitale Transformation. Seine lebenslange Leidenschaft für Zigarren, die sich über mehr als drei Jahrzehnte erstreckt, führte zur Schaffung des Cigar Peak-Flavor Systems, eines proprietären wissenschaftlichen Rahmens, der darauf ausgelegt ist, den optimalen Geschmacks-Ausdruck durch thermodynamisches Gleichgewicht zu erschließen. Heute in eine Reihe digitaler Anwendungen integriert, bietet dieses System einen neuen Standard für Leistung und Konsistenz aller Zigarrenmischungen. Durch sein Institut gestaltet Anthony eine verfeinerte Bildungserfahrung für anspruchsvolle Kenner und Fachleute und erhebt die Zigarrenbewertung in eine Disziplin der Präzision, Einsicht und Meisterschaft.",

      footer:
        "Teil von CreateDeliverCapture Sàrl.",

      seoTitle: "Über ICSI",
      seoDescription:
        "Schweizer Institution für strukturierte Zigarrenkompetenz.",
    },
  };

  const c = copy[lang] || copy.en;

  return (
    <Layout>
      <Seo title={c.seoTitle} description={c.seoDescription} path="/about" />

      <div className="section">
        <div className="container">
          <h2>{c.title}</h2>

          <div className="card" style={{ marginTop: 14 }}>
            <p className="small">{c.intro}</p>
          </div>

          <div className="card" style={{ marginTop: 18 }}>
            <h3>{c.qualityTitle}</h3>
            <p className="small">{c.qualityBody1}</p>
            <p className="small">{c.qualityBody2}</p>
            <p className="small">{c.qualityBody3}</p>
            <p className="small">{c.qualityBody4}</p>
          </div>

          <div className="card" style={{ marginTop: 18 }}>
            <h3>{c.founderTitle}</h3>
            <p className="small">{c.founderBody}</p>
          </div>

          <div className="card" style={{ marginTop: 18 }}>
            <p className="small">{c.footer}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
