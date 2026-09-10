import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

const copy = {
  en: {
    kicker: "Hospitality Solutions",
    title: "A state-of-the-art operating standard for cigar hospitality.",
    intro:
      "Training, technology and technical implementation designed to help venues store, settle, serve and recommend cigars with greater precision and consistency.",
    heroCta: "Request a CPFS assessment",

    changesEyebrow: "What CPFS Changes",
    changesTitle: "From storage conditions to service decisions",
    changesIntro:
      "CPFS connects the physical environment, cigar condition, staff capability and digital intelligence into one operating system for cigar hospitality.",
    changes: [
      {
        title: "Store",
        body: "Move beyond one-condition-fits-all storage by aligning inventory with blend-specific humidity requirements and operational storage zones.",
      },
      {
        title: "Settle",
        body: "Understand when incoming or relocated stock has equalised sufficiently to be released for service.",
      },
      {
        title: "Serve",
        body: "Establish repeatable preparation and serving conditions that reflect blend characteristics and product condition.",
      },
      {
        title: "Recommend",
        body: "Give staff structured intelligence behind recommendations, rather than relying only on individual memory or experience.",
      },
      {
        title: "Cross-sell",
        body: "Identify structurally similar cigars already available in the venue inventory when a guest wants an alternative.",
      },
      {
        title: "Upsell",
        body: "Support beverage recommendations through structured pairing logic linked to the cigar and the venue's available selection.",
      },
    ],

    journeyEyebrow: "Implementation Journey",
    journeyTitle: "A controlled implementation, not a software installation",
    journeyIntro:
      "ICSI implements CPFS as an operating model across the venue. The work starts with the physical environment and inventory, then integrates staff capability, service procedures and PredictorPro.",
    journey: [
      {
        title: "Venue assessment",
        body: "Assess inventory, humidor architecture, temperature and RH control, airflow, sensors, current service workflow and existing operating practices.",
      },
      {
        title: "Blend mapping",
        body: "Map the active venue inventory against ICSI blend intelligence, classify references and identify products requiring individual verification.",
      },
      {
        title: "CPFS calibration",
        body: "Establish storage zones, target conditions, transition rules, settling periods, service-readiness criteria and monitoring thresholds.",
      },
      {
        title: "Team certification",
        body: "Train relevant staff in humidity and moisture behaviour, diagnostics, settling, storage allocation, service methodology and applied advisory.",
      },
      {
        title: "PredictorPro deployment",
        body: "Configure the venue account, upload inventory, activate venue-specific availability, recommendations, pairing and similar-blend intelligence.",
      },
      {
        title: "Ongoing optimisation",
        body: "Maintain standards through monitoring, inventory updates, staff compliance, product reassessment, performance review and periodic recalibration.",
      },
    ],
    journeyCta: "Discuss CPFS implementation",

    proofEyebrow: "One Controlled System",
    proofTitle: "Physical environment. Inventory. People. Technology. Service.",
    proofBody:
      "A CPFS implementation is only complete when the venue's physical environment, inventory classification, product condition, staff capability, digital system and service process are operating together as one controlled system.",

    formEyebrow: "CPFS Assessment",
    formTitle: "Discuss your venue",
    formIntro:
      "Tell us who you are and which venue or group you represent. ICSI will contact you to discuss your current environment and the most relevant CPFS implementation pathway.",
    firstName: "First name",
    familyName: "Family name",
    email: "Email",
    venueName: "Venue / group name",
    submit: "Request assessment",
    privacy:
      "By submitting this form, you agree that ICSI may contact you regarding CPFS implementation and related professional solutions.",
    successEyebrow: "Thank You",
    successTitle: "Your assessment request has been received",
    successText:
      "Thank you for your interest in CPFS. Our team will contact you to discuss your venue, current operating environment and the most relevant implementation pathway.",

    seoTitle:
      "CPFS Hospitality Solutions for Cigar Lounges & Venues | ICSI",
    seoDescription:
      "Explore CPFS implementation for cigar lounges, retailers and hospitality groups: venue assessment, blend mapping, storage and settling standards, staff training and PredictorPro deployment.",
  },

  fr: {
    kicker: "Solutions Hospitality",
    title: "Un standard opérationnel de pointe pour l’hospitalité cigare.",
    intro:
      "Formation, technologie et implémentation technique conçues pour aider les établissements à conserver, stabiliser, servir et recommander les cigares avec davantage de précision et de constance.",
    heroCta: "Demander une évaluation CPFS",

    changesEyebrow: "Ce que CPFS transforme",
    changesTitle: "Des conditions de conservation aux décisions de service",
    changesIntro:
      "CPFS relie l’environnement physique, l’état des cigares, les compétences de l’équipe et l’intelligence digitale dans un même système opérationnel pour l’hospitalité cigare.",
    changes: [
      {
        title: "Conserver",
        body: "Dépasser l’approche d’une condition unique pour tous les cigares en alignant l’inventaire sur les besoins d’humidité des blends et les zones de conservation.",
      },
      {
        title: "Stabiliser",
        body: "Comprendre quand les stocks entrants ou déplacés sont suffisamment équilibrés pour être remis en service.",
      },
      {
        title: "Servir",
        body: "Établir des standards reproductibles de préparation et de service tenant compte des caractéristiques du blend et de l’état du produit.",
      },
      {
        title: "Recommander",
        body: "Donner aux équipes une intelligence structurée derrière chaque recommandation, au-delà de la seule mémoire ou expérience individuelle.",
      },
      {
        title: "Cross-sell",
        body: "Identifier dans l’inventaire de l’établissement des cigares structurellement similaires lorsqu’un client souhaite une alternative.",
      },
      {
        title: "Upsell",
        body: "Soutenir les recommandations de boissons grâce à une logique d’accord structurée liée au cigare et à la sélection disponible dans l’établissement.",
      },
    ],

    journeyEyebrow: "Parcours d’implémentation",
    journeyTitle: "Une implémentation contrôlée, pas une simple installation logicielle",
    journeyIntro:
      "ICSI déploie CPFS comme un modèle opérationnel à l’échelle de l’établissement. Le travail commence par l’environnement physique et l’inventaire, puis intègre les compétences de l’équipe, les procédures de service et PredictorPro.",
    journey: [
      {
        title: "Évaluation de l’établissement",
        body: "Évaluer l’inventaire, l’architecture des humidors, le contrôle température/RH, le flux d’air, les capteurs, le parcours de service et les pratiques existantes.",
      },
      {
        title: "Cartographie des blends",
        body: "Mapper l’inventaire actif avec l’intelligence ICSI, classifier les références et identifier les produits nécessitant une vérification individuelle.",
      },
      {
        title: "Calibration CPFS",
        body: "Définir les zones de conservation, conditions cibles, règles de transition, périodes de stabilisation, critères de disponibilité au service et seuils de surveillance.",
      },
      {
        title: "Certification des équipes",
        body: "Former les collaborateurs concernés à l’humidité, au comportement du produit, au diagnostic, à la stabilisation, à l’allocation de stockage, au service et au conseil.",
      },
      {
        title: "Déploiement PredictorPro",
        body: "Configurer le compte de l’établissement, charger l’inventaire et activer disponibilité locale, recommandations, accords et intelligence de blends similaires.",
      },
      {
        title: "Optimisation continue",
        body: "Maintenir les standards par le suivi, les mises à jour d’inventaire, le contrôle des pratiques, la réévaluation produit, les revues de performance et le recalibrage.",
      },
    ],
    journeyCta: "Discuter de l’implémentation CPFS",

    proofEyebrow: "Un système contrôlé",
    proofTitle: "Environnement. Inventaire. Équipe. Technologie. Service.",
    proofBody:
      "Une implémentation CPFS n’est complète que lorsque l’environnement physique, la classification de l’inventaire, l’état des produits, les compétences de l’équipe, le système digital et le processus de service fonctionnent ensemble comme un système contrôlé.",

    formEyebrow: "Évaluation CPFS",
    formTitle: "Parlons de votre établissement",
    formIntro:
      "Indiquez-nous qui vous êtes et quel établissement ou groupe vous représentez. ICSI vous contactera afin d’échanger sur votre environnement actuel et le parcours d’implémentation CPFS le plus pertinent.",
    firstName: "Prénom",
    familyName: "Nom de famille",
    email: "Email",
    venueName: "Nom de l’établissement / groupe",
    submit: "Demander une évaluation",
    privacy:
      "En soumettant ce formulaire, vous acceptez qu’ICSI vous contacte au sujet de l’implémentation CPFS et des solutions professionnelles associées.",
    successEyebrow: "Merci",
    successTitle: "Votre demande d’évaluation a bien été reçue",
    successText:
      "Merci pour votre intérêt envers CPFS. Notre équipe vous contactera afin d’échanger sur votre établissement, votre environnement actuel et le parcours d’implémentation le plus adapté.",

    seoTitle:
      "Solutions CPFS pour lounges & établissements hospitality | ICSI",
    seoDescription:
      "Découvrez l’implémentation CPFS pour lounges, détaillants et groupes hospitality : diagnostic, cartographie des blends, standards de conservation et de stabilisation, formation et PredictorPro.",
  },

  de: {
    kicker: "Hospitality-Lösungen",
    title: "Ein hochmoderner Betriebsstandard für Zigarren-Hospitality.",
    intro:
      "Training, Technologie und technische Implementierung, damit Betriebe Zigarren präziser und konsistenter lagern, stabilisieren, servieren und empfehlen können.",
    heroCta: "CPFS-Bewertung anfragen",

    changesEyebrow: "Was CPFS verändert",
    changesTitle: "Von Lagerbedingungen bis zu Serviceentscheidungen",
    changesIntro:
      "CPFS verbindet physische Umgebung, Zigarrenzustand, Mitarbeiterkompetenz und digitale Intelligenz zu einem Betriebssystem für Zigarren-Hospitality.",
    changes: [
      {
        title: "Lagern",
        body: "Verlassen Sie den Einheitsansatz und richten Sie das Inventar an blendspezifischen Feuchtigkeitsanforderungen und operativen Lagerzonen aus.",
      },
      {
        title: "Stabilisieren",
        body: "Erkennen Sie, wann neu eingegangene oder verlagerte Bestände ausreichend ausgeglichen und für den Service freigegeben sind.",
      },
      {
        title: "Servieren",
        body: "Definieren Sie wiederholbare Vorbereitungs- und Servicebedingungen, die Blend-Eigenschaften und Produktzustand berücksichtigen.",
      },
      {
        title: "Empfehlen",
        body: "Geben Sie Mitarbeitern strukturierte Entscheidungsintelligenz, statt Empfehlungen ausschließlich auf individuelle Erinnerung oder Erfahrung zu stützen.",
      },
      {
        title: "Cross-Sell",
        body: "Finden Sie strukturell ähnliche Zigarren im vorhandenen Inventar, wenn ein Gast eine Alternative sucht.",
      },
      {
        title: "Upsell",
        body: "Unterstützen Sie Getränkeempfehlungen mit strukturierter Pairing-Logik auf Basis der Zigarre und der verfügbaren Auswahl des Betriebs.",
      },
    ],

    journeyEyebrow: "Implementierungsweg",
    journeyTitle: "Eine kontrollierte Implementierung, keine Softwareinstallation",
    journeyIntro:
      "ICSI implementiert CPFS als Betriebsmodell für den gesamten Betrieb. Die Arbeit beginnt mit physischer Umgebung und Inventar und integriert anschließend Mitarbeiterkompetenz, Serviceprozesse und PredictorPro.",
    journey: [
      {
        title: "Betriebsanalyse",
        body: "Analyse von Inventar, Humidor-Architektur, Temperatur- und RH-Steuerung, Luftstrom, Sensorik, Serviceablauf und bestehenden Arbeitsweisen.",
      },
      {
        title: "Blend-Mapping",
        body: "Abgleich des aktiven Inventars mit der ICSI Blend Intelligence, Klassifizierung der Referenzen und Identifikation individuell zu prüfender Produkte.",
      },
      {
        title: "CPFS-Kalibrierung",
        body: "Festlegung von Lagerzonen, Zielbedingungen, Übergangsregeln, Stabilisierungszeiten, Servicefreigabekriterien und Überwachungsschwellen.",
      },
      {
        title: "Team-Zertifizierung",
        body: "Schulung relevanter Mitarbeiter zu Feuchtigkeit, Produktverhalten, Diagnostik, Stabilisierung, Lagerzuordnung, Service und professioneller Beratung.",
      },
      {
        title: "PredictorPro-Einführung",
        body: "Konfiguration des Betriebskontos, Upload des Inventars und Aktivierung von lokaler Verfügbarkeit, Empfehlungen, Pairings und Similar-Blend Intelligence.",
      },
      {
        title: "Laufende Optimierung",
        body: "Aufrechterhaltung der Standards durch Monitoring, Inventarupdates, Mitarbeiter-Compliance, Produktneubewertung, Performance Reviews und Rekalibrierung.",
      },
    ],
    journeyCta: "CPFS-Implementierung besprechen",

    proofEyebrow: "Ein kontrolliertes System",
    proofTitle: "Umgebung. Inventar. Menschen. Technologie. Service.",
    proofBody:
      "Eine CPFS-Implementierung ist erst dann abgeschlossen, wenn physische Umgebung, Inventarklassifizierung, Produktzustand, Mitarbeiterkompetenz, digitales System und Serviceprozess als ein kontrolliertes Gesamtsystem funktionieren.",

    formEyebrow: "CPFS-Bewertung",
    formTitle: "Sprechen wir über Ihren Betrieb",
    formIntro:
      "Teilen Sie uns mit, wer Sie sind und welchen Betrieb oder welche Gruppe Sie vertreten. ICSI wird Sie kontaktieren, um Ihre aktuelle Umgebung und den passenden CPFS-Implementierungsweg zu besprechen.",
    firstName: "Vorname",
    familyName: "Nachname",
    email: "E-Mail",
    venueName: "Name des Betriebs / der Gruppe",
    submit: "Bewertung anfragen",
    privacy:
      "Mit dem Absenden dieses Formulars erklären Sie sich damit einverstanden, dass ICSI Sie bezüglich der CPFS-Implementierung und entsprechender professioneller Lösungen kontaktiert.",
    successEyebrow: "Vielen Dank",
    successTitle: "Ihre Bewertungsanfrage ist eingegangen",
    successText:
      "Vielen Dank für Ihr Interesse an CPFS. Unser Team wird Sie kontaktieren, um Ihren Betrieb, die aktuelle Umgebung und den passenden Implementierungsweg zu besprechen.",

    seoTitle:
      "CPFS Hospitality-Lösungen für Lounges & Betriebe | ICSI",
    seoDescription:
      "CPFS-Implementierung für Lounges, Händler und Hospitality-Gruppen: Betriebsanalyse, Blend-Mapping, Lager- und Stabilisierungsstandards, Training und PredictorPro.",
  },
};


