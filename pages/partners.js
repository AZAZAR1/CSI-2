import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

export default function Partners() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();

  const copy = {
    en: {
      title: "Digital Applications",
      body:
        "Discover ICSI’s digital applications, including the igar Peak-Flavor System®: advanced tools for cigar analysis, humidity optimization, and identifying structurally similar blends to enhance the smoking experience.",
      seoTitle:
        "Digital Applications | International Cigar Sommelier Institute",
      seoDescription:
        "ICSI develops and implements digital applications to support premium cigar professionals, retailers, lounges and luxury hotel cigar rooms, through discreet pilot programs and data-driven refinement.",
    },
    fr: {
      title: "Applications Numériques",
      body:
        "Découvrez les applications numériques de l’ICSI, dont le Cigar Peak-Flavor System® : outils avancés pour analyser les cigares, optimiser l’humidité et explorer des mélanges similaires afin d’améliorer l’expérience de dégustation.",
      seoTitle:
        "Applications Numériques | International Cigar Sommelier Institute",
      seoDescription:
        "ICSI conçoit et déploie des applications digitales dédiées aux professionnels du cigare, lounges, et espaces cigares d’hôtels de luxe, à travers des programmes pilotes discrets et une optimisation continue fondée sur l’analyse de données.",
    },
    de: {
      title: "Digitale Lösungen",
      body:
        "Entdecken Sie die digitalen Anwendungen des ICSI, einschließlich des Cigar Peak-Flavor System®: innovative Tools zur Zigarrenanalyse, zur Optimierung der Luftfeuchtigkeit und zur gezielten Entdeckung ähnlicher Blends für ein verfeinertes Raucherlebnis.",
      seoTitle:
        "Digitale Lösungen | International Cigar Sommelier Institute",
      seoDescription:
        "ICSI entwickelt und implementiert digitale Anwendungen zur Unterstützung von Premium-Zigarrenprofis, Fachhändlern, Lounges sowie Zigarrenräumen in Luxushotels, durch diskrete Pilotprogramme und eine kontinuierliche, datenbasierte Optimierung.",
    },
  };

  const c = copy[lang] || copy.en;

  return (
    <Layout>
      <Seo
        title={c.seoTitle}
        description={c.seoDescription}
        path="/partners"
      />

      <div className="section">
        <div className="container">
          <h1>{c.title}</h1>

          <div className="card" style={{ marginTop: 14 }}>
            <p className="small">{c.body}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
