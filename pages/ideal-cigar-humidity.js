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
        "Ideal Cigar Humidity, Combustion Stability & Peak Flavor Timing | ICSI",
      seoDescription:
        "The science behind ideal cigar humidity, combustion stability, ammonia release, and peak flavor timing—an authority article by the International Cigar Sommelier Institute.",
      title: "Ideal Cigar Humidity, Combustion Stability & Peak Flavor Timing",
      lead:
        "Most cigars are stored within a generic humidity range. Very few are conditioned according to combustion science, volatile activation, and blend architecture. The difference determines whether a cigar expresses its intended flavor, or suppresses it.",
      s1Title: "Ideal Cigar Humidity Is Not a Fixed Number",
      s1P1:
        "The industry often promotes a universal relative humidity (RH) target. In practice, no single value is ideal for all cigars. Tobacco leaf is hygroscopic, meaning it continuously exchanges moisture with its environment.",
      s1P2Intro: "That equilibrium state directly influences:",
      s1Bullets: [
        "Burn temperature stability",
        "Combustion efficiency",
        "Smoke density",
        "Volatile compound activation",
        "Aromatic clarity",
      ],
      s1P3:
        "Each blend family has a narrow activation window where flavor expression becomes coherent and balanced. Outside that window, performance degrades.",
      s2Title: "Cigar Combustion Problems Begin with Moisture Imbalance",
      s2P1:
        "Most combustion issues are not construction defects. They are moisture equilibrium problems.",
      s2H3a: "Over-Conditioned Cigars",
      s2P2:
        "When tobacco contains excess moisture, ignition energy is diverted toward water evaporation. This reduces combustion temperature and can lead to:",
      s2BulletsA: ["Uneven burn", "Tunneling", "Repeated relights", "Muted flavor output"],
      s2H3b: "Under-Conditioned Cigars",
      s2P3:
        "When moisture is too low, combustion accelerates beyond the blend’s optimal thermal profile. This can produce:",
      s2BulletsB: ["Sharp or harsh smoke", "Excess heat", "Compressed flavor development", "Structural cracking"],
      s2P4:
        "In both cases, the root cause is thermodynamic imbalance rather than tobacco quality.",
      s3Title: "Ammonia in Cigars: A Combustion and Conditioning Issue",
      s3P1:
        "Ammonia is a natural byproduct of tobacco fermentation. In properly aged cigars, it dissipates over time. However, if combustion temperature and moisture activation are misaligned, ammonia compounds may be released more aggressively during smoking.",
      s3P2Intro: "This is often perceived as:",
      s3Bullets: ["Throat irritation", "Nasal sharpness", "Unpleasant chemical notes"],
      s3P3:
        "Ammonia during smoking is frequently not a failure of aging, but a failure of environmental calibration.",
      s4Title: "Peak Flavor Timing",
      s4P1: "Peak flavor does not occur randomly. It occurs when:",
      s4Bullets: [
        "Leaf moisture reaches blend-specific equilibrium",
        "Combustion temperature stabilizes",
        "Volatile compounds activate within controlled thresholds",
        "Smoke chemistry aligns with nasal perception",
      ],
      s4P2:
        "This window is narrow. When achieved, the cigar transitions from fragmented flavor notes to structured aromatic architecture.",
      s5Title: "The Thermodynamic Approach",
      s5P1:
        "The International Cigar Sommelier Institute applies a structured conditioning framework known as the Peak-Flavor System™. Rather than relying on generalized storage targets, this approach evaluates:",
      s5Bullets: [
        "Leaf hygroscopic equilibrium",
        "Temperature-humidity coupling",
        "Pre-heat zone behavior",
        "Volatile activation thresholds",
        "Blend architecture",
      ],
      s5P2:
        "The objective is repeatable combustion stability and predictable aromatic expression across blend families.",
      closingStrong:
        "Proper humidity is not about preservation. It is about activation.",
      closingP:
        "When moisture, combustion, and chemistry align, a cigar does not merely burn correctly, it expresses its intended identity.",
      relatedTitle: "Related",
      relatedLink: "Cigar Peak-Flavor System™ overview",
    },

    fr: {
      seoTitle:
        "Humidité idéale, combustion et timing du pic aromatique | ICSI",
      seoDescription:
        "La science derrière l’humidité idéale du cigare, la stabilité de combustion, l’ammoniac et le timing du pic aromatique — un article d’autorité ICSI.",
      title: "Humidité idéale, combustion et timing du pic aromatique",
      lead:
        "La plupart des cigares sont conservés dans une plage d’humidité générique. Très peu sont conditionnés selon la science de la combustion, l’activation des volatils et l’architecture du blend. La différence détermine si le cigare exprime son intention aromatique, ou la supprime.",
      s1Title: "L’humidité idéale n’est pas un chiffre unique",
      s1P1:
        "L’industrie promeut souvent une cible universelle de RH. En pratique, aucune valeur n’est idéale pour tous les cigares. Le tabac est hygroscopique : il échange en continu de l’humidité avec son environnement.",
      s1P2Intro: "Cet état d’équilibre influence directement :",
      s1Bullets: [
        "Stabilité de température de combustion",
        "Efficience de combustion",
        "Densité de fumée",
        "Activation des composés volatils",
        "Clarté aromatique",
      ],
      s1P3:
        "Chaque famille de blends possède une fenêtre d’activation étroite où l’expression aromatique devient cohérente et équilibrée. Hors de cette fenêtre, la performance se dégrade.",
      s2Title: "Les problèmes de combustion commencent par un déséquilibre d’humidité",
      s2P1:
        "La plupart des problèmes ne sont pas des défauts de construction. Ce sont des problèmes d’équilibre hygrométrique.",
      s2H3a: "Cigares sur-conditionnés",
      s2P2:
        "Avec trop d’humidité, l’énergie d’allumage est absorbée par l’évaporation. La température baisse et cela peut entraîner :",
      s2BulletsA: ["Combustion irrégulière", "Tunneling", "Relances répétées", "Arômes étouffés"],
      s2H3b: "Cigares sous-conditionnés",
      s2P3:
        "Avec trop peu d’humidité, la combustion s’accélère au-delà du profil thermique optimal du blend. Cela peut produire :",
      s2BulletsB: ["Fumée agressive", "Excès de chaleur", "Développement aromatique comprimé", "Fissures"],
      s2P4:
        "Dans les deux cas, la cause racine est un déséquilibre thermodynamique plutôt qu’un problème de qualité du tabac.",
      s3Title: "Ammoniac : un problème de combustion et de conditionnement",
      s3P1:
        "L’ammoniac est un sous-produit naturel de la fermentation. Dans un cigare correctement vieilli, il se dissipe avec le temps. Mais si température de combustion et activation d’humidité sont désalignées, l’ammoniac peut être libéré plus fortement pendant la dégustation.",
      s3P2Intro: "Ceci est souvent perçu comme :",
      s3Bullets: ["Irritation de la gorge", "Agressivité nasale", "Notes chimiques désagréables"],
      s3P3:
        "L’ammoniac à la dégustation n’est souvent pas un échec du vieillissement, mais un échec de calibration environnementale.",
      s4Title: "Timing du pic aromatique",
      s4P1: "Le pic aromatique n’est pas aléatoire. Il se produit lorsque :",
      s4Bullets: [
        "L’humidité du tabac atteint l’équilibre spécifique au blend",
        "La température de combustion se stabilise",
        "Les volatils s’activent dans des seuils contrôlés",
        "La chimie de fumée s’aligne avec la perception nasale",
      ],
      s4P2:
        "Cette fenêtre est étroite. Lorsqu’elle est atteinte, le cigare passe d’arômes fragmentés à une architecture aromatique structurée.",
      s5Title: "L’approche thermodynamique",
      s5P1:
        "ICSI applique un cadre de conditionnement structuré : le Peak-Flavor System™. Plutôt que des cibles génériques, l’approche évalue :",
      s5Bullets: [
        "Équilibre hygroscopique",
        "Couplage température–humidité",
        "Comportement de la zone de pré-chauffe",
        "Seuils d’activation des volatils",
        "Architecture du blend",
      ],
      s5P2:
        "Objectif : combustion stable et expression aromatique prévisible, de façon reproductible.",
      closingStrong:
        "Une bonne humidité n’est pas une question de conservation. C’est une question d’activation.",
      closingP:
        "Quand humidité, combustion et chimie s’alignent, le cigare ne brûle pas seulement correctement, il exprime son identité.",
      relatedTitle: "À lire aussi",
      relatedLink: "Présentation du Peak-Flavor System™",
    },

    de: {
      seoTitle:
        "Ideale Zigarrenfeuchte, Verbrennungsstabilität & Peak-Flavor Timing | ICSI",
      seoDescription:
        "Die Wissenschaft hinter idealer Zigarrenfeuchte, Verbrennungsstabilität, Ammoniak-Freisetzung und Peak-Flavor Timing, ein ICSI Authority-Artikel.",
      title: "Ideale Zigarrenfeuchte, Verbrennungsstabilität & Peak-Flavor Timing",
      lead:
        "Viele Zigarren werden in einer generischen Feuchte-Spanne gelagert. Nur wenige werden nach Verbrennungswissenschaft, Volatil-Aktivierung und Blend-Architektur konditioniert. Genau das entscheidet, ob eine Zigarre ihre beabsichtigte Aromatik zeigt, oder nicht.",
      s1Title: "Ideale Feuchte ist keine feste Zahl",
      s1P1:
        "Oft wird ein universeller RH-Wert propagiert. In der Praxis ist kein einzelner Wert für alle Zigarren ideal. Tabak ist hygroskopisch und tauscht kontinuierlich Feuchte mit seiner Umgebung aus.",
      s1P2Intro: "Dieser Gleichgewichtszustand beeinflusst direkt:",
      s1Bullets: [
        "Stabilität der Verbrennungstemperatur",
        "Verbrennungseffizienz",
        "Rauchdichte",
        "Aktivierung flüchtiger Verbindungen",
        "Aromatische Klarheit",
      ],
      s1P3:
        "Jede Blend-Familie besitzt ein enges Aktivierungsfenster, in dem Aromatik kohärent und ausgewogen wird. Außerhalb davon sinkt die Performance.",
      s2Title: "Verbrennungsprobleme beginnen mit Feuchte-Ungleichgewicht",
      s2P1:
        "Die meisten Probleme sind keine Konstruktionsfehler. Es sind Feuchte-Gleichgewichtsprobleme.",
      s2H3a: "Über-konditionierte Zigarren",
      s2P2:
        "Bei zu hoher Feuchte wird Zündenergie in Verdampfung umgeleitet. Die Temperatur sinkt und das führt oft zu:",
      s2BulletsA: ["Unruhiger Abbrand", "Tunneling", "Häufiges Nachzünden", "Gedämpfter Geschmack"],
      s2H3b: "Unter-konditionierte Zigarren",
      s2P3:
        "Bei zu niedriger Feuchte beschleunigt die Verbrennung über das optimale thermische Profil hinaus. Das kann erzeugen:",
      s2BulletsB: ["Scharfer Rauch", "Überhitzen", "Komprimierte Aromatik", "Risse"],
      s2P4:
        "In beiden Fällen ist die Ursache thermodynamische Fehlkalibrierung, nicht Tabakqualität.",
      s3Title: "Ammoniak: Verbrennungs- und Konditionierungsproblem",
      s3P1:
        "Ammoniak ist ein natürlicher Nebenprodukt der Fermentation. In korrekt gereiften Zigarren nimmt er mit der Zeit ab. Bei Fehlalignment von Temperatur und Feuchte-Aktivierung kann Ammoniak beim Rauchen jedoch stärker freigesetzt werden.",
      s3P2Intro: "Das wird oft wahrgenommen als:",
      s3Bullets: ["Reizung im Hals", "Nasal scharf", "Chemische Noten"],
      s3P3:
        "Ammoniak beim Rauchen ist häufig kein Reifeproblem — sondern ein Kalibrierungsproblem der Umgebung.",
      s4Title: "Peak-Flavor Timing",
      s4P1: "Peak Flavor entsteht nicht zufällig. Er entsteht wenn:",
      s4Bullets: [
        "Tabakfeuchte blend-spezifisches Gleichgewicht erreicht",
        "Verbrennungstemperatur stabil wird",
        "Volatile in kontrollierten Schwellen aktivieren",
        "Rauchchemie zur Nasenwahrnehmung passt",
      ],
      s4P2:
        "Dieses Fenster ist eng. Wenn es erreicht wird, wechselt die Zigarre von fragmentierten Noten zu strukturierter Aromatik.",
      s5Title: "Der thermodynamische Ansatz",
      s5P1:
        "ICSI nutzt ein strukturiertes Konditionierungs-Framework: das Peak-Flavor System™. Statt generischer Targets bewertet es:",
      s5Bullets: [
        "Hygroskopisches Gleichgewicht",
        "Temperatur–Feuchte-Kopplung",
        "Vorwärmzone-Verhalten",
        "Schwellen der Volatil-Aktivierung",
        "Blend-Architektur",
      ],
      s5P2:
        "Ziel: reproduzierbare Verbrennungsstabilität und vorhersehbare Aromenausprägung.",
      closingStrong:
        "Feuchte ist nicht nur Konservierung. Sie ist Aktivierung.",
      closingP:
        "Wenn Feuchte, Verbrennung und Chemie übereinstimmen, brennt eine Zigarre nicht nur korrekt, sie zeigt ihre Identität.",
      relatedTitle: "Weiterführend",
      relatedLink: "Peak-Flavor System™ Übersicht",
    },
  };

  const c = copy[lang] || copy.en;

  return (
    <Layout>
      <Seo
        title={c.seoTitle}
        description={c.seoDescription}
        path="/ideal-cigar-humidity"
      />

      <div className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <h1>{c.title}</h1>
          <p className="lead">{c.lead}</p>

          <hr className="sep" />

          <h2>{c.s1Title}</h2>
          <p>{c.s1P1}</p>
          <p>{c.s1P2Intro}</p>
          <ul>
            {c.s1Bullets.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <p>{c.s1P3}</p>

          <hr className="sep" />

          <h2>{c.s2Title}</h2>
          <p>{c.s2P1}</p>

          <h3>{c.s2H3a}</h3>
          <p>{c.s2P2}</p>
          <ul>
            {c.s2BulletsA.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>

          <h3>{c.s2H3b}</h3>
          <p>{c.s2P3}</p>
          <ul>
            {c.s2BulletsB.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>

          <p>{c.s2P4}</p>

          <hr className="sep" />

          <h2>{c.s3Title}</h2>
          <p>{c.s3P1}</p>
          <p>{c.s3P2Intro}</p>
          <ul>
            {c.s3Bullets.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <p>{c.s3P3}</p>

          <hr className="sep" />

          <h2>{c.s4Title}</h2>
          <p>{c.s4P1}</p>
          <ul>
            {c.s4Bullets.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <p>{c.s4P2}</p>

          <hr className="sep" />

          <h2>{c.s5Title}</h2>
          <p>{c.s5P1}</p>
          <ul>
            {c.s5Bullets.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <p>{c.s5P2}</p>

          <hr className="sep" />

          <p>
            <strong>{c.closingStrong}</strong>
          </p>
          <p>{c.closingP}</p>

          <div style={{ marginTop: 28 }}>
            <h3 style={{ marginBottom: 8 }}>{c.relatedTitle}</h3>
            <Link href="/system" className="btn">
              {c.relatedLink}
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
