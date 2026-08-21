import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

export default function Privacy() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();

  const copy = {
    en: {
      title: "Privacy Policy",
      body:
        "International Cigar Sommelier Institute (ICSI) collects personal information submitted via email or contact communications solely for the purpose of responding to inquiries, reviewing applications, and managing candidate or partner correspondence. We do not sell or distribute personal data. You may request data deletion or clarification by contacting CSI directly.",
      seoTitle:
        "Privacy Policy | International Cigar Sommelier Institute",
      seoDescription:
        "Read the Privacy Policy of the International Cigar Sommelier Institute (ICSI). We handle applicant and partner information with discretion and confidentiality.",
    },
    fr: {
      title: "Politique de confidentialité",
      body:
        "L’International Cigar Sommelier Institute (ICSI) collecte les informations personnelles transmises par email ou via communications uniquement afin de répondre aux demandes, examiner les candidatures et gérer la correspondance avec candidats ou partenaires. Nous ne vendons ni ne distribuons les données personnelles. Vous pouvez demander la suppression ou des précisions en contactant CSI.",
      seoTitle:
        "Politique de confidentialité | International Cigar Sommelier Institute",
      seoDescription:
        "Consultez la politique de confidentialité de l’International Cigar Sommelier Institute (ICSI). Les données sont traitées avec discrétion et confidentialité.",
    },
    de: {
      title: "Datenschutzrichtlinie",
      body:
        "Das International Cigar Sommelier Institute (ICSI) erhebt personenbezogene Daten, die per E-Mail oder Kommunikation übermittelt werden, ausschließlich zur Beantwortung von Anfragen, Prüfung von Bewerbungen und Verwaltung der Korrespondenz mit Kandidaten oder Partnern. Wir verkaufen oder verbreiten keine personenbezogenen Daten. Eine Löschung kann jederzeit angefordert werden.",
      seoTitle:
        "Datenschutzrichtlinie | International Cigar Sommelier Institute",
      seoDescription:
        "Lesen Sie die Datenschutzrichtlinie des International Cigar Sommelier Institute (ICSI). Daten werden diskret und vertraulich behandelt.",
    },
  };

  const c = copy[lang] || copy.en;

  return (
    <Layout>
      <Seo
        title={c.seoTitle}
        description={c.seoDescription}
        path="/privacy"
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