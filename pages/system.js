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
        "A premium cigar is not fully conditioned when the humidor stabilizes. It is fully conditioned when internal leaf-to-leaf moisture equilibrium stabilizes across the cigar's axial structure. This is achieved when there is:",
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
        "The best pairing is the one that either extends the cigar's intended combustion profile or buffers its failure mode:",
      pairingBullets: [
        "Cigar smoke chemistry: combustion temperature, volatility of aromatic compounds, smoke density, oil/aerosol load, nicotine delivery, bitterness, pepper, mineral, sweetness, and resin",
        "Beverage structure: acidity, tannin, alcohol heat, residual sugar, oak lactones, aldehydes, esters, phenolics, glycerol texture, barrel-derived vanillin, caramel, spice, smoke, and oxidation notes",
      ],

      applicationsTitle: "Program Applications",
      applicationsText:
        "The Cigar Peak-Flavor System® is deployed across ICSI's professional and elite pathways:",

      seoTitle:
        "Cigar Peak-Flavor System® | International Cigar Sommelier Institute",
      seoDescription:
        "The proprietary Cigar Peak-Flavor System® applies thermodynamics, combustion science, blend architecture modeling, seed genetics, and terroir analysis to achieve repeatable cigar excellence.",
    },

    fr: {
      kicker: "Cadre scientifique",
      title: "Cigar Peak-Flavor System®",
      lead:
        "La plupart des cigares sont évalués de manière émotionnelle ou sur la base de ce que nous entendons ou voyons. Très peu sont évalués selon des critères scientifiques, en tenant compte de la philosophie et de l'intention du blender. Nous traitons le cigare comme un système dynamique combinant différentes semences de tabac, l'origine du tabac et du sol, ainsi que des techniques de construction. Cela nous permet de libérer tout le potentiel aromatique, de combustion et d'accord des cigares premium dans le monde entier.",

      settlingTitle: "Science du repos et du vieillissement",
      settlingIntro:
        "Un cigare premium n'est pas pleinement conditionné lorsque l'humidor se stabilise. Il est pleinement conditionné lorsque l'équilibre interne d'humidité feuille à feuille se stabilise sur toute la structure axiale du cigare. Cela est atteint lorsqu'il existe :",
      settlingBullets: [
        "Cohérence axiale de l'humidité",
        "Dissipation de l'ammoniac",
        "Mariage du blend / maturation sensorielle",
        "Récupération après choc thermique",
        "Équilibre radial de l'humidité",
      ],

      peakTitle: "Fenêtre Peak-Flavor",
      p2:
        "Le pic aromatique apparaît dans une fenêtre d'activation hygrométrique spécifique à chaque famille de blends.",
      p3:
        "Le système permet une mise en condition reproductible, un diagnostic avant allumage et un chemin contrôlé vers l'expression aromatique maximale.",
      furtherReadingLabel: "Lecture complémentaire :",
      furtherReadingTitle:
        "Humidité idéale du cigare & timing du pic aromatique",

      tastingScienceTitle: "Base scientifique de la carte de dégustation",
      tastingScienceIntro:
        "La carte de dégustation ICSI repose sur l'agronomie de la feuille, l'architecture du blend et la chimie sensorielle plutôt que sur de simples descripteurs de force. Deux intrants fondamentaux définissent la trajectoire sensorielle attendue :",
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
      terroirIntro: "L'origine modifie une même semence par :",
      terroirBullets: [
        "Teneur minérale du sol",
        "Influence volcanique",
        "Teneur en argile",
        "Drainage",
        "Pluviométrie",
        "Intensité d'ensoleillement",
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
        "Le Cigar Peak-Flavor System® est utilisé dans les parcours professionnels et élite de l'ICSI :",

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

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <div className="heroInner">
            <div className="heroText">
              <span className="kicker">{c.kicker}</span>
              <h1 className="heroTitle">{c.title}</h1>
              <p className="heroLead">{c.lead}</p>
            </div>

            <div className="heroMedia">
              <Image
                src="/img/cigar-peak-flavor-system-science.png"
                alt="Cigar Peak Flavor System"
                fill
                priority
                sizes="(max-width: 900px) 92vw, 58vw"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ─────────────────────────────────────────────── */}
      <div className="container">
        <hr className="ruleFull" />
      </div>

      {/* ── SCIENCE GRID ────────────────────────────────────────── */}
      <section className="section">
        <div className="container">

          {/* Row 1 — Settling + Peak side by side */}
          <div className="scienceRow">
            <article className="scienceCell borderRight">
              <span className="cellIndex">01</span>
              <h2 className="cellTitle">{c.settlingTitle}</h2>
              <p className="cellBody">{c.settlingIntro}</p>
              <ul className="cellList">
                {c.settlingBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>

            <article className="scienceCell">
              <span className="cellIndex">02</span>
              <h2 className="cellTitle">{c.peakTitle}</h2>
              <p className="cellBody">{c.p2}</p>
              <p className="cellBody">{c.p3}</p>
              <div className="furtherReading">
                <small>
                  {c.furtherReadingLabel}{" "}
                  <Link href="/ideal-cigar-humidity" locale={lang}>
                    {c.furtherReadingTitle}
                  </Link>
                </small>
              </div>
            </article>
          </div>

          <hr className="ruleSection" />

          {/* Row 2 — Tasting Card full-width editorial layout */}
          <div className="tastingRow">
            <div className="tastingLeft">
              <span className="cellIndex">03</span>
              <h2 className="cellTitle">{c.tastingScienceTitle}</h2>
              <p className="cellBody tastingIntro">{c.tastingScienceIntro}</p>
            </div>

            <div className="tastingRight">
              <div className="tastingSubcell">
                <h3 className="subLabel">{c.seedTitle}</h3>
                <p className="cellBody">{c.seedIntro}</p>
                <ul className="cellList inlineList">
                  {c.seedBullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className="tastingSubcell">
                <h3 className="subLabel">{c.terroirTitle}</h3>
                <p className="cellBody">{c.terroirIntro}</p>
                <ul className="cellList inlineList">
                  {c.terroirBullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <hr className="ruleSection" />

          {/* Row 3 — Pairing Science */}
          <div className="scienceRow">
            <div className="pairingIntroCol borderRight">
              <span className="cellIndex">04</span>
              <h2 className="cellTitle">{c.pairingTitle}</h2>
              <p className="cellBody">{c.pairingIntro}</p>
            </div>

            <div className="pairingListCol">
              <ol className="pairingOl">
                {c.pairingBullets.map((b, i) => (
                  <li key={b}>
                    <span className="pairingNum">0{i + 1}</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <hr className="ruleSection" />

          {/* Row 4 — Program Applications */}
          <div className="applicationsRow">
            <div className="applicationsLeft">
              <span className="cellIndex">05</span>
              <h2 className="cellTitle">{c.applicationsTitle}</h2>
              <p className="cellBody">{c.applicationsText}</p>
            </div>

            <nav className="applicationsLinks">
              <Link href="/ccs" locale={lang} className="programLink">
                <span className="programLinkLabel">Certified Cigar Sommelier</span>
                <span className="programLinkBadge">CCS®</span>
              </Link>
              <Link href="/acs" locale={lang} className="programLink">
                <span className="programLinkLabel">Advanced Cigar Sommelier</span>
                <span className="programLinkBadge">ACS®</span>
              </Link>
              <Link href="/amc" locale={lang} className="programLink">
                <span className="programLinkLabel">Aficionado Master Class</span>
                <span className="programLinkBadge">AMC®</span>
              </Link>
            </nav>
          </div>

        </div>
      </section>

      <style jsx>{`
        /* ── TOKENS ──────────────────────────────────────────── */
        :root {
          --gap: 64px;
          --gap-sm: 40px;
          --rule: 1px solid currentColor;
          --opacity-rule: rgba(0,0,0,0.12);
        }

        /* ── HERO ────────────────────────────────────────────── */
        .hero {
          padding-top: 52px;
          padding-bottom: 64px;
        }

        .heroInner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--gap);
          align-items: center;
        }

        .heroText {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .kicker {
          display: block;
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          opacity: 0.5;
          font-weight: 500;
        }

        .heroTitle {
          font-size: clamp(3.2rem, 5vw, 5.2rem);
          line-height: 0.95;
          letter-spacing: -0.04em;
          margin: 0;
        }

        .heroLead {
          font-size: clamp(1rem, 1.3vw, 1.2rem);
          line-height: 1.7;
          opacity: 0.72;
          max-width: 52ch;
          margin: 0;
        }

        .heroMedia {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 4px;
          overflow: hidden;
        }

        /* ── RULES ───────────────────────────────────────────── */
        .ruleFull {
          border: none;
          border-top: 1px solid var(--opacity-rule, rgba(0,0,0,0.12));
          margin: 0;
        }

        .ruleSection {
          border: none;
          border-top: 1px solid var(--opacity-rule, rgba(0,0,0,0.12));
          margin: 0;
        }

        /* ── SECTION SHELL ───────────────────────────────────── */
        .section {
          padding-top: 0;
          padding-bottom: 80px;
        }

        /* ── SHARED CELL TYPOGRAPHY ──────────────────────────── */
        .cellIndex {
          display: block;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          opacity: 0.35;
          font-weight: 600;
          margin-bottom: 20px;
          margin-top: 44px;
        }

        .cellTitle {
          font-size: clamp(1.4rem, 2vw, 2rem);
          line-height: 1.1;
          letter-spacing: -0.025em;
          margin: 0 0 20px;
          font-weight: 600;
        }

        .cellBody {
          font-size: 0.975rem;
          line-height: 1.72;
          opacity: 0.78;
          margin: 0 0 14px;
        }

        .cellList {
          list-style: none;
          padding: 0;
          margin: 16px 0 0;
        }

        .cellList li {
          font-size: 0.925rem;
          line-height: 1.6;
          opacity: 0.72;
          padding: 8px 0;
          border-bottom: 1px solid var(--opacity-rule, rgba(0,0,0,0.08));
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .cellList li::before {
          content: "—";
          opacity: 0.3;
          flex-shrink: 0;
          font-size: 0.8rem;
        }

        /* ── ROW 1 & 3: TWO-COLUMN ───────────────────────────── */
        .scienceRow {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .borderRight {
          border-right: 1px solid var(--opacity-rule, rgba(0,0,0,0.12));
          padding-right: var(--gap);
        }

        .scienceRow > *:last-child {
          padding-left: var(--gap);
        }

        /* ── ROW 2: TASTING EDITORIAL ────────────────────────── */
        .tastingRow {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .tastingLeft {
          border-right: 1px solid var(--opacity-rule, rgba(0,0,0,0.12));
          padding-right: var(--gap);
        }

        .tastingIntro {
          max-width: 46ch;
        }

        .tastingRight {
          padding-left: var(--gap);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--gap-sm);
          align-content: start;
          padding-top: 44px;
        }

        .tastingSubcell {
          /* no additional styles needed */
        }

        .subLabel {
          font-size: 0.7rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 600;
          opacity: 0.5;
          margin: 0 0 14px;
        }

        .inlineList li {
          font-size: 0.875rem;
          padding: 6px 0;
        }

        /* ── ROW 3: PAIRING ──────────────────────────────────── */
        .pairingIntroCol {
          padding-right: var(--gap);
        }

        .pairingListCol {
          padding-left: var(--gap);
        }

        .pairingOl {
          list-style: none;
          padding: 0;
          margin: 44px 0 0;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .pairingOl li {
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 18px;
          font-size: 0.95rem;
          line-height: 1.7;
          opacity: 0.78;
        }

        .pairingNum {
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          opacity: 0.4;
          font-weight: 700;
          padding-top: 4px;
        }

        /* ── ROW 4: APPLICATIONS ─────────────────────────────── */
        .applicationsRow {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding-bottom: 20px;
        }

        .applicationsLeft {
          border-right: 1px solid var(--opacity-rule, rgba(0,0,0,0.12));
          padding-right: var(--gap);
        }

        .applicationsLinks {
          padding-left: var(--gap);
          padding-top: 44px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0;
        }

        .programLink {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          border-bottom: 1px solid var(--opacity-rule, rgba(0,0,0,0.1));
          text-decoration: none;
          transition: opacity 0.15s ease;
        }

        .programLink:first-child {
          border-top: 1px solid var(--opacity-rule, rgba(0,0,0,0.1));
        }

        .programLink:hover {
          opacity: 0.55;
        }

        .programLinkLabel {
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: -0.01em;
        }

        .programLinkBadge {
          font-size: 0.7rem;
          letter-spacing: 0.14em;
          font-weight: 700;
          opacity: 0.45;
        }

        .furtherReading {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid var(--opacity-rule, rgba(0,0,0,0.1));
        }

        .furtherReading small {
          font-size: 0.82rem;
          opacity: 0.6;
          line-height: 1.6;
        }

        .furtherReading a {
          font-weight: 600;
          opacity: 1;
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-thickness: 1px;
        }

        /* ── RESPONSIVE ──────────────────────────────────────── */
        @media (max-width: 1024px) {
          :root {
            --gap: 44px;
          }
        }

        @media (max-width: 860px) {
          .heroInner {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .heroMedia {
            aspect-ratio: 16 / 9;
          }

          .heroLead {
            max-width: none;
          }

          .scienceRow,
          .tastingRow,
          .applicationsRow {
            grid-template-columns: 1fr;
          }

          .borderRight,
          .tastingLeft,
          .applicationsLeft {
            border-right: none;
            border-bottom: 1px solid var(--opacity-rule, rgba(0,0,0,0.12));
            padding-right: 0;
            padding-bottom: 4px;
          }

          .scienceRow > *:last-child,
          .tastingRight,
          .applicationsLinks {
            padding-left: 0;
          }

          .tastingRight {
            padding-top: 0;
            grid-template-columns: 1fr 1fr;
          }

          .pairingListCol {
            padding-left: 0;
          }

          .pairingOl {
            margin-top: 28px;
          }
        }

        @media (max-width: 540px) {
          .hero {
            padding-top: 28px;
            padding-bottom: 40px;
          }

          .heroTitle {
            font-size: clamp(2.6rem, 12vw, 3.6rem);
          }

          .tastingRight {
            grid-template-columns: 1fr;
          }

          .cellIndex {
            margin-top: 32px;
          }
        }
      `}</style>
    </Layout>
  );
}
