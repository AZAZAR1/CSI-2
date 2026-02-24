import Layout from "../components/Layout";
import { useRouter } from "next/router";

export default function System() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();

  const copy = {
    en: {
      title: "Peak-Flavor System™",
      lead: "Controlled. Measured. Predictable.",
      p1: `Most cigars are evaluated emotionally or based on what we hear or see. Very few are evaluated on scientific insights, with the Blender's philosophy and intent in mind.
           The Peak-Flavor System™ treats a cigar as a dynamic system that combines various tobacco leaf seeds, tobacco origin and soil, and construction techniques.`,
      bullets: [
        "Leaf hygroscopic equilibrium",
        "Temperature-humidity coupling",
        "Pre-heat zone behavior",
        "Volatile activation thresholds",
        "Blend architecture (wrapper / binder / filler)"
      ],
      p2: `Peak flavor occurs within a narrow moisture activation window specific to each blend family.`,
      p3: `The system enables repeatable staging, diagnostics before lighting, and a controlled pathway from conditioning to peak aromatic expression.`
    },
    fr: {
      title: "Système Peak-Flavor™",
      lead: "Contrôlé. Mesuré. Prévisible.",
      p1: `La plupart des cigares sont évalués de manière émotionnelle ou sur la base de ce que nous entendons ou voyons. Très peu sont évalués selon des critères scientifiques, en tenant compte de la philosophie et de l'intention du créateur (blender). Le système Peak-Flavor™ traite un cigare comme un système dynamique combinant diverses semences de feuilles de tabac, l'origine du tabac et du sol, ainsi que des techniques de fabrication.`,
      bullets: [
        "Équilibre hygroscopique du tabac",
        "Interaction température–humidité",
        "Comportement de la zone de pré-chauffe",
        "Seuils d’activation des composés volatils",
        "Architecture du mélange (cape / sous-cape / tripe)"
      ],
      p2: `Le pic aromatique se situe dans une fenêtre d’humidité précise, propre à chaque famille de mélanges.`,
      p3: `Le système permet une mise en condition reproductible, un diagnostic avant allumage, et un passage contrôlé vers une expression aromatique maximale.`
    },
    de: {
      title: "Peak-Flavor-System™",
      lead: "Kontrolliert. Messbar. Reproduzierbar.",
      p1: `Die meisten Zigarren werden emotional oder basierend auf dem bewertet, was wir hören oder sehen. Nur wenige werden auf der Grundlage wissenschaftlicher Erkenntnisse bewertet, wobei die Philosophie und Absicht des Blenders im Vordergrund stehen. Das Peak-Flavor System™ betrachtet eine Zigarre als ein dynamisches System, das verschiedene Tabaksamensorten, Tabakherkunft und Bodenbeschaffenheit sowie Konstruktionstechniken miteinander verbindet.`,
      bullets: [
        "Hygroskopisches Gleichgewicht des Tabaks",
        "Temperatur–Feuchte-Kopplung",
        "Verhalten der Vorwärmzone",
        "Aktivierungsschwellen flüchtiger Aromastoffe",
        "Blend-Architektur (Deckblatt / Umblatt / Einlage)"
      ],
      p2: `Maximales Aroma liegt in einem engen, blend-spezifischen Feuchtefenster.`,
      p3: `Das System ermöglicht reproduzierbares Staging, Diagnostik vor dem Anzünden und einen kontrollierten Weg zur Peak-Aromatik.`
    }
  };

  const c = copy[lang] || copy.en;

  return (
    <Layout>
      <div className="section">
        <div className="container">

          {/* HERO: non-cropping image container */}
          <div className="systemHero">
            <div className="systemImageWrap">
              <img
                src="/img/peak-flavor-system.png"
                alt="Peak-Flavor System"
                className="systemImage"
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
              <div className="systemCard">
                <h3>Core drivers</h3>
                <ul>
                  {c.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className="systemCard">
                <h3>Peak window</h3>
                <p>{c.p2}</p>
                <p style={{ marginTop: 10 }}>{c.p3}</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
}