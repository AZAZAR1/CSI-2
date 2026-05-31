import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function System() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();

  const copy = {
    en: {
      kicker: "Scientific Framework",
      title: "Cigar Peak-Flavor System®",
      lead:
        "Most cigars are evaluated emotionally or based on what we hear or see. Very few are evaluated on scientific insights, with the Blender's philosophy and intent in mind. We treat a cigar as a dynamic system that combines various tobacco leaf seeds, tobacco origin and soil, and construction techniques. This allows us to unlock the full flavour, burn and pairing potential of premium cigars world-wide.",

      settlingTitle: "Settling & Aging Science",
      settlingIntro:
        "A premium cigar is not fully conditioned when the humidor stabilizes. It is fully conditioned when internal leaf-to-leaf moisture equilibrium stabilizes across the cigar’s axial structure. This is achieved when there is:",
      settlingBullets: [
        "Axial moisture coherence",
        "Ammonia dissipation",
        "Blend marrying / sensory maturation",
        "Temperature shock recovery",
        "Radial moisture equilibrium",
      ],

      peakTitle: "Peak-Flavor Window",
      p2:
        "Peak flavor occurs within a narrow moisture activation window specific to each blend family.",
      p3:
        "The system enables repeatable staging, diagnostics before lighting, and a controlled pathway from conditioning to peak aromatic expression.",
      furtherReadingLabel: "Further reading:",
      furtherReadingTitle: "Ideal Cigar Humidity & Peak Flavor Timing",

      tastingScienceTitle: "Tasting Card Science Basis",
      tastingScienceIntro:
        "The ICSI tasting card is built from leaf-level agronomy, blend architecture, and sensory chemistry rather than generic strength descriptors. Two core inputs define the expected sensory pathway:",
      seedTitle: "1. Seed Genetics",
      seedIntro: "Different seed families produce different:",
      seedBullets: [
        "Leaf thickness",
        "Oil content",
        "Sugar content",
        "Nicotine levels",
        "Combustion behavior",
        "Aromatic precursor compounds",
      ],
      terroirTitle: "2. Terroir",
      terroirIntro: "Origin modifies the same seed through:",
      terroirBullets: [
        "Soil mineral content",
        "Volcanic influence",
        "Clay content",
        "Drainage",
        "Rainfall",
        "Sunlight intensity",
        "Growing season length",
      ],

      pairingTitle: "Pairing Science",
      pairingIntro:
        "The best pairing is the one that either extends the cigar’s intended combustion profile or buffers its failure mode:",
      pairingBullets: [
        "Cigar smoke chemistry: combustion temperature, volatility of aromatic compounds, smoke density, oil/aerosol load, nicotine delivery, bitterness, pepper, mineral, sweetness, and resin",
        "Beverage structure: acidity, tannin, alcohol heat, residual sugar, oak lactones, aldehydes, esters, phenolics, glycerol texture, barrel-derived vanillin, caramel, spice, smoke, and oxidation notes",
      ],

      applicationsTitle: "Program Applications",
      applicationsText:
        "The Cigar Peak-Flavor System® is deployed across ICSI’s professional and elite pathways:",

      seoTitle:
        "Cigar Peak-Flavor System® | International Cigar Sommelier Institute",
      seoDescription:
        "The proprietary Cigar Peak-Flavor System® applies thermodynamics, combustion science, blend architecture modeling, seed genetics, and terroir analysis to achieve repeatable cigar excellence.",
    },

    fr: {
      kicker: "Cadre scientifique",
      title: "Cigar Peak-Flavor System®",
      lead:
        "La plupart des cigares sont évalués de manière émotionnelle ou sur la base de ce que nous entendons ou voyons. Très peu sont évalués selon des critères scientifiques, en tenant compte de la philosophie et de l'intention du blender. Nous traitons le cigare comme un système dynamique combinant différentes semences de tabac, l’origine du tabac et du sol, ainsi que des techniques de construction. Cela nous permet de libérer tout le potentiel aromatique, de combustion et d’accord des cigares premium dans le monde entier.",

      settlingTitle: "Science du repos et du vieillissement",
      settlingIntro:
        "Un cigare premium n’est pas pleinement conditionné lorsque l’humidor se stabilise. Il est pleinement conditionné lorsque l’équilibre interne d’humidité feuille à feuille se stabilise sur toute la structure axiale du cigare. Cela est atteint lorsqu’il existe :",
      settlingBullets: [
        "Cohérence axiale de l’humidité",
        "Dissipation de l’ammoniac",
        "Mariage du blend / maturation sensorielle",
        "Récupération après choc thermique",
        "Équilibre radial de l’humidité",
      ],

      peakTitle: "Fenêtre Peak-Flavor",
      p2:
        "Le pic aromatique apparaît dans une fenêtre d’activation hygrométrique spécifique à chaque famille de blends.",
      p3:
        "Le système permet une mise en condition reproductible, un diagnostic avant allumage et un chemin contrôlé vers l’expression aromatique maximale.",
      furtherReadingLabel: "Lecture complémentaire :",
      furtherReadingTitle:
        "Humidité idéale du cigare & timing du pic aromatique",

      tastingScienceTitle: "Base scientifique de la carte de dégustation",
      tastingScienceIntro:
        "La carte de dégustation ICSI repose sur l’agronomie de la feuille, l’architecture du blend et la chimie sensorielle plutôt que sur de simples descripteurs de force. Deux intrants fondamentaux définissent la trajectoire sensorielle attendue :",
      seedTitle: "1. Génétique des semences",
      seedIntro: "Les différentes familles de semences produisent des différences de :",
      seedBullets: [
        "Épaisseur de feuille",
        "Teneur en huiles",
        "Teneur en sucres",
        "Niveaux de nicotine",
        "Comportement de combustion",
        "Composés précurseurs aromatiques",
      ],
      terroirTitle: "2. Terroir",
      terroirIntro: "L’origine modifie une même semence par :",
      terroirBullets: [
        "Teneur minérale du sol",
        "Influence volcanique",
        "Teneur en argile",
        "Drainage",
        "Pluviométrie",
        "Intensité d’ensoleillement",
        "Durée de la saison de croissance",
      ],

      pairingTitle: "Science des accords",
      pairingIntro:
        "Le meilleur accord est celui qui prolonge le profil de combustion du cigare ou compense son mode de défaillance :",
      pairingBullets: [
        "Chimie de la fumée du cigare : température de combustion, volatilité des composés aromatiques, densité de fumée, charge huile/aérosol, délivrance de nicotine, amertume, poivre, minéralité, douceur et résine",
        "Structure de la boisson : acidité, tanins, chaleur alcoolique, sucre résiduel, lactones de chêne, aldéhydes, esters, composés phénoliques, texture glycérinée, vanilline du fût, caramel, épices, fumée et notes oxydatives",
      ],

      applicationsTitle: "Applications du programme",
      applicationsText:
        "Le Cigar Peak-Flavor System® est utilisé dans les parcours professionnels et élite de l’ICSI :",

      seoTitle:
        "Cigar Peak-Flavor System® | International Cigar Sommelier Institute",
      seoDescription:
        "Le système propriétaire Cigar Peak-Flavor System® applique thermodynamique, science de combustion, génétique des semences, terroir et modélisation des blends pour atteindre une excellence reproductible.",
    },

    de: {
      kicker: "Wissenschaftliches Framework",
      title: "Cigar Peak-Flavor System®",
      lead:
        "Die meisten Zigarren werden emotional oder anhand dessen bewertet, was wir hören oder sehen. Nur wenige werden auf wissenschaftlicher Grundlage bewertet und dabei die Philosophie und Intention des Blenders berücksichtigt. Wir betrachten die Zigarre als dynamisches System aus verschiedenen Tabaksamen, Herkunft und Bodenbeschaffenheit sowie Konstruktionstechniken. Dadurch können wir das volle Aroma-, Abbrand- und Pairing-Potenzial von Premium-Zigarren weltweit erschließen.",

      settlingTitle: "Wissenschaft von Ruhe & Reifung",
      settlingIntro:
        "Eine Premium-Zigarre ist nicht vollständig konditioniert, sobald der Humidor stabil ist. Sie ist vollständig konditioniert, wenn sich das interne Blatt-zu-Blatt-Feuchtigkeitsgleichgewicht entlang der axialen Struktur der Zigarre stabilisiert. Dies ist erreicht, wenn Folgendes vorliegt:",
      settlingBullets: [
        "Axiale Feuchtigkeitskohärenz",
        "Ammoniakabbau",
        "Vermählung des Blends / sensorische Reifung",
        "Erholung nach Temperaturschock",
        "Radiales Feuchtigkeitsgleichgewicht",
      ],

      peakTitle: "Peak-Flavor-Fenster",
      p2:
        "Das optimale Aroma liegt innerhalb eines engen Feuchtigkeits-Aktivierungsfensters, das für jede Blend-Familie spezifisch ist.",
      p3:
        "Das System ermöglicht reproduzierbare Konditionierung, Diagnostik vor dem Anzünden und einen kontrollierten Weg zur maximalen aromatischen Entfaltung.",
      furtherReadingLabel: "Weiterführende Lektüre:",
      furtherReadingTitle:
        "Ideale Zigarrenfeuchtigkeit & Peak-Flavor Timing",

      tastingScienceTitle: "Wissenschaftliche Grundlage der Tasting Card",
      tastingScienceIntro:
        "Die ICSI Tasting Card basiert auf Blattanbau, Blend-Architektur und sensorischer Chemie statt auf generischen Stärke-Beschreibungen. Zwei zentrale Einflussgrößen bestimmen den erwarteten sensorischen Verlauf:",
      seedTitle: "1. Saatgutgenetik",
      seedIntro: "Unterschiedliche Saatgutfamilien erzeugen Unterschiede bei:",
      seedBullets: [
        "Blattdicke",
        "Ölgehalt",
        "Zuckergehalt",
        "Nikotinniveau",
        "Verbrennungsverhalten",
        "Aromatische Vorläuferverbindungen",
      ],
      terroirTitle: "2. Terroir",
      terroirIntro: "Die Herkunft verändert denselben Samen durch:",
      terroirBullets: [
        "Mineralgehalt des Bodens",
        "Vulkanischen Einfluss",
        "Tonanteil",
        "Drainage",
        "Niederschlag",
        "Sonnenlichtintensität",
        "Länge der Wachstumsperiode",
      ],

      pairingTitle: "Pairing-Wissenschaft",
      pairingIntro:
        "Das beste Pairing ist jenes, das entweder das gewünschte Verbrennungsprofil der Zigarre verlängert oder ihren Fehlermodus abfedert:",
      pairingBullets: [
        "Chemie des Zigarrenrauchs: Verbrennungstemperatur, Flüchtigkeit aromatischer Verbindungen, Rauchdichte, Öl-/Aerosollast, Nikotinabgabe, Bitterkeit, Pfeffer, Mineralität, Süße und Harz",
        "Struktur des Getränks: Säure, Tannine, Alkoholwärme, Restzucker, Eichenlactone, Aldehyde, Ester, Phenole, Glycerinstruktur, Fass-Vanillin, Karamell, Gewürze, Rauch und Oxidationsnoten",
      ],

      applicationsTitle: "Programmanwendungen",
      applicationsText:
        "Das Cigar Peak-Flavor System® wird in den professionellen und Elite-Programmen des ICSI eingesetzt:",

      seoTitle:
        "Cigar Peak-Flavor System® | International Cigar Sommelier Institute",
      seoDescription:
        "Das proprietäre Cigar Peak-Flavor System® verbindet Thermodynamik, Verbrennungswissenschaft, Saatgutgenetik, Terroir und Blend-Architektur für reproduzierbare Zigarren-Exzellenz.",
    },
  };

  const c = copy[lang] || copy.en;

  return (
    <Layout>
      <Seo title={c.seoTitle} description={c.seoDescription} path="/system" />

      <div className="hero homeHero">
        <div className="container">
          <div className="systemHeroStack">
            <div className="kicker">{c.kicker}</div>

            <h1 className="heroTitle">{c.title}</h1>

            <p className="lead heroLead">{c.lead}</p>

            <div className="heroMediaRect">
              <Image
                src="/img/cigar-peak-flavor-system-science.png"
                alt="Cigar Peak Flavor System"
                fill
                priority
                sizes="(max-width: 900px) 92vw, 1180px"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid3 systemCardsGrid">
            <div className="card systemInfoCard">
              <h3>{c.settlingTitle}</h3>

              <p>{c.settlingIntro}</p>

              <ul>
                {c.settlingBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="card systemInfoCard">
              <h3>{c.peakTitle}</h3>

              <p>{c.p2}</p>

              <p>{c.p3}</p>

              <div className="furtherReading">
                <small>
                  {c.furtherReadingLabel}{" "}
                  <Link href="/ideal-cigar-humidity" locale={lang}>
                    {c.furtherReadingTitle}
                  </Link>
                </small>
              </div>
            </div>

            <div className="card systemInfoCard tastingScienceCard">
              <h3>{c.tastingScienceTitle}</h3>

              <p>{c.tastingScienceIntro}</p>

              <h4>{c.seedTitle}</h4>
              <p>{c.seedIntro}</p>
              <ul>
                {c.seedBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <h4>{c.terroirTitle}</h4>
              <p>{c.terroirIntro}</p>
              <ul>
                {c.terroirBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="card systemInfoCard">
              <h3>{c.pairingTitle}</h3>

              <p>{c.pairingIntro}</p>

              <ol>
                {c.pairingBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className="systemApplications">
            <h3>{c.applicationsTitle}</h3>

            <p>{c.applicationsText}</p>

            <ul>
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
        </div>
      </div>

      <style jsx>{`
        .homeHero {
          padding-top: 44px;
          padding-bottom: 54px;
        }

        .systemHeroStack {
          max-width: none;
          width: 100%;
        }

        .heroTitle {
          font-size: clamp(3.8rem, 6vw, 5.8rem);
          line-height: 0.96;
          letter-spacing: -0.04em;
          margin-bottom: 20px;
          max-width: none;
          width: 100%;
        }

        .heroLead {
          max-width: none;
          width: 100%;
          font-size: clamp(1.12rem, 1.55vw, 1.45rem);
          line-height: 1.62;
          margin-bottom: 0;
        }

        .heroMediaRect {
          position: relative;
          width: 100%;
          max-width: 1180px;
          height: 720px;
          border-radius: 26px;
          overflow: hidden;
          margin-top: 34px;
          background: transparent;
        }

        .systemCardsGrid {
          margin-top: 10px;
          align-items: stretch;
        }

        .systemInfoCard {
          padding: 34px 34px 38px;
        }

        .systemInfoCard h3 {
          font-size: 1.65rem;
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin-bottom: 18px;
        }

        .systemInfoCard h4 {
          font-size: 1.05rem;
          line-height: 1.25;
          letter-spacing: 0.02em;
          margin: 20px 0 8px;
          text-transform: uppercase;
        }

        .systemInfoCard p,
        .systemInfoCard li,
        .systemInfoCard small {
          font-size: 1rem;
          line-height: 1.68;
        }

        .systemInfoCard p {
          margin: 0 0 16px;
        }

        .systemInfoCard ul,
        .systemInfoCard ol {
          margin-top: 18px;
          padding-left: 24px;
        }

        .systemInfoCard li {
          margin-bottom: 10px;
        }

        .tastingScienceCard ul {
          margin-top: 10px;
        }

        .furtherReading {
          margin-top: 18px;
        }

        .furtherReading a {
          font-weight: 600;
          border-bottom: 1px solid currentColor;
          padding-bottom: 1px;
          text-decoration: none;
        }

        .systemApplications {
          margin-top: 54px;
        }

        .systemApplications ul {
          margin-top: 14px;
        }

        @media (max-width: 900px) {
          .homeHero {
            padding-top: 24px;
            padding-bottom: 34px;
          }

          .heroTitle {
            font-size: clamp(2.8rem, 11vw, 4.2rem);
            max-width: none;
            margin-bottom: 16px;
          }

          .heroLead {
            max-width: none;
            font-size: 1.26rem;
            line-height: 1.6;
          }

          .heroMediaRect {
            height: 520px;
            margin-top: 28px;
          }
        }

        @media (max-width: 640px) {
          .homeHero {
            padding-top: 18px;
            padding-bottom: 26px;
          }

          .heroTitle {
            font-size: clamp(2.45rem, 12vw, 3.5rem);
          }

          .heroLead {
            font-size: 1.18rem;
          }

          .heroMediaRect {
            height: 360px;
            border-radius: 20px;
          }

          .systemInfoCard {
            padding: 28px 26px 30px;
          }

          .systemInfoCard h3 {
            font-size: 1.45rem;
          }
        }
      `}</style>
    </Layout>
  );
}
