import Layout from "../components/Layout";

export default function System() {
  return (
    <Layout>
      <div className="heroCard" style={{ marginTop: 14 }}>
        <div className="heroFrame">
          <img src="/img/peak-flavor-system.png" alt="Scientific Peak-Flavor System" />
        </div>
        <div className="heroCardPad">
          <div className="heroTag"><i>Scientific Peak-Flavor System™</i></div>
        </div>
     </div>
    </Layout>
    <section className="peakFlavorText">
  <div className="container">

    {/* ENGLISH */}
    <div className="lang en">
      <h2>Scientific Peak-Flavor System™</h2>
      <p className="lead">
        Controlled. Measured. Predictable.
      </p>
      <p>
        Most cigars are evaluated emotionally. Very few are evaluated thermodynamically.
        The Scientific Peak-Flavor System™ treats a cigar as a dynamic combustion system.
      </p>
      <ul>
        <li>Leaf hygroscopic equilibrium</li>
        <li>Temperature–humidity coupling</li>
        <li>Pre-heat zone behavior</li>
        <li>Volatile activation thresholds</li>
        <li>Blend architecture</li>
      </ul>
      <p>
        Peak flavor occurs within a narrow moisture activation window specific to each blend family.
      </p>
    </div>

    {/* FRENCH */}
    <div className="lang fr">
      <h2>Système Scientifique Peak-Flavor™</h2>
      <p className="lead">
        Contrôlé. Mesuré. Prévisible.
      </p>
      <p>
        Le Scientific Peak-Flavor System™ considère le cigare comme un système de combustion dynamique.
      </p>
      <ul>
        <li>Équilibre hygroscopique du tabac</li>
        <li>Interaction température–humidité</li>
        <li>Zone de pré-chauffe</li>
        <li>Seuils d’activation aromatique</li>
        <li>Architecture du mélange</li>
      </ul>
      <p>
        Le pic aromatique se situe dans une fenêtre d’humidité précise propre à chaque famille.
      </p>
    </div>

    {/* GERMAN */}
    <div className="lang de">
      <h2>Wissenschaftliches Peak-Flavor-System™</h2>
      <p className="lead">
        Kontrolliert. Messbar. Reproduzierbar.
      </p>
      <p>
        Das Scientific Peak-Flavor System™ behandelt die Zigarre als dynamisches Verbrennungssystem.
      </p>
      <ul>
        <li>Hygroskopisches Gleichgewicht</li>
        <li>Temperatur–Feuchte-Kopplung</li>
        <li>Vorwärmzone</li>
        <li>Aromaschwellen</li>
        <li>Blend-Architektur</li>
      </ul>
      <p>
        Maximales Aroma liegt in einem engen, blend-spezifischen Feuchtefenster.
      </p>
    </div>

  </div>
</section>
  );
}
