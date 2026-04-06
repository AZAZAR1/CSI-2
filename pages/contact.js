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
      intro: "Contact us to apply for our courses, classes or access to our digital applications. All applications are reviewed individually, and admission is selective.",
      instructions:
        "If you are applying to our courses, please include your CV or resume along with a short statement of intent.",
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
        "Apply to CCS, ACS, request an invite to AMC, or contact ICSI.",
    },
    fr: {
      title: "Candidature & Contact",
      intro:
        "Contactez-nous pour postuler à nos cours, classes ou accéder à nos applications numériques. Toutes les candidatures sont examinées individuellement et l'admission est sélective.",
      instructions:
        "Si vous postulez à nos cours, veuillez inclure votre CV ainsi qu'une courte déclaration d'intention.",
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
        "Kontaktieren Sie uns, um sich für unsere Kurse, Klassen oder den Zugang zu unseren digitalen Anwendungen zu bewerben. Alle Bewerbungen werden individuell geprüft, und die Zulassung ist selektiv.",
      instructions:
        "Wenn Sie sich für unsere Kurse bewerben, fügen Sie bitte Ihren Lebenslauf oder Ihre Bewerbung zusammen mit einer kurzen Absichtserklärung bei.",
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
