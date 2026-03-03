import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

export default function Contact() {
  const { locale, query } = useRouter();
  const lang = (locale || "en").toLowerCase();
  const program =
    typeof query?.program === "string" ? query.program.toLowerCase() : "";

  const copy = {
    en: {
      title: "Application & Contact",
      intro: "Applications are reviewed individually. Admission is selective.",
      instructions:
        "Please send your CV or professional resume along with a short statement of intent.",
      emailLabel: "Email your application:",
      whatsappLabel: "Or contact us directly via Swiss WhatsApp:",
      closing:
        "All submissions are treated with discretion and confidentiality.",
      programLabel: "Selected program",
      programNames: {
        ccs: "CCS — Certified Cigar Sommelier",
        acs: "ACS — Advanced Cigar Sommelier",
        amc: "AMC — Aficionado Master Class",
      },
      subjectPrefix: "Application",
      seoTitle: "Application & Contact | International Cigar Sommelier Institute",
      seoDescription:
        "Apply to CCS® or ACS®, request an invite to AMC™, or contact CSI for lounge partnerships. Discreet admissions via email or Swiss WhatsApp.",
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
        "Toutes les candidatures sont traitées avec discrétion et confidentialité.",
      programLabel: "Programme sélectionné",
      programNames: {
        ccs: "CCS — Certified Cigar Sommelier",
        acs: "ACS — Advanced Cigar Sommelier",
        amc: "AMC — Aficionado Master Class",
      },
      subjectPrefix: "Candidature",
      seoTitle: "Candidature & Contact | International Cigar Sommelier Institute",
      seoDescription:
        "Candidater au CCS® ou à l’ACS®, demander une invitation à l’AMC™, ou contacter CSI pour des partenariats lounge. Admissions discrètes par email ou WhatsApp Suisse.",
    },
    de: {
      title: "Bewerbung & Kontakt",
      intro:
        "Bewerbungen werden individuell geprüft. Die Zulassung ist selektiv.",
      instructions:
        "Bitte senden Sie Ihren Lebenslauf sowie ein kurzes Motivationsschreiben.",
      emailLabel: "Bewerbung per E-Mail:",
      whatsappLabel: "Oder kontaktieren Sie uns direkt via Schweizer WhatsApp:",
      closing: "Alle Einsendungen werden vertraulich behandelt.",
      programLabel: "Ausgewähltes Programm",
      programNames: {
        ccs: "CCS — Certified Cigar Sommelier",
        acs: "ACS — Advanced Cigar Sommelier",
        amc: "AMC — Aficionado Master Class",
      },
      subjectPrefix: "Bewerbung",
      seoTitle: "Bewerbung & Kontakt | International Cigar Sommelier Institute",
      seoDescription:
        "Bewerben Sie sich für CCS® oder ACS®, oder fragen Sie eine Einladung zur AMC™ an. Diskrete Kontaktaufnahme per E-Mail oder Schweizer WhatsApp.",
    },
  };

  const c = copy[lang] || copy.en;

  const adminEmail = "CDCAdmin@cdc-advisory.com";
  const waNumber = "41762305791";
  const waLabel = "+41 76 230 57 91";

  const programNice = c.programNames?.[program] || "";
  const emailSubject = programNice
    ? `${c.subjectPrefix} — ${programNice}`
    : `${c.subjectPrefix} — CSI`;

  const mailtoHref = `mailto:${adminEmail}?subject=${encodeURIComponent(
    emailSubject
  )}`;

  return (
    <Layout>
      <Seo
        title={c.seoTitle}
        description={c.seoDescription}
        path="/contact"
      />

      <div className="section">
        <div className="container contactPage">
          <h1>{c.title}</h1>

          {/* Program Notice */}
          {programNice && (
            <div className="contactProgramNotice">
              <span className="contactProgramKicker">{c.programLabel}</span>
              <div className="contactProgramValue">{programNice}</div>
            </div>
          )}

          <p className="contactLead">{c.intro}</p>
          <p>{c.instructions}</p>

          <div className="contactBlock">
            <h3>{c.emailLabel}</h3>
            <a className="contactLink" href={mailtoHref}>
              {adminEmail}
            </a>
            <div className="contactHint">
              {lang === "en" && "Attach your CV (PDF preferred)."}
              {lang === "fr" && "Joindre votre CV (PDF de préférence)."}
              {lang === "de" && "Bitte Lebenslauf beifügen (PDF bevorzugt)."}
            </div>
          </div>

          <div className="contactBlock">
            <h3>{c.whatsappLabel}</h3>
            <a
              className="contactLink"
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {waLabel}
            </a>
            <div className="contactHint">
              {lang === "en" && "For short questions or scheduling."}
              {lang === "fr" && "Pour questions rapides ou prise de rendez-vous."}
              {lang === "de" && "Für kurze Fragen oder Terminabstimmung."}
            </div>
          </div>

          <p className="contactClosing">{c.closing}</p>
        </div>
      </div>
    </Layout>
  );
}