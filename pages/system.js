import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

const COPY = {
  en: {
    kicker: "The Science Behind CPFS®",
    title: "A cigar is a dynamic biological and physical system.",
    lead:
      "Its behaviour is shaped by tobacco genetics, terroir, fermentation and processing, blend architecture, physical condition and combustion. The Cigar Peak-Flavor System® brings these variables into a structured framework for understanding how a cigar should be stored, settled, served and recommended.",

    evidenceEyebrow: "A Living Intelligence System",
    evidenceTitle: "The cigar is not one variable.",
    evidenceIntro:
      "CPFS goes beyond brand, country and generic strength. ICSI structures blend intelligence at leaf level, distinguishing wrapper, processing, binder, filler and specialist tobacco characteristics before environmental and service decisions are made.",
    stats: [
      { value: "2,400+", label: "Live blend records", note: "Maintained and updated monthly", hero: true },
      { value: "27+", label: "Wrapper classifications", note: "Named classifications plus hybrid / other" },
      { value: "30", label: "Filler classifications", note: "Origins, primings and specialist leaf" },
      { value: "34", label: "Special tobacco flags", note: "Regional, varietal, ageing and processing signals" },
      { value: "14", label: "Wrapper process classifications", note: "From natural and shade-grown to double-fermented and barrel-aged" },
    ],

    variablesEyebrow: "From Leaf to Behaviour",
    variablesTitle: "Six interacting layers shape the cigar.",
    variablesIntro:
      "CPFS treats these layers as connected rather than isolated. The objective is not to reduce a cigar to one descriptor, but to understand how its structure and condition interact.",
    variables: [
      { title: "Genetics & Origin", body: "Seed family and origin influence leaf thickness, oils, sugars, nicotine, aromatic precursors and combustion behaviour." },
      { title: "Cultivation & Terroir", body: "Soil, drainage, rainfall, sunlight, altitude and growing conditions modify how a given tobacco expresses itself." },
      { title: "Fermentation & Processing", body: "Fermentation, ageing, shade or sun exposure and wrapper processing can materially alter colour, chemistry, texture and sensory behaviour." },
      { title: "Blend Architecture", body: "Wrapper, binder and multiple filler components interact with ligero level, priming, proportions, vitola and construction." },
      { title: "Physical Condition", body: "Moisture distribution, temperature, storage history, transport shock and settling state affect readiness and burn behaviour." },
      { title: "Combustion & Sensory Expression", body: "The final experience emerges through combustion: aromatic volatility, smoke density, oils, sweetness, bitterness, spice, texture and finish." },
    ],

    beyondEyebrow: "Beyond Origin",
    beyondTitle: "Origin alone does not define tobacco behaviour.",
    beyondBody:
      "PredictorPro distinguishes specialist varietals, growing regions, primings and processing characteristics because apparently similar blends can behave differently under identical storage and serving conditions.",
    tobaccoExamples: [
      "Piloto Cubano", "Medio Tiempo", "Pelo de Oro", "Andullo", "Yamasá",
      "Mata Fina", "Arapiraca", "Ometepe", "Jalapa", "Vuelta Abajo",
      "Puriscal", "Talanga"
    ],

    processEyebrow: "Fermentation & Processing",
    processTitle: "Processing changes the material.",
    processBody:
      "CPFS does not treat wrapper colour as a complete description. The underlying dataset distinguishes processing states and production treatments that can change leaf behaviour and sensory expression.",
    processExamples: [
      "Natural", "Claro", "Colorado", "Colorado Claro", "Colorado Maduro",
      "Rosado", "Maduro", "Oscuro", "Corojo-processed", "Sun Grown",
      "Shade Grown", "Double Fermented", "Barrel Aged"
    ],

    peakEyebrow: "From Variables to Peak Flavor",
    peakTitle: "Different blends do not necessarily peak under identical conditions.",
    peakBody:
      "CPFS uses blend structure and product condition to establish a controlled pathway toward an appropriate peak-flavor window. The framework supports blend-specific storage, settling and serving decisions rather than assuming one humidity condition is optimal for every cigar.",
    peakSecond:
      "The proprietary coefficients and scoring logic remain within the CPFS engine; the operational output is translated into practical guidance for the sommelier, venue or collector.",
    furtherReadingLabel: "Further reading",
    furtherReadingTitle: "Ideal Cigar Humidity & Peak Flavor Timing",

    settlingEyebrow: "The Science of Settling",
    settlingTitle: "Settling is not simply resting a cigar.",
    settlingBody:
      "A stable humidor reading does not by itself establish that a cigar is ready for service. CPFS evaluates the cigar's transition toward a more stable internal and environmental state across multiple dimensions.",
    settling: [
      { title: "Axial moisture coherence", body: "Assess moisture consistency along the cigar rather than relying only on ambient RH." },
      { title: "Radial humidor equilibrium", body: "Consider movement toward equilibrium between the cigar and its surrounding storage environment." },
      { title: "Ammonia dissipation", body: "Account for post-production and ageing-related factors that may affect sensory readiness." },
      { title: "Humidor reconditioning", body: "Consider the starting condition and the time required after purchase, shipment or relocation." },
      { title: "Temperature-shock recovery", body: "Account for thermal disruption during transport or environmental change before release for service." },
    ],

    pairingEyebrow: "Pairing Science",
    pairingTitle: "Pairing is a structural decision, not a brand association.",
    pairingBody:
      "CPFS evaluates the relationship between the cigar's combustion and sensory profile and the structure of the beverage. PredictorPro then translates that framework into recommendations relevant to the selected cigar and, for professional venues, the beverages actually available.",
    pairing: [
      { title: "Intensity", body: "Match or deliberately contrast the weight and persistence of cigar and beverage." },
      { title: "Aromatic Structure", body: "Consider dominant and secondary aromatic families rather than relying on category alone." },
      { title: "Texture", body: "Account for smoke density, oils, tannin, acidity, sweetness, alcohol heat and mouthfeel." },
      { title: "Complement / Contrast", body: "Build pairings that either reinforce compatible characteristics or create a controlled counterpoint." },
    ],

    operationalEyebrow: "Science Made Operational",
    operationalTitle: "From 2,400+ blend records to a service decision.",
    operationalBody:
      "The live ICSI blend database is not simply a catalogue. Its structured blend data feeds PredictorPro so the scientific framework can be translated into usable outputs.",
    outputs: ["Peak-flavor conditions", "Settling readiness", "Tasting intelligence", "Similar-blend discovery", "Beverage pairing"],

    applicationsEyebrow: "From Science to Application",
    applicationsTitle: "One framework. Two professional pathways.",
    educationTitle: "Professional Education",
    educationBody:
      "CPFS principles are incorporated progressively across ICSI Levels I–IV, connecting tobacco knowledge, physical behaviour, service methodology and professional advisory.",
    educationCta: "Explore cigar sommelier courses",
    hospitalityTitle: "Hospitality Solutions",
    hospitalityBody:
      "For lounges, retailers and hospitality groups, ICSI implements CPFS across storage, settling, service, staff capability, inventory intelligence and PredictorPro.",
    hospitalityCta: "Explore CPFS for venues",

    seoTitle: "Cigar Science, Humidity, Settling & Peak Flavor | ICSI",
    seoDescription:
      "Explore the science behind ICSI's Cigar Peak-Flavor System®: 2,400+ live blend records, tobacco genetics, terroir, fermentation, blend architecture, humidity, settling, combustion and pairing."
  },

  fr: {
    kicker: "La science derrière CPFS®",
    title: "Un cigare est un système biologique et physique dynamique.",
    lead:
      "Son comportement est façonné par la génétique du tabac, le terroir, la fermentation et le traitement, l'architecture du blend, son état physique et la combustion. Le Cigar Peak-Flavor System® rassemble ces variables dans un cadre structuré afin de comprendre comment un cigare doit être conservé, stabilisé, servi et recommandé.",

    evidenceEyebrow: "Un système d'intelligence vivant",
    evidenceTitle: "Le cigare n'est pas une variable unique.",
    evidenceIntro:
      "CPFS va au-delà de la marque, du pays et de la force générique. ICSI structure l'intelligence du blend au niveau de la feuille, en distinguant wrapper, traitement, binder, filler et tabacs spécifiques avant toute décision de conservation ou de service.",
    stats: [
      { value: "2 400+", label: "Références de blends actives", note: "Maintenues et mises à jour chaque mois", hero: true },
      { value: "27+", label: "Classifications de wrapper", note: "Classifications nommées plus hybride / autre" },
      { value: "30", label: "Classifications de filler", note: "Origines, étages foliaires et feuilles spécifiques" },
      { value: "34", label: "Indicateurs de tabacs spéciaux", note: "Signaux régionaux, variétaux, vieillissement et traitement" },
      { value: "14", label: "Classifications de traitement wrapper", note: "Du naturel et shade-grown au double fermenté et barrel-aged" },
    ],

    variablesEyebrow: "De la feuille au comportement",
    variablesTitle: "Six couches interactives façonnent le cigare.",
    variablesIntro:
      "CPFS traite ces couches comme un ensemble connecté. L'objectif n'est pas de réduire le cigare à un seul descripteur, mais de comprendre l'interaction entre sa structure et son état.",
    variables: [
      { title: "Génétique & origine", body: "La famille de semences et l'origine influencent épaisseur, huiles, sucres, nicotine, précurseurs aromatiques et comportement de combustion." },
      { title: "Culture & terroir", body: "Sol, drainage, pluviométrie, soleil, altitude et conditions de culture modifient l'expression d'un tabac." },
      { title: "Fermentation & traitement", body: "Fermentation, vieillissement, exposition au soleil ou à l'ombre et traitement du wrapper peuvent modifier couleur, chimie, texture et expression sensorielle." },
      { title: "Architecture du blend", body: "Wrapper, binder et fillers interagissent avec le niveau de ligero, l'étage foliaire, les proportions, le vitola et la construction." },
      { title: "État physique", body: "Distribution d'humidité, température, historique de stockage, choc de transport et stabilisation influencent l'état de service et la combustion." },
      { title: "Combustion & expression sensorielle", body: "L'expérience finale émerge par la combustion : volatilité aromatique, densité de fumée, huiles, douceur, amertume, épices, texture et finale." },
    ],

    beyondEyebrow: "Au-delà de l'origine",
    beyondTitle: "L'origine seule ne définit pas le comportement du tabac.",
    beyondBody:
      "PredictorPro distingue variétés spécialisées, régions de culture, étages foliaires et caractéristiques de traitement, car des blends apparemment similaires peuvent se comporter différemment dans les mêmes conditions.",
    tobaccoExamples: ["Piloto Cubano", "Medio Tiempo", "Pelo de Oro", "Andullo", "Yamasá", "Mata Fina", "Arapiraca", "Ometepe", "Jalapa", "Vuelta Abajo", "Puriscal", "Talanga"],

    processEyebrow: "Fermentation & traitement",
    processTitle: "Le traitement transforme la matière.",
    processBody:
      "CPFS ne considère pas la couleur du wrapper comme une description complète. La base distingue des états de traitement et des méthodes de production susceptibles de modifier le comportement de la feuille et son expression sensorielle.",
    processExamples: ["Natural", "Claro", "Colorado", "Colorado Claro", "Colorado Maduro", "Rosado", "Maduro", "Oscuro", "Corojo-processed", "Sun Grown", "Shade Grown", "Double Fermented", "Barrel Aged"],

    peakEyebrow: "Des variables au Peak Flavor",
    peakTitle: "Tous les blends n'atteignent pas leur optimum dans les mêmes conditions.",
    peakBody:
      "CPFS utilise la structure du blend et l'état du produit pour établir un chemin contrôlé vers une fenêtre Peak-Flavor appropriée. Le cadre soutient des décisions spécifiques de conservation, stabilisation et service plutôt que de supposer qu'une seule humidité convient à tous les cigares.",
    peakSecond:
      "Les coefficients et la logique de scoring propriétaires restent au sein du moteur CPFS ; le résultat opérationnel est traduit en recommandations pratiques pour le sommelier, l'établissement ou le collectionneur.",
    furtherReadingLabel: "Lecture complémentaire",
    furtherReadingTitle: "Humidité idéale du cigare & timing du Peak Flavor",

    settlingEyebrow: "La science de la stabilisation",
    settlingTitle: "Stabiliser ne signifie pas simplement laisser reposer un cigare.",
    settlingBody:
      "Une lecture stable de l'humidor ne suffit pas à établir qu'un cigare est prêt au service. CPFS évalue sa transition vers un état interne et environnemental plus stable selon plusieurs dimensions.",
    settling: [
      { title: "Cohérence axiale de l'humidité", body: "Évaluer la cohérence de l'humidité le long du cigare plutôt que de se fier uniquement à l'HR ambiante." },
      { title: "Équilibre radial avec l'humidor", body: "Considérer la progression vers l'équilibre entre le cigare et son environnement de stockage." },
      { title: "Dissipation de l'ammoniac", body: "Intégrer les facteurs post-production et liés au vieillissement pouvant affecter la préparation sensorielle." },
      { title: "Reconditionnement en humidor", body: "Considérer l'état initial et le temps nécessaire après achat, expédition ou déplacement." },
      { title: "Récupération après choc thermique", body: "Intégrer les perturbations thermiques liées au transport ou aux changements d'environnement avant le service." },
    ],

    pairingEyebrow: "Science des accords",
    pairingTitle: "L'accord est une décision structurelle, pas une association de marques.",
    pairingBody:
      "CPFS évalue la relation entre le profil de combustion et sensoriel du cigare et la structure de la boisson. PredictorPro traduit ensuite ce cadre en recommandations adaptées au cigare sélectionné et, pour les établissements professionnels, aux boissons réellement disponibles.",
    pairing: [
      { title: "Intensité", body: "Accorder ou contraster volontairement le poids et la persistance du cigare et de la boisson." },
      { title: "Structure aromatique", body: "Considérer les familles aromatiques dominantes et secondaires plutôt que la seule catégorie." },
      { title: "Texture", body: "Intégrer densité de fumée, huiles, tanins, acidité, douceur, chaleur alcoolique et sensation en bouche." },
      { title: "Complément / contraste", body: "Construire des accords qui renforcent des caractéristiques compatibles ou créent un contrepoint contrôlé." },
    ],

    operationalEyebrow: "La science rendue opérationnelle",
    operationalTitle: "De 2 400+ références de blends à une décision de service.",
    operationalBody:
      "La base de données ICSI n'est pas un simple catalogue. Ses données structurées alimentent PredictorPro afin de transformer le cadre scientifique en résultats utilisables.",
    outputs: ["Conditions Peak-Flavor", "État de stabilisation", "Intelligence de dégustation", "Recherche de blends similaires", "Accords boissons"],

    applicationsEyebrow: "De la science à l'application",
    applicationsTitle: "Un cadre. Deux voies professionnelles.",
    educationTitle: "Formation professionnelle",
    educationBody:
      "Les principes CPFS sont intégrés progressivement aux niveaux I–IV d'ICSI, reliant connaissance du tabac, comportement physique, méthodologie de service et conseil professionnel.",
    educationCta: "Explorer les cours de sommelier cigare",
    hospitalityTitle: "Solutions Hospitality",
    hospitalityBody:
      "Pour lounges, détaillants et groupes hôteliers, ICSI implémente CPFS dans la conservation, la stabilisation, le service, les compétences des équipes, l'intelligence d'inventaire et PredictorPro.",
    hospitalityCta: "Explorer CPFS pour les établissements",

    seoTitle: "Science du cigare, humidité, stabilisation & Peak Flavor | ICSI",
    seoDescription:
      "Découvrez la science derrière le Cigar Peak-Flavor System® d'ICSI : 2 400+ blends actifs, génétique du tabac, terroir, fermentation, architecture du blend, humidité, stabilisation, combustion et accords."
  },

  de: {
    kicker: "Die Wissenschaft hinter CPFS®",
    title: "Eine Zigarre ist ein dynamisches biologisches und physikalisches System.",
    lead:
      "Ihr Verhalten wird durch Tabakgenetik, Terroir, Fermentation und Verarbeitung, Blend-Architektur, physischen Zustand und Verbrennung geprägt. Das Cigar Peak-Flavor System® führt diese Variablen in einem strukturierten Rahmen zusammen, um Lagerung, Stabilisierung, Service und Empfehlung präziser zu verstehen.",

    evidenceEyebrow: "Ein lebendes Intelligence-System",
    evidenceTitle: "Die Zigarre ist nicht nur eine Variable.",
    evidenceIntro:
      "CPFS geht über Marke, Land und allgemeine Stärke hinaus. ICSI strukturiert Blend Intelligence auf Blattebene und unterscheidet Wrapper, Verarbeitung, Binder, Filler und Spezialtabake, bevor Lager- und Serviceentscheidungen getroffen werden.",
    stats: [
      { value: "2.400+", label: "Aktive Blend-Datensätze", note: "Monatlich gepflegt und aktualisiert", hero: true },
      { value: "27+", label: "Wrapper-Klassifikationen", note: "Benannte Klassifikationen plus Hybrid / Other" },
      { value: "30", label: "Filler-Klassifikationen", note: "Herkünfte, Blattpositionen und Spezialtabake" },
      { value: "34", label: "Spezialtabak-Flags", note: "Regionale, varietale, Reifungs- und Verarbeitungssignale" },
      { value: "14", label: "Wrapper-Prozessklassifikationen", note: "Von Natural und Shade Grown bis Double Fermented und Barrel Aged" },
    ],

    variablesEyebrow: "Vom Blatt zum Verhalten",
    variablesTitle: "Sechs interagierende Ebenen prägen die Zigarre.",
    variablesIntro:
      "CPFS betrachtet diese Ebenen als verbundenes System. Ziel ist nicht, eine Zigarre auf einen Deskriptor zu reduzieren, sondern das Zusammenspiel von Struktur und Zustand zu verstehen.",
    variables: [
      { title: "Genetik & Herkunft", body: "Saatgutfamilie und Herkunft beeinflussen Blattdicke, Öle, Zucker, Nikotin, Aromavorstufen und Verbrennungsverhalten." },
      { title: "Anbau & Terroir", body: "Boden, Drainage, Niederschlag, Sonne, Höhenlage und Wachstumsbedingungen verändern die Ausprägung eines Tabaks." },
      { title: "Fermentation & Verarbeitung", body: "Fermentation, Reifung, Sonnen- oder Schattenanbau und Wrapper-Verarbeitung können Farbe, Chemie, Textur und sensorisches Verhalten verändern." },
      { title: "Blend-Architektur", body: "Wrapper, Binder und mehrere Filler-Komponenten interagieren mit Ligero-Anteil, Blattposition, Proportionen, Vitola und Konstruktion." },
      { title: "Physischer Zustand", body: "Feuchtigkeitsverteilung, Temperatur, Lagerhistorie, Transportschock und Stabilisierungszustand beeinflussen Servicereife und Abbrand." },
      { title: "Verbrennung & Sensorik", body: "Das finale Erlebnis entsteht durch Verbrennung: Aromaflüchtigkeit, Rauchdichte, Öle, Süße, Bitterkeit, Würze, Textur und Finish." },
    ],

    beyondEyebrow: "Jenseits der Herkunft",
    beyondTitle: "Herkunft allein definiert das Verhalten eines Tabaks nicht.",
    beyondBody:
      "PredictorPro unterscheidet Spezialvarietäten, Anbauregionen, Blattpositionen und Verarbeitungseigenschaften, weil scheinbar ähnliche Blends unter identischen Lager- und Servicebedingungen unterschiedlich reagieren können.",
    tobaccoExamples: ["Piloto Cubano", "Medio Tiempo", "Pelo de Oro", "Andullo", "Yamasá", "Mata Fina", "Arapiraca", "Ometepe", "Jalapa", "Vuelta Abajo", "Puriscal", "Talanga"],

    processEyebrow: "Fermentation & Verarbeitung",
    processTitle: "Verarbeitung verändert das Material.",
    processBody:
      "CPFS behandelt die Wrapper-Farbe nicht als vollständige Beschreibung. Der Datensatz unterscheidet Verarbeitungszustände und Produktionsbehandlungen, die Blattverhalten und sensorische Ausprägung verändern können.",
    processExamples: ["Natural", "Claro", "Colorado", "Colorado Claro", "Colorado Maduro", "Rosado", "Maduro", "Oscuro", "Corojo-processed", "Sun Grown", "Shade Grown", "Double Fermented", "Barrel Aged"],

    peakEyebrow: "Von Variablen zu Peak Flavor",
    peakTitle: "Unterschiedliche Blends erreichen ihr Optimum nicht zwingend unter identischen Bedingungen.",
    peakBody:
      "CPFS nutzt Blend-Struktur und Produktzustand, um einen kontrollierten Weg zu einem geeigneten Peak-Flavor-Fenster zu bestimmen. Der Rahmen unterstützt blendspezifische Lager-, Stabilisierungs- und Serviceentscheidungen statt einer einzigen Feuchtigkeit für jede Zigarre.",
    peakSecond:
      "Die proprietären Koeffizienten und Scoring-Logiken verbleiben im CPFS Engine; das operative Ergebnis wird in praktische Empfehlungen für Sommelier, Betrieb oder Sammler übersetzt.",
    furtherReadingLabel: "Weiterführende Lektüre",
    furtherReadingTitle: "Ideale Zigarrenfeuchtigkeit & Peak-Flavor Timing",

    settlingEyebrow: "Die Wissenschaft der Stabilisierung",
    settlingTitle: "Stabilisierung ist mehr als eine Zigarre ruhen zu lassen.",
    settlingBody:
      "Ein stabiler Humidorwert allein belegt nicht, dass eine Zigarre servicereif ist. CPFS bewertet den Übergang zu einem stabileren internen und umgebungsbezogenen Zustand über mehrere Dimensionen.",
    settling: [
      { title: "Axiale Feuchtigkeitskohärenz", body: "Bewertung der Feuchtigkeitskonsistenz entlang der Zigarre statt allein der Umgebungs-RH." },
      { title: "Radiales Humidor-Gleichgewicht", body: "Berücksichtigung der Annäherung an das Gleichgewicht zwischen Zigarre und Lagerumgebung." },
      { title: "Ammoniakabbau", body: "Berücksichtigung von Postproduktions- und Reifungsfaktoren, die die sensorische Reife beeinflussen können." },
      { title: "Humidor-Rekonditionierung", body: "Berücksichtigung des Ausgangszustands und der erforderlichen Zeit nach Kauf, Versand oder Umlagerung." },
      { title: "Erholung nach Temperaturschock", body: "Berücksichtigung thermischer Störungen durch Transport oder Umgebungswechsel vor der Servicefreigabe." },
    ],

    pairingEyebrow: "Pairing-Wissenschaft",
    pairingTitle: "Pairing ist eine strukturelle Entscheidung, keine Markenassoziation.",
    pairingBody:
      "CPFS bewertet die Beziehung zwischen Verbrennungs- und Sensorikprofil der Zigarre und der Struktur des Getränks. PredictorPro übersetzt diesen Rahmen in Empfehlungen für die ausgewählte Zigarre und bei professionellen Betrieben für tatsächlich verfügbare Getränke.",
    pairing: [
      { title: "Intensität", body: "Gewicht und Persistenz von Zigarre und Getränk gezielt angleichen oder kontrastieren." },
      { title: "Aromatische Struktur", body: "Dominante und sekundäre Aromafamilien statt nur die Getränkekategorie berücksichtigen." },
      { title: "Textur", body: "Rauchdichte, Öle, Tannin, Säure, Süße, Alkoholwärme und Mundgefühl berücksichtigen." },
      { title: "Komplement / Kontrast", body: "Pairings schaffen, die kompatible Eigenschaften verstärken oder einen kontrollierten Gegenpol bilden." },
    ],

    operationalEyebrow: "Wissenschaft operativ umgesetzt",
    operationalTitle: "Von 2.400+ Blend-Datensätzen zur Serviceentscheidung.",
    operationalBody:
      "Die aktive ICSI Blend-Datenbank ist nicht nur ein Katalog. Ihre strukturierten Daten speisen PredictorPro und übersetzen den wissenschaftlichen Rahmen in nutzbare Ergebnisse.",
    outputs: ["Peak-Flavor-Bedingungen", "Stabilisierungsreife", "Tasting Intelligence", "Similar-Blend-Suche", "Getränke-Pairing"],

    applicationsEyebrow: "Von Wissenschaft zu Anwendung",
    applicationsTitle: "Ein Rahmen. Zwei professionelle Wege.",
    educationTitle: "Professionelle Ausbildung",
    educationBody:
      "CPFS-Prinzipien werden schrittweise in ICSI Level I–IV integriert und verbinden Tabakwissen, physisches Verhalten, Servicemethodik und professionelle Beratung.",
    educationCta: "Zigarren-Sommelier-Kurse entdecken",
    hospitalityTitle: "Hospitality Solutions",
    hospitalityBody:
      "Für Lounges, Händler und Hospitality-Gruppen implementiert ICSI CPFS über Lagerung, Stabilisierung, Service, Mitarbeiterkompetenz, Inventory Intelligence und PredictorPro.",
    hospitalityCta: "CPFS für Betriebe entdecken",

    seoTitle: "Zigarrenwissenschaft, Feuchtigkeit, Stabilisierung & Peak Flavor | ICSI",
    seoDescription:
      "Die Wissenschaft hinter ICSI's Cigar Peak-Flavor System®: 2.400+ aktive Blends, Tabakgenetik, Terroir, Fermentation, Blend-Architektur, Feuchtigkeit, Stabilisierung, Verbrennung und Pairing."
  }
};

