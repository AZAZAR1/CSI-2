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
        "ICSI was founded by Anthony Azar, a thermodynamics engineer whose work bridges scientific modeling and the cigar domain. Through years of research and applied experimentation, he developed the Cigar Peak-Flavor System®, a proprietary methodology designed to diagnose and predict optimal smoking conditions, support aging strategies, and bring analytical structure to cigar performance.",

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
        "ICSI a été fondé par Anthony Azar, ingénieur en thermodynamique, créateur du Cigar Peak-Flavor System®.",

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
        "Gegründet von Anthony Azar, Entwickler des Cigar Peak-Flavor System®.",

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
