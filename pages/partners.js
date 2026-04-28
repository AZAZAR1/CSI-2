import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Partners() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();
  const [isHovered, setIsHovered] = useState(false);

  const copy = {
    en: {
      title: "Digital Applications",
      body:
        "Discover ICSI’s digital applications, including the Cigar Peak-Flavor System®: advanced tools for cigar analysis, humidity optimization, and identifying structurally similar blends to enhance the smoking experience.",
      button: "ICSI Predictor",
      subscribePrefix: "Not subscribed yet? Apply ",
      subscribeLink: "here",
      subscribeSuffix: ".",
      seoTitle:
        "Digital Applications | International Cigar Sommelier Institute",
      seoDescription:
        "Discover ICSI’s digital applications, including the Cigar Peak-Flavor System®: advanced tools for cigar analysis, humidity optimization, and identifying structurally similar blends to enhance the smoking experience.",
    },
    fr: {
      title: "Applications Numériques",
      body:
        "Découvrez les applications numériques de l’ICSI, dont le Cigar Peak-Flavor System® : outils avancés pour analyser les cigares, optimiser l’humidité et explorer des mélanges similaires afin d’améliorer l’expérience de dégustation.",
      button: "ICSI Predictor",
      subscribePrefix: "Pas encore abonné ? Faites votre demande ",
      subscribeLink: "ici",
      subscribeSuffix: ".",
      seoTitle:
        "Applications Numériques | International Cigar Sommelier Institute",
      seoDescription:
        "Découvrez les applications numériques de l’ICSI, dont le Cigar Peak-Flavor System® : outils avancés pour analyser les cigares, optimiser l’humidité et explorer des mélanges similaires afin d’améliorer l’expérience de dégustation.",
    },
    de: {
      title: "Digitale Anwendungen",
      body:
        "Entdecken Sie die digitalen Anwendungen des ICSI, einschließlich des Cigar Peak-Flavor System®: innovative Tools zur Zigarrenanalyse, zur Optimierung der Luftfeuchtigkeit und zur gezielten Entdeckung ähnlicher Blends für ein verfeinertes Raucherlebnis.",
      button: "ICSI Predictor",
      subscribePrefix: "Noch kein Abonnent? Bewerben Sie sich ",
      subscribeLink: "hier",
      subscribeSuffix: ".",
      seoTitle:
        "Digitale Anwendungen | International Cigar Sommelier Institute",
      seoDescription:
        "Entdecken Sie die digitalen Anwendungen des ICSI, einschließlich des Cigar Peak-Flavor System®: innovative Tools zur Zigarrenanalyse, zur Optimierung der Luftfeuchtigkeit und zur gezielten Entdeckung ähnlicher Blends für ein verfeinertes Raucherlebnis.",
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

            <div style={{ marginTop: 24 }}>
              <a
                href="https://www.cigarsommelierinstitute.com/portal/Predictor"
                style={{
                  display: "inline-block",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  border: "1px solid #000",
                  textDecoration: "none",
                  fontWeight: "500",
                  fontSize: "16px",
                  backgroundColor: isHovered ? "#000" : "transparent",
                  color: isHovered ? "#fff" : "#000",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
              >
                {c.button}
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
