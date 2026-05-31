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
      lead: "Most cigars are evaluated emotionally or based on what we hear or see. Very few are evaluated on scientific insights, with the Blender's philosophy and intent in mind. We treat a cigar as a dynamic system that combines various tobacco leaf seeds, tobacco origin and soil, and construction techniques. This allows us to unlock the full flavour, burn and pairing potential of premium cigars world-wide.",
      settlingTitle: "Settling & Aging Science",
      settlingIntro: "A premium cigar is not fully conditioned when the humidor stabilizes. It is fully conditioned when internal leaf-to-leaf moisture equilibrium stabilizes across the cigar's axial structure. This is achieved when there is:",
      settlingBullets: ["Axial moisture coherence", "Ammonia dissipation", "Blend marrying / sensory maturation", "Temperature shock recovery", "Radial moisture equilibrium"],
      peakTitle: "Peak-Flavor Window",
      p2: "Peak flavor occurs within a narrow moisture activation window specific to each blend family.",
      p3: "The system enables repeatable staging, diagnostics before lighting, and a controlled pathway from conditioning to peak aromatic expression.",
      furtherReadingLabel: "Further reading:",
      furtherReadingTitle: "Ideal Cigar Humidity & Peak Flavor Timing",
      tastingScienceTitle: "Tasting Card Science Basis",
      tastingScienceIntro: "The ICSI tasting card is built from leaf-level agronomy, blend architecture, and sensory chemistry rather than generic strength descriptors. Two core inputs define the expected sensory pathway:",
      seedTitle: "I. Seed Genetics",
      seedIntro: "Different seed families produce different:",
      seedBullets: ["Leaf thickness", "Oil content", "Sugar content", "Nicotine levels", "Combustion behavior", "Aromatic precursor compounds"],
      terroirTitle: "II. Terroir",
      terroirIntro: "Origin modifies the same seed through:",
      terroirBullets: ["Soil mineral content", "Volcanic influence", "Clay content", "Drainage", "Rainfall", "Sunlight intensity", "Growing season length"],
      pairingTitle: "Pairing Science",
      pairingIntro: "The best pairing is the one that either extends the cigar's intended combustion profile or buffers its failure mode:",
      pairingBullets: ["Cigar smoke chemistry: combustion temperature, volatility of aromatic compounds, smoke density, oil/aerosol load, nicotine delivery, bitterness, pepper, mineral, sweetness, and resin", "Beverage structure: acidity, tannin, alcohol heat, residual sugar, oak lactones, aldehydes, esters, phenolics, glycerol texture, barrel-derived vanillin, caramel, spice, smoke, and oxidation notes"],
      applicationsTitle: "Program Applications",
      applicationsText: "The Cigar Peak-Flavor System® is deployed across ICSI's professional and elite pathways:",
      seoTitle: "Cigar Peak-Flavor System® | International Cigar Sommelier Institute",
      seoDescription: "The proprietary Cigar Peak-Flavor System® applies thermodynamics, combustion science, blend architecture modeling, seed genetics, and terroir analysis to achieve repeatable cigar excellence.",
    },

    fr: {
      kicker: "Cadre scientifique",
      title: "Cigar Peak-Flavor System®",
      lead: "La plupart des cigares sont évalués de manière émotionnelle ou sur la base de ce que nous entendons ou voyons. Très peu sont évalués selon des critères scientifiques, en tenant compte de la philosophie et de l'intention du blender. Nous traitons le cigare comme un système dynamique combinant différentes semences de tabac, l'origine du tabac et du sol, ainsi que des techniques de construction. Cela nous permet de libérer tout le potentiel aromatique, de combustion et d'accord des cigares premium dans le monde entier.",
      settlingTitle: "Science du repos et du vieillissement",
      settlingIntro: "Un cigare premium n'est pas pleinement conditionné lorsque l'humidor se stabilise. Il est pleinement conditionné lorsque l'équilibre interne d'humidité feuille à feuille se stabilise sur toute la structure axiale du cigare. Cela est atteint lorsqu'il existe :",
      settlingBullets: ["Cohérence axiale de l'humidité", "Dissipation de l'ammoniac", "Mariage du blend / maturation sensorielle", "Récupération après choc thermique", "Équilibre radial de l'humidité"],
      peakTitle: "Fenêtre Peak-Flavor",
      p2: "Le pic aromatique apparaît dans une fenêtre d'activation hygrométrique spécifique à chaque famille de blends.",
      p3: "Le système permet une mise en condition reproductible, un diagnostic avant allumage et un chemin contrôlé vers l'expression aromatique maximale.",
      furtherReadingLabel: "Lecture complémentaire :",
      furtherReadingTitle: "Humidité idéale du cigare & timing du pic aromatique",
      tastingScienceTitle: "Base scientifique de la carte de dégustation",
      tastingScienceIntro: "La carte de dégustation ICSI repose sur l'agronomie de la feuille, l'architecture du blend et la chimie sensorielle plutôt que sur de simples descripteurs de force. Deux intrants fondamentaux définissent la trajectoire sensorielle attendue :",
      seedTitle: "I. Génétique des semences",
      seedIntro: "Les différentes familles de semences produisent des différences de :",
      seedBullets: ["Épaisseur de feuille", "Teneur en huiles", "Teneur en sucres", "Niveaux de nicotine", "Comportement de combustion", "Composés précurseurs aromatiques"],
      terroirTitle: "II. Terroir",
      terroirIntro: "L'origine modifie une même semence par :",
      terroirBullets: ["Teneur minérale du sol", "Influence volcanique", "Teneur en argile", "Drainage", "Pluviométrie", "Intensité d'ensoleillement", "Durée de la saison de croissance"],
      pairingTitle: "Science des accords",
      pairingIntro: "Le meilleur accord est celui qui prolonge le profil de combustion du cigare ou compense son mode de défaillance :",
      pairingBullets: ["Chimie de la fumée du cigare : température de combustion, volatilité des composés aromatiques, densité de fumée, charge huile/aérosol, délivrance de nicotine, amertume, poivre, minéralité, douceur et résine", "Structure de la boisson : acidité, tanins, chaleur alcoolique, sucre résiduel, lactones de chêne, aldéhydes, esters, composés phénoliques, texture glycérinée, vanilline du fût, caramel, épices, fumée et notes oxydatives"],
      applicationsTitle: "Applications du programme",
      applicationsText: "Le Cigar Peak-Flavor System® est utilisé dans les parcours professionnels et élite de l'ICSI :",
      seoTitle: "Cigar Peak-Flavor System® | International Cigar Sommelier Institute",
      seoDescription: "Le système propriétaire Cigar Peak-Flavor System® applique thermodynamique, science de combustion, génétique des semences, terroir et modélisation des blends pour atteindre une excellence reproductible.",
    },

    de: {
      kicker: "Wissenschaftliches Framework",
      title: "Cigar Peak-Flavor System®",
      lead: "Die meisten Zigarren werden emotional oder anhand dessen bewertet, was wir hören oder sehen. Nur wenige werden auf wissenschaftlicher Grundlage bewertet und dabei die Philosophie und Intention des Blenders berücksichtigt. Wir betrachten die Zigarre als dynamisches System aus verschiedenen Tabaksamen, Herkunft und Bodenbeschaffenheit sowie Konstruktionstechniken. Dadurch können wir das volle Aroma-, Abbrand- und Pairing-Potenzial von Premium-Zigarren weltweit erschließen.",
      settlingTitle: "Wissenschaft von Ruhe & Reifung",
      settlingIntro: "Eine Premium-Zigarre ist nicht vollständig konditioniert, sobald der Humidor stabil ist. Sie ist vollständig konditioniert, wenn sich das interne Blatt-zu-Blatt-Feuchtigkeitsgleichgewicht entlang der axialen Struktur der Zigarre stabilisiert. Dies ist erreicht, wenn Folgendes vorliegt:",
      settlingBullets: ["Axiale Feuchtigkeitskohärenz", "Ammoniakabbau", "Vermählung des Blends / sensorische Reifung", "Erholung nach Temperaturschock", "Radiales Feuchtigkeitsgleichgewicht"],
      peakTitle: "Peak-Flavor-Fenster",
      p2: "Das optimale Aroma liegt innerhalb eines engen Feuchtigkeits-Aktivierungsfensters, das für jede Blend-Familie spezifisch ist.",
      p3: "Das System ermöglicht reproduzierbare Konditionierung, Diagnostik vor dem Anzünden und einen kontrollierten Weg zur maximalen aromatischen Entfaltung.",
      furtherReadingLabel: "Weiterführende Lektüre:",
      furtherReadingTitle: "Ideale Zigarrenfeuchtigkeit & Peak-Flavor Timing",
      tastingScienceTitle: "Wissenschaftliche Grundlage der Tasting Card",
      tastingScienceIntro: "Die ICSI Tasting Card basiert auf Blattanbau, Blend-Architektur und sensorischer Chemie statt auf generischen Stärke-Beschreibungen. Zwei zentrale Einflussgrößen bestimmen den erwarteten sensorischen Verlauf:",
      seedTitle: "I. Saatgutgenetik",
      seedIntro: "Unterschiedliche Saatgutfamilien erzeugen Unterschiede bei:",
      seedBullets: ["Blattdicke", "Ölgehalt", "Zuckergehalt", "Nikotinniveau", "Verbrennungsverhalten", "Aromatische Vorläuferverbindungen"],
      terroirTitle: "II. Terroir",
      terroirIntro: "Die Herkunft verändert denselben Samen durch:",
      terroirBullets: ["Mineralgehalt des Bodens", "Vulkanischen Einfluss", "Tonanteil", "Drainage", "Niederschlag", "Sonnenlichtintensität", "Länge der Wachstumsperiode"],
      pairingTitle: "Pairing-Wissenschaft",
      pairingIntro: "Das beste Pairing ist jenes, das entweder das gewünschte Verbrennungsprofil der Zigarre verlängert oder ihren Fehlermodus abfedert:",
      pairingBullets: ["Chemie des Zigarrenrauchs: Verbrennungstemperatur, Flüchtigkeit aromatischer Verbindungen, Rauchdichte, Öl-/Aerosollast, Nikotinabgabe, Bitterkeit, Pfeffer, Mineralität, Süße und Harz", "Struktur des Getränks: Säure, Tannine, Alkoholwärme, Restzucker, Eichenlactone, Aldehyde, Ester, Phenole, Glycerinstruktur, Fass-Vanillin, Karamell, Gewürze, Rauch und Oxidationsnoten"],
      applicationsTitle: "Programmanwendungen",
      applicationsText: "Das Cigar Peak-Flavor System® wird in den professionellen und Elite-Programmen des ICSI eingesetzt:",
      seoTitle: "Cigar Peak-Flavor System® | International Cigar Sommelier Institute",
      seoDescription: "Das proprietäre Cigar Peak-Flavor System® verbindet Thermodynamik, Verbrennungswissenschaft, Saatgutgenetik, Terroir und Blend-Architektur für reproduzierbare Zigarren-Exzellenz.",
    },
  };

  const c = copy[lang] || copy.en;

  return (
    <Layout>
      <Seo title={c.seoTitle} description={c.seoDescription} path="/system" />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="container">
          <span className="kicker">{c.kicker}</span>
          <h1 className="heroTitle">{c.title}</h1>
        </div>

        <div className="heroImageWrap">
          <Image
            src="/img/cigar-peak-flavor-system-science.png"
            alt="Cigar Peak Flavor System"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="heroImageOverlay" />
        </div>

        <div className="container">
          <p className="heroLead">{c.lead}</p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <div className="container contentWrap">

        {/* Settling */}
        <section className="block blockSettling">
          <div className="blockMeta">
            <span className="blockNum">I</span>
            <h2 className="blockTitle">{c.settlingTitle}</h2>
          </div>
          <div className="blockBody">
            <p className="bodyText">{c.settlingIntro}</p>
            <ul className="refinedList">
              {c.settlingBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Peak Flavor */}
        <section className="block blockPeak">
          <div className="blockMeta">
            <span className="blockNum">II</span>
            <h2 className="blockTitle">{c.peakTitle}</h2>
          </div>
          <div className="blockBody">
            <p className="bodyText">{c.p2}</p>
            <p className="bodyText">{c.p3}</p>
            <p className="furtherReading">
              {c.furtherReadingLabel}{" "}
              <Link href="/ideal-cigar-humidity" locale={lang}>
                {c.furtherReadingTitle}
              </Link>
            </p>
          </div>
        </section>

        {/* Tasting Science — wide editorial block */}
        <section className="block blockTasting">
          <div className="blockMeta">
            <span className="blockNum">III</span>
            <h2 className="blockTitle">{c.tastingScienceTitle}</h2>
          </div>
          <div className="blockBody">
            <p className="bodyText tastingLead">{c.tastingScienceIntro}</p>
            <div className="tastingCols">
              <div className="tastingCol">
                <h3 className="tastingSubhead">{c.seedTitle}</h3>
                <p className="bodyText small">{c.seedIntro}</p>
                <ul className="refinedList">
                  {c.seedBullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className="tastingCol">
                <h3 className="tastingSubhead">{c.terroirTitle}</h3>
                <p className="bodyText small">{c.terroirIntro}</p>
                <ul className="refinedList">
                  {c.terroirBullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pairing */}
        <section className="block blockPairing">
          <div className="blockMeta">
            <span className="blockNum">IV</span>
            <h2 className="blockTitle">{c.pairingTitle}</h2>
          </div>
          <div className="blockBody">
            <p className="bodyText">{c.pairingIntro}</p>
            <div className="pairingItems">
              {c.pairingBullets.map((b, i) => (
                <div key={b} className="pairingItem">
                  <span className="pairingItemNum">0{i + 1}</span>
                  <p className="bodyText">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="block blockApplications">
          <div className="blockMeta">
            <span className="blockNum">V</span>
            <h2 className="blockTitle">{c.applicationsTitle}</h2>
          </div>
          <div className="blockBody">
            <p className="bodyText">{c.applicationsText}</p>
            <nav className="programNav">
              <Link href="/ccs" locale={lang} className="programItem">
                <span className="programName">Certified Cigar Sommelier</span>
                <span className="programCredential">CCS®</span>
              </Link>
              <Link href="/acs" locale={lang} className="programItem">
                <span className="programName">Advanced Cigar Sommelier</span>
                <span className="programCredential">ACS®</span>
              </Link>
              <Link href="/amc" locale={lang} className="programItem">
                <span className="programName">Aficionado Master Class</span>
                <span className="programCredential">AMC®</span>
              </Link>
            </nav>
          </div>
        </section>

      </div>

      <style jsx>{`

        /* ─── HERO ─────────────────────────────────────────────── */

        .hero {
          padding-top: 60px;
        }

        .kicker {
          display: block;
          font-size: 0.68rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          opacity: 0.42;
          font-weight: 500;
          margin-bottom: 22px;
        }

        .heroTitle {
          font-size: clamp(2.8rem, 4.2vw, 4.8rem);
          line-height: 0.96;
          letter-spacing: -0.035em;
          font-weight: 300;
          margin: 0 0 48px;
          max-width: none;
          white-space: nowrap;
        }

        .heroImageWrap {
          position: relative;
          width: 100%;
          height: clamp(300px, 46vw, 620px);
          overflow: hidden;
          margin-bottom: 52px;
        }

        .heroImageOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 55%,
            rgba(var(--bg-rgb, 255,255,255), 0.18) 100%
          );
        }

        .heroLead {
          font-size: clamp(1.05rem, 1.4vw, 1.3rem);
          line-height: 1.78;
          font-weight: 300;
          max-width: 72ch;
          opacity: 0.7;
          margin: 0 0 88px;
          padding-left: max(0px, 33%);
        }

        /* ─── CONTENT ─────────────────────────────────────────── */

        .contentWrap {
          padding-bottom: 100px;
        }

        /* ─── BLOCK ───────────────────────────────────────────── */

        .block {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 0 80px;
          padding: 64px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        .blockMeta {
          padding-top: 4px;
        }

        .blockNum {
          display: block;
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0.3;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .blockTitle {
          font-size: clamp(1.3rem, 1.8vw, 1.7rem);
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0;
          position: sticky;
          top: 24px;
        }

        /* ─── BODY TEXT ───────────────────────────────────────── */

        .bodyText {
          font-size: 1rem;
          line-height: 1.78;
          font-weight: 300;
          opacity: 0.75;
          margin: 0 0 18px;
        }

        .bodyText.small {
          font-size: 0.9rem;
        }

        /* ─── REFINED LIST ────────────────────────────────────── */

        .refinedList {
          list-style: none;
          padding: 0;
          margin: 28px 0 0;
        }

        .refinedList li {
          font-size: 0.95rem;
          line-height: 1.6;
          font-weight: 300;
          opacity: 0.68;
          padding: 12px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.07);
          padding-left: 18px;
          position: relative;
        }

        .refinedList li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 1px;
          background: currentColor;
          opacity: 0.4;
        }

        /* ─── FURTHER READING ─────────────────────────────────── */

        .furtherReading {
          font-size: 0.82rem;
          opacity: 0.5;
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          font-weight: 400;
        }

        .furtherReading a {
          font-weight: 500;
          text-decoration: underline;
          text-underline-offset: 4px;
          text-decoration-thickness: 1px;
          opacity: 1;
        }

        /* ─── TASTING COLUMNS ─────────────────────────────────── */

        .tastingLead {
          max-width: 58ch;
          margin-bottom: 40px;
        }

        .tastingCols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }

        .tastingSubhead {
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 600;
          opacity: 0.38;
          margin: 0 0 16px;
        }

        /* ─── PAIRING ─────────────────────────────────────────── */

        .pairingItems {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .pairingItem {
          display: grid;
          grid-template-columns: 32px 1fr;
          gap: 16px;
          align-items: start;
        }

        .pairingItemNum {
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          font-weight: 700;
          opacity: 0.28;
          padding-top: 6px;
        }

        .pairingItem .bodyText {
          margin: 0;
        }

        /* ─── PROGRAM NAV ─────────────────────────────────────── */

        .programNav {
          margin-top: 36px;
          display: flex;
          flex-direction: column;
        }

        .programItem {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          padding: 18px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          text-decoration: none;
          transition: opacity 0.2s ease;
          gap: 24px;
        }

        .programItem:first-child {
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }

        .programItem:hover {
          opacity: 0.45;
        }

        .programName {
          font-size: 1.05rem;
          font-weight: 300;
          letter-spacing: -0.01em;
        }

        .programCredential {
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          font-weight: 700;
          opacity: 0.35;
          white-space: nowrap;
        }

        /* ─── RESPONSIVE ──────────────────────────────────────── */

        @media (max-width: 960px) {
          .block {
            grid-template-columns: 1fr 1.6fr;
            gap: 0 48px;
          }

          .heroLead {
            padding-left: 0;
          }
        }

        @media (max-width: 720px) {
          .heroTitle {
            font-size: clamp(2.2rem, 7vw, 3.4rem);
            white-space: normal;
          }

          .block {
            grid-template-columns: 1fr;
            gap: 28px 0;
            padding: 48px 0;
          }

          .blockTitle {
            position: static;
          }

          .tastingCols {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .heroLead {
            margin-bottom: 60px;
          }
        }

        @media (max-width: 480px) {
          .heroTitle {
            font-size: clamp(1.9rem, 8vw, 2.8rem);
          }

          .heroImageWrap {
            height: 260px;
          }

          .block {
            padding: 36px 0;
          }
        }
      `}</style>
    </Layout>
  );
}
