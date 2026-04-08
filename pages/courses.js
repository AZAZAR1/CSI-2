import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { COPY } from "../components/copy";

export default function Courses() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();
  const c = COPY[lang] || COPY.en;

  const pageCopy = {
    en: {
      title: "Learning Pathways & Professional Solutions",
       intro:
  "ICSI serves three distinct audiences across the modern cigar world: aspiring professionals building a career, retailers and lounges seeking to modernize for growth, and dedicated aficionados pursuing a higher standard of personal mastery. Each pathway is grounded in the scientific Cigar Peak-Flavor System® and designed to bring greater structure, confidence, and performance to an increasingly complex global blend landscape. ICSI is the first globally to offer certification courses that include: <strong>Sensory science</strong>, <strong>Quantification of flavor/aroma</strong>, <strong>Data-driven cigar classification</strong>, <strong>Digital tools like Apps, analytics and guided tasting systems</strong>. 

ICSI applies the ISO/IEC 17024 Quality Systems framework.",
      individualsTitle: "For Aspiring Cigar Professionals",
      individualsBody:
        "Build a career grounded in precision, structure, and credibility. ICSI’s certification programs develop a rigorous understanding of cigar construction, combustion dynamics, humidity behavior, and flavor evolution—preparing candidates for roles in premium lounges, retail environments, and luxury hospitality.",
      businessTitle: "For Retailers, Lounges & Hospitality Groups",
      businessBody:
        "Modernize your cigar offering and create consistent, high-quality client experiences. ICSI provides implementation and certification of the Cigar Peak-Flavor System® to help businesses standardize service, optimize performance, strengthen loyalty, and grow cigar sales with greater confidence.",
      aficionadosTitle: "For Aficionados & Collectors",
      aficionadosBody:
        "Pursue a more exacting level of personal cigar mastery. ICSI’s advanced private pathway supports committed aficionados and collectors seeking a more precise understanding of calibration, aging, performance staging, and peak-flavor delivery across a wider range of blends.",
      bridge:
        "Whether developing a professional career, strengthening a cigar business, or deepening personal mastery, ICSI provides the structure required to move from intuition to calibrated performance.",
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
      title: "Parcours D'apprentissage & Solutions Professionnelles",
      intro:
  "L’ICSI s’adresse à trois publics distincts dans le monde moderne du cigare : les futurs professionnels construisant une carrière, les détaillants et lounges cherchant à se moderniser pour croître, ainsi que les aficionados engagés recherchant un niveau supérieur de maîtrise personnelle. Chaque parcours s’appuie sur le Cigar Peak-Flavor System® scientifique et vise à apporter davantage de structure, de confiance et de performance dans un paysage mondial de mélanges toujours plus complexe. L’ICSI est le premier au monde à proposer des certifications intégrant : <strong>la science sensorielle</strong>, <strong>la quantification des arômes et saveurs</strong>, <strong>la classification des cigares basée sur les données</strong>, <strong>des outils digitaux tels que applications, analyses et systèmes de dégustation guidée</strong>. 

L’ICSI applique le cadre qualité ISO/IEC 17024.",
      individualsTitle: "Pour les futurs professionnels du cigare",
      individualsBody:
        "Construisez une carrière fondée sur la précision, la structure et la crédibilité. Les programmes de certification ICSI développent une compréhension rigoureuse de la construction du cigare, de la dynamique de combustion, du comportement hygrométrique et de l’évolution aromatique—préparant les candidats à des fonctions en lounges premium, en distribution spécialisée et dans l’hôtellerie de luxe.",
      businessTitle: "Pour les détaillants, lounges & groupes hôteliers",
      businessBody:
        "Modernisez votre offre cigare et créez une expérience client constante et qualitative. ICSI propose l’implémentation et la certification du Cigar Peak-Flavor System® afin d’aider les entreprises à standardiser le service, optimiser la performance, renforcer la fidélité et développer les ventes de cigares avec davantage d’assurance.",
      aficionadosTitle: "Pour les aficionados & collectionneurs",
      aficionadosBody:
        "Atteignez un niveau plus exigeant de maîtrise personnelle du cigare. Le parcours privé avancé de l’ICSI accompagne les aficionados et collectionneurs engagés qui souhaitent affiner leur compréhension de la calibration, du vieillissement, de la mise en performance et de la restitution Peak-Flavor sur une plus grande diversité de mélanges.",
      bridge:
        "Qu’il s’agisse de développer une carrière professionnelle, de renforcer une activité cigare ou d’approfondir une maîtrise personnelle, l’ICSI apporte la structure nécessaire pour passer de l’intuition à une performance calibrée.",
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
      title: "Lernpfade & Professionelle Lösungen",
      intro:
  "ICSI richtet sich an drei unterschiedliche Zielgruppen in der modernen Zigarrenwelt: angehende Fachkräfte, die eine Karriere aufbauen möchten, Fachhändler und Lounges, die sich für Wachstum modernisieren wollen, sowie engagierte Aficionados, die ein höheres Maß an persönlicher Meisterschaft anstreben. Jeder Weg basiert auf dem wissenschaftlichen Cigar Peak-Flavor System® und wurde entwickelt, um in einer zunehmend komplexen globalen Blend-Landschaft mehr Struktur, Sicherheit und Performance zu schaffen. ICSI ist weltweit das erste Institut, das Zertifizierungen anbietet, die Folgendes integrieren: <strong>Sensory Science</strong>, <strong>Quantifizierung von Aromen</strong>, <strong>datenbasierte Zigarrenklassifikation</strong>, <strong>digitale Tools wie Apps, Analytik und geführte Verkostungssysteme</strong>. 

ICSI arbeitet nach dem Qualitätsrahmen ISO/IEC 17024.",
      individualsTitle: "Für angehende Zigarrenprofis",
      individualsBody:
        "Bauen Sie eine Karriere auf, die auf Präzision, Struktur und Glaubwürdigkeit basiert. Die Zertifizierungsprogramme von ICSI vermitteln ein fundiertes Verständnis von Zigarrenkonstruktion, Verbrennungsdynamik, Feuchtigkeitsverhalten und Aromenentwicklung—und bereiten Kandidaten auf Aufgaben in Premium-Lounges, im Fachhandel und in der Luxushotellerie vor.",
      businessTitle: "Für Fachhändler, Lounges & Hotelgruppen",
      businessBody:
        "Modernisieren Sie Ihr Zigarrenangebot und schaffen Sie konsistente, hochwertige Kundenerlebnisse. ICSI bietet die Implementierung und Zertifizierung des Cigar Peak-Flavor System® an, damit Unternehmen ihren Service standardisieren, ihre Performance optimieren, Loyalität stärken und Zigarrenumsätze mit größerer Sicherheit steigern können.",
      aficionadosTitle: "Für Aficionados & Sammler",
      aficionadosBody:
        "Erreichen Sie ein anspruchsvolleres Niveau persönlicher Zigarrenmeisterschaft. Der fortgeschrittene private Weg von ICSI unterstützt engagierte Aficionados und Sammler, die ein präziseres Verständnis von Kalibrierung, Reifung, Performance-Staging und Peak-Flavor-Entfaltung über ein breiteres Spektrum an Blends hinweg anstreben.",
      bridge:
        "Ob beim Aufbau einer professionellen Karriere, bei der Stärkung eines Zigarrengeschäfts oder bei der Vertiefung persönlicher Meisterschaft—ICSI liefert die Struktur, die nötig ist, um von Intuition zu kalibrierter Performance zu gelangen.",
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

  const p = pageCopy[lang] || pageCopy.en;

  const seo = {
    title: p.seoTitle,
    description: p.seoDescription,
    path: "/courses",
  };

  const imageCardStyle = {
    position: "relative",
    width: "100%",
    aspectRatio: "1 / 1",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 18,
    background: "#f3f1ed",
  };

  return (
    <Layout>
      <Seo title={seo.title} description={seo.description} path={seo.path} />

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

      <div className="section coursesSection">
        <div className="container">
          <h1 className="coursesTitle">{p.title}</h1>

          <p className="lead coursesIntro">{p.intro}</p>

          <div className="audienceGrid">
            <div className="card audienceCard">
              <h2 style={{ marginTop: 0 }}>{p.individualsTitle}</h2>
              <p style={{ marginBottom: 0 }}>{p.individualsBody}</p>
            </div>

            <div className="card audienceCard">
              <h2 style={{ marginTop: 0 }}>{p.businessTitle}</h2>
              <p style={{ marginBottom: 0 }}>{p.businessBody}</p>
            </div>

            <div className="card audienceCard">
              <h2 style={{ marginTop: 0 }}>{p.aficionadosTitle}</h2>
              <p style={{ marginBottom: 0 }}>{p.aficionadosBody}</p>
            </div>
          </div>

          <div className="card bridgeCard" style={{ marginTop: 18 }}>
            <p className="small bridgeText">{p.bridge}</p>
          </div>

          <p className="small pathwaysLead">{p.pathwaysLead}</p>

          <div className="programGrid" style={{ marginTop: 14 }}>
            <div className="card programCard">
              <div style={imageCardStyle}>
                <Image
                  src="/img/CCS_logo.png"
                  alt="Certified Cigar Sommelier logo"
                  fill
                  sizes="(max-width: 900px) 100vw, 360px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="programBody">
                <h3>{c.ccs_title}</h3>
                <p>{c.ccs_blurb}</p>
              </div>

              <div className="ctaRow programButtons">
                <Link
                  className="btn primary"
                  href={{ pathname: "/contact", query: { program: "ccs" } }}
                  locale={lang}
                >
                  {c.apply}
                </Link>

                <a
                  className="btn"
                  href="/brochures/CCS_Certified_Cigar_Sommelier_Brochure.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  {c.download}
                </a>
              </div>
            </div>

            <div className="card programCard">
              <div style={imageCardStyle}>
                <Image
                  src="/img/ACS_logo.png"
                  alt="Advanced Cigar Sommelier logo"
                  fill
                  sizes="(max-width: 900px) 100vw, 360px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="programBody">
                <h3>{c.acs_title}</h3>
                <p>{c.acs_blurb}</p>
              </div>

              <div className="ctaRow programButtons">
                <Link
                  className="btn primary"
                  href={{ pathname: "/contact", query: { program: "acs" } }}
                  locale={lang}
                >
                  {c.apply}
                </Link>

                <a
                  className="btn"
                  href="/brochures/ACS_Advanced_Cigar_Sommelier_Brochure.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  {c.download}
                </a>
              </div>
            </div>

            <div className="card programCard">
              <div style={imageCardStyle}>
                <Image
                  src="/img/CPFS_logo.png"
                  alt="Cigar Peak-Flavor System implementation and certification logo"
                  fill
                  sizes="(max-width: 900px) 100vw, 360px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="programBody">
                <h3>{p.systemTitle}</h3>
                <p>{p.systemBody}</p>
              </div>

              <div className="ctaRow programButtons">
                <Link
                  className="btn primary"
                  href={{ pathname: "/contact", query: { inquiry: "system-certification" } }}
                  locale={lang}
                >
                  {p.systemCta}
                </Link>
              </div>
            </div>

            <div className="card programCard">
              <div style={imageCardStyle}>
                <Image
                  src="/img/AMC_logo.png"
                  alt="Aficionado Master Class logo"
                  fill
                  sizes="(max-width: 900px) 100vw, 360px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="programBody">
                <h3>{c.amc_title}</h3>
                <p>{c.amc_blurb}</p>
              </div>

              <div className="ctaRow programButtons">
                <Link
                  className="btn primary"
                  href={{ pathname: "/contact", query: { program: "amc" } }}
                  locale={lang}
                >
                  {c.request_invite}
                </Link>

                <a
                  className="btn"
                  href="/brochures/AMC_Aficionado_Master_Class_Brochure_v2.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  {c.download}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .coursesSection {
          padding-top: 34px;
        }

        .coursesTitle {
          max-width: 16ch;
        }

        .coursesIntro {
          max-width: 78ch;
          margin-top: 12px;
          line-height: 1.7;
        }

        .audienceGrid {
          margin-top: 20px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .audienceCard {
          height: 100%;
        }

        .bridgeText {
          margin: 0;
          line-height: 1.7;
        }

        .pathwaysLead {
          margin-top: 14px;
        }

        .programGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          align-items: stretch;
        }

        .programCard {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .programBody {
          flex: 1 1 auto;
        }

        .programButtons {
          margin-top: 16px;
        }

        @media (max-width: 1100px) {
          .audienceGrid,
          .programGrid {
            gap: 16px;
          }
        }

        @media (max-width: 900px) {
          .coursesSection {
            padding-top: 22px;
          }

          .coursesTitle {
            max-width: none;
          }

          .coursesIntro {
            font-size: 1.12rem;
            line-height: 1.75;
          }

          .audienceGrid,
          .programGrid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .audienceCard,
          .programCard,
          .bridgeCard {
            padding: 22px;
          }

          .programCard h3 {
            font-size: 1.4rem;
            line-height: 1.2;
          }

          .programCard p,
          .audienceCard p {
            font-size: 1.05rem;
            line-height: 1.65;
          }

          .programButtons {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 14px;
          }

          .programButtons :global(.btn) {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .coursesTitle {
            font-size: clamp(2.2rem, 10vw, 3.2rem);
            line-height: 0.98;
            letter-spacing: -0.04em;
          }

          .coursesIntro {
            font-size: 1.05rem;
            line-height: 1.72;
          }

          .audienceCard,
          .programCard,
          .bridgeCard {
            padding: 18px;
          }

          .programCard h3 {
            font-size: 1.28rem;
          }

          .programCard p,
          .audienceCard p,
          .bridgeText {
            font-size: 1rem;
            line-height: 1.62;
          }
        }
      `}</style>
    </Layout>
  );
}
