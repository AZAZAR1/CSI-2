import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Partners() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();
  const [hoveredButton, setHoveredButton] = useState(null);

  const copy = {
    en: {
      title: "Digital Applications",
      body:
        "ICSI digital applications serve both cigar aficionados and hospitality venues, including lounges, hotels, restaurants, retailers, and private clubs. Built around the Cigar Peak-Flavor System®, these tools support cigar analysis, peak-flavor humidity optimization, structurally similar blend discovery, and scientific cigar-beverage pairing recommendations to enhance both the consumer experience and professional service delivery.",
      predictorButton: "e-Sommelier",
      predictorProButton: "PredictorPro",
      subscribePrefix: "Not subscribed yet? Apply ",
      subscribeLink: "here",
      subscribeSuffix: ".",
      seoTitle:
        "Digital Applications | International Cigar Sommelier Institute",
      seoDescription:
        "Discover ICSI digital applications for cigar aficionados and hospitality venues, including cigar analysis, humidity optimization, similar blend discovery, and scientific pairing recommendations.",
    },
    fr: {
      title: "Applications Numériques",
      body:
        "Les applications numériques de l’ICSI s’adressent à la fois aux aficionados du cigare et aux établissements d’hospitalité, notamment les lounges, hôtels, restaurants, détaillants et clubs privés. Fondés sur le Cigar Peak-Flavor System®, ces outils permettent l’analyse des cigares, l’optimisation de l’humidité de dégustation, l’identification de blends similaires et les recommandations scientifiques d’accords cigare-boisson afin d’améliorer l’expérience client et la qualité du service professionnel.",
      predictorButton: "e-Sommelier",
      predictorProButton: "PredictorPro",
      subscribePrefix: "Pas encore abonné ? Faites votre demande ",
      subscribeLink: "ici",
      subscribeSuffix: ".",
      seoTitle:
        "Applications Numériques | International Cigar Sommelier Institute",
      seoDescription:
        "Découvrez les applications numériques de l’ICSI pour les aficionados et les établissements d’hospitalité : analyse des cigares, optimisation de l’humidité, blends similaires et accords scientifiques.",
    },
    de: {
      title: "Digitale Anwendungen",
      body:
        "Die digitalen Anwendungen des ICSI richten sich sowohl an Zigarren-Aficionados als auch an Hospitality-Betriebe wie Lounges, Hotels, Restaurants, Fachhändler und private Clubs. Auf Basis des Cigar Peak-Flavor System® unterstützen diese Tools die Zigarrenanalyse, die Optimierung der Genussfeuchtigkeit, die Identifikation strukturell ähnlicher Blends sowie wissenschaftlich fundierte Zigarren-Getränke-Pairing-Empfehlungen zur Verbesserung des Gästeerlebnisses und der professionellen Beratung.",
      predictorButton: "e-Sommelier",
      predictorProButton: "PredictorPro",
      subscribePrefix: "Noch kein Abonnent? Bewerben Sie sich ",
      subscribeLink: "hier",
      subscribeSuffix: ".",
      seoTitle:
        "Digitale Anwendungen | International Cigar Sommelier Institute",
      seoDescription:
        "Entdecken Sie die digitalen Anwendungen des ICSI für Aficionados und Hospitality-Betriebe: Zigarrenanalyse, Feuchtigkeitsoptimierung, ähnliche Blends und wissenschaftliche Pairing-Empfehlungen.",
    },
  };

  const c = copy[lang] || copy.en;

  const buttonStyle = (buttonName) => ({
    display: "inline-block",
    padding: "12px 24px",
    borderRadius: "8px",
    border: "1px solid #000",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "16px",
    backgroundColor: hoveredButton === buttonName ? "#000" : "transparent",
    color: hoveredButton === buttonName ? "#fff" : "#000",
    transition: "all 0.2s ease",
    cursor: "pointer",
    marginRight: "12px",
    marginBottom: "12px",
  });

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

            <div style={{ marginTop: 24 }}>
              <a
                href="https://www.cigarsommelierinstitute.com/portal/predictor"
                style={buttonStyle("predictor")}
                onMouseOver={() => setHoveredButton("predictor")}
                onMouseOut={() => setHoveredButton(null)}
              >
                {c.predictorButton}
              </a>

              <a
                href="https://www.cigarsommelierinstitute.com/portal/PredictorPro"
                style={buttonStyle("predictorPro")}
                onMouseOver={() => setHoveredButton("predictorPro")}
                onMouseOut={() => setHoveredButton(null)}
              >
                {c.predictorProButton}
              </a>

              <p
                className="small"
                style={{ marginTop: 12, color: "#555", lineHeight: 1.6 }}
              >
                {c.subscribePrefix}
                <a
                  href="https://www.cigarsommelierinstitute.com/contact"
                  style={{
                    color: "#0070f3",
                    textDecoration: "none",
                  }}
                >
                  {c.subscribeLink}
                </a>
                {c.subscribeSuffix}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
