import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

const copy = {
  en: {
    kicker: "Digital Applications",
    title: "Digital Applications",
    intro:
      "ICSI digital applications serve both cigar aficionados and hospitality venues, including lounges, hotels, restaurants, retailers, and private clubs. Built around the Cigar Peak-Flavor System®, these tools support cigar analysis, peak-flavor humidity optimization, structurally similar blend discovery, and scientific cigar-beverage pairing recommendations to enhance both the consumer experience and professional service delivery.",
    applicationsEyebrow: "Applications",
    applicationsTitle: "Professional Digital Tools",
    predictorTitle: "e-Sommelier",
    predictorBody:
      "A digital cigar advisory experience for cigar analysis, peak-flavor guidance, similar blend discovery, and structured pairing intelligence.",
    predictorButton: "Open e-Sommelier",
    predictorProTitle: "PredictorPro",
    predictorProBody:
      "A professional environment designed for hospitality venues, lounges, retailers, and private clubs requiring localized cigar and beverage intelligence.",
    predictorProButton: "Open PredictorPro",
    accessEyebrow: "Access",
    accessTitle: "Subscription Access",
    subscribePrefix: "Not subscribed yet? Apply ",
    subscribeLink: "here",
    subscribeSuffix: ".",
    seoTitle:
      "Digital Applications | International Cigar Sommelier Institute",
    seoDescription:
      "Discover ICSI digital applications for cigar aficionados and hospitality venues, including cigar analysis, humidity optimization, similar blend discovery, and scientific pairing recommendations.",
  },
  fr: {
    kicker: "Applications numériques",
    title: "Applications numériques",
    intro:
      "Les applications numériques de l’ICSI s’adressent à la fois aux aficionados du cigare et aux établissements d’hospitalité, notamment les lounges, hôtels, restaurants, détaillants et clubs privés. Fondés sur le Cigar Peak-Flavor System®, ces outils permettent l’analyse des cigares, l’optimisation de l’humidité de dégustation, l’identification de blends similaires et les recommandations scientifiques d’accords cigare-boisson afin d’améliorer l’expérience client et la qualité du service professionnel.",
    applicationsEyebrow: "Applications",
    applicationsTitle: "Outils numériques professionnels",
    predictorTitle: "e-Sommelier",
    predictorBody:
      "Une expérience numérique de conseil cigare dédiée à l’analyse des cigares, à la guidance Peak-Flavor, à la découverte de blends similaires et à l’intelligence structurée des accords.",
    predictorButton: "Ouvrir e-Sommelier",
    predictorProTitle: "PredictorPro",
    predictorProBody:
      "Un environnement professionnel conçu pour les établissements d’hospitalité, lounges, détaillants et clubs privés nécessitant une intelligence localisée des cigares et boissons.",
    predictorProButton: "Ouvrir PredictorPro",
    accessEyebrow: "Accès",
    accessTitle: "Accès par abonnement",
    subscribePrefix: "Pas encore abonné ? Faites votre demande ",
    subscribeLink: "ici",
    subscribeSuffix: ".",
    seoTitle:
      "Applications Numériques | International Cigar Sommelier Institute",
    seoDescription:
      "Découvrez les applications numériques de l’ICSI pour les aficionados et les établissements d’hospitalité : analyse des cigares, optimisation de l’humidité, blends similaires et accords scientifiques.",
  },
  de: {
    kicker: "Digitale Anwendungen",
    title: "Digitale Anwendungen",
    intro:
      "Die digitalen Anwendungen des ICSI richten sich sowohl an Zigarren-Aficionados als auch an Hospitality-Betriebe wie Lounges, Hotels, Restaurants, Fachhändler und private Clubs. Auf Basis des Cigar Peak-Flavor System® unterstützen diese Tools die Zigarrenanalyse, die Optimierung der Genussfeuchtigkeit, die Identifikation strukturell ähnlicher Blends sowie wissenschaftlich fundierte Zigarren-Getränke-Pairing-Empfehlungen zur Verbesserung des Gästeerlebnisses und der professionellen Beratung.",
    applicationsEyebrow: "Anwendungen",
    applicationsTitle: "Professionelle digitale Werkzeuge",
    predictorTitle: "e-Sommelier",
    predictorBody:
      "Eine digitale Beratungsumgebung für Zigarrenanalyse, Peak-Flavor Orientierung, Entdeckung ähnlicher Blends und strukturierte Pairing-Intelligenz.",
    predictorButton: "e-Sommelier öffnen",
    predictorProTitle: "PredictorPro",
    predictorProBody:
      "Eine professionelle Umgebung für Hospitality-Betriebe, Lounges, Fachhändler und private Clubs, die lokalisierte Zigarren- und Getränkeintelligenz benötigen.",
    predictorProButton: "PredictorPro öffnen",
    accessEyebrow: "Zugang",
    accessTitle: "Abonnementzugang",
    subscribePrefix: "Noch kein Abonnent? Bewerben Sie sich ",
    subscribeLink: "hier",
    subscribeSuffix: ".",
    seoTitle:
      "Digitale Anwendungen | International Cigar Sommelier Institute",
    seoDescription:
      "Entdecken Sie die digitalen Anwendungen des ICSI für Aficionados und Hospitality-Betriebe: Zigarrenanalyse, Feuchtigkeitsoptimierung, ähnliche Blends und wissenschaftliche Pairing-Empfehlungen.",
  },
};

