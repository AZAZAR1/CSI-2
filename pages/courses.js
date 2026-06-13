import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { COPY } from "../components/copy";

const pageCopy = {
  en: {
    kicker: "Learning Pathways",
    title: "Learning Pathways & Professional Solutions",
    intro:
      "ICSI serves three distinct audiences across the modern cigar world: aspiring professionals building a career, retailers and lounges seeking to modernize for growth, and dedicated aficionados pursuing a higher standard of personal mastery. Each pathway is grounded in the scientific Cigar Peak-Flavor System® and designed to bring greater structure, confidence, and performance to an increasingly complex global blend landscape.",
    distinction:
      "ICSI is the first globally to offer certification courses that include sensory science, quantification of flavor and aroma, data-driven cigar classification, and digital tools including applications, analytics, and guided tasting systems. ICSI applies the ISO/IEC 17024 Quality Systems framework.",
    individualsTitle: "For Aspiring Cigar Professionals",
    individualsEyebrow: "Professional Formation",
    individualsBody:
      "Build a career grounded in precision, structure, and credibility. ICSI’s certification programs develop a rigorous understanding of cigar construction, combustion dynamics, humidity behavior, and flavor evolution—preparing candidates for roles in premium lounges, retail environments, and luxury hospitality.",
    businessTitle: "For Retailers, Lounges & Hospitality Groups",
    businessEyebrow: "Business Modernization",
    businessBody:
      "Modernize your cigar offering and create consistent, high-quality client experiences. ICSI provides implementation and certification of the Cigar Peak-Flavor System® to help businesses standardize service, optimize performance, strengthen loyalty, and grow cigar sales with greater confidence.",
    aficionadosTitle: "For Aficionados & Collectors",
    aficionadosEyebrow: "Private Mastery",
    aficionadosBody:
      "Pursue a more exacting level of personal cigar mastery. ICSI’s advanced private pathway supports committed aficionados and collectors seeking a more precise understanding of calibration, aging, performance staging, and peak-flavor delivery across a wider range of blends.",
    bridge:
      "Whether developing a professional career, strengthening a cigar business, or deepening personal mastery, ICSI provides the structure required to move from intuition to calibrated performance.",
    pathwaysTitle: "Certification Pathways",
    pathwaysEyebrow: "Programs",
    pathwaysLead:
      "Four tailored pathways for professional development, industry modernization, and advanced personal optimization.",
    systemTitle: "Cigar Peak-Flavor System® Implementation & Certification",
    systemBody:
      "A comprehensive implementation and certification solution for retailers, lounges, and hospitality environments seeking to modernize operations, standardize cigar performance, and elevate the client experience.",
    systemCta: "Request Partnership",
    seoTitle: "Professional Pathways & Industry Solutions | ICSI",
    seoDescription:
      "ICSI supports aspiring cigar professionals, retailers, lounges, hospitality groups, and aficionados through structured certification pathways, Cigar Peak-Flavor System implementation, and advanced cigar mastery solutions.",
  },
  fr: {
    kicker: "Parcours d’apprentissage",
    title: "Parcours d'apprentissage & solutions professionnelles",
    intro:
      "L’ICSI s’adresse à trois publics distincts dans le monde moderne du cigare : les futurs professionnels construisant une carrière, les détaillants et lounges cherchant à se moderniser pour croître, ainsi que les aficionados engagés recherchant un niveau supérieur de maîtrise personnelle. Chaque parcours s’appuie sur le Cigar Peak-Flavor System® scientifique et vise à apporter davantage de structure, de confiance et de performance dans un paysage mondial de mélanges toujours plus complexe.",
    distinction:
      "L’ICSI est le premier au monde à proposer des certifications intégrant la science sensorielle, la quantification des arômes et saveurs, la classification des cigares basée sur les données, ainsi que des outils digitaux tels que les applications, analyses et systèmes de dégustation guidée. L’ICSI applique le cadre qualité ISO/IEC 17024.",
    individualsTitle: "Pour les futurs professionnels du cigare",
    individualsEyebrow: "Formation professionnelle",
    individualsBody:
      "Construisez une carrière fondée sur la précision, la structure et la crédibilité. Les programmes de certification ICSI développent une compréhension rigoureuse de la construction du cigare, de la dynamique de combustion, du comportement hygrométrique et de l’évolution aromatique—préparant les candidats à des fonctions en lounges premium, en distribution spécialisée et dans l’hôtellerie de luxe.",
    businessTitle: "Pour les détaillants, lounges & groupes hôteliers",
    businessEyebrow: "Modernisation business",
    businessBody:
      "Modernisez votre offre cigare et créez une expérience client constante et qualitative. ICSI propose l’implémentation et la certification du Cigar Peak-Flavor System® afin d’aider les entreprises à standardiser le service, optimiser la performance, renforcer la fidélité et développer les ventes de cigares avec davantage d’assurance.",
    aficionadosTitle: "Pour les aficionados & collectionneurs",
    aficionadosEyebrow: "Maîtrise privée",
    aficionadosBody:
      "Atteignez un niveau plus exigeant de maîtrise personnelle du cigare. Le parcours privé avancé de l’ICSI accompagne les aficionados et collectionneurs engagés qui souhaitent affiner leur compréhension de la calibration, du vieillissement, de la mise en performance et de la restitution Peak-Flavor sur une plus grande diversité de mélanges.",
    bridge:
      "Qu’il s’agisse de développer une carrière professionnelle, de renforcer une activité cigare ou d’approfondir une maîtrise personnelle, l’ICSI apporte la structure nécessaire pour passer de l’intuition à une performance calibrée.",
    pathwaysTitle: "Parcours de certification",
    pathwaysEyebrow: "Programmes",
    pathwaysLead:
      "Quatre parcours adaptés au développement professionnel, à la modernisation des environnements cigare et à l’optimisation personnelle avancée.",
    systemTitle: "Implémentation & Certification du Cigar Peak-Flavor System®",
    systemBody:
      "Une solution complète d’implémentation et de certification destinée aux détaillants, lounges et environnements hôteliers souhaitant moderniser leurs opérations, standardiser la performance des cigares et élever l’expérience client.",
    systemCta: "Demander un partenariat",
    seoTitle: "Parcours Professionnels & Solutions pour l’Industrie | ICSI",
    seoDescription:
      "L’ICSI accompagne les futurs professionnels du cigare, les détaillants, lounges, groupes hôteliers et aficionados grâce à des parcours de certification structurés, à l’implémentation du Cigar Peak-Flavor System et à des solutions avancées de maîtrise du cigare.",
  },
  de: {
    kicker: "Lernpfade",
    title: "Lernpfade & professionelle Lösungen",
    intro:
      "ICSI richtet sich an drei unterschiedliche Zielgruppen in der modernen Zigarrenwelt: angehende Fachkräfte, die eine Karriere aufbauen möchten, Fachhändler und Lounges, die sich für Wachstum modernisieren wollen, sowie engagierte Aficionados, die ein höheres Maß an persönlicher Meisterschaft anstreben. Jeder Weg basiert auf dem wissenschaftlichen Cigar Peak-Flavor System® und wurde entwickelt, um in einer zunehmend komplexen globalen Blend-Landschaft mehr Struktur, Sicherheit und Performance zu schaffen.",
    distinction:
      "ICSI ist weltweit das erste Institut, das Zertifizierungen anbietet, die Sensory Science, Quantifizierung von Aromen, datenbasierte Zigarrenklassifikation und digitale Tools wie Apps, Analytik und geführte Verkostungssysteme integrieren. ICSI arbeitet nach dem Qualitätsrahmen ISO/IEC 17024.",
    individualsTitle: "Für angehende Zigarrenprofis",
    individualsEyebrow: "Professionelle Ausbildung",
    individualsBody:
      "Bauen Sie eine Karriere auf, die auf Präzision, Struktur und Glaubwürdigkeit basiert. Die Zertifizierungsprogramme von ICSI vermitteln ein fundiertes Verständnis von Zigarrenkonstruktion, Verbrennungsdynamik, Feuchtigkeitsverhalten und Aromenentwicklung—und bereiten Kandidaten auf Aufgaben in Premium-Lounges, im Fachhandel und in der Luxushotellerie vor.",
    businessTitle: "Für Fachhändler, Lounges & Hotelgruppen",
    businessEyebrow: "Business Modernisierung",
    businessBody:
      "Modernisieren Sie Ihr Zigarrenangebot und schaffen Sie konsistente, hochwertige Kundenerlebnisse. ICSI bietet die Implementierung und Zertifizierung des Cigar Peak-Flavor System® an, damit Unternehmen ihren Service standardisieren, ihre Performance optimieren, Loyalität stärken und Zigarrenumsätze mit größerer Sicherheit steigern können.",
    aficionadosTitle: "Für Aficionados & Sammler",
    aficionadosEyebrow: "Private Meisterschaft",
    aficionadosBody:
      "Erreichen Sie ein anspruchsvolleres Niveau persönlicher Zigarrenmeisterschaft. Der fortgeschrittene private Weg von ICSI unterstützt engagierte Aficionados und Sammler, die ein präziseres Verständnis von Kalibrierung, Reifung, Performance-Staging und Peak-Flavor-Entfaltung über ein breiteres Spektrum an Blends hinweg anstreben.",
    bridge:
      "Ob beim Aufbau einer professionellen Karriere, bei der Stärkung eines Zigarrengeschäfts oder bei der Vertiefung persönlicher Meisterschaft—ICSI liefert die Struktur, die nötig ist, um von Intuition zu kalibrierter Performance zu gelangen.",
    pathwaysTitle: "Zertifizierungswege",
    pathwaysEyebrow: "Programme",
    pathwaysLead:
      "Vier zugeschnittene Wege für berufliche Entwicklung, Branchenmodernisierung und fortgeschrittene persönliche Optimierung.",
    systemTitle: "Cigar Peak-Flavor System® Implementierung & Zertifizierung",
    systemBody:
      "Eine umfassende Implementierungs- und Zertifizierungslösung für Fachhändler, Lounges und Hospitality-Umgebungen, die ihre Abläufe modernisieren, die Zigarrenperformance standardisieren und das Kundenerlebnis aufwerten möchten.",
    systemCta: "Partnerschaft anfragen",
    seoTitle: "Berufliche Wege & Branchenlösungen | ICSI",
    seoDescription:
      "ICSI unterstützt angehende Zigarrenprofis, Fachhändler, Lounges, Hotelgruppen und Aficionados mit strukturierten Zertifizierungswegen, Cigar Peak-Flavor System Implementierung und fortgeschrittenen Lösungen zur Zigarrenmeisterschaft.",
  },
};

