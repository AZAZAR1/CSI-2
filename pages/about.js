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
        "ICSI is built upon a structured quality framework aligned with ISO/IEC 17024. This framework defines clear domains of competence across sensory analysis, combustion dynamics, humidity optimization, and client advisory, ensuring that certification reflects real-world professional capability.",
      qualityBody2:
        "The Institute applies a rigorous methodology combining job-task analysis, competence mapping, and multi-layered assessment systems integrating theoretical knowledge, sensory evaluation, and applied reasoning. Each certification outcome is measurable, auditable, and directly linked to industry practice.",
      qualityBody3:
        "To ensure long-term credibility, ICSI maintains continuous validation mechanisms including expert review, industry consultation, and performance-based feedback loops. Certification schemes are systematically reviewed and refined in line with evolving cigar production techniques, storage technologies, and luxury service standards.",
      qualityBody4:
        "ICSI operates under a quality management approach designed for transparency, consistency, and traceability, with a formal ISO-aligned certification pathway currently in development.",

      founderTitle: "Founder",
      founderBody:
        "Anthony Azar is emerging as an authority in the science and appreciation of premium cigars. His work sits at the intersection of craftsmanship, science, and modern luxury. Redefining how cigars are understood, evaluated, and experienced. Educated at Imperial College London, where he earned Master’s degrees in Thermodynamics & Combustion Science and Business Administration, with a focus on the design and development of boosting technologies for high-performance engines. During his distinguished 25-year career as a corporate executive, he led global initiatives in advanced training systems, operational excellence and digital transformation. His lifelong passion for cigars, spanning more than three decades, led to the creation of the Cigar Peak-Flavor System, a proprietary scientific framework designed to unlock optimal flavour expression through thermodynamic balance. Now embedded in a suite of digital applications, this system offers a new standard for performance and consistency across all cigar blends. Through his institute, Anthony curates a refined educational experience for discerning aficionados and professionals, elevating cigar appreciation into a discipline of precision, insight, and mastery.",
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
        "ICSI est fondé sur un cadre de qualité structuré conforme à ISO/IEC 17024. Ce cadre définit des domaines de compétence clairs en analyse sensorielle, dynamique de combustion, optimisation de l'humidité et conseil client, garantissant que la certification reflète la compétence professionnelle dans le monde réel.",
      qualityBody2:
        "L'Institut applique une méthodologie rigoureuse combinant l'analyse des tâches professionnelles, la cartographie des compétences et des systèmes d'évaluation à plusieurs niveaux intégrant les connaissances théoriques, l'évaluation sensorielle et le raisonnement appliqué. Chaque résultat de certification est mesurable, vérifiable et directement lié à la pratique industrielle.",
      qualityBody3:
        "Pour garantir une crédibilité à long terme, l'ICSI maintient des mécanismes de validation continus incluant l'examen par des experts, la consultation de l'industrie et des boucles de rétroaction basées sur la performance. Les régimes de certification sont systématiquement examinés et affinés en fonction de l'évolution des techniques de production de cigares, des technologies de stockage et des normes de service de luxe.",
      qualityBody4:
        "ICSI fonctionne selon une approche de gestion de la qualité conçue pour la transparence, la cohérence et la traçabilité, avec un parcours de certification formel aligné sur les normes ISO actuellement en cours de développement.",

      founderTitle: "Fondateur",
      founderBody:
        "Anthony Azar devient une référence dans la science et l'appréciation des cigares haut de gamme. Son travail se situe à l'intersection de l'artisanat, de la science et du luxe moderne. Il redéfinit la manière dont les cigares sont compris, évalués et expérimentés. Diplômé de l'Imperial College de Londres, où il a obtenu des maîtrises en thermodynamique et science de la combustion ainsi qu'en administration des affaires, avec un accent sur la conception et le développement de technologies de suralimentation pour moteurs haute performance. Au cours d'une remarquable carrière de dirigeant de 25 ans, il a dirigé des initiatives mondiales dans les systèmes de formation avancés, l'excellence opérationnelle et la transformation numérique. Sa passion de toute une vie pour les cigares, qui s'étend sur plus de trois décennies, a conduit à la création du Cigar Peak-Flavor System, un cadre scientifique propriétaire conçu pour révéler l'expression optimale des saveurs grâce à l'équilibre thermodynamique. Désormais intégré dans une suite d'applications numériques, ce système offre une nouvelle norme de performance et de constance pour tous les blends de cigares.À travers son institut, Anthony propose une expérience éducative raffinée pour les amateurs et les professionnels avertis, élevant l'appréciation du cigare en une discipline de précision, de perspicacité et de maîtrise.",

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
        "ICSI basiert auf einem strukturierten Qualitätsrahmen, der an ISO/IEC 17024 ausgerichtet ist. Dieser Rahmen definiert klare Kompetenzbereiche in den Bereichen sensorische Analyse, Verbrennungsdynamik, Feuchtigkeitsoptimierung und Kundenberatung, wodurch sichergestellt wird, dass die Zertifizierung die berufliche Leistungsfähigkeit in der Praxis widerspiegelt.",
      qualityBody2:
        "Das Institut wendet eine strenge Methodik an, die Aufgaben- und Tätigkeitsanalysen, Kompetenzzuordnung und mehrstufige Bewertungsverfahren kombiniert, die theoretisches Wissen, sensorische Beurteilung und angewandtes Denken integrieren. Jedes Zertifizierungsergebnis ist messbar, überprüfbar und direkt mit der Praxis in der Industrie verbunden.",
      qualityBody3:
        "Um die langfristige Glaubwürdigkeit zu gewährleisten, unterhält ICSI kontinuierliche Validierungsmechanismen, einschließlich Expertenbewertungen, Branchenkonsultationen und leistungsbasierten Rückkopplungsschleifen. Zertifizierungsprogramme werden systematisch überprüft und an die sich entwickelnden Techniken der Zigarrenproduktion, Lagermethoden und Luxusdienstleistungsstandards angepasst.",
      qualityBody4:
        "ICSI arbeitet nach einem Qualitätsmanagementansatz, der auf Transparenz, Konsistenz und Rückverfolgbarkeit ausgelegt ist, wobei derzeit ein formaler, an ISO angepasster Zertifizierungsweg entwickelt wird.",

      founderTitle: "Gründer",
      founderBody:
        "Anthony Azar entwickelt sich zu einer Autorität in der Wissenschaft und Wertschätzung von Premiumzigarren. Seine Arbeit befindet sich an der Schnittstelle von Handwerkskunst, Wissenschaft und modernem Luxus. Er verändert grundlegend, wie Zigarren verstanden, bewertet und erlebt werden. Er wurde am Imperial College London ausgebildet, wo er Masterabschlüsse in Thermodynamik & Verbrennungswissenschaften sowie Betriebswirtschaft erwarb, mit einem Schwerpunkt auf der Gestaltung und Entwicklung von Aufladungstechnologien für Hochleistungsmotoren. Während seiner angesehenen 25-jährigen Karriere als Unternehmensleiter führte er globale Initiativen in den Bereichen fortschrittliche Trainingssysteme, operative Exzellenz und digitale Transformation. Seine lebenslange Leidenschaft für Zigarren, die mehr als drei Jahrzehnte umfasst, führte zur Schaffung des Cigar Peak-Flavor Systems, eines proprietären wissenschaftlichen Rahmens, der entwickelt wurde, um die optimale Geschmacksentfaltung durch thermodynamisches Gleichgewicht zu ermöglichen. Jetzt in einer Suite von digitalen Anwendungen eingebettet, bietet dieses System einen neuen Standard für Leistung und Konsistenz über alle Zigarrenmischungen hinweg. Durch sein Institut kuratiert Anthony ein verfeinertes Bildungserlebnis für anspruchsvolle Kenner und Fachleute und erhebt die Zigarrenbewertung zu einer Disziplin der Präzision, Einsicht und Meisterschaft.",

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
