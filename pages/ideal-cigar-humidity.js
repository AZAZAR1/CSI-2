// pages/ideal-cigar-humidity.js
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function IdealCigarHumidity() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();

  const copy = {
    en: {
      seoTitle:
        "Ideal Cigar Humidity: Combustion Problems, Ammonia, and Peak Flavor Timing | ICSI",
      seoDescription:
        "A scientific guide to ideal cigar humidity: why 70% RH is not universal, how humidity drives combustion problems and ammonia harshness, and how to time peak flavor through calibrated moisture windows.",
      path: "/ideal-cigar-humidity",
      title: "What Is the Ideal Cigar Humidity?",
      subtitle:
        "A scientific guide to combustion problems, ammonia harshness, and peak flavor timing.",
      kicker: "Authority article • Peak-Flavor System™ perspective",
      updated: "Last updated: 2026-03-03",
      toc: "On this page",
      sections: {
        s1: "Why 70% RH is not universally optimal",
        s2: "Cigar combustion problems: the real causes",
        s3: "Ammonia in cigars: why it happens",
        s4: "Peak flavor timing: the moisture activation window",
        s5: "Practical humidity ranges by cigar type",
        s6: "How to diagnose your cigar’s ideal humidity",
        s7: "Conclusion: humidity is a combustion variable",
      },
      intro1:
        "Most cigar advice still defaults to the classic “70/70” rule (70% relative humidity at ~70°F / 21°C). It’s a useful storage convention—but it is not a universal performance target.",
      intro2:
        "The real question isn’t “What humidity is correct?” The real question is: What humidity activates stable combustion and peak aromatic expression for this blend, this vitola, and this environment?",
      intro3:
        "This guide explains why humidity drives burn behavior, why ammonia harshness can appear even in premium cigars, and how “peak flavor timing” is best understood as a narrow moisture activation window—not a superstition.",
      h2_1: "Why 70% Relative Humidity Is Not Universally Optimal",
      p_1a:
        "70% RH became popular because it preserves wrapper flexibility and reduces short-term cracking. But it doesn’t account for how cigars behave as combustion systems. Different tobaccos absorb and release moisture differently (hygroscopic behavior), and different constructions heat differently (thermal behavior).",
      p_1b:
        "As RH rises, internal moisture increases. That moisture must be heated and driven off during smoking. If the thermal gradient and oxygen diffusion can’t keep up, the ember destabilizes and flavor expression collapses into harshness or muting.",
      bullets_1: [
        "Wrapper thickness and oil load change moisture tolerance.",
        "Ring gauge and length change the heat budget and burn temperature.",
        "Tapered heads (figurados) alter draw physics and pre-heat behavior.",
        "Aging shifts diffusion rates and can move the optimal window.",
      ],
      h2_2: "Cigar Combustion Problems: The Real Cause",
      p_2a:
        "Most “construction problems” are actually combustion stability problems caused by moisture distribution, airflow, and heat transfer. A cigar can be well-made and still smoke poorly if moisture and heat are misaligned.",
      h3_2a: "Uneven burn and canoing",
      p_2b:
        "Canoeing and uneven burn often reflect moisture asymmetry across the circumference (wrapper vs core) or local density differences. When the wrapper contains more moisture than the filler, it can lag behind the core burn and require corrections.",
      h3_2b: "Frequent relighting",
      p_2c:
        "Relights increase when internal moisture consumes heat that should sustain the coal. The ember cools, combustion becomes incomplete, and the smoke becomes harsher and less aromatic.",
      h3_2c: "Bitter, charred, or metallic taste",
      p_2d:
        "Bitterness and char notes frequently appear when the combustion zone runs too cool or too wet. Steam and incomplete oxidation increase heavier byproducts and suppress the clean aromatic fraction that produces “creaminess” and clarity.",
      h2_3: "Ammonia in Cigars: Why It Happens",
      p_3a:
        "Ammonia is a nitrogenous byproduct associated with fermentation and aging chemistry. In a well-finished cigar it is usually reduced to acceptable levels, but it can reappear perceptually when combustion is inefficient.",
      p_3b:
        "Higher moisture can amplify ammonia perception because it lowers burn temperature and increases steam, which changes how volatile irritants and alkaline compounds present on the palate and in the throat.",
      callout_3:
        "Key insight: ammonia harshness is often not a “bad cigar.” It can be a combustion chemistry imbalance caused by humidity, temperature, or staging error.",
      h2_4: "Peak Flavor Timing: The Moisture Activation Window",
      p_4a:
        "Peak flavor is not a single RH number for all cigars. It is better modeled as a narrow moisture activation window where combustion is stable, volatiles release cleanly, and the pre-heat zone consistently conditions the incoming leaf.",
      p_4b:
        "Too dry and the cigar can become sharp, hot, and narrow in aromatic range. Too humid and the cigar becomes muted, bitter, or unstable. The optimal window depends on blend architecture (wrapper/binder/filler), tobacco chemistry, and construction design.",
      p_4c:
        "ICSI’s framework treats a cigar as a dynamic system. If you want the public-safe overview of the methodology, see the ",
      h2_5: "Practical Humidity Ranges by Cigar Type",
      p_5a:
        "The ranges below are practical performance windows, not absolute rules. Your environment (temperature and airflow), your storage history, and cigar age can shift the sweet spot by ~1–2 points.",
      ranges: [
        { k: "Cuban-style / thinner constructions", v: "≈ 62–65% leaf-level RH" },
        { k: "Dominican medium-body blends", v: "≈ 63–66% leaf-level RH" },
        { k: "Nicaraguan high-oil / broadleaf-heavy profiles", v: "≈ 64–67% leaf-level RH" },
        { k: "Large ring gauge (54+) / long vitolas", v: "≈ 60–64% leaf-level RH (often lower for stability)" },
      ],
      p_5b:
        "If your goal is maximum aromatic clarity, the best approach is controlled staging and measurement—not long-term guessing.",
      h2_6: "How to Diagnose Your Cigar’s Ideal Humidity",
      p_6a:
        "A practical way to identify your best window is to treat humidity like a tunable combustion parameter. Make small changes and observe repeatable signals.",
      steps: [
        "Stabilize storage conditions for at least 48 hours (consistent RH and temperature).",
        "Measure both ends (cap and foot) and note any gradient.",
        "Stage toward your target in small steps (≈1% changes), allowing time to equalize.",
        "Smoke and record: ember stability, need for relights, throat harshness, retrohale clarity, and palate texture.",
        "Repeat for the same cigar at ±1% to confirm the window rather than a single point.",
      ],
      h2_7: "Conclusion: Humidity Is a Combustion Variable, Not a Tradition",
      p_7a:
        "“Ideal cigar humidity” is not one number. It’s a blend-specific and construction-dependent combustion setting. When humidity and temperature are aligned, the cigar behaves predictably: stable coal, clean aromatic release, and reduced harshness.",
      p_7b:
        "If you want to go deeper into calibrated staging and diagnostics, explore the Peak-Flavor System™ and the professional pathways taught at ICSI.",
      ctas: {
        system: "Explore the Peak-Flavor System™",
        programs: "Explore programs (CCS® / ACS® / AMC™)",
        contact: "Contact CSI",
      },
      disclaimer:
        "Educational note: This article discusses general combustion and humidity principles and does not replace manufacturer guidance or venue safety policies.",
    },

    fr: {
      seoTitle:
        "Humidité idéale du cigare : combustion, ammoniaque et timing du pic aromatique | ICSI",
      seoDescription:
        "Guide scientifique sur l’humidité idéale du cigare : pourquoi 70% RH n’est pas universel, comment l’humidité influence les problèmes de combustion et l’ammoniaque, et comment viser le pic aromatique.",
      path: "/ideal-cigar-humidity",
      title: "Quelle est l’humidité idéale pour un cigare ?",
      subtitle:
        "Guide scientifique : problèmes de combustion, ammoniaque et timing du pic aromatique.",
      kicker: "Article d’autorité • Perspective Peak-Flavor System™",
      updated: "Dernière mise à jour : 2026-03-03",
      toc: "Sommaire",
      sections: {
        s1: "Pourquoi 70% RH n’est pas universel",
        s2: "Problèmes de combustion : les vraies causes",
        s3: "Ammoniaque : pourquoi cela arrive",
        s4: "Pic aromatique : la fenêtre d’activation",
        s5: "Plages pratiques par type de cigare",
        s6: "Diagnostiquer l’humidité optimale",
        s7: "Conclusion : variable de combustion",
      },
      intro1:
        "Beaucoup de conseils reposent encore sur la règle “70/70” (70% d’humidité relative autour de 21°C). Utile pour le stockage, mais pas un objectif universel de performance.",
      intro2:
        "La vraie question n’est pas “Quelle humidité est correcte ?” mais : quelle humidité active une combustion stable et une expression aromatique maximale pour ce blend, ce format et cet environnement ?",
      intro3:
        "Ce guide explique pourquoi l’humidité pilote la combustion, pourquoi l’ammoniaque peut être perçue même sur des cigares premium, et pourquoi le “timing du pic aromatique” correspond à une fenêtre d’activation étroite.",
      h2_1: "Pourquoi 70% d’humidité relative n’est pas universel",
      p_1a:
        "70% RH est devenu populaire car cela protège la cape et limite le dessèchement. Mais cela ne tient pas compte du cigare comme système de combustion. Les tabacs n’absorbent pas tous l’humidité de la même manière, et les constructions ne chauffent pas de façon identique.",
      p_1b:
        "À RH élevée, la teneur en eau interne augmente. Cette eau doit être chauffée et évacuée lors de la fumée. Si le gradient thermique et la diffusion d’oxygène ne suivent pas, la braise se déstabilise et l’aromatique s’effondre (âcreté, goût plat, relances).",
      bullets_1: [
        "Épaisseur de cape et charge en huiles : tolérance à l’humidité.",
        "Bague/longueur : budget thermique et température de braise.",
        "Figurados : physique du tirage et zone de préchauffe.",
        "Vieillissement : diffusion plus lente, fenêtre potentiellement déplacée.",
      ],
      h2_2: "Problèmes de combustion : les vraies causes",
      p_2a:
        "Beaucoup de “défauts de construction” sont en réalité des problèmes de stabilité de combustion liés à l’humidité, l’air et le transfert thermique.",
      h3_2a: "Combustion irrégulière / canoë",
      p_2b:
        "Souvent lié à une asymétrie d’humidité (cape vs cœur) ou à des différences locales de densité. Une cape plus humide peut “retarder” par rapport au cœur.",
      h3_2b: "Relances fréquentes",
      p_2c:
        "Quand l’eau interne consomme le flux de chaleur, la braise refroidit. La combustion devient incomplète, la fumée perd en finesse et gagne en irritants.",
      h3_2c: "Amertume / charbon / métallique",
      p_2d:
        "Ces notes apparaissent lorsque la zone de combustion est trop froide ou trop humide. La vapeur et l’oxydation incomplète augmentent certains sous-produits et réduisent la fraction aromatique “propre”.",
      h2_3: "Ammoniaque : pourquoi cela arrive",
      p_3a:
        "L’ammoniaque est un sous-produit azoté lié à la fermentation et au vieillissement. Elle est normalement réduite, mais peut redevenir perceptible si la combustion est inefficiente.",
      p_3b:
        "Une humidité élevée peut amplifier la perception d’ammoniaque : température de braise plus basse, plus de vapeur, et modification du profil des composés volatils.",
      callout_3:
        "Insight : l’ammoniaque perçue n’indique pas toujours un “mauvais cigare”. C’est souvent un déséquilibre de chimie de combustion (humidité/température/staging).",
      h2_4: "Pic aromatique : la fenêtre d’activation hydrique",
      p_4a:
        "Le pic aromatique n’est pas un seul chiffre RH universel. C’est une fenêtre étroite où la combustion est stable, la zone de préchauffe conditionne la feuille, et les volatils s’activent proprement.",
      p_4b:
        "Trop sec : fumée chaude et acérée. Trop humide : fumée plate, amère, instable. La fenêtre dépend de l’architecture du blend (cape/sous-cape/tripe) et du design (format, densité).",
      p_4c:
        "Pour la présentation publique du cadre ICSI, voir le ",
      h2_5: "Plages pratiques par type de cigare",
      p_5a:
        "Ces plages sont indicatives et orientées performance. Température, ventilation et âge peuvent déplacer le sweet spot d’environ 1–2 points.",
      ranges: [
        { k: "Style cubain / constructions plus fines", v: "≈ 62–65% RH feuille" },
        { k: "Dominicain (corps moyen)", v: "≈ 63–66% RH feuille" },
        { k: "Nicaragua (huiles, broadleaf, profils riches)", v: "≈ 64–67% RH feuille" },
        { k: "Grosse bague (54+) / formats longs", v: "≈ 60–64% RH feuille (souvent plus bas pour stabilité)" },
      ],
      p_5b:
        "La voie la plus fiable reste le staging contrôlé et la mesure plutôt que des règles uniques.",
      h2_6: "Diagnostiquer l’humidité optimale",
      p_6a:
        "Traitez l’humidité comme un paramètre de combustion réglable. Ajustez par petites étapes et observez des signaux reproductibles.",
      steps: [
        "Stabiliser le stockage au moins 48h (RH et température constantes).",
        "Mesurer cap + pied et noter le gradient.",
        "Stager vers la cible par incréments (~1%) et laisser égaliser.",
        "Noter : stabilité de braise, relances, irritation gorge, clarté rétrohale, texture palais.",
        "Répéter à ±1% pour confirmer la fenêtre.",
      ],
      h2_7: "Conclusion : l’humidité est une variable de combustion",
      p_7a:
        "L’humidité idéale n’est pas un chiffre unique : c’est un réglage dépendant du blend et du format. Quand humidité et température sont alignées : braise stable, activation aromatique propre, moins d’irritants.",
      p_7b:
        "Pour aller plus loin : Peak-Flavor System™ et programmes ICSI.",
      ctas: {
        system: "Découvrir le Peak-Flavor System™",
        programs: "Voir les programmes (CCS® / ACS® / AMC™)",
        contact: "Contacter CSI",
      },
      disclaimer:
        "Note : contenu éducatif général, ne remplace pas les recommandations fabricant ou les politiques de sécurité des lounges.",
    },

    de: {
      seoTitle:
        "Ideale Zigarrenfeuchte: Verbrennung, Ammoniak und Peak-Flavor-Timing | ICSI",
      seoDescription:
        "Wissenschaftlicher Leitfaden zur idealen Zigarrenfeuchte: warum 70% rF nicht universell ist, wie Feuchte Verbrennungsprobleme und Ammoniak-Härte beeinflusst und wie man Peak Flavor über Feuchtefenster timed.",
      path: "/ideal-cigar-humidity",
      title: "Was ist die ideale Zigarrenfeuchte?",
      subtitle:
        "Ein wissenschaftlicher Leitfaden zu Verbrennungsproblemen, Ammoniak und Peak-Flavor-Timing.",
      kicker: "Authority-Artikel • Peak-Flavor System™ Perspektive",
      updated: "Zuletzt aktualisiert: 2026-03-03",
      toc: "Inhalt",
      sections: {
        s1: "Warum 70% rF nicht universell ist",
        s2: "Verbrennungsprobleme: die Ursachen",
        s3: "Ammoniak in Zigarren: warum es passiert",
        s4: "Peak Flavor: das Feuchte-Aktivierungsfenster",
        s5: "Praktische Bereiche nach Zigarrentyp",
        s6: "So diagnostizieren Sie die ideale Feuchte",
        s7: "Fazit: Feuchte ist eine Verbrennungsvariable",
      },
      intro1:
        "Die klassische “70/70”-Regel (70% relative Feuchte bei ~21°C) ist als Lager-Konvention brauchbar – aber kein universelles Performance-Ziel.",
      intro2:
        "Die eigentliche Frage lautet: Welche Feuchte aktiviert stabile Verbrennung und maximale Aromatik – für diesen Blend, diese Vitola und diese Umgebung?",
      intro3:
        "Dieser Leitfaden erklärt, wie Feuchte die Verbrennung steuert, warum Ammoniak-Härte auftreten kann, und warum “Peak-Flavor-Timing” als enges Aktivierungsfenster verstanden werden sollte.",
      h2_1: "Warum 70% relative Feuchte nicht universell optimal ist",
      p_1a:
        "70% rF schützt das Deckblatt und reduziert kurzfristige Austrocknung. Doch Zigarren sind Verbrennungssysteme. Verschiedene Tabake nehmen Feuchte unterschiedlich auf, und unterschiedliche Konstruktionen verhalten sich thermisch verschieden.",
      p_1b:
        "Mit steigender rF steigt die interne Wasserlast. Dieses Wasser muss während des Rauchens aufgeheizt und ausgetrieben werden. Wenn Thermik und Sauerstoffdiffusion nicht mithalten, destabilisiert die Glut und die Aromatik bricht ein.",
      bullets_1: [
        "Deckblattdicke und Ölanteil beeinflussen die Feuchte-Toleranz.",
        "Ringmaß und Länge verändern Wärmebudget und Gluttemperatur.",
        "Figurados verändern Zugphysik und Vorwärmzone.",
        "Alterung verlangsamt Diffusion – das Fenster kann sich verschieben.",
      ],
      h2_2: "Zigarren-Verbrennungsprobleme: die realen Ursachen",
      p_2a:
        "Viele vermeintliche “Konstruktionsfehler” sind Verbrennungsstabilitätsprobleme: Feuchteverteilung, Luftfluss und Wärmeübertragung sind entscheidend.",
      h3_2a: "Schiefer Abbrand / Canoeing",
      p_2b:
        "Häufig durch Feuchte-Asymmetrie (Deckblatt vs Kern) oder lokale Dichteunterschiede. Ein feuchteres Deckblatt kann dem Kern-Abbrand hinterherlaufen.",
      h3_2b: "Häufiges Nachzünden",
      p_2c:
        "Wenn interne Feuchte Wärme bindet, kühlt die Glut. Unvollständige Verbrennung steigt, Rauch wird schärfer und weniger klar.",
      h3_2c: "Bitter, verkohlt, metallisch",
      p_2d:
        "Tritt oft auf, wenn die Verbrennungszone zu kühl/zu feucht läuft. Dampf und unvollständige Oxidation erhöhen schwere Nebenprodukte und unterdrücken die “saubere” Aromafraktion.",
      h2_3: "Ammoniak in Zigarren: warum es passiert",
      p_3a:
        "Ammoniak ist ein stickstoffhaltiges Nebenprodukt aus Fermentation/Alterung. Normalerweise reduziert – kann aber bei ineffizienter Verbrennung stärker wahrgenommen werden.",
      p_3b:
        "Höhere Feuchte verstärkt die Wahrnehmung, weil die Gluttemperatur sinkt und mehr Dampf entsteht – das verändert die Präsentation flüchtiger Reizstoffe.",
      callout_3:
        "Kernaussage: Ammoniak-Härte bedeutet nicht automatisch “schlechte Zigarre”. Oft ist es ein Verbrennungschemie-Mismatch (Feuchte/Temperatur/Staging).",
      h2_4: "Peak Flavor: das Feuchte-Aktivierungsfenster",
      p_4a:
        "Peak Flavor ist kein universeller rF-Wert. Es ist ein enges Aktivierungsfenster, in dem Verbrennung stabil bleibt und Volatiles sauber freigesetzt werden.",
      p_4b:
        "Zu trocken: heiß, scharf, eng. Zu feucht: flach, bitter, instabil. Das Fenster hängt von Blend-Architektur und Konstruktion (Format, Dichte) ab.",
      p_4c:
        "Öffentliche Übersicht des Ansatzes finden Sie im ",
      h2_5: "Praktische Feuchtebereiche nach Zigarrentyp",
      p_5a:
        "Diese Bereiche sind praktische Performance-Fenster, keine Dogmen. Temperatur, Luftfluss und Alter können den Sweet Spot um ~1–2 Punkte verschieben.",
      ranges: [
        { k: "Kubanischer Stil / schlankere Konstruktion", v: "≈ 62–65% Blatt-rF" },
        { k: "Dominikanisch (Medium Body)", v: "≈ 63–66% Blatt-rF" },
        { k: "Nicaragua (ölig/kräftig, Broadleaf-lastig)", v: "≈ 64–67% Blatt-rF" },
        { k: "Großes Ringmaß (54+) / lange Vitolas", v: "≈ 60–64% Blatt-rF (oft niedriger für Stabilität)" },
      ],
      p_5b:
        "Die zuverlässigste Methode: kontrolliertes Staging plus Messung – statt Einheitsregeln.",
      h2_6: "So diagnostizieren Sie die ideale Feuchte",
      p_6a:
        "Behandeln Sie Feuchte als einstellbaren Verbrennungsparameter. Kleine Schritte, klare Signale, Wiederholung.",
      steps: [
        "Lagerbedingungen 48h stabilisieren (konstante rF/Temperatur).",
        "Cap und Foot messen und Gradienten notieren.",
        "In ~1%-Schritten zum Ziel stagen und ausgleichen lassen.",
        "Beobachten: Glutstabilität, Nachzünden, Halsreiz, Retrohale-Klarheit, Textur.",
        "Mit ±1% wiederholen, um das Fenster zu bestätigen.",
      ],
      h2_7: "Fazit: Feuchte ist eine Verbrennungsvariable",
      p_7a:
        "Ideale Feuchte ist kein einzelner Wert – sondern ein blend- und formatabhängiges Setting. Wenn Feuchte und Temperatur stimmen: stabile Glut, klare Aromatik, weniger Härte.",
      p_7b:
        "Mehr Tiefe: Peak-Flavor System™ und ICSI-Programme.",
      ctas: {
        system: "Peak-Flavor System™ ansehen",
        programs: "Programme ansehen (CCS® / ACS® / AMC™)",
        contact: "CSI kontaktieren",
      },
      disclaimer:
        "Hinweis: Allgemeine Bildungsinhalte; ersetzt keine Herstellerhinweise oder Lounge-Sicherheitsrichtlinien.",
    },
  };

  const c = copy[lang] || copy.en;

  return (
    <Layout>
      <Seo title={c.seoTitle} description={c.seoDescription} path={c.path} />

      <div className="section">
        <div className="container">
          <div className="card" style={{ padding: 18 }}>
            <div className="kicker">{c.kicker}</div>
            <h1 style={{ marginTop: 10 }}>{c.title}</h1>
            <p className="small" style={{ marginTop: 6 }}>
              {c.subtitle}
            </p>
            <p className="small" style={{ marginTop: 10, opacity: 0.75 }}>
              {c.updated}
            </p>
          </div>

          <div className="systemGrid" style={{ marginTop: 16 }}>
            <div className="systemCard">
              <h3>{c.toc}</h3>
              <ul style={{ marginTop: 10 }}>
                <li><a className="contactLink" href="#s1">{c.sections.s1}</a></li>
                <li><a className="contactLink" href="#s2">{c.sections.s2}</a></li>
                <li><a className="contactLink" href="#s3">{c.sections.s3}</a></li>
                <li><a className="contactLink" href="#s4">{c.sections.s4}</a></li>
                <li><a className="contactLink" href="#s5">{c.sections.s5}</a></li>
                <li><a className="contactLink" href="#s6">{c.sections.s6}</a></li>
                <li><a className="contactLink" href="#s7">{c.sections.s7}</a></li>
              </ul>
            </div>

            <div className="systemCard">
              <h3>ICSI</h3>
              <p className="small" style={{ marginTop: 10 }}>
                {lang === "en" && "Swiss institutional rigor for repeatable cigar excellence."}
                {lang === "fr" && "Rigueur institutionnelle suisse pour une excellence reproductible."}
                {lang === "de" && "Schweizer institutionelle Rigorosität für reproduzierbare Exzellenz."}
              </p>

              <div className="ctaRow" style={{ marginTop: 14 }}>
                <Link className="btn primary" href="/system" locale={lang}>
                  {c.ctas.system}
                </Link>
                <Link className="btn" href="/programs" locale={lang}>
                  {c.ctas.programs}
                </Link>
                <Link className="btn" href="/contact" locale={lang}>
                  {c.ctas.contact}
                </Link>
              </div>
            </div>
          </div>

          <div className="card" style={{ marginTop: 16, padding: 18 }}>
            <p className="small">{c.intro1}</p>
            <p className="small" style={{ marginTop: 10 }}>{c.intro2}</p>
            <p className="small" style={{ marginTop: 10 }}>{c.intro3}</p>
          </div>

          <div className="card" id="s1" style={{ marginTop: 16, padding: 18 }}>
            <h2>{c.h2_1}</h2>
            <p className="small" style={{ marginTop: 10 }}>{c.p_1a}</p>
            <p className="small" style={{ marginTop: 10 }}>{c.p_1b}</p>
            <ul style={{ marginTop: 12 }}>
              {c.bullets_1.map((b) => (
                <li key={b} className="small" style={{ marginTop: 6 }}>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="card" id="s2" style={{ marginTop: 16, padding: 18 }}>
            <h2>{c.h2_2}</h2>
            <p className="small" style={{ marginTop: 10 }}>{c.p_2a}</p>

            <h3 style={{ marginTop: 14 }}>{c.h3_2a}</h3>
            <p className="small" style={{ marginTop: 8 }}>{c.p_2b}</p>

            <h3 style={{ marginTop: 14 }}>{c.h3_2b}</h3>
            <p className="small" style={{ marginTop: 8 }}>{c.p_2c}</p>

            <h3 style={{ marginTop: 14 }}>{c.h3_2c}</h3>
            <p className="small" style={{ marginTop: 8 }}>{c.p_2d}</p>
          </div>

          <div className="card" id="s3" style={{ marginTop: 16, padding: 18 }}>
            <h2>{c.h2_3}</h2>
            <p className="small" style={{ marginTop: 10 }}>{c.p_3a}</p>
            <p className="small" style={{ marginTop: 10 }}>{c.p_3b}</p>
            <div className="notice" style={{ marginTop: 14 }}>
              <b>ICSI:</b> {c.callout_3}
            </div>
          </div>

          <div className="card" id="s4" style={{ marginTop: 16, padding: 18 }}>
            <h2>{c.h2_4}</h2>
            <p className="small" style={{ marginTop: 10 }}>{c.p_4a}</p>
            <p className="small" style={{ marginTop: 10 }}>{c.p_4b}</p>
            <p className="small" style={{ marginTop: 10 }}>
              {c.p_4c}
              <Link className="contactLink" href="/system" locale={lang}>
                Peak-Flavor System™
              </Link>
              .
            </p>
          </div>

          <div className="card" id="s5" style={{ marginTop: 16, padding: 18 }}>
            <h2>{c.h2_5}</h2>
            <p className="small" style={{ marginTop: 10 }}>{c.p_5a}</p>

            <div className="systemGrid" style={{ marginTop: 14 }}>
              <div className="systemCard">
                <h3>{lang === "en" ? "Indicative ranges" : lang === "fr" ? "Plages indicatives" : "Indikative Bereiche"}</h3>
                <ul style={{ marginTop: 10 }}>
                  {c.ranges.map((r) => (
                    <li key={r.k} className="small" style={{ marginTop: 8 }}>
                      <b>{r.k}:</b> {r.v}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="systemCard">
                <h3>{lang === "en" ? "How to use this" : lang === "fr" ? "Comment l’utiliser" : "So nutzen Sie das"}</h3>
                <p className="small" style={{ marginTop: 10 }}>
                  {c.p_5b}
                </p>
                <div className="ctaRow" style={{ marginTop: 14 }}>
                  <Link className="btn primary" href="/programs" locale={lang}>
                    {c.ctas.programs}
                  </Link>
                  <Link className="btn" href="/contact" locale={lang}>
                    {c.ctas.contact}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card" id="s6" style={{ marginTop: 16, padding: 18 }}>
            <h2>{c.h2_6}</h2>
            <p className="small" style={{ marginTop: 10 }}>{c.p_6a}</p>
            <ol style={{ marginTop: 12, paddingLeft: 18 }}>
              {c.steps.map((s) => (
                <li key={s} className="small" style={{ marginTop: 8 }}>
                  {s}
                </li>
              ))}
            </ol>
          </div>

          <div className="card" id="s7" style={{ marginTop: 16, padding: 18 }}>
            <h2>{c.h2_7}</h2>
            <p className="small" style={{ marginTop: 10 }}>{c.p_7a}</p>
            <p className="small" style={{ marginTop: 10 }}>{c.p_7b}</p>

            <div className="ctaRow" style={{ marginTop: 14 }}>
              <Link className="btn primary" href="/system" locale={lang}>
                {c.ctas.system}
              </Link>
              <Link className="btn" href="/programs" locale={lang}>
                {c.ctas.programs}
              </Link>
              <Link className="btn" href="/contact" locale={lang}>
                {c.ctas.contact}
              </Link>
            </div>

            <p className="small" style={{ marginTop: 14, opacity: 0.75 }}>
              {c.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}