function AudienceSection({ number, eyebrow, title, body }) {
  return (
    <section className="coursesEditorialSection">
      <div className="coursesSectionMeta">
        <span className="coursesSectionNum">{number}</span>
        <span className="coursesSectionEyebrow">{eyebrow}</span>
      </div>

      <div className="coursesSectionDivider" />

      <div className="coursesSectionBody">
        <h2 className="coursesSectionTitle">{title}</h2>
        <p className="coursesSectionText">{body}</p>
      </div>
    </section>
  );
}

function ProgramItem({ image, alt, title, body, actions }) {
  return (
    <div className="coursesProgramItem">
      <div className="coursesProgramMedia">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 900px) 100vw, 240px"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="coursesProgramContent">
        <h3 className="coursesProgramTitle">{title}</h3>
        <p className="coursesProgramText">{body}</p>

        <div className="coursesProgramActions">{actions}</div>
      </div>
    </div>
  );
}

export default function Courses() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();
  const c = COPY[lang] || COPY.en;
  const p = pageCopy[lang] || pageCopy.en;

  return (
    <Layout>
      <Seo title={p.seoTitle} description={p.seoDescription} path="/courses" />

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "International Cigar Sommelier Institute",
              url: "https://cigarsommelierinstitute.com",
              description:
                "Professional cigar sommelier training, Peak-Flavor System implementation, and advanced cigar mastery based on the scientific Cigar Peak-Flavor System.",
              hasCourse: [
                { "@type": "Course", name: "Certified Cigar Sommelier (CCS®)" },
                { "@type": "Course", name: "Advanced Cigar Sommelier (ACS®)" },
                { "@type": "Course", name: "Aficionado Master Class (AMC®)" },
              ],
            }),
          }}
        />
      </Head>

      <div className={`coursesPage lang-${lang}`}>
        <section className="coursesHero">
          <div className="container coursesHeroInner">
            <span className="coursesKicker">{p.kicker}</span>
            <h1 className="coursesHeroTitle">{p.title}</h1>
            <p className="coursesHeroLead">{p.intro}</p>
          </div>
        </section>

        <main className="container coursesMain">
          <section className="coursesStatement">
            <div className="coursesStatementMeta">
              <span className="coursesStatementNum">00</span>
              <span className="coursesSectionEyebrow">ICSI Framework</span>
            </div>

            <div className="coursesSectionDivider" />

            <div className="coursesStatementBody">
              <p className="coursesStatementText">{p.distinction}</p>
            </div>
          </section>

          <AudienceSection
            number="01"
            eyebrow={p.individualsEyebrow}
            title={p.individualsTitle}
            body={p.individualsBody}
          />

          <AudienceSection
            number="02"
            eyebrow={p.businessEyebrow}
            title={p.businessTitle}
            body={p.businessBody}
          />

          <AudienceSection
            number="03"
            eyebrow={p.aficionadosEyebrow}
            title={p.aficionadosTitle}
            body={p.aficionadosBody}
          />

          <section className="coursesBridge">
            <p>{p.bridge}</p>
          </section>

          <section className="coursesProgramsBlock">
            <div className="coursesProgramsMeta">
              <span className="coursesSectionNum">04</span>
              <span className="coursesSectionEyebrow">{p.pathwaysEyebrow}</span>
            </div>

            <div className="coursesSectionDivider" />

            <div className="coursesProgramsBody">
              <h2 className="coursesSectionTitle">{p.pathwaysTitle}</h2>
              <p className="coursesSectionText">{p.pathwaysLead}</p>

              <div className="coursesProgramList">
                <ProgramItem
                  image="/img/CCS_logo.png"
                  alt="Certified Cigar Sommelier logo"
                  title={c.ccs_title}
                  body={c.ccs_blurb}
                  actions={
                    <>
                      <Link
                        href={{ pathname: "/contact", query: { program: "ccs" } }}
                        locale={lang}
                        className="coursesTextCta"
                      >
                        <span>{c.apply}</span>
                        <span className="coursesArrow">→</span>
                      </Link>

                      <a
                        className="coursesTextCta secondary"
                        href="/brochures/CCS_Certified_Cigar_Sommelier_Brochure.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>{c.download}</span>
                        <span className="coursesArrow">→</span>
                      </a>
                    </>
                  }
                />

                <ProgramItem
                  image="/img/ACS_logo.png"
                  alt="Advanced Cigar Sommelier logo"
                  title={c.acs_title}
                  body={c.acs_blurb}
                  actions={
                    <>
                      <Link
                        href={{ pathname: "/contact", query: { program: "acs" } }}
                        locale={lang}
                        className="coursesTextCta"
                      >
                        <span>{c.apply}</span>
                        <span className="coursesArrow">→</span>
                      </Link>

                      <a
                        className="coursesTextCta secondary"
                        href="/brochures/ACS_Advanced_Cigar_Sommelier_Brochure.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>{c.download}</span>
                        <span className="coursesArrow">→</span>
                      </a>
                    </>
                  }
                />

                <ProgramItem
                  image="/img/CPFS_logo.png"
                  alt="Cigar Peak-Flavor System implementation and certification logo"
                  title={p.systemTitle}
                  body={p.systemBody}
                  actions={
                    <Link
                      href={{ pathname: "/contact", query: { inquiry: "system-certification" } }}
                      locale={lang}
                      className="coursesTextCta"
                    >
                      <span>{p.systemCta}</span>
                      <span className="coursesArrow">→</span>
                    </Link>
                  }
                />

                <ProgramItem
                  image="/img/AMC_logo.png"
                  alt="Aficionado Master Class logo"
                  title={c.amc_title}
                  body={c.amc_blurb}
                  actions={
                    <>
                      <Link
                        href={{ pathname: "/contact", query: { program: "amc" } }}
                        locale={lang}
                        className="coursesTextCta"
                      >
                        <span>{c.request_invite}</span>
                        <span className="coursesArrow">→</span>
                      </Link>

                      <a
                        className="coursesTextCta secondary"
                        href="/brochures/AMC_Aficionado_Master_Class_Brochure_v2.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>{c.download}</span>
                        <span className="coursesArrow">→</span>
                      </a>
                    </>
                  }
                />
              </div>
            </div>
          </section>
        </main>
      </div>

      <style jsx global>{`
        /* =========================================================
           COURSES PAGE ONLY
           Global scope is intentional to neutralize repo-level .section,
           .card, .btn, .lead, h1 and h2 styling conflicts.
        ========================================================= */

        .coursesPage {
          background: #fff;
          color: #121214;
        }

        .coursesPage .coursesHero {
          margin: 0;
          padding: 0;
          background: #fff;
          border: 0;
        }

        .coursesPage .coursesHeroInner {
          padding-top: 60px;
          padding-bottom: 82px;
        }

        .coursesPage .coursesKicker {
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

        .coursesPage .coursesHeroTitle {
          margin: 0 0 42px;
          max-width: 14ch;
          color: #121214;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(3rem, 5.2vw, 5.4rem);
          line-height: 0.98;
          letter-spacing: -0.055em;
          font-weight: 400;
        }

        .coursesPage .coursesHeroLead {
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

        .coursesPage.lang-fr .coursesHeroTitle,
        .coursesPage.lang-de .coursesHeroTitle {
          max-width: 18ch;
          font-size: clamp(2.55rem, 4.3vw, 4.65rem);
        }

        .coursesPage.lang-fr .coursesHeroLead,
        .coursesPage.lang-de .coursesHeroLead {
          max-width: 88ch;
          font-size: clamp(0.98rem, 1.18vw, 1.12rem);
          line-height: 1.66;
        }

        .coursesPage .coursesMain {
          padding-bottom: 100px;
        }

        .coursesPage .coursesStatement,
        .coursesPage .coursesEditorialSection,
        .coursesPage .coursesProgramsBlock {
          display: grid;
          grid-template-columns: 220px 1px minmax(0, 1fr);
          column-gap: 72px;
          padding: 58px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .coursesPage .coursesStatementMeta,
        .coursesPage .coursesSectionMeta,
        .coursesPage .coursesProgramsMeta {
          padding-top: 2px;
        }

        .coursesPage .coursesStatementNum,
        .coursesPage .coursesSectionNum {
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

        .coursesPage .coursesSectionEyebrow {
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

        .coursesPage .coursesSectionDivider {
          width: 1px;
          min-height: 220px;
          background: rgba(0, 0, 0, 0.08);
        }

        .coursesPage .coursesStatementBody,
        .coursesPage .coursesSectionBody,
        .coursesPage .coursesProgramsBody {
          max-width: 820px;
          padding-top: 1px;
        }

        .coursesPage .coursesSectionTitle {
          margin: 0 0 24px;
          max-width: 18ch;
          color: #121214;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(1.85rem, 2.35vw, 2.55rem);
          line-height: 1.08;
          letter-spacing: -0.052em;
          font-weight: 400;
        }

        .coursesPage .coursesSectionText,
        .coursesPage .coursesStatementText {
          margin: 0;
          max-width: 76ch;
          color: #121214;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.98rem;
          line-height: 1.78;
          font-weight: 300;
          opacity: 0.75;
        }

        .coursesPage .coursesBridge {
          padding: 46px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .coursesPage .coursesBridge p {
          margin: 0;
          max-width: 72ch;
          padding-left: max(0px, 33%);
          color: #121214;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: clamp(1.05rem, 1.4vw, 1.22rem);
          line-height: 1.72;
          font-weight: 300;
          opacity: 0.72;
        }

        .coursesPage .coursesProgramList {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }

        .coursesPage .coursesProgramItem {
          display: grid;
          grid-template-columns: 150px minmax(0, 1fr);
          gap: 34px;
          padding: 30px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .coursesPage .coursesProgramMedia {
          position: relative;
          width: 150px;
          height: 150px;
          overflow: hidden;
          background: #f3f1ed;
        }

        .coursesPage .coursesProgramContent {
          min-width: 0;
        }

        .coursesPage .coursesProgramTitle {
          margin: 0 0 13px;
          max-width: 28ch;
          color: #121214;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(1.35rem, 1.8vw, 1.85rem);
          line-height: 1.12;
          letter-spacing: -0.04em;
          font-weight: 400;
        }

        .coursesPage .coursesProgramText {
          margin: 0;
          max-width: 74ch;
          color: #121214;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.94rem;
          line-height: 1.7;
          font-weight: 300;
          opacity: 0.74;
        }

        .coursesPage .coursesProgramActions {
          margin-top: 22px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px 28px;
        }

        .coursesPage .coursesTextCta {
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
          font-size: 0.68rem;
          line-height: 1;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 700;
          transition: opacity 0.2s ease;
        }

        .coursesPage .coursesTextCta.secondary {
          opacity: 0.58;
        }

        .coursesPage .coursesTextCta:hover {
          opacity: 0.45;
          background: transparent;
        }

        .coursesPage .coursesArrow {
          font-size: 1.28rem;
          line-height: 0.7;
          letter-spacing: 0;
          font-weight: 300;
        }

        @media (max-width: 1100px) {
          .coursesPage .coursesStatement,
          .coursesPage .coursesEditorialSection,
          .coursesPage .coursesProgramsBlock {
            grid-template-columns: 180px 1px minmax(0, 1fr);
            column-gap: 48px;
          }

          .coursesPage .coursesHeroLead,
          .coursesPage .coursesBridge p {
            padding-left: 0;
          }
        }

        @media (max-width: 820px) {
          .coursesPage .coursesHeroInner {
            padding-top: 46px;
            padding-bottom: 62px;
          }

          .coursesPage .coursesHeroTitle,
          .coursesPage.lang-fr .coursesHeroTitle,
          .coursesPage.lang-de .coursesHeroTitle {
            max-width: none;
            font-size: clamp(2.45rem, 9vw, 3.85rem);
          }

          .coursesPage .coursesHeroLead,
          .coursesPage.lang-fr .coursesHeroLead,
          .coursesPage.lang-de .coursesHeroLead {
            max-width: none;
            font-size: 0.98rem;
            line-height: 1.62;
          }

          .coursesPage .coursesStatement,
          .coursesPage .coursesEditorialSection,
          .coursesPage .coursesProgramsBlock {
            grid-template-columns: 1fr;
            row-gap: 24px;
            padding: 44px 0;
          }

          .coursesPage .coursesSectionDivider {
            display: none;
          }

          .coursesPage .coursesStatementNum,
          .coursesPage .coursesSectionNum {
            margin-bottom: 12px;
          }

          .coursesPage .coursesStatementBody,
          .coursesPage .coursesSectionBody,
          .coursesPage .coursesProgramsBody {
            max-width: none;
          }

          .coursesPage .coursesSectionTitle {
            max-width: none;
          }

          .coursesPage .coursesBridge p {
            max-width: none;
          }

          .coursesPage .coursesProgramItem {
            grid-template-columns: 120px minmax(0, 1fr);
            gap: 24px;
          }

          .coursesPage .coursesProgramMedia {
            width: 120px;
            height: 120px;
          }
        }

        @media (max-width: 560px) {
          .coursesPage .coursesHeroInner {
            padding-top: 40px;
            padding-bottom: 52px;
          }

          .coursesPage .coursesHeroTitle,
          .coursesPage.lang-fr .coursesHeroTitle,
          .coursesPage.lang-de .coursesHeroTitle {
            font-size: clamp(2.05rem, 10vw, 2.85rem);
          }

          .coursesPage .coursesHeroLead,
          .coursesPage.lang-fr .coursesHeroLead,
          .coursesPage.lang-de .coursesHeroLead {
            font-size: 0.92rem;
            line-height: 1.58;
          }

          .coursesPage .coursesStatement,
          .coursesPage .coursesEditorialSection,
          .coursesPage .coursesProgramsBlock {
            padding: 38px 0;
          }

          .coursesPage .coursesSectionTitle {
            font-size: clamp(1.65rem, 7vw, 2.15rem);
          }

          .coursesPage .coursesSectionText,
          .coursesPage .coursesStatementText,
          .coursesPage .coursesBridge p {
            font-size: 0.92rem;
            line-height: 1.68;
          }

          .coursesPage .coursesProgramItem {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .coursesPage .coursesProgramMedia {
            width: 100%;
            height: auto;
            aspect-ratio: 1 / 1;
            max-width: 260px;
          }

          .coursesPage .coursesProgramTitle {
            font-size: clamp(1.35rem, 6.5vw, 1.9rem);
          }

          .coursesPage .coursesProgramActions {
            align-items: flex-start;
            flex-direction: column;
            gap: 14px;
          }

          .coursesPage .coursesTextCta {
            font-size: 0.62rem;
            letter-spacing: 0.15em;
          }
        }
      `}</style>
    </Layout>
  );
}