function ScienceIcon({ index }) {
  const p = {
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
  };
  const s = {
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = [
    <svg key="genetics" {...p}><path {...s} d="M18 52c16-13 20-28 28-40"/><path {...s} d="M24 44c-8 0-12-5-13-12 8-1 14 2 17 7"/><path {...s} d="M34 31c8 0 14-5 17-13-9-2-16 1-20 8"/><path {...s} d="M28 40c3 4 5 8 6 12"/></svg>,
    <svg key="terroir" {...p}><path {...s} d="M8 45h48"/><path {...s} d="M12 45l14-22 8 11 7-9 11 20"/><path {...s} d="M18 49c4 4 8 4 12 0 4 4 8 4 12 0 4 4 8 4 12 0"/></svg>,
    <svg key="process" {...p}><path {...s} d="M18 48h28"/><path {...s} d="M22 48V25h20v23"/><path {...s} d="M26 25c0-6 3-10 6-14 3 4 6 8 6 14"/><path {...s} d="M28 34h8M28 40h8"/></svg>,
    <svg key="blend" {...p}><path {...s} d="M12 20h40M12 32h40M12 44h40"/><circle {...s} cx="22" cy="20" r="4"/><circle {...s} cx="39" cy="32" r="4"/><circle {...s} cx="29" cy="44" r="4"/></svg>,
    <svg key="condition" {...p}><path {...s} d="M24 14v25a10 10 0 1 0 16 0V14a8 8 0 0 0-16 0z"/><path {...s} d="M32 20v24"/><path {...s} d="M44 20h8M44 28h5M44 36h8"/></svg>,
    <svg key="combustion" {...p}><path {...s} d="M32 54c-10-5-15-13-11-22 2-5 6-8 9-14 1 7 6 9 7 15 2-4 4-7 4-12 8 8 9 17 4 24-3 5-7 7-13 9z"/><path {...s} d="M32 48c-4-3-5-7-3-11 1-2 3-4 4-7 1 4 4 6 4 10 0 4-2 6-5 8z"/></svg>,
  ];

  return <div className="scienceIcon">{icons[index] || icons[0]}</div>;
}

export default function System() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();
  const c = COPY[lang] || COPY.en;

  return (
    <Layout>
      <Seo title={c.seoTitle} description={c.seoDescription} path="/system" />

      <main className="sciencePage">
        <section className="scienceHero">
          <div className="container scienceHeroInner">
            <span className="eyebrow">{c.kicker}</span>
            <h1>{c.title}</h1>
            <p>{c.lead}</p>
          </div>
        </section>

        <section className="section evidenceSection">
          <div className="container">
            <div className="sectionIntro">
              <span className="eyebrow">{c.evidenceEyebrow}</span>
              <h2>{c.evidenceTitle}</h2>
              <p>{c.evidenceIntro}</p>
            </div>

            <div className="statsGrid">
              {c.stats.map((stat) => (
                <article
                  key={stat.label}
                  className={`statCard ${stat.hero ? "statHero" : ""}`}
                >
                  <div className="statValue">{stat.value}</div>
                  <div className="statLabel">{stat.label}</div>
                  <div className="statNote">{stat.note}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section variablesSection">
          <div className="container">
            <div className="sectionIntro">
              <span className="eyebrow">{c.variablesEyebrow}</span>
              <h2>{c.variablesTitle}</h2>
              <p>{c.variablesIntro}</p>
            </div>

            <div className="variablesGrid">
              {c.variables.map((item, index) => (
                <article className="variableCard" key={item.title}>
                  <span className="cardNum">0{index + 1}</span>
                  <ScienceIcon index={index} />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section darkSection">
          <div className="container splitSection">
            <div>
              <span className="eyebrow gold">{c.beyondEyebrow}</span>
              <h2>{c.beyondTitle}</h2>
              <p className="darkLead">{c.beyondBody}</p>
            </div>
            <div className="tagCloud">
              {c.tobaccoExamples.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section processSection">
          <div className="container splitSection">
            <div>
              <span className="eyebrow">{c.processEyebrow}</span>
              <h2>{c.processTitle}</h2>
              <p>{c.processBody}</p>
            </div>
            <div className="processList">
              {c.processExamples.map((item, index) => (
                <div key={item} className="processItem">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section peakSection">
          <div className="container peakInner">
            <span className="eyebrow gold">{c.peakEyebrow}</span>
            <h2>{c.peakTitle}</h2>
            <div className="peakCopy">
              <p>{c.peakBody}</p>
              <p>{c.peakSecond}</p>
            </div>
            <Link className="textLink light" href="/ideal-cigar-humidity" locale={lang}>
              {c.furtherReadingLabel}: {c.furtherReadingTitle} →
            </Link>
          </div>
        </section>

        <section className="section settlingSection">
          <div className="container">
            <div className="sectionIntro">
              <span className="eyebrow">{c.settlingEyebrow}</span>
              <h2>{c.settlingTitle}</h2>
              <p>{c.settlingBody}</p>
            </div>
            <div className="settlingFlow">
              {c.settling.map((item, index) => (
                <article key={item.title} className="settlingCard">
                  <span className="cardNum">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section pairingSection">
          <div className="container">
            <div className="sectionIntro">
              <span className="eyebrow">{c.pairingEyebrow}</span>
              <h2>{c.pairingTitle}</h2>
              <p>{c.pairingBody}</p>
            </div>
            <div className="pairingGrid">
              {c.pairing.map((item, index) => (
                <article key={item.title}>
                  <span className="cardNum">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section operationalSection">
          <div className="container operationalInner">
            <div className="operationalCopy">
              <span className="eyebrow gold">{c.operationalEyebrow}</span>
              <h2>{c.operationalTitle}</h2>
              <p>{c.operationalBody}</p>
            </div>
            <div className="outputFlow">
              <div className="databaseNode">
                <strong>2,400+</strong>
                <span>ICSI BLEND DATABASE</span>
              </div>
              <div className="flowArrow">→</div>
              <div className="engineNode">CPFS®</div>
              <div className="flowArrow">→</div>
              <div className="outputsList">
                {c.outputs.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section applicationsSection">
          <div className="container">
            <div className="sectionIntro">
              <span className="eyebrow">{c.applicationsEyebrow}</span>
              <h2>{c.applicationsTitle}</h2>
            </div>

            <div className="applicationsGrid">
              <article className="applicationCard">
                <span className="applicationNum">01</span>
                <h3>{c.educationTitle}</h3>
                <p>{c.educationBody}</p>
                <Link href="/courses" locale={lang}>{c.educationCta} →</Link>
              </article>

              <article className="applicationCard">
                <span className="applicationNum">02</span>
                <h3>{c.hospitalityTitle}</h3>
                <p>{c.hospitalityBody}</p>
                <Link href="/cpfs-implementation" locale={lang}>{c.hospitalityCta} →</Link>
              </article>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .sciencePage {
          --ivory: #faf4e8;
          --ink: #16161f;
          --crimson: #c0242f;
          --bordeaux: #601818;
          --gold: #c8a24a;
          --light-gold: #e4cb8e;
          color: var(--ink);
          background: var(--ivory);
        }

        .scienceHero {
          background: var(--ivory);
          border-bottom: 1px solid rgba(22,22,31,.12);
        }

        .scienceHeroInner {
          padding-top: 88px;
          padding-bottom: 96px;
          max-width: 1180px;
        }

        .eyebrow {
          display: block;
          margin-bottom: 20px;
          color: var(--crimson);
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          font-size: .68rem;
          font-weight: 700;
          letter-spacing: .2em;
          text-transform: uppercase;
        }

        .eyebrow.gold { color: var(--light-gold); }

        .scienceHero h1,
        .section h2,
        .section h3 {
          font-family: "Playfair Display", Georgia, serif;
        }

        .scienceHero h1 {
          max-width: 980px;
          margin: 0;
          font-size: clamp(3rem, 5.5vw, 5.8rem);
          line-height: .98;
          letter-spacing: -.035em;
          font-weight: 500;
        }

        .scienceHero p {
          max-width: 850px;
          margin: 38px 0 0;
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          font-size: clamp(1.05rem, 1.45vw, 1.3rem);
          line-height: 1.75;
          color: rgba(22,22,31,.72);
        }

        .section { padding: 92px 0; }

        .sectionIntro {
          max-width: 850px;
          margin-bottom: 52px;
        }

        .sectionIntro h2,
        .splitSection h2,
        .peakInner h2,
        .operationalCopy h2 {
          margin: 0 0 24px;
          font-size: clamp(2.25rem, 4vw, 4rem);
          line-height: 1.04;
          letter-spacing: -.025em;
          font-weight: 500;
        }

        .sectionIntro p,
        .splitSection p,
        .peakCopy p,
        .operationalCopy p {
          margin: 0;
          max-width: 72ch;
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          font-size: 1rem;
          line-height: 1.78;
          color: rgba(22,22,31,.7);
        }

        .statsGrid {
          display: grid;
          grid-template-columns: 1.45fr repeat(4, 1fr);
          border-top: 1px solid rgba(22,22,31,.15);
          border-bottom: 1px solid rgba(22,22,31,.15);
        }

        .statCard {
          min-height: 220px;
          padding: 32px 24px;
          border-right: 1px solid rgba(22,22,31,.12);
        }

        .statCard:last-child { border-right: 0; }

        .statHero { background: var(--bordeaux); color: var(--ivory); }

        .statValue {
          margin-bottom: 22px;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(2.8rem, 4.3vw, 5rem);
          line-height: 1;
          color: var(--gold);
        }

        .statHero .statValue {
          font-size: clamp(4rem, 6vw, 6.6rem);
          color: var(--light-gold);
        }

        .statLabel {
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          font-size: .68rem;
          line-height: 1.45;
          font-weight: 700;
          letter-spacing: .14em;
          text-transform: uppercase;
        }

        .statNote {
          margin-top: 12px;
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          font-size: .78rem;
          line-height: 1.55;
          color: rgba(22,22,31,.55);
        }

        .statHero .statNote { color: rgba(250,244,232,.7); }

        .variablesSection { background: #fffaf0; }

        .variablesGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(22,22,31,.14);
          border-left: 1px solid rgba(22,22,31,.14);
        }

        .variableCard {
          min-height: 330px;
          padding: 34px;
          border-right: 1px solid rgba(22,22,31,.14);
          border-bottom: 1px solid rgba(22,22,31,.14);
        }

        .cardNum,
        .applicationNum {
          display: block;
          margin-bottom: 22px;
          color: var(--crimson);
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          font-size: .64rem;
          font-weight: 700;
          letter-spacing: .18em;
        }

        .scienceIcon {
          width: 54px;
          height: 54px;
          margin-bottom: 24px;
          color: var(--gold);
        }

        .scienceIcon svg { width: 100%; height: 100%; display: block; }

        .variableCard h3,
        .settlingCard h3,
        .pairingGrid h3,
        .applicationCard h3 {
          margin: 0 0 14px;
          font-size: 1.55rem;
          line-height: 1.15;
          font-weight: 500;
        }

        .variableCard p,
        .settlingCard p,
        .pairingGrid p,
        .applicationCard p {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          font-size: .9rem;
          line-height: 1.7;
          color: rgba(22,22,31,.65);
        }

        .darkSection {
          background: var(--ink);
          color: var(--ivory);
        }

        .splitSection {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 90px;
          align-items: start;
        }

        .darkSection .darkLead { color: rgba(250,244,232,.68); }

        .tagCloud {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tagCloud span {
          padding: 13px 16px;
          border: 1px solid rgba(228,203,142,.35);
          color: var(--light-gold);
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          font-size: .75rem;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .processSection { background: var(--ivory); }

        .processList {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border-top: 1px solid rgba(22,22,31,.13);
          border-left: 1px solid rgba(22,22,31,.13);
        }

        .processItem {
          display: flex;
          gap: 16px;
          align-items: baseline;
          padding: 17px 18px;
          border-right: 1px solid rgba(22,22,31,.13);
          border-bottom: 1px solid rgba(22,22,31,.13);
        }

        .processItem span {
          color: var(--crimson);
          font: 700 .62rem/1 Inter, sans-serif;
          letter-spacing: .14em;
        }

        .processItem strong {
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          font-size: .82rem;
          font-weight: 500;
        }

        .peakSection {
          background: var(--bordeaux);
          color: var(--ivory);
        }

        .peakInner { max-width: 1100px; }

        .peakCopy {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 54px;
          margin-top: 38px;
        }

        .peakCopy p { color: rgba(250,244,232,.76); }

        .textLink {
          display: inline-block;
          margin-top: 38px;
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          font-size: .75rem;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
          text-decoration: none;
        }

        .textLink.light { color: var(--light-gold); }

        .settlingFlow {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          border-top: 1px solid rgba(22,22,31,.14);
          border-left: 1px solid rgba(22,22,31,.14);
        }

        .settlingCard {
          min-height: 285px;
          padding: 28px 24px;
          border-right: 1px solid rgba(22,22,31,.14);
          border-bottom: 1px solid rgba(22,22,31,.14);
        }

        .settlingCard h3 { font-size: 1.3rem; }

        .pairingSection { background: #fffaf0; }

        .pairingGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(22,22,31,.14);
          border-left: 1px solid rgba(22,22,31,.14);
        }

        .pairingGrid article {
          min-height: 250px;
          padding: 30px;
          border-right: 1px solid rgba(22,22,31,.14);
          border-bottom: 1px solid rgba(22,22,31,.14);
        }

        .operationalSection {
          background: var(--ink);
          color: var(--ivory);
        }

        .operationalInner {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 80px;
          align-items: center;
        }

        .operationalCopy p { color: rgba(250,244,232,.68); }

        .outputFlow {
          display: grid;
          grid-template-columns: 1fr auto .65fr auto 1.3fr;
          gap: 18px;
          align-items: center;
        }

        .databaseNode,
        .engineNode {
          border: 1px solid rgba(228,203,142,.35);
          min-height: 150px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
        }

        .databaseNode strong {
          color: var(--light-gold);
          font-family: "Playfair Display", Georgia, serif;
          font-size: 3rem;
          font-weight: 500;
        }

        .databaseNode span,
        .engineNode {
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          font-size: .65rem;
          font-weight: 700;
          letter-spacing: .15em;
        }

        .engineNode {
          color: var(--light-gold);
          font-size: 1rem;
        }

        .flowArrow { color: var(--gold); font-size: 1.6rem; }

        .outputsList {
          display: flex;
          flex-direction: column;
          border-top: 1px solid rgba(250,244,232,.14);
        }

        .outputsList span {
          padding: 11px 0;
          border-bottom: 1px solid rgba(250,244,232,.14);
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          font-size: .78rem;
          color: rgba(250,244,232,.78);
        }

        .applicationsGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .applicationCard {
          padding: 38px;
          border: 1px solid rgba(22,22,31,.14);
          min-height: 300px;
          display: flex;
          flex-direction: column;
        }

        .applicationCard p { max-width: 58ch; }

        .applicationCard a {
          margin-top: auto;
          padding-top: 34px;
          color: var(--bordeaux);
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          font-size: .72rem;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
          text-decoration: none;
        }

        @media (max-width: 1050px) {
          .statsGrid { grid-template-columns: repeat(2, 1fr); }
          .statHero { grid-column: span 2; }
          .variablesGrid { grid-template-columns: repeat(2, 1fr); }
          .settlingFlow { grid-template-columns: repeat(2, 1fr); }
          .pairingGrid { grid-template-columns: repeat(2, 1fr); }
          .operationalInner { grid-template-columns: 1fr; }
        }

        @media (max-width: 760px) {
          .scienceHeroInner { padding-top: 62px; padding-bottom: 68px; }
          .section { padding: 68px 0; }
          .scienceHero h1 { font-size: clamp(2.7rem, 12vw, 4.2rem); }
          .splitSection,
          .peakCopy,
          .applicationsGrid { grid-template-columns: 1fr; gap: 38px; }
          .variablesGrid,
          .settlingFlow,
          .pairingGrid { grid-template-columns: 1fr; }
          .outputFlow {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .flowArrow { transform: rotate(90deg); }
        }

        @media (max-width: 520px) {
          .statsGrid { grid-template-columns: 1fr; }
          .statHero { grid-column: auto; }
          .statCard { min-height: 180px; border-right: 0; border-bottom: 1px solid rgba(22,22,31,.12); }
          .processList { grid-template-columns: 1fr; }
          .variableCard { min-height: auto; }
        }
      `}</style>
    </Layout>
  );
}
