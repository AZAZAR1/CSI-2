import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

export default function Terms() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();

  const copy = {
    en: {
      title: "Terms & Program Conditions",
      body:
        "All CSI materials, frameworks, and proprietary methodologies (including the Peak-Flavor System™) are protected intellectual property. No content may be copied, recorded, redistributed, or reproduced without written authorization. Program structures, admissions criteria, and pricing are subject to change at the discretion of the Institute.",
      seoTitle:
        "Terms & Conditions | International Cigar Sommelier Institute",
      seoDescription:
        "Review the official Terms and Program Conditions of the International Cigar Sommelier Institute (ICSI). All materials are protected intellectual property.",
    },
    fr: {
      title: "Conditions & Reglement des Programmes",
      body:
        "Tous les supports, cadres methodologiques et approches proprietaires de CSI (y compris le Peak-Flavor System™) constituent une propriete intellectuelle protegee. Toute reproduction, enregistrement ou redistribution est interdite sans autorisation ecrite. Les programmes, criteres d’admission et tarifs peuvent etre modifies a la discretion de l’Institut.",
      seoTitle:
        "Conditions & Reglement | International Cigar Sommelier Institute",
      seoDescription:
        "Consultez les conditions officielles de l International Cigar Sommelier Institute (ICSI). Les contenus et methodes sont proteges.",
    },
    de: {
      title: "Teilnahmebedingungen & Programmrichtlinien",
      body:
        "Alle Materialien, Systeme und proprietaren Methoden von CSI (einschliesslich des Peak-Flavor System™) sind geschuetztes geistiges Eigentum. Inhalte duerfen ohne schriftliche Genehmigung weder kopiert noch verbreitet oder aufgezeichnet werden. Programme, Zulassungskriterien und Preise koennen vom Institut angepasst werden.",
      seoTitle:
        "Teilnahmebedingungen | International Cigar Sommelier Institute",
      seoDescription:
        "Lesen Sie die offiziellen Teilnahmebedingungen des International Cigar Sommelier Institute (ICSI). Alle Inhalte sind geistiges Eigentum.",
    },
  };

  const c = copy[lang] || copy.en;

  return (
    <Layout>
      <Seo
        title={c.seoTitle}
        description={c.seoDescription}
        path="/terms"
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