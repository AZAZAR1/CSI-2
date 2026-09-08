import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { useRouter } from "next/router";
import { useMemo } from "react";

const copy = {
  en: {
    kicker: "Application & Contact",
    title: "Application & Contact",
    intro:
      "Contact us to apply to our courses, classes or access to our digital applications. All applications are reviewed individually, and admission is selective. If you are applying to our courses, please include your CV or resume along with a short statement of intent.",
    programEyebrow: "Application Context",
    programTitle: "Selected Program",
    emailEyebrow: "Contact Form",
    emailTitle: "Send us a message",
    formIntro: "Complete the form below and our team will contact you directly.",
    firstName: "First name", familyName: "Family name", organization: "Organization",
    email: "Email", message: "Message", optional: "optional", submit: "Submit",
    privacy: "By submitting this form, you agree that ICSI may contact you regarding your enquiry.",
    successEyebrow: "Thank You", successTitle: "Your message has been received",
    successText: "Thank you for contacting ICSI. Our team will respond to your enquiry shortly.",
    whatsappEyebrow: "Swiss WhatsApp",
    whatsappTitle: "Contact us directly",
    closingEyebrow: "Confidentiality",
    closingTitle: "Discretion & Confidentiality",
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
    kicker: "Candidature & Contact",
    title: "Candidature & Contact",
    intro:
      "Contactez-nous pour postuler à nos cours, classes ou accéder à nos applications numériques. Toutes les candidatures sont examinées individuellement et l'admission est sélective. Si vous postulez à nos cours, veuillez inclure votre CV ainsi qu'une courte déclaration d'intention.",
    programEyebrow: "Contexte de candidature",
    programTitle: "Programme sélectionné",
    emailEyebrow: "Formulaire de contact",
    emailTitle: "Envoyez-nous un message",
    formIntro: "Complétez le formulaire ci-dessous et notre équipe vous contactera directement.",
    firstName: "Prénom", familyName: "Nom de famille", organization: "Organisation",
    email: "Email", message: "Message", optional: "facultatif", submit: "Envoyer",
    privacy: "En soumettant ce formulaire, vous acceptez qu'ICSI vous contacte au sujet de votre demande.",
    successEyebrow: "Merci", successTitle: "Votre message a bien été reçu",
    successText: "Merci d'avoir contacté ICSI. Notre équipe répondra prochainement à votre demande.",
    whatsappEyebrow: "WhatsApp Suisse",
    whatsappTitle: "Nous contacter directement",
    closingEyebrow: "Confidentialité",
    closingTitle: "Discrétion & confidentialité",
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
    kicker: "Bewerbung & Kontakt",
    title: "Bewerbung & Kontakt",
    intro:
      "Kontaktieren Sie uns, um sich für unsere Kurse, Klassen oder den Zugang zu unseren digitalen Anwendungen zu bewerben. Alle Bewerbungen werden individuell geprüft, und die Zulassung ist selektiv. Wenn Sie sich für unsere Kurse bewerben, fügen Sie bitte Ihren Lebenslauf oder Ihre Bewerbung zusammen mit einer kurzen Absichtserklärung bei.",
    programEyebrow: "Bewerbungskontext",
    programTitle: "Ausgewähltes Programm",
    emailEyebrow: "Kontaktformular",
    emailTitle: "Senden Sie uns eine Nachricht",
    formIntro: "Füllen Sie das untenstehende Formular aus. Unser Team wird sich direkt mit Ihnen in Verbindung setzen.",
    firstName: "Vorname", familyName: "Nachname", organization: "Organisation",
    email: "E-Mail", message: "Nachricht", optional: "optional", submit: "Absenden",
    privacy: "Mit dem Absenden dieses Formulars erklären Sie sich damit einverstanden, dass ICSI Sie bezüglich Ihrer Anfrage kontaktiert.",
    successEyebrow: "Vielen Dank", successTitle: "Ihre Nachricht ist eingegangen",
    successText: "Vielen Dank für Ihre Kontaktaufnahme mit ICSI. Unser Team wird Ihre Anfrage in Kürze beantworten.",
    whatsappEyebrow: "Schweizer WhatsApp",
    whatsappTitle: "Direkt kontaktieren",
    closingEyebrow: "Vertraulichkeit",
    closingTitle: "Diskretion & Vertraulichkeit",
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

function ContactSection({ number, eyebrow, title, children }) {
  return (
    <section className="contactEditorialSection">
      <div className="contactSectionMeta">
        <span className="contactSectionNum">{number}</span>
        <span className="contactSectionEyebrow">{eyebrow}</span>
      </div>

      <div className="contactSectionDivider" />

      <div className="contactSectionBody">
        <h2 className="contactSectionTitle">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default function Contact() {
  const router = useRouter();
  const lang = (router.locale || "en").toLowerCase();

  const program = useMemo(() => {
    if (!router.isReady) return "";
    const p = router.query?.program;
    return typeof p === "string" ? p.toLowerCase() : "";
  }, [router.isReady, router.query]);

  const c = copy[lang] || copy.en;

  const waNumber = "41762305791";
  const waLabel = "+41 76 230 57 91";
  const programNice = c.programNames?.[program] || "";
  const submitted = router.query?.submitted === "true";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cigarsommelierinstitute.com";
  const localePrefix = router.locale && router.locale !== "en" ? `/${router.locale}` : "";
  const redirectTo = `${siteUrl}${localePrefix}/contact?submitted=true`;

  return (
    <Layout>
      <Seo
        title={c.seoTitle}
        description={c.seoDescription}
        path="/contact"
      />

      <div className={`contactPage lang-${lang}`}>
        <section className="contactHero">
          <div className="container contactHeroInner">
            <span className="contactKicker">{c.kicker}</span>
            <h1 className="contactHeroTitle">{c.title}</h1>
            <p className="contactHeroLead">{c.intro}</p>
          </div>
        </section>

        <main className="container contactMain">
          {programNice && (
            <ContactSection
              number="01"
              eyebrow={c.programEyebrow}
              title={c.programTitle}
            >
              <p className="contactSectionText contactProgramValue">
                {programNice}
              </p>
            </ContactSection>
          )}

          <ContactSection
            number={programNice ? "02" : "01"}
            eyebrow={submitted ? c.successEyebrow : c.emailEyebrow}
            title={submitted ? c.successTitle : c.emailTitle}
          >
            {submitted ? (
              <p className="contactSectionText">{c.successText}</p>
            ) : (
              <>
                <p className="contactSectionText contactFormIntro">{c.formIntro}</p>
                <form className="contactForm" action="https://api.staticforms.dev/submit" method="POST">
                  <input type="hidden" name="apiKey" value={process.env.NEXT_PUBLIC_STATICFORMS_CONTACT_KEY || ""} />
                  <input type="hidden" name="redirectTo" value={redirectTo} />
                  <input type="hidden" name="Form" value="ICSI Website Contact" />
                  {programNice && <input type="hidden" name="Selected Program" value={programNice} />}
                  <div className="contactHoneypot" aria-hidden="true">
                    <label htmlFor="contact-honeypot">Leave this empty</label>
                    <input id="contact-honeypot" type="text" name="honeypot" tabIndex="-1" autoComplete="off" />
                  </div>
                  <div className="contactField">
                    <label className="contactLabel" htmlFor="firstName">{c.firstName}</label>
                    <input className="contactInput" id="firstName" name="First Name" type="text" autoComplete="given-name" required />
                  </div>
                  <div className="contactField">
                    <label className="contactLabel" htmlFor="familyName">{c.familyName}</label>
                    <input className="contactInput" id="familyName" name="Family Name" type="text" autoComplete="family-name" required />
                  </div>
                  <div className="contactField contactFieldFull">
                    <label className="contactLabel" htmlFor="organization">{c.organization} <span className="contactOptional">({c.optional})</span></label>
                    <input className="contactInput" id="organization" name="Organization" type="text" autoComplete="organization" />
                  </div>
                  <div className="contactField contactFieldFull">
                    <label className="contactLabel" htmlFor="email">{c.email}</label>
                    <input className="contactInput" id="email" name="email" type="email" autoComplete="email" required />
                  </div>
                  <div className="contactField contactFieldFull">
                    <label className="contactLabel" htmlFor="message">{c.message} <span className="contactOptional">({c.optional})</span></label>
                    <textarea className="contactTextarea" id="message" name="message" rows="5" />
                  </div>
                  <div className="contactSubmitWrap">
                    <button className="contactSubmit" type="submit"><span>{c.submit}</span><span className="contactArrow">→</span></button>
                  </div>
                  <p className="contactPrivacy">{c.privacy}</p>
                </form>
              </>
            )}
          </ContactSection>

          <ContactSection
            number={programNice ? "03" : "02"}
            eyebrow={c.whatsappEyebrow}
            title={c.whatsappTitle}
          >
            <a
              className="contactTextCta"
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{waLabel}</span>
              <span className="contactArrow">→</span>
            </a>
          </ContactSection>

          <ContactSection
            number={programNice ? "04" : "03"}
            eyebrow={c.closingEyebrow}
            title={c.closingTitle}
          >
            <p className="contactSectionText">{c.closing}</p>
          </ContactSection>
        </main>
      </div>

      <style jsx global>{`
        /* =========================================================
           CONTACT PAGE ONLY
           Global scope is intentional to neutralize repo-level .section,
           .card, .btn, .lead, h1 and h2 styling conflicts.
        ========================================================= */

        .contactPage {
          background: #fff;
          color: #121214;
        }

        .contactPage .contactHero {
          margin: 0;
          padding: 0;
          background: #fff;
          border: 0;
        }

        .contactPage .contactHeroInner {
          padding-top: 60px;
          padding-bottom: 82px;
        }

        .contactPage .contactKicker {
          display: block;
          margin: 0 0 22px;
          color: #121214;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.68rem;
          line-height: 1;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 500;
          opacity: 0.42;
        }

        .contactPage .contactHeroTitle {
          margin: 0 0 42px;
          max-width: 14ch;
          color: #121214;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(3rem, 5.2vw, 5.4rem);
          line-height: 0.98;
          letter-spacing: -0.055em;
          font-weight: 400;
        }

        .contactPage .contactHeroLead {
          margin: 0;
          max-width: 78ch;
          padding-left: max(0px, 33%);
          color: #121214;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: clamp(1.05rem, 1.4vw, 1.25rem);
          line-height: 1.72;
          font-weight: 300;
          opacity: 0.72;
        }

        .contactPage.lang-fr .contactHeroTitle,
        .contactPage.lang-de .contactHeroTitle {
          max-width: 18ch;
          font-size: clamp(2.55rem, 4.3vw, 4.65rem);
        }

        .contactPage.lang-fr .contactHeroLead,
        .contactPage.lang-de .contactHeroLead {
          max-width: 88ch;
          font-size: clamp(0.98rem, 1.18vw, 1.12rem);
          line-height: 1.66;
        }

        .contactPage .contactMain {
          padding-bottom: 100px;
        }

        .contactPage .contactEditorialSection {
          display: grid;
          grid-template-columns: 220px 1px minmax(0, 1fr);
          column-gap: 72px;
          padding: 58px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .contactPage .contactSectionMeta {
          padding-top: 2px;
        }

        .contactPage .contactSectionNum {
          display: block;
          margin: 0 0 24px;
          color: #121214;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(1.85rem, 2.4vw, 2.35rem);
          line-height: 1;
          letter-spacing: -0.04em;
          font-weight: 300;
          opacity: 0.9;
        }

        .contactPage .contactSectionEyebrow {
          display: block;
          max-width: 24ch;
          color: #121214;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.64rem;
          line-height: 1.45;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 600;
          opacity: 0.58;
        }

        .contactPage .contactSectionDivider {
          width: 1px;
          min-height: 150px;
          background: rgba(0, 0, 0, 0.08);
        }

        .contactPage .contactSectionBody {
          max-width: 820px;
          padding-top: 1px;
        }

        .contactPage .contactSectionTitle {
          margin: 0 0 24px;
          max-width: 18ch;
          color: #121214;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(1.85rem, 2.35vw, 2.55rem);
          line-height: 1.08;
          letter-spacing: -0.052em;
          font-weight: 400;
        }

        .contactPage .contactSectionText {
          margin: 0;
          max-width: 76ch;
          color: #121214;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.98rem;
          line-height: 1.78;
          font-weight: 300;
          opacity: 0.75;
        }

        .contactPage .contactProgramValue {
          font-size: clamp(1.12rem, 1.6vw, 1.4rem);
          opacity: 0.84;
        }

        .contactPage .contactFormIntro { margin-bottom: 38px; }
        .contactPage .contactForm { position: relative; display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 28px 30px; max-width: 760px; }
        .contactPage .contactField { display:flex; flex-direction:column; gap:10px; }
        .contactPage .contactFieldFull, .contactPage .contactSubmitWrap, .contactPage .contactPrivacy { grid-column:1/-1; }
        .contactPage .contactLabel { color:#121214; font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; font-size:.64rem; line-height:1.35; letter-spacing:.18em; text-transform:uppercase; font-weight:600; opacity:.62; }
        .contactPage .contactOptional { font-weight:400; opacity:.65; }
        .contactPage .contactInput, .contactPage .contactTextarea { width:100%; padding:14px 0; border:0; border-bottom:1px solid rgba(0,0,0,.24); border-radius:0; outline:none; background:transparent; color:#121214; font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; font-size:1rem; line-height:1.4; font-weight:300; }
        .contactPage .contactInput { min-height:54px; }
        .contactPage .contactTextarea { min-height:120px; resize:vertical; }
        .contactPage .contactInput:focus, .contactPage .contactTextarea:focus { border-bottom-color:#121214; }
        .contactPage .contactSubmit { display:inline-flex; align-items:center; justify-content:center; gap:16px; min-width:180px; min-height:50px; padding:0 26px; border:1px solid #121214; border-radius:0; background:#121214; color:#fff; font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; font-size:.68rem; letter-spacing:.18em; text-transform:uppercase; font-weight:700; cursor:pointer; }
        .contactPage .contactSubmit:hover { background:transparent; color:#121214; }
        .contactPage .contactPrivacy { margin:0; max-width:70ch; font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; font-size:.76rem; line-height:1.6; font-weight:300; opacity:.48; }
        .contactPage .contactHoneypot { position:absolute!important; left:-9999px!important; width:1px!important; height:1px!important; overflow:hidden!important; opacity:0!important; pointer-events:none!important; }

        .contactPage .contactTextCta {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          width: fit-content;
          min-height: 0;
          padding: 0 0 7px;
          border: 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.42);
          border-radius: 0;
          background: transparent;
          box-shadow: none;
          color: #121214;
          text-decoration: none;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.72rem;
          line-height: 1;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 700;
          transition: opacity 0.2s ease;
          overflow-wrap: anywhere;
        }

        .contactPage .contactTextCta:hover {
          opacity: 0.45;
          background: transparent;
        }

        .contactPage .contactArrow {
          font-size: 1.28rem;
          line-height: 0.7;
          letter-spacing: 0;
          font-weight: 300;
        }

        @media (max-width: 1100px) {
          .contactPage .contactEditorialSection {
            grid-template-columns: 180px 1px minmax(0, 1fr);
            column-gap: 48px;
          }

          .contactPage .contactHeroLead {
            padding-left: 0;
          }
        }

        @media (max-width: 820px) {
          .contactPage .contactHeroInner {
            padding-top: 46px;
            padding-bottom: 62px;
          }

          .contactPage .contactHeroTitle,
          .contactPage.lang-fr .contactHeroTitle,
          .contactPage.lang-de .contactHeroTitle {
            max-width: none;
            font-size: clamp(2.45rem, 9vw, 3.85rem);
          }

          .contactPage .contactHeroLead,
          .contactPage.lang-fr .contactHeroLead,
          .contactPage.lang-de .contactHeroLead {
            max-width: none;
            font-size: 0.98rem;
            line-height: 1.62;
          }

          .contactPage .contactEditorialSection {
            grid-template-columns: 1fr;
            row-gap: 24px;
            padding: 44px 0;
          }

          .contactPage .contactSectionDivider {
            display: none;
          }

          .contactPage .contactSectionNum {
            margin-bottom: 12px;
          }

          .contactPage .contactSectionBody {
            max-width: none;
          }

          .contactPage .contactSectionTitle {
            max-width: none;
          }
        }

        @media (max-width: 640px) {
          .contactPage .contactForm { grid-template-columns:1fr; gap:24px; }
          .contactPage .contactFieldFull, .contactPage .contactSubmitWrap, .contactPage .contactPrivacy { grid-column:1; }
        }

        @media (max-width: 560px) {
          .contactPage .contactHeroInner {
            padding-top: 40px;
            padding-bottom: 52px;
          }

          .contactPage .contactHeroTitle,
          .contactPage.lang-fr .contactHeroTitle,
          .contactPage.lang-de .contactHeroTitle {
            font-size: clamp(2.05rem, 10vw, 2.85rem);
          }

          .contactPage .contactHeroLead,
          .contactPage.lang-fr .contactHeroLead,
          .contactPage.lang-de .contactHeroLead {
            font-size: 0.92rem;
            line-height: 1.58;
          }

          .contactPage .contactEditorialSection {
            padding: 38px 0;
          }

          .contactPage .contactSectionTitle {
            font-size: clamp(1.65rem, 7vw, 2.15rem);
          }

          .contactPage .contactSectionText {
            font-size: 0.92rem;
            line-height: 1.68;
          }

          .contactPage .contactFormIntro { margin-bottom: 38px; }
        .contactPage .contactForm { position: relative; display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 28px 30px; max-width: 760px; }
        .contactPage .contactField { display:flex; flex-direction:column; gap:10px; }
        .contactPage .contactFieldFull, .contactPage .contactSubmitWrap, .contactPage .contactPrivacy { grid-column:1/-1; }
        .contactPage .contactLabel { color:#121214; font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; font-size:.64rem; line-height:1.35; letter-spacing:.18em; text-transform:uppercase; font-weight:600; opacity:.62; }
        .contactPage .contactOptional { font-weight:400; opacity:.65; }
        .contactPage .contactInput, .contactPage .contactTextarea { width:100%; padding:14px 0; border:0; border-bottom:1px solid rgba(0,0,0,.24); border-radius:0; outline:none; background:transparent; color:#121214; font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; font-size:1rem; line-height:1.4; font-weight:300; }
        .contactPage .contactInput { min-height:54px; }
        .contactPage .contactTextarea { min-height:120px; resize:vertical; }
        .contactPage .contactInput:focus, .contactPage .contactTextarea:focus { border-bottom-color:#121214; }
        .contactPage .contactSubmit { display:inline-flex; align-items:center; justify-content:center; gap:16px; min-width:180px; min-height:50px; padding:0 26px; border:1px solid #121214; border-radius:0; background:#121214; color:#fff; font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; font-size:.68rem; letter-spacing:.18em; text-transform:uppercase; font-weight:700; cursor:pointer; }
        .contactPage .contactSubmit:hover { background:transparent; color:#121214; }
        .contactPage .contactPrivacy { margin:0; max-width:70ch; font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; font-size:.76rem; line-height:1.6; font-weight:300; opacity:.48; }
        .contactPage .contactHoneypot { position:absolute!important; left:-9999px!important; width:1px!important; height:1px!important; overflow:hidden!important; opacity:0!important; pointer-events:none!important; }

        .contactPage .contactTextCta {
            font-size: 0.62rem;
            letter-spacing: 0.15em;
            gap: 14px;
          }
        }
      `}</style>
    </Layout>
  );
}
