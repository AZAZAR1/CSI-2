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

      p1: `Most cigars are evaluated emotionally or based on what we hear or see. Very few are evaluated on scientific insights, with the Blender's philosophy and intent in mind. We treat a cigar as a dynamic system that combines various tobacco leaf seeds, tobacco origin and soil, and construction techniques.`,

      settlingTitle: "Settling & Aging Science",

      settlingBullets: [
        "Axial moisture coherence",
        "Ammonia dissipation",
        "Blend marrying / sensory maturation",
        "Temperature shock recovery",
        "Radial moisture equilibrium",
      ],

      pairingTitle: "Pairing Science",

      pairingIntro:
        "The best pairing is the one that either extends the cigar’s intended combustion profile or buffers its failure mode:",

      pairingBullets: [
        "Cigar smoke chemistry: combustion temperature, volatility of aromatic compounds, smoke density, oil/aerosol load, nicotine delivery, bitterness, pepper, mineral, sweetness, and resin",

        "Beverage structure: acidity, tannin, alcohol heat, residual sugar, oak lactones, aldehydes, esters, phenolics, glycerol texture, barrel-derived vanillin, caramel, spice, smoke, and oxidation notes",
      ],

      p2: `Peak flavor occurs within a narrow moisture activation window specific to each blend family.`,

      p3: `The system enables repeatable staging, diagnostics before lighting, and a controlled pathway from conditioning to peak aromatic expression.`,

      applicationsTitle: "Program Applications",

      applicationsText:
        "The Cigar Peak-Flavor System® is deployed across ICSI’s professional and elite pathways:",

      furtherReadingLabel: "Further reading:",
      furtherReadingTitle: "Ideal Cigar Humidity & Peak Flavor Timing",

      seoTitle:
        "Cigar Peak-Flavor System® | International Cigar Sommelier Institute",

      seoDescription:
        "The proprietary Cigar Peak-Flavor System® applies thermodynamics, combustion science, and blend architecture modeling to achieve repeatable cigar excellence.",
    },

    fr: {
      title: "Cigar Peak-Flavor System®",
      lead: "Contrôlé. Mesuré. Prévisible.",

      p1: `La plupart des cigares sont évalués de manière émotionnelle ou sur la base de ce que nous entendons ou voyons. Très peu sont évalués selon des critères scientifiques, en tenant compte de la philosophie et de l'intention du blender. Nous traitons le cigare comme un système dynamique combinant différentes semences de tabac, l’origine du tabac et du sol, ainsi que des techniques de construction.`,

      settlingTitle: "Science du repos et du vieillissement",

      settlingBullets: [
        "Cohérence axiale de l’humidité",
        "Dissipation de l’ammoniac",
        "Mariage du blend / maturation sensorielle",
        "Récupération après choc thermique",
        "Équilibre radial de l’humidité",
      ],

      pairingTitle: "Science des accords",

      pairingIntro:
        "Le meilleur accord est celui qui prolonge le profil de combustion du cigare ou compense son mode de défaillance :",


      pairingBullets: [
        "Chimie de la fumée du cigare : température de combustion, volatilité des composés aromatiques, densité de fumée, charge huile/aérosol, délivrance de nicotine, amertume, poivre, minéralité, douceur et résine",

        "Structure de la boisson : acidité, tanins, chaleur alcoolique, sucre résiduel, lactones de chêne, aldéhydes, esters, composés phénoliques, texture glycérinée, vanilline du fût, caramel, épices, fumée et notes oxydatives",
      ],

      p2: `Le pic aromatique apparaît dans une fenêtre d’activation hygrométrique spécifique à chaque famille de blends.`,

      p3: `Le système permet une mise en condition reproductible, un diagnostic avant allumage et un chemin contrôlé vers l’expression aromatique maximale.`,

      applicationsTitle: "Applications du programme",

      applicationsText:
        "Le Cigar Peak-Flavor System® est utilisé dans les parcours professionnels et élite de l’ICSI :",

      furtherReadingLabel: "Lecture complémentaire :",
      furtherReadingTitle:
        "Humidité idéale du cigare & timing du pic aromatique",

      seoTitle:
        "Cigar Peak-Flavor System® | International Cigar Sommelier Institute",

      seoDescription:
        "Le système propriétaire Cigar Peak-Flavor System® applique thermodynamique, science de combustion et modélisation des blends pour atteindre une excellence reproductible.",
    },

    de: {
      title: "Cigar Peak-Flavor System®",
      lead: "Kontrolliert. Messbar. Vorhersehbar.",

      p1: `Die meisten Zigarren werden emotional oder anhand dessen bewertet, was wir hören oder sehen. Nur wenige werden auf wissenschaftlicher Grundlage bewertet und dabei die Philosophie und Intention des Blenders berücksichtigt. Wir betrachten die Zigarre als dynamisches System aus verschiedenen Tabaksamen, Herkunft und Bodenbeschaffenheit sowie Konstruktionstechniken.`,

      settlingTitle: "Wissenschaft von Ruhe & Reifung",

      settlingBullets: [
        "Axiale Feuchtigkeitskohärenz",
        "Ammoniakabbau",
        "Vermählung des Blends / sensorische Reifung",
        "Erholung nach Temperaturschock",
        "Radiales Feuchtigkeitsgleichgewicht",
      ],

      pairingTitle: "Pairing-Wissenschaft",

      pairingIntro:
        "Das beste Pairing ist jenes, das entweder das gewünschte Verbrennungsprofil der Zigarre verlängert oder ihren Fehlermodus abfedert:",

      pairingBullets: [
        "Chemie des Zigarrenrauchs: Verbrennungstemperatur, Flüchtigkeit aromatischer Verbindungen, Rauchdichte, Öl-/Aerosollast, Nikotinabgabe, Bitterkeit, Pfeffer, Mineralität, Süße und Harz",

        "Struktur des Getränks: Säure, Tannine, Alkoholwärme, Restzucker, Eichenlactone, Aldehyde, Ester, Phenole, Glycerinstruktur, Fass-Vanillin, Karamell, Gewürze, Rauch und Oxidationsnoten",
      ],

      p2: `Das optimale Aroma liegt innerhalb eines engen Feuchtigkeits-Aktivierungsfensters, das für jede Blend-Familie spezifisch ist.`,

      p3: `Das System ermöglicht reproduzierbare Konditionierung, Diagnostik vor dem Anzünden und einen kontrollierten Weg zur maximalen aromatischen Entfaltung.`,

      applicationsTitle: "Programmanwendungen",

      applicationsText:
        "Das Cigar Peak-Flavor System® wird in den professionellen und Elite-Programmen des ICSI eingesetzt:",

      furtherReadingLabel: "Weiterführende Lektüre:",
      furtherReadingTitle:
        "Ideale Zigarrenfeuchtigkeit & Peak-Flavor Timing",

      seoTitle:
        "Cigar Peak-Flavor System® | International Cigar Sommelier Institute",

      seoDescription:
        "Das proprietäre Cigar Peak-Flavor System® verbindet Thermodynamik, Verbrennungswissenschaft und Blend-Architektur für reproduzierbare Zigarren-Exzellenz.",
    },
  };

  const c = copy[lang] || copy.en;

  return (
    <Layout>
      <Seo
        title={c.seoTitle}
        description={c.seoDescription}
        path="/system"
      />

      <div className="section">
        <div className="container">

          <section className="systemHero systemHeroSplit">

            <div className="systemHeroCopy">

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

              <h1 className="systemTitle">{c.title}</h1>

              <p className="systemLead">{c.p1}</p>

            </div>

            <div
              className="systemHeroImageWrap"
              style={{
                position: "relative",
                minHeight: "520px",
                borderRadius: "24px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/img/cigar-peak-flavor-system-science.png"
                alt="Cigar Peak Flavor System"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 48vw"
                style={{ objectFit: "cover" }}
              />
            </div>

          </section>

          <section className="systemText">

            <div className="systemGrid">

              {/* SETTLING & AGING SCIENCE */}
              <div className="systemCard">

                <h3>{c.settlingTitle}</h3>

                <ul>
                  {c.settlingBullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

              </div>

              {/* PEAK WINDOW */}
              <div className="systemCard">

                <h3>Peak window</h3>

                <p>{c.p2}</p>

                <p style={{ marginTop: 10 }}>{c.p3}</p>

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

              {/* PAIRING SCIENCE */}
              <div className="systemCard systemCardWide">

                <h3>{c.pairingTitle}</h3>

                <p>{c.pairingIntro}</p>

                <ol style={{ marginTop: 12 }}>
                  {c.pairingBullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ol>

              </div>

            </div>

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
