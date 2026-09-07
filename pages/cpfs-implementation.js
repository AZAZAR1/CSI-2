import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

const copy = {
  en: {
    kicker: "For Retailers, Lounges & Hospitality Groups",
    title: "Bring CPFS intelligence into your venue",
    intro:
      "ICSI's Cigar Peak-Flavor System® helps professional venues turn blend intelligence into more precise storage, serving, recommendation and pairing decisions.",
    formEyebrow: "CPFS Implementation",
    formTitle: "Explore CPFS for your venue",
    formIntro:
      "Leave your details and venue name. Our team will contact you to discuss how CPFS can be implemented within your retail, lounge or hospitality environment.",
    firstName: "First name",
    familyName: "Family name",
    email: "Email",
    venueName: "Venue / group name",
    submit: "Submit",
    privacy:
      "By submitting this form, you agree that ICSI may contact you regarding CPFS implementation and related professional solutions.",
    successEyebrow: "Thank You",
    successTitle: "Your enquiry has been received",
    successText:
      "Thank you for your interest in CPFS. Our team will contact you to discuss your venue and the most relevant implementation pathway.",
    seoTitle:
      "CPFS for Retailers, Lounges & Hospitality Groups | ICSI",
    seoDescription:
      "Explore ICSI Cigar Peak-Flavor System implementation for retailers, cigar lounges and hospitality groups.",
  },
  fr: {
    kicker: "Pour détaillants, lounges & groupes hôteliers",
    title: "Intégrez l'intelligence CPFS dans votre établissement",
    intro:
      "Le Cigar Peak-Flavor System® d'ICSI aide les établissements professionnels à transformer l'intelligence des assemblages en décisions plus précises de conservation, de service, de recommandation et d'accords.",
    formEyebrow: "Implémentation CPFS",
    formTitle: "Découvrez CPFS pour votre établissement",
    formIntro:
      "Laissez vos coordonnées et le nom de votre établissement. Notre équipe vous contactera pour discuter de la manière dont CPFS peut être intégré dans votre environnement retail, lounge ou hospitality.",
    firstName: "Prénom",
    familyName: "Nom de famille",
    email: "Email",
    venueName: "Nom de l'établissement / groupe",
    submit: "Envoyer",
    privacy:
      "En soumettant ce formulaire, vous acceptez qu'ICSI vous contacte au sujet de l'implémentation CPFS et des solutions professionnelles associées.",
    successEyebrow: "Merci",
    successTitle: "Votre demande a bien été reçue",
    successText:
      "Merci pour votre intérêt envers CPFS. Notre équipe vous contactera afin d'échanger sur votre établissement et le parcours d'implémentation le plus adapté.",
    seoTitle:
      "CPFS pour détaillants, lounges & groupes hôteliers | ICSI",
    seoDescription:
      "Découvrez l'implémentation du Cigar Peak-Flavor System d'ICSI pour détaillants, lounges et groupes hôteliers.",
  },
  de: {
    kicker: "Für Händler, Lounges & Hospitality-Gruppen",
    title: "Bringen Sie CPFS-Intelligenz in Ihren Betrieb",
    intro:
      "Das Cigar Peak-Flavor System® von ICSI unterstützt professionelle Betriebe dabei, Blend-Intelligence in präzisere Entscheidungen zu Lagerung, Service, Empfehlung und Pairing zu übersetzen.",
    formEyebrow: "CPFS Implementierung",
    formTitle: "Entdecken Sie CPFS für Ihren Betrieb",
    formIntro:
      "Hinterlassen Sie Ihre Kontaktdaten und den Namen Ihres Betriebs. Unser Team wird sich mit Ihnen in Verbindung setzen, um die passende CPFS-Implementierung für Retail, Lounge oder Hospitality zu besprechen.",
    firstName: "Vorname",
    familyName: "Nachname",
    email: "E-Mail",
    venueName: "Name des Betriebs / der Gruppe",
    submit: "Absenden",
    privacy:
      "Mit dem Absenden dieses Formulars erklären Sie sich damit einverstanden, dass ICSI Sie bezüglich der CPFS-Implementierung und entsprechender professioneller Lösungen kontaktiert.",
    successEyebrow: "Vielen Dank",
    successTitle: "Ihre Anfrage ist eingegangen",
    successText:
      "Vielen Dank für Ihr Interesse an CPFS. Unser Team wird sich mit Ihnen in Verbindung setzen, um Ihren Betrieb und den passenden Implementierungsweg zu besprechen.",
    seoTitle:
      "CPFS für Händler, Lounges & Hospitality-Gruppen | ICSI",
    seoDescription:
      "Entdecken Sie die Implementierung des ICSI Cigar Peak-Flavor System für Händler, Zigarrenlounges und Hospitality-Gruppen.",
  },
};