function CPFSChangeIcon({ index }) {
  const commonProps = {
    viewBox: "0 0 64 64",
    width: "64",
    height: "64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
  };

  const strokeProps = {
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = [
    // 01 — STORE / HUMIDOR
    <svg key="store" {...commonProps}>
      <path {...strokeProps} d="M14 20h36v28H14z" />
      <path {...strokeProps} d="M10 16h44v7H10z" />
      <path {...strokeProps} d="M18 12h28l5 4H13l5-4z" />
      <path {...strokeProps} d="M22 28h20v12H22z" />
      <path {...strokeProps} d="M28 31h8" />
      <circle {...strokeProps} cx="32" cy="25" r="1.8" />
    </svg>,

    // 02 — SETTLE / LEAF
    <svg key="settle" {...commonProps}>
      <path {...strokeProps} d="M49 11C31 14 18 24 13 41c8 2 17-1 24-8 7-7 10-14 12-22z" />
      <path {...strokeProps} d="M15 45c7-10 16-18 29-26" />
      <path {...strokeProps} d="M28 31l-4-8" />
      <path {...strokeProps} d="M34 26l1-9" />
      <path {...strokeProps} d="M23 36l-8-2" />
    </svg>,

    // 03 — SERVE / CIGAR
    <svg key="serve" {...commonProps}>
      <path {...strokeProps} d="M12 35h34" />
      <path {...strokeProps} d="M12 35c0-4 2-7 5-7h25c3 0 4 3 4 7s-1 7-4 7H17c-3 0-5-3-5-7z" />
      <path {...strokeProps} d="M19 28v14" />
      <path {...strokeProps} d="M46 30c4-1 7-3 7-7 0-2-1-4-3-6" />
      <path {...strokeProps} d="M50 28c5-1 8-4 8-8 0-3-2-5-4-7" />
    </svg>,

    // 04 — RECOMMEND / SOMMELIER
    <svg key="recommend" {...commonProps}>
      <circle {...strokeProps} cx="32" cy="21" r="8" />
      <path {...strokeProps} d="M20 48c1-10 6-16 12-16s11 6 12 16" />
      <path {...strokeProps} d="M15 50h34" />
      <path {...strokeProps} d="M26 36l6 6 6-6" />
    </svg>,

    // 05 — CROSS-SELL / CIGAR BUNDLE
    <svg key="cross-sell" {...commonProps}>
      <g transform="rotate(-18 32 32)">
        <rect {...strokeProps} x="13" y="23" width="35" height="7" rx="3.5" />
        <rect {...strokeProps} x="16" y="31" width="35" height="7" rx="3.5" />
        <rect {...strokeProps} x="12" y="39" width="35" height="7" rx="3.5" />
        <path {...strokeProps} d="M20 23v7M23 31v7M19 39v7" />
      </g>
    </svg>,

    // 06 — UPSELL / PAIRING GLASS
    <svg key="upsell" {...commonProps}>
      <path {...strokeProps} d="M21 14h22l-3 12c-1 6-4 10-8 10s-7-4-8-10l-3-12z" />
      <path {...strokeProps} d="M24 24h16" />
      <path {...strokeProps} d="M32 36v14" />
      <path {...strokeProps} d="M25 50h14" />
      <path {...strokeProps} d="M39 16l7-7" />
      <path {...strokeProps} d="M45 8l3 3" />
    </svg>,
  ];

  return (
    <div className="cpfsChangeIcon">
      {icons[index] || icons[0]}
    </div>
  );
}

function scrollToAssessment(event) {
  event.preventDefault();
  const target = document.getElementById("cpfs-assessment");
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function CPFSImplementation() {
  const router = useRouter();
  const lang = (router.locale || "en").toLowerCase();
  const c = copy[lang] || copy.en;
  const submitted = router.query?.submitted === "true";

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://cigarsommelierinstitute.com";

  const localePrefix =
    router.locale && router.locale !== "en" ? `/${router.locale}` : "";

  const redirectTo = `${siteUrl}${localePrefix}/cpfs-implementation?submitted=true`;

  return (
    <Layout>
      <Seo
        title={c.seoTitle}
        description={c.seoDescription}
        path="/cpfs-implementation"
      />

      <div className={`cpfsSalesPage lang-${lang}`}>
        <section className="cpfsHero">
          <div className="container cpfsHeroInner">
            <div className="cpfsHeroCopy">
              <span className="cpfsKicker">Cigar Peak-Flavor System®</span>
              <h1 className="cpfsHeroTitle">{c.title}</h1>
              <p className="cpfsHeroLead">{c.intro}</p>

              <a
                href="#cpfs-assessment"
                className="cpfsHeroCta"
                onClick={scrollToAssessment}
              >
                <span>{c.heroCta}</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="cpfsHeroLogoWrap">
              <img
                src="/img/CPFS.png"
                alt="Cigar Peak-Flavor System trademarked logo"
                className="cpfsHeroLogo"
              />
            </div>
          </div>
        </section>

        <section className="cpfsChanges">
          <div className="container">
            <div className="cpfsSectionHead">
              <span className="cpfsSectionNum">01</span>
              <div>
                <span className="cpfsEyebrow">{c.changesEyebrow}</span>
                <h2>{c.changesTitle}</h2>
                <p>{c.changesIntro}</p>
              </div>
            </div>

            <div className="cpfsChangeGrid">
              {c.changes.map((item, index) => (
                <article className="cpfsChangeCard" key={item.title}>
                  <span className="cpfsCardNum">0{index + 1}</span>
                  <CPFSChangeIcon index={index} />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cpfsJourney">
          <div className="container">
            <div className="cpfsJourneyHead">
              <span className="cpfsSectionNum cpfsSectionNumLight">02</span>
              <div>
                <span className="cpfsEyebrow cpfsEyebrowLight">
                  {c.journeyEyebrow}
                </span>
                <h2>{c.journeyTitle}</h2>
                <p>{c.journeyIntro}</p>
              </div>
            </div>

            <div className="cpfsJourneyList">
              {c.journey.map((step, index) => (
                <article className="cpfsJourneyStep" key={step.title}>
                  <div className="cpfsJourneyNumber">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="cpfsJourneyCopy">
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                  {index < c.journey.length - 1 && (
                    <div className="cpfsJourneyArrow" aria-hidden="true">↓</div>
                  )}
                </article>
              ))}
            </div>

            <a
              href="#cpfs-assessment"
              className="cpfsJourneyCta"
              onClick={scrollToAssessment}
            >
              <span>{c.journeyCta}</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="cpfsProof">
          <div className="container cpfsProofGrid">
            <div>
              <span className="cpfsSectionNum">03</span>
              <span className="cpfsEyebrow">{c.proofEyebrow}</span>
            </div>

            <div>
              <h2>{c.proofTitle}</h2>
              <p>{c.proofBody}</p>
            </div>
          </div>
        </section>

        <section className="cpfsAssessment" id="cpfs-assessment">
          <div className="container cpfsAssessmentGrid">
            <div className="cpfsAssessmentIntro">
              <span className="cpfsSectionNum">04</span>
              <span className="cpfsEyebrow">
                {submitted ? c.successEyebrow : c.formEyebrow}
              </span>
            </div>

            <div className="cpfsAssessmentBody">
              {submitted ? (
                <>
                  <div className="cpfsSuccessMark">✓</div>
                  <h2>{c.successTitle}</h2>
                  <p className="cpfsAssessmentText">{c.successText}</p>
                </>
              ) : (
                <>
                  <h2>{c.formTitle}</h2>
                  <p className="cpfsAssessmentText cpfsFormIntro">
                    {c.formIntro}
                  </p>

                  <form
                    className="cpfsForm"
                    action="https://api.staticforms.dev/submit"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="apiKey"
                      value={process.env.NEXT_PUBLIC_STATICFORMS_CPFS_KEY || ""}
                    />
                    <input
                      type="hidden"
                      name="redirectTo"
                      value={redirectTo}
                    />
                    <input
                      type="hidden"
                      name="Form"
                      value="CPFS Implementation — Assessment Request"
                    />

                    <div className="cpfsHoneypot" aria-hidden="true">
                      <label htmlFor="cpfs-honeypot">Leave this empty</label>
                      <input
                        id="cpfs-honeypot"
                        type="text"
                        name="honeypot"
                        tabIndex="-1"
                        autoComplete="off"
                      />
                    </div>

                    <div className="cpfsField">
                      <label className="cpfsLabel" htmlFor="firstName">
                        {c.firstName}
                      </label>
                      <input
                        className="cpfsInput"
                        id="firstName"
                        name="First Name"
                        type="text"
                        autoComplete="given-name"
                        required
                      />
                    </div>

                    <div className="cpfsField">
                      <label className="cpfsLabel" htmlFor="familyName">
                        {c.familyName}
                      </label>
                      <input
                        className="cpfsInput"
                        id="familyName"
                        name="Family Name"
                        type="text"
                        autoComplete="family-name"
                        required
                      />
                    </div>

                    <div className="cpfsField cpfsFieldFull">
                      <label className="cpfsLabel" htmlFor="email">
                        {c.email}
                      </label>
                      <input
                        className="cpfsInput"
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                      />
                    </div>

                    <div className="cpfsField cpfsFieldFull">
                      <label className="cpfsLabel" htmlFor="venueName">
                        {c.venueName}
                      </label>
                      <input
                        className="cpfsInput"
                        id="venueName"
                        name="Venue / Group Name"
                        type="text"
                        autoComplete="organization"
                        required
                      />
                    </div>

                    <div className="cpfsSubmitWrap">
                      <button className="cpfsSubmit" type="submit">
                        <span>{c.submit}</span>
                        <span className="cpfsSubmitArrow">→</span>
                      </button>
                    </div>

                    <p className="cpfsPrivacy">{c.privacy}</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        .cpfsSalesPage {
          --ivory: #faf4e8;
          --ink: #16161f;
          --crimson: #c0242f;
          --bordeaux: #601818;
          --gold: #c8a24a;
          --lightGold: #e4cb8e;
          background: var(--ivory);
          color: var(--ink);
        }

        .cpfsSalesPage h1,
        .cpfsSalesPage h2,
        .cpfsSalesPage h3 {
          font-family: "Playfair Display", Georgia, serif;
          font-weight: 400;
        }

        .cpfsSalesPage p,
        .cpfsSalesPage a,
        .cpfsSalesPage span,
        .cpfsSalesPage label,
        .cpfsSalesPage input,
        .cpfsSalesPage button {
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI,
            Roboto, Helvetica, Arial;
        }

        .cpfsHero {
          background: var(--ivory);
          border-top: 3px solid var(--crimson);
        }

        .cpfsHeroInner {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(360px, 0.78fr);
          gap: 72px;
          align-items: center;
          padding-top: 68px;
          padding-bottom: 76px;
        }

        .cpfsHeroCopy {
          min-width: 0;
        }

        .cpfsHeroLogoWrap {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 420px;
        }

        .cpfsHeroLogo {
          display: block;
          width: min(100%, 520px);
          height: auto;
          object-fit: contain;
        }

        .cpfsKicker,
        .cpfsEyebrow {
          display: block;
          color: var(--crimson);
          font-size: 0.67rem;
          line-height: 1.35;
          letter-spacing: 0.21em;
          text-transform: uppercase;
          font-weight: 600;
        }

        .cpfsHeroTitle {
          margin: 24px 0 32px;
          max-width: 17ch;
          font-size: clamp(3.25rem, 5.8vw, 6.15rem);
          line-height: 0.96;
          letter-spacing: -0.055em;
        }

        .cpfsHeroLead {
          margin: 0;
          max-width: 58ch;
          padding-left: 0;
          font-size: clamp(1.05rem, 1.35vw, 1.22rem);
          line-height: 1.7;
          font-weight: 300;
          opacity: 0.76;
        }

        .cpfsHeroCta,
        .cpfsJourneyCta {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          min-height: 52px;
          padding: 0 24px;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.13em;
          font-size: 0.7rem;
          font-weight: 650;
        }

        .cpfsHeroCta {
          margin-top: 38px;
          margin-left: 0;
          background: var(--bordeaux);
          border: 1px solid var(--bordeaux);
          color: var(--ivory);
        }

        .cpfsHeroCta:hover {
          background: var(--crimson);
          border-color: var(--crimson);
        }

        .cpfsChanges {
          padding: 78px 0 96px;
          border-top: 1px solid rgba(22, 22, 31, 0.12);
        }

        .cpfsSectionHead,
        .cpfsJourneyHead {
          display: grid;
          grid-template-columns: 130px minmax(0, 1fr);
          gap: 56px;
          align-items: start;
        }

        .cpfsSectionNum {
          display: block;
          color: var(--gold);
          font-family: "Playfair Display", Georgia, serif !important;
          font-size: clamp(1.9rem, 2.5vw, 2.45rem);
          line-height: 1;
        }

        .cpfsSectionHead h2,
        .cpfsJourneyHead h2,
        .cpfsProof h2,
        .cpfsAssessmentBody h2 {
          margin: 24px 0 20px;
          max-width: 20ch;
          font-size: clamp(2.25rem, 3.3vw, 3.65rem);
          line-height: 1;
          letter-spacing: -0.048em;
        }

        .cpfsSectionHead p,
        .cpfsJourneyHead p,
        .cpfsProof p,
        .cpfsAssessmentText {
          margin: 0;
          max-width: 67ch;
          font-size: 0.98rem;
          line-height: 1.72;
          font-weight: 300;
          opacity: 0.74;
        }

        .cpfsChangeGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 58px;
          border-top: 1px solid rgba(22, 22, 31, 0.15);
          border-left: 1px solid rgba(22, 22, 31, 0.15);
        }

        .cpfsChangeCard {
          min-height: 270px;
          padding: 30px 30px 32px;
          border-right: 1px solid rgba(22, 22, 31, 0.15);
          border-bottom: 1px solid rgba(22, 22, 31, 0.15);
        }

        .cpfsCardNum {
          display: block;
          margin-bottom: 22px;
          color: var(--crimson);
          font-size: 0.64rem;
          letter-spacing: 0.18em;
          font-weight: 600;
        }

        .cpfsChangeIcon {
          width: 54px;
          height: 54px;
          margin: 0 0 24px;
          color: var(--gold);
        }

        .cpfsChangeIcon svg {
          display: block;
          width: 100%;
          height: 100%;
        }

        .cpfsChangeCard h3 {
          margin: 0 0 15px;
          font-size: clamp(1.65rem, 2.15vw, 2.1rem);
          line-height: 1.05;
        }

        .cpfsChangeCard p {
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.66;
          font-weight: 300;
          opacity: 0.7;
        }

        .cpfsJourney {
          padding: 92px 0 100px;
          background: var(--bordeaux);
          color: #fff;
        }

        .cpfsSectionNumLight,
        .cpfsEyebrowLight {
          color: var(--lightGold);
        }

        .cpfsJourneyHead p {
          color: #fff;
          opacity: 0.76;
        }

        .cpfsJourneyList {
          margin-top: 58px;
          border-top: 1px solid rgba(255,255,255,0.16);
        }

        .cpfsJourneyStep {
          position: relative;
          display: grid;
          grid-template-columns: 110px minmax(0, 1fr) 60px;
          gap: 28px;
          align-items: start;
          padding: 30px 0 32px;
          border-bottom: 1px solid rgba(255,255,255,0.16);
        }

        .cpfsJourneyNumber {
          color: var(--lightGold);
          font-family: "Playfair Display", Georgia, serif !important;
          font-size: 2rem;
          line-height: 1;
        }

        .cpfsJourneyCopy h3 {
          margin: 0 0 10px;
          color: #fff;
          font-size: 1.55rem;
          line-height: 1.08;
        }

        .cpfsJourneyCopy p {
          margin: 0;
          max-width: 72ch;
          color: #fff;
          font-size: 0.9rem;
          line-height: 1.65;
          font-weight: 300;
          opacity: 0.72;
        }

        .cpfsJourneyArrow {
          color: var(--lightGold);
          font-family: "Playfair Display", Georgia, serif !important;
          font-size: 1.5rem;
          text-align: right;
          opacity: 0.75;
        }

        .cpfsJourneyCta {
          margin-top: 42px;
          background: var(--lightGold);
          border: 1px solid var(--lightGold);
          color: var(--bordeaux);
        }

        .cpfsJourneyCta:hover {
          background: transparent;
          color: var(--lightGold);
        }

        .cpfsProof {
          padding: 82px 0 90px;
          background: var(--ivory);
        }

        .cpfsProofGrid {
          display: grid;
          grid-template-columns: 240px minmax(0, 1fr);
          gap: 74px;
          padding-top: 8px;
          border-top: 1px solid rgba(22,22,31,0.14);
        }

        .cpfsProofGrid > div {
          padding-top: 34px;
        }

        .cpfsProof h2 {
          max-width: 21ch;
        }

        .cpfsAssessment {
          padding: 90px 0 102px;
          background: var(--ink);
          color: #fff;
          scroll-margin-top: 90px;
        }

        .cpfsAssessmentGrid {
          display: grid;
          grid-template-columns: 240px minmax(0, 1fr);
          gap: 74px;
        }

        .cpfsAssessment .cpfsEyebrow {
          color: var(--lightGold);
        }

        .cpfsAssessmentBody h2 {
          color: #fff;
          margin-top: 0;
        }

        .cpfsAssessmentText {
          color: #fff;
          opacity: 0.72;
        }

        .cpfsFormIntro {
          margin-bottom: 38px;
        }

        .cpfsForm {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px 30px;
          max-width: 760px;
          margin-top: 38px;
        }

        .cpfsField {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .cpfsFieldFull {
          grid-column: 1 / -1;
        }

        .cpfsLabel {
          color: rgba(255,255,255,0.68);
          font-size: 0.64rem;
          line-height: 1.35;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 600;
        }

        .cpfsInput {
          width: 100%;
          min-height: 54px;
          padding: 14px 0;
          border: 0;
          border-bottom: 1px solid rgba(255,255,255,0.28);
          border-radius: 0;
          outline: none;
          background: transparent;
          color: #fff;
          font-size: 1rem;
          line-height: 1.4;
          font-weight: 300;
          transition: border-color 0.2s ease;
        }

        .cpfsInput:focus {
          border-bottom-color: var(--lightGold);
        }

        .cpfsSubmitWrap {
          grid-column: 1 / -1;
          margin-top: 10px;
        }

        .cpfsSubmit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          min-height: 52px;
          padding: 0 26px;
          border: 1px solid var(--crimson);
          background: var(--crimson);
          color: #fff;
          font-size: 0.68rem;
          line-height: 1;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 700;
          cursor: pointer;
        }

        .cpfsSubmit:hover {
          background: transparent;
          color: #fff;
        }

        .cpfsSubmitArrow {
          font-size: 1.15rem;
        }

        .cpfsPrivacy {
          grid-column: 1 / -1;
          margin: 0;
          max-width: 70ch;
          color: rgba(255,255,255,0.45);
          font-size: 0.74rem;
          line-height: 1.6;
          font-weight: 300;
        }

        .cpfsHoneypot {
          position: absolute !important;
          left: -9999px !important;
          width: 1px !important;
          height: 1px !important;
          overflow: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }

        .cpfsSuccessMark {
          margin-bottom: 22px;
          color: var(--lightGold);
          font-family: "Playfair Display", Georgia, serif !important;
          font-size: 3rem;
          line-height: 1;
        }

        @media (max-width: 900px) {
          .cpfsHeroInner {
            grid-template-columns: 1fr;
            gap: 34px;
          }

          .cpfsHeroLogoWrap {
            min-height: 0;
            justify-content: flex-start;
          }

          .cpfsHeroLogo {
            width: min(72vw, 440px);
          }

          .cpfsHeroLead,
          .cpfsHeroCta {
            padding-left: 0;
            margin-left: 0;
          }

          .cpfsSectionHead,
          .cpfsJourneyHead,
          .cpfsProofGrid,
          .cpfsAssessmentGrid {
            grid-template-columns: 1fr;
            gap: 26px;
          }

          .cpfsChangeGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .cpfsProofGrid {
            gap: 6px;
          }
        }

        @media (max-width: 640px) {
          .cpfsHeroInner {
            padding-top: 46px;
            padding-bottom: 54px;
            gap: 28px;
          }

          .cpfsHeroLogo {
            width: min(82vw, 360px);
          }

          .cpfsHeroTitle {
            max-width: none;
            font-size: clamp(2.65rem, 12vw, 4rem);
          }

          .cpfsHeroLead {
            font-size: 0.96rem;
            line-height: 1.62;
          }

          .cpfsChanges,
          .cpfsJourney,
          .cpfsProof,
          .cpfsAssessment {
            padding-top: 62px;
            padding-bottom: 68px;
          }

          .cpfsChangeGrid {
            grid-template-columns: 1fr;
            margin-top: 42px;
          }

          .cpfsChangeCard {
            min-height: auto;
          }

          .cpfsChangeIcon {
            width: 48px;
            height: 48px;
            margin-bottom: 20px;
          }

          .cpfsJourneyStep {
            grid-template-columns: 58px minmax(0, 1fr);
            gap: 18px;
          }

          .cpfsJourneyArrow {
            display: none;
          }

          .cpfsForm {
            grid-template-columns: 1fr;
          }

          .cpfsFieldFull,
          .cpfsSubmitWrap,
          .cpfsPrivacy {
            grid-column: 1;
          }

          .cpfsSubmit {
            width: 100%;
          }
        }
      `}</style>
    </Layout>
  );
}
