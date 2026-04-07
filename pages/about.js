import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

export default function About() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();

  const copy = {
    en: {
      title: "About ICSI",
      body1:
        "The International Cigar Sommelier Institute (ICSI) is a Switzerland-based institution dedicated to establishing professional standards in the evaluation, service, and understanding of premium cigars. Built on Swiss principles of precision and rigor, ICSI introduces a structured, scientific framework to an industry historically shaped by informal knowledge and tradition.",
      body2:
        "At the core of the Institute lies the Cigar Peak-Flavor System®, a proprietary methodology developed through years of research, testing, and applied modeling. This system enables the calibration of optimal smoking conditions, supports aging strategies, and provides a structured approach to cigar diagnostics, sensory evaluation, and performance optimization.",
      body3:
        "ICSI certification frameworks are designed in alignment with international quality principles, including the foundational structure of ISO/IEC 17024. Each program defines clear domains of competence across sensory analysis, combustion dynamics, humidity optimization, and client advisory, ensuring that certified professionals demonstrate measurable, real-world capability.",
      body4:
        "The Institute operates under a structured quality management approach, integrating defined competence mapping, multi-layered assessment methodologies, and continuous review mechanisms. Certification schemes are developed in consultation with industry experts, hospitality professionals, and technical specialists to ensure relevance, balance, and professional integrity.",
      body5:
        "ICSI maintains an ongoing validation cycle, incorporating expert review, industry feedback, and performance data to continuously refine its certification schemes in line with evolving cigar production techniques, storage technologies, and luxury service expectations.",
      body6:
        "Founded by Anthony Azar, a thermodynamics engineer, ICSI reflects a convergence of scientific discipline and deep industry engagement. The Institute’s objective is to establish itself as a global reference for structured cigar expertise—bringing clarity, consistency, and credibility to an increasingly complex global cigar landscape.",
      body7:
        "ICSI operates under a quality framework aligned with international standards, with a formal certification pathway currently in development.",
      body8:
        "The Institute is part of CreateDeliverCapture Sàrl, a Geneva-based technical consultancy.",
      seoTitle: "About ICSI | International Cigar Sommelier Institute",
      seoDescription:
        "Discover ICSI, a Swiss institution bringing scientific rigor, structured certification, and ISO-aligned quality frameworks to the world of premium cigars.",
    },
    fr: {
      title: "À propos de l’ICSI",
      body1:
        "L’International Cigar Sommelier Institute (ICSI) est une institution basée en Suisse, dédiée à l’établissement de standards professionnels dans l’évaluation, le service et la compréhension des cigares premium. Fondé sur des principes suisses de précision et de rigueur, l’ICSI introduit un cadre scientifique structuré dans un secteur historiquement dominé par des pratiques informelles.",
      body2:
        "Au cœur de l’Institut se trouve le Cigar Peak-Flavor System®, une méthodologie propriétaire développée à travers des années de recherche, de tests et de modélisation appliquée. Ce système permet de calibrer les conditions optimales de dégustation, d’optimiser les stratégies de vieillissement et de structurer le diagnostic et l’analyse sensorielle.",
      body3:
        "Les cadres de certification de l’ICSI sont conçus en alignement avec des principes de qualité internationaux, notamment la structure de référence de l’ISO/IEC 17024. Chaque programme définit des domaines de compétence clairs couvrant l’analyse sensorielle, la dynamique de combustion, l’optimisation de l’humidité et le conseil client.",
      body4:
        "L’Institut fonctionne selon une approche de gestion de la qualité structurée, intégrant une cartographie des compétences, des méthodes d’évaluation multi-niveaux et des mécanismes de revue continue. Les schémas de certification sont développés en collaboration avec des experts du secteur, des professionnels de l’hospitalité et des spécialistes techniques.",
      body5:
        "ICSI maintient un cycle de validation continu, intégrant des revues d’experts, des retours de l’industrie et des analyses de performance afin d’adapter ses référentiels aux évolutions des techniques de production, des technologies de stockage et des standards du service de luxe.",
      body6:
        "Fondé par Anthony Azar, ingénieur en thermodynamique, l’ICSI incarne la convergence entre rigueur scientifique et expertise du monde du cigare. L’objectif est d’établir une référence mondiale en matière de maîtrise structurée du cigare.",
      body7:
        "ICSI opère selon un cadre de qualité aligné sur les standards internationaux, avec un processus de certification formel en cours de développement.",
      body8:
        "L’Institut fait partie de CreateDeliverCapture Sàrl, cabinet de conseil technique basé à Genève.",
      seoTitle: "À propos de l’ICSI | International Cigar Sommelier Institute",
      seoDescription:
        "Découvrez l’ICSI, une institution suisse apportant rigueur scientifique, certifications structurées et cadre qualité aligné ISO au monde du cigare premium.",
    },
    de: {
      title: "Über ICSI",
      body1:
        "Das International Cigar Sommelier Institute (ICSI) ist eine in der Schweiz ansässige Institution, die sich der Etablierung professioneller Standards in der Bewertung, im Service und im Verständnis von Premium-Zigarren widmet. Basierend auf Schweizer Präzision und methodischer Strenge führt ICSI einen strukturierten, wissenschaftlichen Ansatz in eine traditionell informell geprägte Branche ein.",
      body2:
        "Im Zentrum steht das Cigar Peak-Flavor System®, eine proprietäre Methodik, die durch jahrelange Forschung, Tests und angewandte Modellierung entwickelt wurde. Dieses System ermöglicht die Kalibrierung optimaler Rauchbedingungen sowie eine strukturierte Analyse von Reifung, Lagerung und Zigarrenleistung.",
      body3:
        "Die Zertifizierungsrahmen von ICSI sind an internationalen Qualitätsprinzipien ausgerichtet, insbesondere an der Struktur der ISO/IEC 17024. Jedes Programm definiert klare Kompetenzbereiche in sensorischer Analyse, Verbrennungsdynamik, Feuchtigkeitsoptimierung und Kundenberatung.",
      body4:
        "Das Institut arbeitet mit einem strukturierten Qualitätsmanagementansatz, der Kompetenzzuordnung, mehrstufige Bewertungsmethoden und kontinuierliche Überprüfungsmechanismen integriert. Die Zertifizierungssysteme werden in Zusammenarbeit mit Branchenexperten, Hospitality-Profis und technischen Spezialisten entwickelt.",
      body5:
        "ICSI betreibt einen kontinuierlichen Validierungsprozess, der Expertenbewertungen, Branchenfeedback und Leistungsanalysen einbezieht, um die Programme an die Entwicklungen in Produktion, Lagertechnologien und Servicestandards anzupassen.",
      body6:
        "Gegründet von Anthony Azar, einem Thermodynamikingenieur, vereint ICSI wissenschaftliche Disziplin mit tiefem Branchenverständnis. Ziel ist es, eine globale Referenz für strukturierte Zigarrenkompetenz zu etablieren.",
      body7:
        "ICSI arbeitet auf Basis eines an internationalen Standards ausgerichteten Qualitätsrahmens, mit einem laufenden Zertifizierungsprozess.",
      body8:
        "Das Institut ist Teil von CreateDeliverCapture Sàrl, einem technischen Beratungsunternehmen mit Sitz in Genf.",
      seoTitle: "Über ICSI | International Cigar Sommelier Institute",
      seoDescription:
        "Erfahren Sie mehr über ICSI, eine Schweizer Institution, die wissenschaftliche Strenge, strukturierte Zertifizierung und ISO-orientierte Qualitätsrahmen in die Welt der Premium-Zigarren bringt.",
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
            <p className="small">{c.body1}</p>
            <p className="small">{c.body2}</p>
            <p className="small">{c.body3}</p>
            <p className="small">{c.body4}</p>
            <p className="small">{c.body5}</p>
            <p className="small">{c.body6}</p>
            <p className="small">{c.body7}</p>
            <p className="small">{c.body8}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