export default function CPFSImplementation() {
  const router = useRouter();
  const lang = (router.locale || "en").toLowerCase();
  const c = copy[lang] || copy.en;
  const submitted = router.query?.submitted === "true";

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://cigarsommelierinstitute.com";

  const localePrefix =
    router.locale && router.locale !== "en" ? `/${router.locale}` : "";

  const redirectTo = `${siteUrl}${localePrefix}/cpfs-implementation?submitted=true`;

  return (
    <Layout>
      <Seo
        title={c.seoTitle}
        description={c.seoDescription}
        path="/cpfs-implementation"
      />

      <div className={`tradeLandingPage lang-${lang}`}>
        <section className="tradeHero">
          <div className="container tradeHeroInner">
            <span className="tradeKicker">{c.kicker}</span>
            <h1 className="tradeHeroTitle">{c.title}</h1>
            <p className="tradeHeroLead">{c.intro}</p>
          </div>
        </section>

        <main className="container tradeMain">
          <section className="tradeEditorialSection">
            <div className="tradeSectionMeta">
              <span className="tradeSectionNum">01</span>
              <span className="tradeSectionEyebrow">
                {submitted ? c.successEyebrow : c.formEyebrow}
              </span>
            </div>

            <div className="tradeSectionDivider" />

            <div className="tradeSectionBody">
              {submitted ? (
                <>
                  <div className="tradeSuccessMark">✓</div>
                  <h2 className="tradeSectionTitle">{c.successTitle}</h2>
                  <p className="tradeSectionText">{c.successText}</p>
                </>
              ) : (
                <>
                  <h2 className="tradeSectionTitle">{c.formTitle}</h2>
                  <p className="tradeSectionText tradeFormIntro">
                    {c.formIntro}
                  </p>

                  <form
                    className="tradeForm"
                    action="https://api.staticforms.dev/submit"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="apiKey"
                      value={process.env.NEXT_PUBLIC_STATICFORMS_CPFS_KEY || ""}
                    />
                    <input type="hidden" name="redirectTo" value={redirectTo} />
                    <input
                      type="hidden"
                      name="Form"
                      value="CPFS Implementation — Trade Show Lead"
                    />

                    <div className="tradeHoneypot" aria-hidden="true">
                      <label htmlFor="cpfs-honeypot">Leave this empty</label>
                      <input
                        id="cpfs-honeypot"
                        type="text"
                        name="honeypot"
                        tabIndex="-1"
                        autoComplete="off"
                      />
                    </div>

                    <div className="tradeField">
                      <label className="tradeLabel" htmlFor="firstName">
                        {c.firstName}
                      </label>
                      <input
                        className="tradeInput"
                        id="firstName"
                        name="First Name"
                        type="text"
                        autoComplete="given-name"
                        required
                      />
                    </div>

                    <div className="tradeField">
                      <label className="tradeLabel" htmlFor="familyName">
                        {c.familyName}
                      </label>
                      <input
                        className="tradeInput"
                        id="familyName"
                        name="Family Name"
                        type="text"
                        autoComplete="family-name"
                        required
                      />
                    </div>

                    <div className="tradeField tradeFieldFull">
                      <label className="tradeLabel" htmlFor="email">
                        {c.email}
                      </label>
                      <input
                        className="tradeInput"
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                      />
                    </div>

                    <div className="tradeField tradeFieldFull">
                      <label className="tradeLabel" htmlFor="venueName">
                        {c.venueName}
                      </label>
                      <input
                        className="tradeInput"
                        id="venueName"
                        name="Venue / Group Name"
                        type="text"
                        autoComplete="organization"
                        required
                      />
                    </div>

                    <div className="tradeSubmitWrap">
                      <button className="tradeSubmit" type="submit">
                        <span>{c.submit}</span>
                        <span className="tradeArrow">→</span>
                      </button>
                    </div>

                    <p className="tradePrivacy">{c.privacy}</p>
                  </form>
                </>
              )}
            </div>
          </section>
        </main>
      </div>

      <style jsx global>{`
        /* =========================================================
           TRADE SHOW LANDING PAGE
           Mirrors the editorial language of contact.js while
           introducing a dedicated lead-capture form.
        ========================================================= */

        .tradeLandingPage {
          background: #fff;
          color: #121214;
        }

        .tradeLandingPage .tradeHero {
          margin: 0;
          padding: 0;
          background: #fff;
          border: 0;
        }

        .tradeLandingPage .tradeHeroInner {
          padding-top: 60px;
          padding-bottom: 82px;
        }

        .tradeLandingPage .tradeKicker {
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

        .tradeLandingPage .tradeHeroTitle {
          margin: 0 0 42px;
          max-width: 14ch;
          color: #121214;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(3rem, 5.2vw, 5.4rem);
          line-height: 0.98;
          letter-spacing: -0.055em;
          font-weight: 400;
        }

        .tradeLandingPage .tradeHeroLead {
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

        .tradeLandingPage.lang-fr .tradeHeroTitle,
        .tradeLandingPage.lang-de .tradeHeroTitle {
          max-width: 18ch;
          font-size: clamp(2.55rem, 4.3vw, 4.65rem);
        }

        .tradeLandingPage.lang-fr .tradeHeroLead,
        .tradeLandingPage.lang-de .tradeHeroLead {
          max-width: 88ch;
          font-size: clamp(0.98rem, 1.18vw, 1.12rem);
          line-height: 1.66;
        }

        .tradeLandingPage .tradeMain {
          padding-bottom: 100px;
        }

        .tradeLandingPage .tradeEditorialSection {
          display: grid;
          grid-template-columns: 220px 1px minmax(0, 1fr);
          column-gap: 72px;
          padding: 58px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .tradeLandingPage .tradeSectionMeta {
          padding-top: 2px;
        }

        .tradeLandingPage .tradeSectionNum {
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

        .tradeLandingPage .tradeSectionEyebrow {
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

        .tradeLandingPage .tradeSectionDivider {
          width: 1px;
          min-height: 300px;
          background: rgba(0, 0, 0, 0.08);
        }

        .tradeLandingPage .tradeSectionBody {
          max-width: 820px;
          padding-top: 1px;
        }

        .tradeLandingPage .tradeSectionTitle {
          margin: 0 0 20px;
          max-width: 20ch;
          color: #121214;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(1.85rem, 2.35vw, 2.55rem);
          line-height: 1.08;
          letter-spacing: -0.052em;
          font-weight: 400;
        }

        .tradeLandingPage .tradeSectionText {
          margin: 0;
          max-width: 76ch;
          color: #121214;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.98rem;
          line-height: 1.78;
          font-weight: 300;
          opacity: 0.75;
        }

        .tradeLandingPage .tradeFormIntro {
          margin-bottom: 38px;
        }

        .tradeLandingPage .tradeForm {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px 30px;
          max-width: 760px;
        }

        .tradeLandingPage .tradeField {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .tradeLandingPage .tradeFieldFull {
          grid-column: 1 / -1;
        }

        .tradeLandingPage .tradeLabel {
          color: #121214;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.64rem;
          line-height: 1.35;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 600;
          opacity: 0.62;
        }

        .tradeLandingPage .tradeInput,
        .tradeLandingPage .tradeSelect {
          width: 100%;
          min-height: 54px;
          padding: 14px 0;
          border: 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.24);
          border-radius: 0;
          outline: none;
          background: transparent;
          box-shadow: none;
          color: #121214;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 1rem;
          line-height: 1.4;
          font-weight: 300;
          transition: border-color 0.2s ease;
        }

        .tradeLandingPage .tradeSelect {
          cursor: pointer;
        }

        .tradeLandingPage .tradeInput:focus,
        .tradeLandingPage .tradeSelect:focus {
          border-bottom-color: #121214;
        }

        .tradeLandingPage .tradeInput::placeholder {
          color: rgba(18, 18, 20, 0.34);
        }

        .tradeLandingPage .tradeSubmitWrap {
          grid-column: 1 / -1;
          margin-top: 10px;
        }

        .tradeLandingPage .tradeSubmit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          min-width: 180px;
          min-height: 50px;
          padding: 0 26px;
          border: 1px solid #121214;
          border-radius: 0;
          background: #121214;
          color: #fff;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.68rem;
          line-height: 1;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .tradeLandingPage .tradeSubmit:hover {
          background: transparent;
          color: #121214;
        }

        .tradeLandingPage .tradeArrow {
          font-size: 1.22rem;
          line-height: 0.7;
          letter-spacing: 0;
          font-weight: 300;
        }

        .tradeLandingPage .tradePrivacy {
          grid-column: 1 / -1;
          margin: 0;
          max-width: 70ch;
          color: #121214;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.76rem;
          line-height: 1.6;
          font-weight: 300;
          opacity: 0.48;
        }

        .tradeLandingPage .tradeHoneypot {
          position: absolute !important;
          left: -9999px !important;
          width: 1px !important;
          height: 1px !important;
          overflow: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }

        .tradeLandingPage .tradeSuccessMark {
          margin: 0 0 22px;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 3rem;
          font-weight: 300;
          line-height: 1;
        }

        @media (max-width: 1100px) {
          .tradeLandingPage .tradeEditorialSection {
            grid-template-columns: 180px 1px minmax(0, 1fr);
            column-gap: 48px;
          }

          .tradeLandingPage .tradeHeroLead {
            padding-left: 0;
          }
        }

        @media (max-width: 820px) {
          .tradeLandingPage .tradeHeroInner {
            padding-top: 46px;
            padding-bottom: 62px;
          }

          .tradeLandingPage .tradeHeroTitle,
          .tradeLandingPage.lang-fr .tradeHeroTitle,
          .tradeLandingPage.lang-de .tradeHeroTitle {
            max-width: none;
            font-size: clamp(2.45rem, 9vw, 3.85rem);
          }

          .tradeLandingPage .tradeHeroLead,
          .tradeLandingPage.lang-fr .tradeHeroLead,
          .tradeLandingPage.lang-de .tradeHeroLead {
            max-width: none;
            font-size: 0.98rem;
            line-height: 1.62;
          }

          .tradeLandingPage .tradeEditorialSection {
            grid-template-columns: 1fr;
            row-gap: 24px;
            padding: 44px 0;
          }

          .tradeLandingPage .tradeSectionDivider {
            display: none;
          }

          .tradeLandingPage .tradeSectionNum {
            margin-bottom: 12px;
          }

          .tradeLandingPage .tradeSectionBody {
            max-width: none;
          }

          .tradeLandingPage .tradeSectionTitle {
            max-width: none;
          }
        }

        @media (max-width: 640px) {
          .tradeLandingPage .tradeForm {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .tradeLandingPage .tradeFieldFull,
          .tradeLandingPage .tradeSubmitWrap,
          .tradeLandingPage .tradePrivacy {
            grid-column: 1;
          }
        }

        @media (max-width: 560px) {
          .tradeLandingPage .tradeHeroInner {
            padding-top: 40px;
            padding-bottom: 52px;
          }

          .tradeLandingPage .tradeHeroTitle,
          .tradeLandingPage.lang-fr .tradeHeroTitle,
          .tradeLandingPage.lang-de .tradeHeroTitle {
            font-size: clamp(2.05rem, 10vw, 2.85rem);
          }

          .tradeLandingPage .tradeHeroLead,
          .tradeLandingPage.lang-fr .tradeHeroLead,
          .tradeLandingPage.lang-de .tradeHeroLead {
            font-size: 0.92rem;
            line-height: 1.58;
          }

          .tradeLandingPage .tradeEditorialSection {
            padding: 38px 0;
          }

          .tradeLandingPage .tradeSectionTitle {
            font-size: clamp(1.65rem, 7vw, 2.15rem);
          }

          .tradeLandingPage .tradeSectionText {
            font-size: 0.92rem;
            line-height: 1.68;
          }

          .tradeLandingPage .tradeSubmit {
            width: 100%;
          }
        }
      `}</style>

    </Layout>
  );
}
