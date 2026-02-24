import Layout from "../components/Layout";
import { useRouter } from "next/router";

export default function System() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();

  const copy = {
    en: {
      title: "Scientific Peak-Flavor System™",
      lead: "Controlled. Measured. Predictable.",
      p1: `Most cigars are evaluated emotionally. Very few are evaluated thermodynamically.
           The Scientific Peak-Flavor System™ treats a cigar as a dynamic combustion system — not a static object.`,
      bullets: [
        "Leaf hygroscopic equilibrium",
        "Temperature–humidity coupling",
        "Pre-heat zone behavior",
        "Volatile activation thresholds",
        "Blend architecture (wrapper / binder / filler)"
      ],
      p2: `Peak flavor occurs within a narrow moisture activation window specific to each blend family.`,
      p3: `The system enables repeatable staging, diagnostics before lighting, and a controlled pathway from conditioning to peak aromatic expression.`
    },
    fr: {
      title: "Système Scientifique Peak-Flavor™",
      lead: "Contrôlé. Mesuré. Prévisible.",
      p1: `La plupart des cigares sont évalués de manière émotionnelle.
           Très peu sont évalués selon des principes thermodynamiques.
           Le Scientific Peak-Flavor System™ considère le cigare comme un système de combustion dynamique — et non comme un objet statique.`,
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
      title: "Wissenschaftliches Peak-Flavor-System™",
      lead: "Kontrolliert. Messbar. Reproduzierbar.",
      p1: `Die meisten Zigarren werden emotional beurteilt. Nur wenige werden thermodynamisch verstanden.
           Das Scientific Peak-Flavor System™ behandelt die Zigarre als dynamisches Verbrennungssystem — nicht als statisches Produkt.`,
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
          {/* HERO CARD */}
          <div className="systemHero">
            <div className="systemHeroMedia">
              <img
                src="/img/peak-flavor-system.png"
                alt="Scientific Peak-Flavor System"
              />
            </div>
            <div className="systemHeroMeta">
              <div className="systemKicker">
                <span className="systemPill">Scientific framework</span>
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