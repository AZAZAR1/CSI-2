import Layout from "../components/Layout";
import { useRouter } from "next/router";

export default function Contact() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();

  const copy = {
    en: {
      title: "Application & Contact",
      intro:
        "Applications are reviewed individually. Admission is selective.",
      instructions:
        "Please send your CV or professional resume along with a short statement of intent.",
      emailLabel: "Email your application:",
      whatsappLabel: "Or contact us directly via Swiss WhatsApp:",
      closing:
        "All submissions are treated with discretion and confidentiality."
    },
    fr: {
      title: "Candidature & Contact",
      intro:
        "Les candidatures sont examinées individuellement. L’admission est sélective.",
      instructions:
        "Veuillez transmettre votre CV accompagné d’une courte lettre d’intention.",
      emailLabel: "Envoyer votre candidature par email :",
      whatsappLabel: "Ou nous contacter via WhatsApp (Suisse) :",
      closing:
        "Toutes les candidatures sont traitées avec discrétion et confidentialité."
    },
    de: {
      title: "Bewerbung & Kontakt",
      intro:
        "Bewerbungen werden individuell geprüft. Die Zulassung ist selektiv.",
      instructions:
        "Bitte senden Sie Ihren Lebenslauf sowie ein kurzes Motivationsschreiben.",
      emailLabel: "Bewerbung per E-Mail:",
      whatsappLabel: "Oder kontaktieren Sie uns direkt via Schweizer WhatsApp:",
      closing:
        "Alle Einsendungen werden vertraulich behandelt."
    }
  };

  const c = copy[lang] || copy.en;

  return (
    <Layout>
      <div className="section">
        <div className="container contactPage">
          <h1>{c.title}</h1>

          <p className="contactLead">{c.intro}</p>
          <p>{c.instructions}</p>

          <div className="contactBlock">
            <h3>{c.emailLabel}</h3>
            <a
              className="contactLink"
              href="mailto:CDCAdmin@cdc-advisory.com"
            >
              CDCAdmin@cdc-advisory.com
            </a>
          </div>

          <div className="contactBlock">
            <h3>{c.whatsappLabel}</h3>
            <a
              className="contactLink"
              href="https://wa.me/41762305791"
              target="_blank"
              rel="noopener noreferrer"
            >
              +41 76 230 57 91
            </a>
          </div>

          <p className="contactClosing">{c.closing}</p>
        </div>
      </div>
    </Layout>
  );
}