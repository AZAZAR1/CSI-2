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
        "Most cigars are evaluated emotionally or based on what we hear or see. Very few are evaluated on scientific insights, with the Blender's philosophy and intent in mind. We treat a cigar as a dynamic system that combines various tobacco leaf seeds, tobacco origin and soil, and construction techniques.",

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

      pairingTitle: "Pairing Science",
      pairingIntro:
        "The best pairing is the one that either extends the cigar’s intended combustion profile or buffers its failure mode:",
      pairingBullets: [
        "Cigar smoke chemistry: combustion temperature, volatility of aromatic compounds, smoke density, oil/aerosol load, nicotine delivery, bitterness, pepper, mineral, sweetness, and resin",
        "Beverage structure: acidity, tannin, alcohol heat, residual sugar, oak lactones, aldehydes, esters, phenolics, glycerol texture, barrel-derived vanillin, caramel, spice, smoke, and oxidation notes",
      ],

      peakTitle: "Peak window",
      p2: "Peak flavor occurs within a narrow moisture activation window specific to each blend family.",
      p3: "The system enables repeatable staging, diagnostics before lighting, and a controlled pathway from conditioning to peak aromatic expression.",
      furtherReadingLabel: "Further reading:",
      furtherReadingTitle: "Ideal Cigar Humidity & Peak Flavor Timing",

      applicationsTitle: "Program Applications",
      applicationsText:
        "The Cigar Peak-Flavor System® is deployed across ICSI’s professional and elite pathways:",

      seoTitle:
        "Cigar Peak-Flavor System® | International Cigar Sommelier Institute",
      seoDescription:
        "The proprietary Cigar Peak-Flavor System® applies thermodynamics, combustion science, and blend architecture modeling to achieve repeatable cigar excellence.",
    },

    fr: {
      kicker: "Cadre scientifique",
      title: "Cigar Peak-Flavor System®",
      lead:
        "La plupart des cigares sont évalués de manière émotionnelle ou sur la base de ce que nous entendons ou voyons. Très peu sont évalués selon des critères scientifiques, en tenant compte de la philosophie et de l'intention du blender. Nous traitons le cigare comme un système dynamique combinant différentes semences de tabac, l’origine du tabac et du sol, ainsi que des techniques de construction.",

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

      pairingTitle: "Science des accords",
      pairingIntro:
        "Le meilleur accord est celui qui prolonge le profil de combustion du cigare ou compense son mode de défaillance :",
      pairingBullets: [
        "Chimie de la fumée du cigare : température de combustion, volatilité des composés aromatiques, densité de fumée, charge huile/aérosol, délivrance de nicotine, amertume, poivre, minéralité, douceur et résine",
        "Structure de la boisson : acidité, tanins, chaleur alcoolique, sucre résiduel, lactones de chêne, aldéhydes, esters, composés phénoliques, texture glycérinée, vanilline du fût, caramel, épices, fumée et notes oxydatives",
      ],

      peakTitle: "Fenêtre Peak-Flavor",
      p2: "Le pic aromatique apparaît dans une fenêtre d’activation hygrométrique spécifique à chaque famille de blends.",
      p3: "Le système permet une mise en condition reproductible, un diagnostic avant allumage et un chemin contrôlé vers l’expression aromatique maximale.",
      furtherReadingLabel: "Lecture complémentaire :",
      furtherReadingTitle: "Humidité idéale du cigare & timing du pic aromatique",

      applicationsTitle: "Applications du programme",
      applicationsText:
        "Le Cigar Peak-Flavor System® est utilisé dans les parcours professionnels et élite de l’ICSI :",

      seoTitle:
        "Cigar Peak-Flavor System® | International Cigar Sommelier Institute",
      seoDescription:
        "Le système propriétaire Cigar Peak-Flavor System® applique thermodynamique, science de combustion et modélisation des blends pour atteindre une excellence reproductible.",
    },

    de: {
      kicker: "Wissenschaftliches Framework",
      title: "Cigar Peak-Flavor System®",
      lead:
        "Die meisten Zigarren werden emotional oder anhand dessen bewertet, was wir hören oder sehen. Nur wenige werden auf wissenschaftlicher Grundlage bewertet und dabei die Philosophie und Intention des Blenders berücksichtigt. Wir betrachten die Zigarre als dynamisches System aus verschiedenen Tabaksamen, Herkunft und Bodenbeschaffenheit sowie Konstruktionstechniken.",

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

      pairingTitle: "Pairing-Wissenschaft",
      pairingIntro:
        "Das beste Pairing ist jenes, das entweder das gewünschte Verbrennungsprofil der Zigarre verlängert oder ihren Fehlermodus abfedert:",
      pairingBullets: [
        "Chemie des Zigarrenrauchs: Verbrennungstemperatur, Flüchtigkeit aromatischer Verbindungen, Rauchdichte, Öl-/Aerosollast, Nikotinabgabe, Bitterkeit, Pfeffer, Mineralität, Süße und Harz",
        "Struktur des Getränks: Säure, Tannine, Alkoholwärme, Restzucker, Eichenlactone, Aldehyde, Ester, Phenole, Glycerinstruktur, Fass-Vanillin, Karamell, Gewürze, Rauch und Oxidationsnoten",
      ],

      peakTitle: "Peak-Fenster",
      p2: "Das optimale Aroma liegt innerhalb eines engen Feuchtigkeits-Aktivierungsfensters, das für jede Blend-Familie spezifisch ist.",
      p3: "Das System ermöglicht reproduzierbare Konditionierung, Diagnostik vor dem Anzünden und einen kontrollierten Weg zur maximalen aromatischen Entfaltung.",
      furtherReadingLabel: "Weiterführende Lektüre:",
      furtherReadingTitle: "Ideale Zigarrenfeuchtigkeit & Peak-Flavor Timing",

      applicationsTitle: "Programmanwendungen",
      applicationsText:
        "Das Cigar Peak-Flavor System® wird in den professionellen und Elite-Programmen des ICSI eingesetzt:",

      seoTitle:
        "Cigar Peak-Flavor System® | International Cigar Sommelier Institute",
      seoDescription:
        "Das proprietäre Cigar Peak-Flavor System® verbindet Thermodynamik, Verbrennungswissenschaft und Blend-Architektur für reproduzierbare Zigarren-Exzellenz.",
    },
  };

  const c = copy[lang] || copy.en;

  return (
    <Layout>
      <Seo title={c.seoTitle} description={c.seoDescription} path="/system" />

      <div className="hero homeHero">
        <div className="container">
          <div className="systemHeroContent">
            <div className="kicker">{c.kicker}</div>

            <h1 className="heroTitle">{c.title}</h1>

            <p className="lead heroLead">{c.lead}</p>

            <div className="systemHeroImage">
              <Image
                src="/img/cigar-peak-flavor-system-science.png"
                alt="Cigar Peak Flavor System"
                fill
                priority
                sizes="(max-width: 900px) 92vw, 980px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="grid3" style={{ marginTop: 10 }}>
            <div className="card">
              <h3>{c.settlingTitle}</h3>
              <p style={{ marginTop: 14 }}>{c.settlingIntro}</p>

              <ul style={{ marginTop: 16 }}>
                {c.settlingBullets.map((b) => (
                  <li key={b} style={{ marginBottom: 10 }}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3>{c.peakTitle}</h3>
              <p>{c.p2}</p>
              <p style={{ marginTop: 14 }}>{c.p3}</p>

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

            <div className="card">
              <h3>{c.pairingTitle}</h3>
              <p>{c.pairingIntro}</p>

              <ol style={{ marginTop: 16 }}>
                {c.pairingBullets.map((b) => (
                  <li key={b} style={{ marginBottom: 14 }}>
                    {b}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div style={{ marginTop: 54 }}>
            <h3>{c.applicationsTitle}</h3>
            <p>{c.applicationsText}</p>

            <ul style={{ marginTop: 14 }}>
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

        .systemHeroContent {
          max-width: 980px;
        }

        .heroTitle {
          font-size: clamp(3.8rem, 6vw, 5.8rem);
          line-height: 0.96;
          letter-spacing: -0.04em;
          margin-bottom: 20px;
          max-width: 9.5ch;
        }

        .heroLead {
          max-width: 720px;
          font-size: clamp(1.12rem, 1.55vw, 1.45rem);
          line-height: 1.52;
          margin-bottom: 0;
        }

        .systemHeroImage {
          position: relative;
          width: 100%;
          max-width: 980px;
          height: 520px;
          border-radius: 26px;
          overflow: hidden;
          margin-top: 34px;
        }

        @media (max-width: 900px) {
          .homeHero {
            padding-top: 24px;
            padding-bottom: 34px;
          }

          .heroTitle {
            font-size: clamp(2.8rem, 11vw, 4.2rem);
            line-height: 0.96;
            max-width: 11ch;
            margin-bottom: 16px;
          }

          .heroLead {
            max-width: none;
            font-size: 1.26rem;
            line-height: 1.6;
          }

          .systemHeroImage {
            height: 420px;
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
            line-height: 0.97;
            letter-spacing: -0.045em;
          }

          .heroLead {
            font-size: 1.18rem;
            line-height: 1.58;
          }

          .systemHeroImage {
            height: 330px;
            border-radius: 20px;
          }
        }
      `}</style>
    </Layout>
  );
}
