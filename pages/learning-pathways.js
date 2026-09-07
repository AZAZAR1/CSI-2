import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

const copy = {
  en: {
    kicker: "ICSI Learning Pathways",
    title: "Find your ICSI learning pathway",
    intro:
      "Structured learning for cigar enthusiasts and hospitality professionals seeking deeper knowledge, stronger service capability and recognised progression.",
    formEyebrow: "Course Interest",
    formTitle: "Discover the pathway that fits you",
    formIntro:
      "Leave your details and select the ICSI course you are interested in. Our team will follow up with further information.",
    firstName: "First name",
    familyName: "Family name",
    email: "Email",
    course: "Course of interest",
    coursePlaceholder: "Select a course",
    level1: "ICSI Level I — Cigar enthusiasts / aficionados",
    level2: "ICSI Level II — Hospitality professionals",
    level3: "ICSI Level III — Advanced hospitality professionals",
    submit: "Submit",
    privacy:
      "By submitting this form, you agree that ICSI may contact you regarding the learning pathway you selected.",
    successEyebrow: "Thank You",
    successTitle: "Your interest has been registered",
    successText:
      "Thank you for your interest in ICSI. Our team will contact you with further information about your selected learning pathway.",
    seoTitle:
      "ICSI Learning Pathways | International Cigar Sommelier Institute",
    seoDescription:
      "Explore ICSI Level I, Level II and Level III learning pathways for cigar enthusiasts and hospitality professionals.",
  },
  fr: {
    kicker: "Parcours de formation ICSI",
    title: "Trouvez votre parcours de formation ICSI",
    intro:
      "Des formations structurées pour les amateurs de cigares et les professionnels de l'hospitalité souhaitant approfondir leurs connaissances, renforcer leur expertise de service et progresser professionnellement.",
    formEyebrow: "Cours d'intérêt",
    formTitle: "Découvrez le parcours qui vous correspond",
    formIntro:
      "Laissez vos coordonnées et sélectionnez le cours ICSI qui vous intéresse. Notre équipe vous contactera avec de plus amples informations.",
    firstName: "Prénom",
    familyName: "Nom de famille",
    email: "Email",
    course: "Cours d'intérêt",
    coursePlaceholder: "Sélectionnez un cours",
    level1: "ICSI Niveau I — Amateurs / aficionados",
    level2: "ICSI Niveau II — Professionnels de l'hospitalité",
    level3: "ICSI Niveau III — Professionnels avancés de l'hospitalité",
    submit: "Envoyer",
    privacy:
      "En soumettant ce formulaire, vous acceptez qu'ICSI vous contacte au sujet du parcours de formation sélectionné.",
    successEyebrow: "Merci",
    successTitle: "Votre intérêt a bien été enregistré",
    successText:
      "Merci pour votre intérêt envers ICSI. Notre équipe vous contactera avec de plus amples informations sur le parcours sélectionné.",
    seoTitle:
      "Parcours de formation ICSI | International Cigar Sommelier Institute",
    seoDescription:
      "Découvrez les parcours ICSI Niveau I, Niveau II et Niveau III pour amateurs de cigares et professionnels de l'hospitalité.",
  },
  de: {
    kicker: "ICSI Lernpfade",
    title: "Finden Sie Ihren ICSI Lernpfad",
    intro:
      "Strukturierte Weiterbildung für Zigarrenliebhaber und Hospitality-Profis, die ihr Wissen vertiefen, ihre Servicekompetenz stärken und sich professionell weiterentwickeln möchten.",
    formEyebrow: "Kursinteresse",
    formTitle: "Entdecken Sie den passenden Lernpfad",
    formIntro:
      "Hinterlassen Sie Ihre Kontaktdaten und wählen Sie den ICSI-Kurs, der Sie interessiert. Unser Team meldet sich mit weiteren Informationen.",
    firstName: "Vorname",
    familyName: "Nachname",
    email: "E-Mail",
    course: "Interessierter Kurs",
    coursePlaceholder: "Kurs auswählen",
    level1: "ICSI Level I — Zigarrenliebhaber / Aficionados",
    level2: "ICSI Level II — Hospitality-Profis",
    level3: "ICSI Level III — Erfahrene Hospitality-Profis",
    submit: "Absenden",
    privacy:
      "Mit dem Absenden dieses Formulars erklären Sie sich damit einverstanden, dass ICSI Sie bezüglich des ausgewählten Lernpfads kontaktiert.",
    successEyebrow: "Vielen Dank",
    successTitle: "Ihr Interesse wurde registriert",
    successText:
      "Vielen Dank für Ihr Interesse an ICSI. Unser Team wird sich mit weiteren Informationen zu Ihrem ausgewählten Lernpfad bei Ihnen melden.",
    seoTitle:
      "ICSI Lernpfade | International Cigar Sommelier Institute",
    seoDescription:
      "Entdecken Sie ICSI Level I, Level II und Level III für Zigarrenliebhaber und Hospitality-Profis.",
  },
};

export default function LearningPathways() {
  const router = useRouter();
  const lang = (router.locale || "en").toLowerCase();
  const c = copy[lang] || copy.en;
  const submitted = router.query?.submitted === "true";

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://cigarsommelierinstitute.com";

  const localePrefix =
    router.locale && router.locale !== "en" ? `/${router.locale}` : "";

  const redirectTo = `${siteUrl}${localePrefix}/learning-pathways?submitted=true`;

  return (
    <Layout>
      <Seo
        title={c.seoTitle}
        description={c.seoDescription}
        path="/learning-pathways"
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
                      value={process.env.NEXT_PUBLIC_STATICFORMS_API_KEY || ""}
                    />
                    <input type="hidden" name="redirectTo" value={redirectTo} />
                    <input
                      type="hidden"
                      name="Form"
                      value="ICSI Learning Pathways — Trade Show Lead"
                    />

                    <div className="tradeHoneypot" aria-hidden="true">
                      <label htmlFor="learning-honeypot">Leave this empty</label>
                      <input
                        id="learning-honeypot"
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
                      <label className="tradeLabel" htmlFor="courseInterest">
                        {c.course}
                      </label>
                      <select
                        className="tradeSelect"
                        id="courseInterest"
                        name="Course of Interest"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          {c.coursePlaceholder}
                        </option>
                        <option value="ICSI Level I">{c.level1}</option>
                        <option value="ICSI Level II">{c.level2}</option>
                        <option value="ICSI Level III">{c.level3}</option>
                      </select>
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
