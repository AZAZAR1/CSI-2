import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function Contact() {
  const router = useRouter();
  const lang = (router.locale || "en").toLowerCase();

  const program = useMemo(() => {
    if (!router.isReady) return "";
    const p = router.query?.program;
    return typeof p === "string" ? p.toLowerCase() : "";
  }, [router.isReady, router.query]);

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
      seoTitle:
        "Application & Contact | International Cigar Sommelier Institute",
      seoDescription:
        "Apply to CCS®, ACS®, request an invite to AMC™, or contact CSI for lounge partnerships.",
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
      seoTitle:
        "Candidature & Contact | International Cigar Sommelier Institute",
      seoDescription:
        "Candidater au CCS®, à l’ACS®, ou demander une invitation à l’AMC™.",
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
      seoTitle:
        "Bewerbung & Kontakt | International Cigar Sommelier Institute",
      seoDescription:
        "Bewerben Sie sich für CCS®, ACS®, oder fragen Sie eine AMC™ Einladung an.",
    },
  };

  const c = copy[lang] || copy.en;

  const adminEmail = "Admin@cigarsommelierinstitute.com";
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

          {programNice && (
            <div className="contactProgramNotice">
              <span className="contactProgramKicker">
                {c.programLabel}
              </span>
              <div className="contactProgramValue">
                {programNice}
              </div>
            </div>
          )}

          <p className="contactLead">{c.intro}</p>
          <p>{c.instructions}</p>

          <div className="contactBlock">
            <h3>{c.emailLabel}</h3>
            <a className="contactLink" href={mailtoHref}>
              {adminEmail}
            </a>
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
          </div>

          <p className="contactClosing">{c.closing}</p>
        </div>
      </div>
    </Layout>
  );
}
