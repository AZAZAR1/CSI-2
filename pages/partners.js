import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

export default function Partners() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();

  const copy = {
    en: {
      title: "Partner Lounges",
      body:
        "A discreet partnership model for premium cigar lounges and luxury hotel cigar rooms. Invite-only pilots, discreet co-branding, and data feedback loops to refine systems in real venues.",
      seoTitle:
        "Partner Lounges | International Cigar Sommelier Institute",
      seoDescription:
        "ICSI partners with premium cigar lounges and luxury hotel cigar rooms through discreet pilot programs, co-branding, and data-driven refinement.",
    },
    fr: {
      title: "Lounges partenaires",
      body:
        "Un modèle de partenariat discret destiné aux lounges de cigares premium et aux salons de cigares d’hôtels de luxe. Projets pilotes sur invitation, co-branding discret et boucles de retour d’expérience pour affiner les systèmes en conditions réelles.",
      seoTitle:
        "Lounges partenaires | International Cigar Sommelier Institute",
      seoDescription:
        "ICSI collabore avec des lounges premium et hôtels de luxe via des programmes pilotes discrets et une approche fondée sur les données.",
    },
    de: {
      title: "Partner-Lounges",
      body:
        "Ein diskretes Partnerschaftsmodell für Premium-Zigarrenlounges und luxuriöse Hotel-Cigar-Rooms. Invite-only Pilotprogramme, dezentes Co-Branding und datenbasierte Optimierung in realen Umgebungen.",
      seoTitle:
        "Partner-Lounges | International Cigar Sommelier Institute",
      seoDescription:
        "ICSI kooperiert mit Premium-Lounges und Luxushotels über diskrete Pilotprogramme und datenbasierte Systemoptimierung.",
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