function ApplicationItem({ number, title, body, href, label }) {
  return (
    <div className="partnersApplicationItem">
      <span className="partnersApplicationNum">{number}</span>

      <div className="partnersApplicationBody">
        <h3 className="partnersApplicationTitle">{title}</h3>
        <p className="partnersApplicationText">{body}</p>

        <a href={href} className="partnersTextCta">
          <span>{label}</span>
          <span className="partnersArrow">→</span>
        </a>
      </div>
    </div>
  );
}

export default function Partners() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();
  const c = copy[lang] || copy.en;

  return (
    <Layout>
      <Seo
        title={c.seoTitle}
        description={c.seoDescription}
        path="/partners"
      />

      <div className={`partnersPage lang-${lang}`}>
        <section className="partnersHero">
          <div className="container partnersHeroInner">
            <span className="partnersKicker">{c.kicker}</span>
            <h1 className="partnersHeroTitle">{c.title}</h1>
            <p className="partnersHeroLead">{c.intro}</p>
          </div>
        </section>

        <main className="container partnersMain">
          <section className="partnersEditorialSection">
            <div className="partnersSectionMeta">
              <span className="partnersSectionNum">01</span>
              <span className="partnersSectionEyebrow">{c.applicationsEyebrow}</span>
            </div>

            <div className="partnersSectionDivider" />

            <div className="partnersSectionBody">
              <h2 className="partnersSectionTitle">{c.applicationsTitle}</h2>

              <div className="partnersApplicationList">
                <ApplicationItem
                  number="01"
                  title={c.predictorTitle}
                  body={c.predictorBody}
                  href="https://www.cigarsommelierinstitute.com/portal/predictor"
                  label={c.predictorButton}
                />

                <ApplicationItem
                  number="02"
                  title={c.predictorProTitle}
                  body={c.predictorProBody}
                  href="https://www.cigarsommelierinstitute.com/portal/PredictorPro"
                  label={c.predictorProButton}
                />
              </div>
            </div>
          </section>

          <section className="partnersEditorialSection">
            <div className="partnersSectionMeta">
              <span className="partnersSectionNum">02</span>
              <span className="partnersSectionEyebrow">{c.accessEyebrow}</span>
            </div>

            <div className="partnersSectionDivider" />

            <div className="partnersSectionBody">
              <h2 className="partnersSectionTitle">{c.accessTitle}</h2>

              <p className="partnersSectionText">
                {c.subscribePrefix}
                <a
                  href="https://www.cigarsommelierinstitute.com/contact"
                  className="partnersInlineLink"
                >
                  {c.subscribeLink}
                </a>
                {c.subscribeSuffix}
              </p>
            </div>
          </section>
        </main>
      </div>

      <style jsx global>{`
        /* =========================================================
           PARTNERS / DIGITAL APPLICATIONS PAGE ONLY
           Global scope is intentional to neutralize repo-level .section,
           .card, .btn, .lead, h1 and h2 styling conflicts.
        ========================================================= */

        .partnersPage {
          background: #fff;
          color: #121214;
        }

        .partnersPage .partnersHero {
          margin: 0;
          padding: 0;
          background: #fff;
          border: 0;
        }

        .partnersPage .partnersHeroInner {
          padding-top: 60px;
          padding-bottom: 82px;
        }

        .partnersPage .partnersKicker {
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

        .partnersPage .partnersHeroTitle {
          margin: 0 0 42px;
          max-width: 14ch;
          color: #121214;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(3rem, 5.2vw, 5.4rem);
          line-height: 0.98;
          letter-spacing: -0.055em;
          font-weight: 400;
        }

        .partnersPage .partnersHeroLead {
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

        .partnersPage.lang-fr .partnersHeroTitle,
        .partnersPage.lang-de .partnersHeroTitle {
          max-width: 18ch;
          font-size: clamp(2.55rem, 4.3vw, 4.65rem);
        }

        .partnersPage.lang-fr .partnersHeroLead,
        .partnersPage.lang-de .partnersHeroLead {
          max-width: 88ch;
          font-size: clamp(0.98rem, 1.18vw, 1.12rem);
          line-height: 1.66;
        }

        .partnersPage .partnersMain {
          padding-bottom: 100px;
        }

        .partnersPage .partnersEditorialSection {
          display: grid;
          grid-template-columns: 220px 1px minmax(0, 1fr);
          column-gap: 72px;
          padding: 58px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .partnersPage .partnersSectionMeta {
          padding-top: 2px;
        }

        .partnersPage .partnersSectionNum {
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

        .partnersPage .partnersSectionEyebrow {
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

        .partnersPage .partnersSectionDivider {
          width: 1px;
          min-height: 220px;
          background: rgba(0, 0, 0, 0.08);
        }

        .partnersPage .partnersSectionBody {
          max-width: 820px;
          padding-top: 1px;
        }

        .partnersPage .partnersSectionTitle {
          margin: 0 0 30px;
          max-width: 18ch;
          color: #121214;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(1.85rem, 2.35vw, 2.55rem);
          line-height: 1.08;
          letter-spacing: -0.052em;
          font-weight: 400;
        }

        .partnersPage .partnersSectionText {
          margin: 0;
          max-width: 76ch;
          color: #121214;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.98rem;
          line-height: 1.78;
          font-weight: 300;
          opacity: 0.75;
        }

        .partnersPage .partnersApplicationList {
          display: flex;
          flex-direction: column;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }

        .partnersPage .partnersApplicationItem {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr);
          gap: 22px;
          padding: 28px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .partnersPage .partnersApplicationNum {
          color: #121214;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          font-weight: 700;
          opacity: 0.28;
          padding-top: 7px;
        }

        .partnersPage .partnersApplicationTitle {
          margin: 0 0 13px;
          max-width: 28ch;
          color: #121214;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(1.35rem, 1.8vw, 1.85rem);
          line-height: 1.12;
          letter-spacing: -0.04em;
          font-weight: 400;
        }

        .partnersPage .partnersApplicationText {
          margin: 0;
          max-width: 74ch;
          color: #121214;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.94rem;
          line-height: 1.7;
          font-weight: 300;
          opacity: 0.74;
        }

        .partnersPage .partnersTextCta {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          width: fit-content;
          min-height: 0;
          margin-top: 22px;
          padding: 0 0 7px;
          border: 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.42);
          border-radius: 0;
          background: transparent;
          box-shadow: none;
          color: #121214;
          text-decoration: none;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.68rem;
          line-height: 1;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 700;
          transition: opacity 0.2s ease;
        }

        .partnersPage .partnersTextCta:hover {
          opacity: 0.45;
          background: transparent;
        }

        .partnersPage .partnersArrow {
          font-size: 1.28rem;
          line-height: 0.7;
          letter-spacing: 0;
          font-weight: 300;
        }

        .partnersPage .partnersInlineLink {
          color: #121214;
          text-decoration: underline;
          text-underline-offset: 4px;
          text-decoration-thickness: 1px;
          font-weight: 500;
        }

        .partnersPage .partnersInlineLink:hover {
          opacity: 0.55;
        }

        @media (max-width: 1100px) {
          .partnersPage .partnersEditorialSection {
            grid-template-columns: 180px 1px minmax(0, 1fr);
            column-gap: 48px;
          }

          .partnersPage .partnersHeroLead {
            padding-left: 0;
          }
        }

        @media (max-width: 820px) {
          .partnersPage .partnersHeroInner {
            padding-top: 46px;
            padding-bottom: 62px;
          }

          .partnersPage .partnersHeroTitle,
          .partnersPage.lang-fr .partnersHeroTitle,
          .partnersPage.lang-de .partnersHeroTitle {
            max-width: none;
            font-size: clamp(2.45rem, 9vw, 3.85rem);
          }

          .partnersPage .partnersHeroLead,
          .partnersPage.lang-fr .partnersHeroLead,
          .partnersPage.lang-de .partnersHeroLead {
            max-width: none;
            font-size: 0.98rem;
            line-height: 1.62;
          }

          .partnersPage .partnersEditorialSection {
            grid-template-columns: 1fr;
            row-gap: 24px;
            padding: 44px 0;
          }

          .partnersPage .partnersSectionDivider {
            display: none;
          }

          .partnersPage .partnersSectionNum {
            margin-bottom: 12px;
          }

          .partnersPage .partnersSectionBody {
            max-width: none;
          }

          .partnersPage .partnersSectionTitle {
            max-width: none;
          }
        }

        @media (max-width: 560px) {
          .partnersPage .partnersHeroInner {
            padding-top: 40px;
            padding-bottom: 52px;
          }

          .partnersPage .partnersHeroTitle,
          .partnersPage.lang-fr .partnersHeroTitle,
          .partnersPage.lang-de .partnersHeroTitle {
            font-size: clamp(2.05rem, 10vw, 2.85rem);
          }

          .partnersPage .partnersHeroLead,
          .partnersPage.lang-fr .partnersHeroLead,
          .partnersPage.lang-de .partnersHeroLead {
            font-size: 0.92rem;
            line-height: 1.58;
          }

          .partnersPage .partnersEditorialSection {
            padding: 38px 0;
          }

          .partnersPage .partnersSectionTitle {
            font-size: clamp(1.65rem, 7vw, 2.15rem);
          }

          .partnersPage .partnersSectionText {
            font-size: 0.92rem;
            line-height: 1.68;
          }

          .partnersPage .partnersApplicationItem {
            grid-template-columns: 34px minmax(0, 1fr);
            gap: 16px;
            padding: 24px 0;
          }

          .partnersPage .partnersApplicationTitle {
            font-size: clamp(1.35rem, 6.5vw, 1.9rem);
          }

          .partnersPage .partnersApplicationText {
            font-size: 0.9rem;
            line-height: 1.62;
          }

          .partnersPage .partnersTextCta {
            font-size: 0.62rem;
            letter-spacing: 0.15em;
          }
        }
      `}</style>
    </Layout>
  );
}

