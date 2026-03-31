import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function System() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();

  const copy = {
    en: {
      title: "Cigar Peak-Flavor System®",
      lead: "Controlled. Measured. Predictable.",
      p1: `Most cigars are evaluated emotionally or based on what we hear or see. Very few are evaluated on scientific insights, with the Blender's philosophy and intent in mind.
           The Peak-Flavor System™ treats a cigar as a dynamic system that combines various tobacco leaf seeds, tobacco origin and soil, and construction techniques.`,
      bullets: [
        "Leaf hygroscopic equilibrium",
        "Temperature-humidity coupling",
        "Pre-heat zone behavior",
        "Volatile activation thresholds",
        "Blend architecture (wrapper / binder / filler)",
      ],
      p2: `Peak flavor occurs within a narrow moisture activation window specific to each blend family.`,
      p3: `The system enables repeatable staging, diagnostics before lighting, and a controlled pathway from conditioning to peak aromatic expression.`,
      download: "Download system overview (PDF)",
      applicationsTitle: "Program Applications",
      applicationsText:
        "The Peak-Flavor System® is deployed across ICSI’s professional and elite pathways:",
      furtherReadingLabel: "Further reading:",
      furtherReadingTitle: "Ideal Cigar Humidity & Peak Flavor Timing",
      seoTitle: "Peak-Flavor System® | International Cigar Sommelier Institute",
      seoDescription:
        "The proprietary Peak-Flavor System® applies thermodynamics, combustion science, and blend architecture modeling to achieve repeatable cigar excellence.",
    },
    fr: {
      title: "Cigar Peak-Flavor System®",
      lead: "Contrôlé. Mesuré. Prévisible.",
      p1: `La plupart des cigares sont évalués de manière émotionnelle ou sur la base de ce que nous entendons ou voyons. Très peu sont évalués selon des critères scientifiques, en tenant compte de la philosophie et de l'intention du créateur (blender). Le système Peak-Flavor® traite un cigare comme un système dynamique combinant diverses semences de feuilles de tabac, l'origine du tabac et du sol, ainsi que des techniques de fabrication.`,
      bullets: [
        "Équilibre hygroscopique du tabac",
        "Interaction température–humidité",
        "Comportement de la zone de pré-chauffe",
        "Seuils d’activation des composés volatils",
        "Architecture du mélange (cape / sous-cape / tripe)",
      ],
      p2: `Le pic aromatique se situe dans une fenêtre d’humidité précise, propre à chaque famille de mélanges.`,
      p3: `Le système permet une mise en condition reproductible, un diagnostic avant allumage, et un passage contrôlé vers une expression aromatique maximale.`,
      download: "Télécharger la présentation du système (PDF)",
      applicationsTitle: "Applications du système",
      applicationsText:
        "Le système Peak-Flavor® est appliqué dans les parcours professionnels et élite d’ICSI :",
      furtherReadingLabel: "À lire aussi :",
      furtherReadingTitle: "Humidité idéale & timing du pic aromatique",
      seoTitle: "Système Peak-Flavor® | International Cigar Sommelier Institute",
      seoDescription:
        "Le système propriétaire Peak-Flavor® applique thermodynamique et science de combustion pour une excellence aromatique reproductible.",
    },
    de: {
      title: "Cigar Peak-Flavor-System®",
      lead: "Kontrolliert. Messbar. Reproduzierbar.",
      p1: `Die meisten Zigarren werden emotional oder basierend auf dem bewertet, was wir hören oder sehen. Nur wenige werden auf der Grundlage wissenschaftlicher Erkenntnisse bewertet, wobei die Philosophie und Absicht des Blenders im Vordergrund stehen. Das Peak-Flavor System® betrachtet eine Zigarre als ein dynamisches System, das verschiedene Tabaksamensorten, Tabakherkunft und Bodenbeschaffenheit sowie Konstruktionstechniken miteinander verbindet.`,
      bullets: [
        "Hygroskopisches Gleichgewicht des Tabaks",
        "Temperatur–Feuchte-Kopplung",
        "Verhalten der Vorwärmzone",
        "Aktivierungsschwellen flüchtiger Aromastoffe",
        "Blend-Architektur (Deckblatt / Umblatt / Einlage)",
      ],
      p2: `Maximales Aroma liegt in einem engen, blend-spezifischen Feuchtefenster.`,
      p3: `Das System ermöglicht reproduzierbares Staging, Diagnostik vor dem Anzünden und einen kontrollierten Weg zur Peak-Aromatik.`,
      download: "Systemübersicht herunterladen (PDF)",
      applicationsTitle: "Programmanwendungen",
      applicationsText:
        "Das Peak-Flavor-System™ wird in den professionellen und Elite-Programmen von ICSI eingesetzt:",
      furtherReadingLabel: "Weiterführend:",
      furtherReadingTitle: "Ideale Zigarrenfeuchte & Peak-Flavor Timing",
      seoTitle: "Peak-Flavor-System® | International Cigar Sommelier Institute",
      seoDescription:
        "Das proprietäre Peak-Flavor-System® verbindet Thermodynamik und Verbrennungsphysik für reproduzierbare Zigarren-Exzellenz.",
    },
  };

  const c = copy[lang] || copy.en;

  return (
    <Layout>
      <Seo title={c.seoTitle} description={c.seoDescription} path="/system" />

      <div className="section">
        <div className="container">
          {/* HERO IMAGE */}
          <div className="systemHero">
            {/* systemImageWrap MUST be position:relative and have a fixed height in CSS */}
            <div className="systemImageWrap">
              <Image
                src="/img/peak-flavor-system.png"
                alt="Peak-Flavor System"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 980px"
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className="systemHeroMeta">
              <div className="systemKicker">
                <span className="systemPill">Framework</span>
                <span className="systemPill">Blend-specific</span>
                <span className="systemPill">Proprietary</span>
              </div>
              <div className="systemTagline">
                <i>{c.lead}</i>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <section className="systemText">
            <h1 className="systemTitle">{c.title}</h1>
            <p className="systemLead">{c.p1}</p>

            <div className="systemGrid">
              {/* CORE DRIVERS */}
              <div className="systemCard">
                <h3>Core drivers</h3>
                <ul>
                  {c.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div style={{ marginTop: 24 }}>
                  <a
                    className="btn"
                    href="/brochures/Cigar-Peak-Flavor-System.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Peak-Flavor System PDF"
                  >
                    {c.download}
                  </a>
                </div>
              </div>

              {/* PEAK WINDOW */}
              <div className="systemCard">
                <h3>Peak window</h3>
                <p>{c.p2}</p>
                <p style={{ marginTop: 10 }}>{c.p3}</p>

                {/* Refined internal link (Option 2: editorial underline) */}
                <div style={{ marginTop: 18 }}>
                  <small>
                    {c.furtherReadingLabel}{" "}
                    <Link
                      href="/ideal-cigar-humidity"
                      locale={lang}
                      style={{
                        fontWeight: 600,
                        borderBottom: "1px solid currentColor",
                        paddingBottom: 1,
                        textDecoration: "none",
                      }}
                    >
                      {c.furtherReadingTitle}
                    </Link>
                  </small>
                </div>
              </div>
            </div>

            {/* INTERNAL LINKING SECTION */}
            <div style={{ marginTop: 50 }}>
              <h3>{c.applicationsTitle}</h3>
              <p>{c.applicationsText}</p>

              <ul style={{ marginTop: 12 }}>
                <li>
                  <Link href="/ccs" locale={lang}>
                    Certified Cigar Sommelier (CCS®)
                  </Link>
                </li>
                <li>
                  <Link href="/acs" locale={lang}>
                    Advanced Cigar Sommelier (ACS®)
                  </Link>
                </li>
                <li>
                  <Link href="/amc" locale={lang}>
                    Aficionado Master Class (AMC®)
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
