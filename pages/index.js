import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { COPY } from "../components/copy";

const conversionCopy = {
  en: {
    heroLead:
      "ICSI brings science, professional education and digital intelligence together to improve how cigars are understood, stored and served.",
    certCta: "Explore Certifications",
    certSub: "Cigar professionals & serious enthusiasts",
    venueCta: "Discover Venues Solutions",
    venueSub: "Lounges, retailers & hospitality groups",
    eventBanner: "MEET ICSI AT INTERTABAC 2026 · HALL 4 · STAND 4.D44",
    associations: {
      eyebrow: "Industry presence",
      intertabac: "Exhibitor · Speaker",
      summit: "Exhibitor · Sponsor · Speaker",
      pca: "Associate Member",
    },
    trust: [
      "Swiss-based institute",
      "Scientific cigar framework",
      "Four-level learning pathway",
      "Professional venue implementation",
    ],
    waysEyebrow: "Choose your pathway",
    waysTitle: "Two Ways to Partner with ICSI",
    educationEyebrow: "Professional Education",
    educationTitle: "Build recognised cigar expertise.",
    educationText:
      "A structured four-level vocational pathway progressing from foundational knowledge to advanced professional mastery.",
    levels: ["Level I", "Level II", "Level III", "Level IV"],
    educationCta: "Explore Certification",
    hospitalityEyebrow: "Hospitality Solutions",
    hospitalityTitle: "Turn cigar science into a service standard.",
    hospitalityText:
      "Implement the Cigar Peak-Flavor System® (CPFS) across your venue through technical assessment, team training, storage and serving standards, and PredictorPro.",
    hospitalityCta: "Explore CPFS for Venues",
  },
  fr: {
    heroLead:
      "ICSI réunit science, formation professionnelle et intelligence numérique afin d’améliorer la compréhension, la conservation et le service des cigares.",
    certCta: "Découvrez les certifications ICSI",
    certSub: "Professionnels du cigare et passionnés avertis ",
    venueCta: "Découvrez CPFS pour les établissements ",
    venueSub: "Lounges, maisons de cigares et groupes hôteliers ",
    eventBanner: "RENCONTREZ ICSI À INTERTABAC 2026 · HALL 4 · STAND 4.D44",
    associations: {
      eyebrow: "Présence dans l’industrie",
      intertabac: "Exposant · Intervenant",
      summit: "Exposant · Sponsor · Intervenant",
      pca: "Membre associé",
    },
    trust: [
      "Institut basé en Suisse",
      "Cadre scientifique du cigare",
      "Parcours de formation en quatre niveaux",
      "Implémentation professionnelle en établissement",
    ],
    waysEyebrow: "Choisissez votre parcours",
    waysTitle: "Deux voies pour rejoindre l’excellence ICSI",
    educationEyebrow: "Formation professionnelle",
    educationTitle: "Cultivez une expertise d’exception dans l’univers du cigare.",
    educationText:
      "Un parcours d’excellence structuré en quatre niveaux, de l’acquisition des fondamentaux à la maîtrise professionnelle la plus avancée.",
    levels: ["Niveau I", "Niveau II", "Niveau III", "Niveau IV"],
    educationCta: "Découvrir les certifications",
    hospitalityEyebrow: "Solutions pour les professionnels de l’hospitalité",
    hospitalityTitle: "Élever l’art du service par la maîtrise scientifique du cigare.",
    hospitalityText:
      "Intégrez le Cigar Peak-Flavor System (CPFS) à votre établissement à travers une évaluation technique approfondie, la formation de vos collaborateurs, des standards d’excellence en matière de conservation et de service, et l’expertise PredictorPro.",
    hospitalityCta: "Découvrez CPFS pour les établissements",
  },
  de: {
    heroLead:
      "ICSI verbindet Wissenschaft, professionelle Ausbildung und digitale Intelligenz, um zu verbessern, wie Zigarren verstanden, gelagert und serviert werden.",
    certCta: "ICSI Zertifizierungen entdecken",
    certSub: "Für Zigarrenprofis & anspruchsvolle Enthusiasten",
    venueCta: "CPFS für Betriebe entdecken",
    venueSub: "Für Lounges, Händler & Hospitality-Gruppen",
    eventBanner: "TREFFEN SIE ICSI AUF DER INTERTABAC 2026 · HALLE 4 · STAND 4.D44",
    associations: {
      eyebrow: "Präsenz in der Branche",
      intertabac: "Aussteller · Referent",
      summit: "Aussteller · Sponsor · Referent",
      pca: "Assoziiertes Mitglied",
    },
    trust: [
      "Institut mit Sitz in der Schweiz",
      "Wissenschaftliches Zigarren-Framework",
      "Vierstufiger Lernpfad",
      "Professionelle Implementierung für Betriebe",
    ],
    waysEyebrow: "Wählen Sie Ihren Weg",
    waysTitle: "Zwei Wege, mit ICSI zu arbeiten",
    educationEyebrow: "Professionelle Ausbildung",
    educationTitle: "Bauen Sie anerkannte Zigarrenexpertise auf.",
    educationText:
      "Ein strukturierter vierstufiger Berufsbildungsweg von den Grundlagen bis zur fortgeschrittenen professionellen Meisterschaft.",
    levels: ["Level I", "Level II", "Level III", "Level IV"],
    educationCta: "Zertifizierungen entdecken",
    hospitalityEyebrow: "Hospitality-Lösungen",
    hospitalityTitle: "Machen Sie Zigarrenwissenschaft zum Servicestandard.",
    hospitalityText:
      "Implementieren Sie das Cigar Peak-Flavor System® in Ihrem Betrieb mit technischer Analyse, Teamschulung, Lager- und Servicestandards sowie PredictorPro.",
    hospitalityCta: "CPFS für Betriebe entdecken",
  },
};

const sectionCopy = {
  education: {
    en: {
      eyebrow: "Education — Level I / II / III / IV",
      title: "A clear path from knowledge to professional mastery",
      lead:
        "ICSI education is built as a progressive vocational pathway. Each level develops the scientific understanding, diagnostic capability and service judgement required for increasingly advanced cigar roles.",
      cta: "Explore the ICSI pathway",
      href: "/courses",
    },
    fr: {
      eyebrow: "Formation Professionnelle Niveau I/II/III/IV",
      title: "Un parcours d’excellence, des fondamentaux à la maîtrise professionnelle.",
      lead:
        "La formation ICSI repose sur un parcours d’excellence conçu pour accompagner une progression maîtrisée de l’apprentissage vers la plus haute expertise. Chaque niveau approfondit les connaissances scientifiques, perfectionne l’art du diagnostic et développe le discernement indispensable à l’excellence  du service, ouvrant la voie vers une maîtrise accomplie de l’univers du cigare.",
      cta: "Découvrez le parcours ICSI",
      href: "/courses",
    },
    de: {
      eyebrow: "Ausbildung — Level I / II / III / IV",
      title: "Ein klarer Weg vom Wissen zur professionellen Meisterschaft",
      lead:
        "Die ICSI-Ausbildung ist als progressiver Berufsbildungsweg aufgebaut. Jede Stufe entwickelt wissenschaftliches Verständnis, diagnostische Kompetenz und Serviceurteil für zunehmend anspruchsvolle Zigarrenrollen.",
      cta: "Den ICSI Lernpfad entdecken",
      href: "/courses",
    },
  },
  hospitality: {
    en: {
      eyebrow: "CPFS for Hospitality",
      title: "One operating standard for storage, serving, recommendation and pairing",
      lead:
        "ICSI implements CPFS within lounges, retailers and hospitality groups through technical assessment, team capability building, blend-specific storage and serving standards, and PredictorPro deployment.",
      cta: "Explore CPFS implementation",
      href: "/cpfs-implementation",
    },
    fr: {
      eyebrow: "CPFS pour l’Hospitalité",
      title: "Une référence d’excellence unique, de la conservation à l’art du service, de la recommandations aux accords.",
      lead:
        "ICSI déploie le Cigar Peak Flavor System (CPFS) dans les lounges, maisons de cigares et les groupes hôteliers, grâce à un diagnostic technique, au développement des compétences, au protocole de conservation et de service adapté à chaque blend, ainsi qu’à PredictorPro.",
      cta: "Découvrez l’excellence CPFS",
      href: "/cpfs-implementation",
    },
    de: {
      eyebrow: "CPFS für Hospitality",
      title: "Ein Betriebsstandard für Lagerung, Service, Empfehlung und Pairing",
      lead:
        "ICSI implementiert CPFS in Lounges, bei Händlern und Hospitality-Gruppen durch technische Analyse, Kompetenzaufbau im Team, blend-spezifische Lager- und Servicestandards sowie die Einführung von PredictorPro.",
      cta: "CPFS Implementierung entdecken",
      href: "/cpfs-implementation",
    },
  },
  science: {
    en: {
      eyebrow: "Why ICSI / The Science",
      title: "The Cigar Peak-Flavor System®",
      lead:
        "Our proprietary scientific framework applies thermodynamics, combustion science, blend architecture, seed genetics and terroir analysis to make cigar conditioning and service decisions more precise and repeatable.",
      cta: "Discover the science",
      href: "/system",
    },
    fr: {
      eyebrow: "Pourquoi ICSI / La science",
      title: "Le Cigar Peak-Flavor System®",
      lead:
        "Notre cadre scientifique propriétaire applique la thermodynamique, la science de la combustion, l’architecture des blends, la génétique des semences et l’analyse du terroir afin de rendre les décisions de conditionnement et de service plus précises et reproductibles.",
      cta: "Découvrir la science",
      href: "/system",
    },
    de: {
      eyebrow: "Warum ICSI / Die Wissenschaft",
      title: "Das Cigar Peak-Flavor System®",
      lead:
        "Unser proprietäres wissenschaftliches Framework verbindet Thermodynamik, Verbrennungswissenschaft, Blend-Architektur, Saatgutgenetik und Terroiranalyse, um Konditionierungs- und Serviceentscheidungen präziser und reproduzierbarer zu machen.",
      cta: "Die Wissenschaft entdecken",
      href: "/system",
    },
  },
  digital: {
    en: {
      eyebrow: "PredictorPro",
      title: "Put blend intelligence in the hands of your service team",
      lead:
        "PredictorPro translates CPFS intelligence into practical venue decisions: blend analysis, peak-flavour humidity guidance, similar-blend discovery for cross-sell, and structured beverage pairing for upsell.",
      cta: "Discover venue solutions",
      href: "/cpfs-implementation",
    },
    fr: {
      eyebrow: "PredictorPro",
      title: "Mettez l’intelligence des blends entre les mains de vos équipes",
      lead:
        "PredictorPro transforme l’intelligence CPFS en décisions opérationnelles : analyse des blends, recommandations d’humidité Peak-Flavor, recherche de blends similaires pour le cross-sell et accords boissons structurés pour l’upsell.",
      cta: "Découvrir les solutions pour établissements",
      href: "/cpfs-implementation",
    },
    de: {
      eyebrow: "PredictorPro",
      title: "Bringen Sie Blend-Intelligence direkt in Ihr Serviceteam",
      lead:
        "PredictorPro übersetzt CPFS-Intelligence in praktische Betriebsentscheidungen: Blend-Analyse, Peak-Flavor-Feuchteempfehlungen, Similar-Blend-Suche für Cross-Selling und strukturierte Getränkepaarungen für Upselling.",
      cta: "Venue-Lösungen entdecken",
      href: "/cpfs-implementation",
    },
  },
  partnership: {
    en: {
      eyebrow: "Industry Engagement",
      title: "Advancing professional cigar standards with the industry",
      lead:
        "ICSI works with hospitality operators, retailers, manufacturers and industry organisations to connect education, science and practical service standards across the modern cigar ecosystem.",
      cta: "Explore ICSI resources",
      href: "/partners",
    },
    fr: {
      eyebrow: "Engagement sectoriel",
      title: "Faire progresser les standards professionnels avec l’industrie",
      lead:
        "ICSI collabore avec des opérateurs hospitality, détaillants, fabricants et organisations sectorielles afin de relier formation, science et standards de service dans l’écosystème moderne du cigare.",
      cta: "Explorer les ressources ICSI",
      href: "/partners",
    },
    de: {
      eyebrow: "Branchenengagement",
      title: "Professionelle Zigarrenstandards gemeinsam mit der Branche weiterentwickeln",
      lead:
        "ICSI arbeitet mit Hospitality-Betreibern, Händlern, Herstellern und Branchenorganisationen zusammen, um Ausbildung, Wissenschaft und praktische Servicestandards im modernen Zigarrenökosystem zu verbinden.",
      cta: "ICSI Ressourcen entdecken",
      href: "/partners",
    },
  },
};

function EditorialSection({ number, copyKey, lang }) {
  const c = sectionCopy[copyKey][lang] || sectionCopy[copyKey].en;

  return (
    <section className="homeEditorialSection">
      <div className="homeSectionMeta">
        <span className="homeSectionNum">{number}</span>
        <span className="homeSectionEyebrow">{c.eyebrow}</span>
      </div>
      <div className="homeSectionDivider" />
      <div className="homeSectionBody">
        <h2 className="homeSectionTitle">{c.title}</h2>
        <p className="homeSectionText">{c.lead}</p>
        <Link href={c.href} locale={lang} className="homeTextCta">
          <span>{c.cta}</span>
          <span className="homeCtaArrow">→</span>
        </Link>
      </div>
    </section>
  );
}


function InterTabacBanner({ lang }) {
  const c = conversionCopy[lang] || conversionCopy.en;

  return (
    <div className="homeEventBanner">
      <div className="container homeEventBannerInner">
        <Link
          href="/event"
          locale={lang}
          className="homeEventBannerLink"
          aria-label={c.eventBanner}
        >
          <span>{c.eventBanner}</span>
          <span className="homeEventBannerArrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

function AssociationStrip({ lang }) {
  const c = conversionCopy[lang] || conversionCopy.en;

  const associations = [
    {
      key: "intertabac",
      name: "InterTabac",
      role: c.associations.intertabac,
      src: "/img/associations/intertabac.jpeg",
      width: 360,
      height: 360,
      logoClass: "homeAssociationLogoSquare",
    },
    {
      key: "summit",
      name: "Cigar Culture Summit",
      role: c.associations.summit,
      src: "/img/associations/cigar-culture-summit.png",
      width: 532,
      height: 532,
      logoClass: "homeAssociationLogoSquare",
    },
    {
      key: "pca",
      name: "Premium Cigar Association",
      role: c.associations.pca,
      src: "/img/associations/pca.png",
      width: 488,
      height: 290,
      logoClass: "homeAssociationLogoWide",
    },
  ];

  return (
    <aside className="homeAssociationStrip" aria-label={c.associations.eyebrow}>
      <div className="container homeAssociationInner">
        <div className="homeAssociationIntro">
          <span className="homeAssociationEyebrow">{c.associations.eyebrow}</span>
          <span className="homeAssociationRule" aria-hidden="true" />
        </div>

        <div className="homeAssociationGrid">
          {associations.map((item) => (
            <div key={item.key} className="homeAssociationItem">
              <div className={`homeAssociationLogoWrap ${item.logoClass}`}>
                <Image
                  src={item.src}
                  alt={`${item.name} logo`}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 760px) 92px, 110px"
                  className="homeAssociationLogo"
                />
              </div>
              <div className="homeAssociationText">
                <span className="homeAssociationName">{item.name}</span>
                <span className="homeAssociationRole">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default function Home() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();
  const heroCopy = COPY[lang] || COPY.en;
  const c = conversionCopy[lang] || conversionCopy.en;

  const seo = {
    en: {
      title: "International Cigar Sommelier Institute",
      description:
        "ICSI combines professional cigar education, the Cigar Peak-Flavor System® and digital intelligence for professionals, enthusiasts and hospitality venues.",
      path: "/",
    },
    fr: {
      title: "International Cigar Sommelier Institute",
      description:
        "ICSI réunit formation professionnelle, Cigar Peak-Flavor System® et intelligence numérique pour professionnels, passionnés et établissements hospitality.",
      path: "/",
    },
    de: {
      title: "International Cigar Sommelier Institute",
      description:
        "ICSI verbindet professionelle Zigarrenausbildung, das Cigar Peak-Flavor System® und digitale Intelligenz für Profis, Enthusiasten und Hospitality-Betriebe.",
      path: "/",
    },
  };

  const s = seo[lang] || seo.en;

  return (
    <Layout
      topBanner={
        <>
          <InterTabacBanner lang={lang} />
          <AssociationStrip lang={lang} />
        </>
      }
    >
      <Seo title={s.title} description={s.description} path={s.path} />

      <div className={`homePage lang-${lang}`}>
        <section className="homeHero">
          <div className="homeHeroImageWrap">
            <Image
              src="/img/hero.png"
              alt="Tobacco leaf macro"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
            <div className="homeHeroShade" />
            <div className="container homeHeroContent">
              <span className="homeHeroKicker">{heroCopy.kicker}</span>
              <h1 className="homeHeroTitle">{heroCopy.h1}</h1>
              <p className="homeHeroLead">{c.heroLead}</p>

              <div className="homeHeroActions">
                <div className="homeHeroAction">
                  <Link href="/courses" locale={lang} className="homeHeroButton homeHeroButtonPrimary">
                    <span>{c.certCta}</span>
                    <span className="homeCtaArrow">→</span>
                  </Link>
                  <span className="homeHeroActionSub">{c.certSub}</span>
                </div>

                <div className="homeHeroAction">
                  <Link href="/cpfs-implementation" locale={lang} className="homeHeroButton homeHeroButtonSecondary">
                    <span>{c.venueCta}</span>
                    <span className="homeCtaArrow">→</span>
                  </Link>
                  <span className="homeHeroActionSub">{c.venueSub}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="container homeMain">
          <section className="homeWaysSection">
            <div className="homeWaysHeading">
              <span className="homeWaysEyebrow">{c.waysEyebrow}</span>
              <h2 className="homeWaysTitle">{c.waysTitle}</h2>
            </div>

            <div className="homeWaysGrid">
              <article className="homeWayCard">
                <span className="homeWayEyebrow">{c.educationEyebrow}</span>
                <h3 className="homeWayTitle">{c.educationTitle}</h3>
                <p className="homeWayText">{c.educationText}</p>
                <div className="homeLevelTrack" aria-label="ICSI learning levels">
                  {c.levels.map((level, index) => (
                    <span key={level} className="homeLevelItem">
                      <span>{level}</span>
                      {index < c.levels.length - 1 && <span className="homeLevelArrow">→</span>}
                    </span>
                  ))}
                </div>
                <Link href="/courses" locale={lang} className="homeTextCta">
                  <span>{c.educationCta}</span>
                  <span className="homeCtaArrow">→</span>
                </Link>
              </article>

              <article className="homeWayCard homeWayCardDark">
                <span className="homeWayEyebrow">{c.hospitalityEyebrow}</span>
                <h3 className="homeWayTitle">{c.hospitalityTitle}</h3>
                <p className="homeWayText">{c.hospitalityText}</p>
                <div className="homeCpfsSteps" aria-label="CPFS implementation scope">
                  <span>Assessment</span>
                  <span>Training</span>
                  <span>Standards</span>
                  <span>PredictorPro</span>
                </div>
                <Link href="/cpfs-implementation" locale={lang} className="homeTextCta homeTextCtaLight">
                  <span>{c.hospitalityCta}</span>
                  <span className="homeCtaArrow">→</span>
                </Link>
              </article>
            </div>
          </section>

          <EditorialSection number="01" copyKey="education" lang={lang} />
          <EditorialSection number="02" copyKey="hospitality" lang={lang} />
          <EditorialSection number="03" copyKey="science" lang={lang} />
          <EditorialSection number="04" copyKey="digital" lang={lang} />
          <EditorialSection number="05" copyKey="partnership" lang={lang} />

          <section className="homeQualityNote">
            <p className="homeQualityKicker">ISO/IEC 17024 Quality System Framework</p>
            <p className="homeQualitySub">
              <i>Powered by the scientific Cigar Peak-Flavor System®</i>
            </p>
          </section>
        </main>
      </div>

      <style jsx global>{`
        .homePage { background: #FAF4E8; color: #16161F; }
        .homePage .homeHero { margin: 0; padding: 0; border: 0; background: none; }
        .homePage .homeHeroImageWrap { position: relative; width: 100%; min-height: 620px; overflow: hidden; background: #16110d; }
        .homePage .homeHeroShade { position: absolute; inset: 0; z-index: 1; background: linear-gradient(to right, rgba(0,0,0,.78) 0%, rgba(0,0,0,.62) 38%, rgba(0,0,0,.24) 70%, rgba(0,0,0,.1) 100%), linear-gradient(to bottom, rgba(0,0,0,.06) 0%, rgba(0,0,0,.04) 55%, rgba(0,0,0,.34) 100%); pointer-events: none; }
        .homePage .homeHeroContent { position: relative; z-index: 2; min-height: 620px; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; color: #fff; padding-top: 46px; padding-bottom: 46px; }
        .homePage .homeHeroKicker { display: block; margin: 0 0 20px; color: #fff; font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; font-size: .72rem; line-height: 1; letter-spacing: .3em; text-transform: uppercase; font-weight: 700; opacity: .86; }
        .homePage .homeHeroTitle { margin: 0 0 24px; max-width: 13ch; color: #fff; font-family: "Playfair Display", Georgia, serif; font-size: clamp(3rem, 4.6vw, 4.85rem); line-height: .98; letter-spacing: -.052em; font-weight: 400; text-shadow: 0 2px 20px rgba(0,0,0,.24); }
        .homePage .homeHeroLead { margin: 0 0 30px; max-width: 60ch; color: #fff; font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; font-size: 1.02rem; line-height: 1.62; font-weight: 300; opacity: .94; text-shadow: 0 2px 18px rgba(0,0,0,.24); }
        .homePage .homeHeroActions { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; width: min(830px, 100%); }
        .homePage .homeHeroAction { display: flex; flex-direction: column; gap: 10px; min-width: 0; }
        .homePage .homeHeroButton { display: flex; align-items: center; justify-content: space-between; gap: 20px; min-height: 54px; padding: 15px 18px; text-decoration: none; font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; font-size: .68rem; line-height: 1.25; letter-spacing: .14em; text-transform: uppercase; font-weight: 700; transition: opacity .2s ease, background .2s ease, color .2s ease; }
        .homePage .homeHeroButtonPrimary { color: #16161F; background: #FAF4E8; border: 1px solid #FAF4E8; }
        .homePage .homeHeroButtonSecondary { color: #FAF4E8; background: rgba(96,24,24,.74); border: 1px solid rgba(228,203,142,.78); backdrop-filter: blur(4px); }
        .homePage .homeHeroButton:hover { opacity: .76; }
        .homePage .homeHeroActionSub { color: rgba(255,255,255,.76); font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; font-size: .75rem; line-height: 1.35; font-weight: 300; }
        .homePage .homeCtaArrow { font-size: 1.34rem; line-height: .7; letter-spacing: 0; font-weight: 300; flex: 0 0 auto; }


        .homeEventBanner {
          position: relative;
          z-index: 45;
          background: #601818;
          color: #FAF4E8;
          border-bottom: 1px solid rgba(228, 203, 142, 0.35);
        }

        .homeEventBannerInner {
          min-height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .homeEventBannerLink {
          width: 100%;
          min-height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #FAF4E8;
          text-decoration: none;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
          font-size: 0.72rem;
          line-height: 1.2;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-align: center;
          transition: background 160ms ease, color 160ms ease;
        }

        .homeEventBannerLink:hover {
          background: rgba(255,255,255,0.05);
          color: #E4CB8E;
        }

        .homeEventBannerArrow {
          color: #E4CB8E;
          font-size: 1rem;
          line-height: 1;
          transform: translateY(-1px);
        }

        .homeAssociationStrip { position: relative; z-index: 40; background: #FAF4E8; border-top: 3px solid #C0242F; border-bottom: 1px solid rgba(96,24,24,.18); color: #16161F; }
        .homeAssociationInner { min-height: 112px; display: grid; grid-template-columns: 180px minmax(0,1fr); align-items: stretch; gap: 30px; }
        .homeAssociationIntro { display: flex; flex-direction: column; justify-content: center; gap: 13px; padding: 18px 0; }
        .homeAssociationEyebrow { font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; font-size: .62rem; line-height: 1.35; letter-spacing: .24em; text-transform: uppercase; font-weight: 700; color: #C0242F; }
        .homeAssociationRule { display: block; width: 52px; height: 1px; background: #C8A24A; }
        .homeAssociationGrid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); }
        .homeAssociationItem { min-width: 0; display: grid; grid-template-columns: 92px minmax(0,1fr); align-items: center; gap: 18px; padding: 15px 24px; border-left: 1px solid rgba(96,24,24,.16); }
        .homeAssociationLogoWrap { display: flex; align-items: center; justify-content: center; width: 92px; height: 76px; overflow: hidden; background: #fff; }
        .homeAssociationLogoSquare { padding: 0; }
        .homeAssociationLogoWide { padding: 8px 6px; }
        .homeAssociationLogo { width: 100%; height: 100%; object-fit: contain; display: block; }
        .homeAssociationText { min-width: 0; display: flex; flex-direction: column; gap: 7px; }
        .homeAssociationName { font-family: "Playfair Display", Georgia, serif; font-size: 1.03rem; line-height: 1.08; font-weight: 500; color: #16161F; }
        .homeAssociationRole { font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; font-size: .58rem; line-height: 1.45; letter-spacing: .12em; text-transform: uppercase; font-weight: 700; color: #601818; }

        .homePage .homeMain { padding-top: 0; padding-bottom: 42px; }
        .homePage .homeWaysSection { padding: 72px 0 60px; border-bottom: 1px solid rgba(0,0,0,.18); }
        .homePage .homeWaysHeading { display: grid; grid-template-columns: 220px minmax(0, 1fr); gap: 72px; align-items: end; margin-bottom: 34px; }
        .homePage .homeWaysEyebrow, .homePage .homeWayEyebrow { display: block; color: #C0242F; font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; font-size: .64rem; line-height: 1.45; letter-spacing: .22em; text-transform: uppercase; font-weight: 600; opacity: .58; }
        .homePage .homeWaysTitle { margin: 0; color: #16161F; font-family: "Playfair Display", Georgia, serif; font-size: clamp(2.25rem, 3vw, 3.3rem); line-height: 1.02; letter-spacing: -.052em; font-weight: 400; }
        .homePage .homeWaysGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
        .homePage .homeWayCard { min-height: 430px; display: flex; flex-direction: column; padding: 38px 38px 34px; border: 1px solid rgba(96,24,24,.22); background: #FFFDF8; }
        .homePage .homeWayCardDark { background: #601818; color: #FAF4E8; border-color: #601818; }
        .homePage .homeWayCardDark .homeWayEyebrow, .homePage .homeWayCardDark .homeWayText { color: #fff; }
        .homePage .homeWayCardDark .homeWayEyebrow { opacity: .56; }
        .homePage .homeWayCardDark .homeWayText { opacity: .72; }
        .homePage .homeWayTitle { margin: 19px 0 18px; max-width: 17ch; color: inherit; font-family: "Playfair Display", Georgia, serif; font-size: clamp(1.8rem, 2.3vw, 2.55rem); line-height: 1.06; letter-spacing: -.045em; font-weight: 400; }
        .homePage .homeWayText { margin: 0 0 28px; max-width: 57ch; color: #16161F; font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; font-size: .93rem; line-height: 1.7; font-weight: 300; opacity: .72; }
        .homePage .homeLevelTrack, .homePage .homeCpfsSteps { display: flex; flex-wrap: wrap; gap: 10px 14px; align-items: center; margin: auto 0 30px; font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; font-size: .66rem; line-height: 1.2; letter-spacing: .13em; text-transform: uppercase; font-weight: 700; }
        .homePage .homeLevelItem { display: inline-flex; gap: 12px; align-items: center; }
        .homePage .homeLevelArrow { opacity: .35; font-size: 1rem; }
        .homePage .homeCpfsSteps span { padding: 9px 10px; border: 1px solid rgba(255,255,255,.26); color: rgba(255,255,255,.82); }

        .homePage .homeTextCta { display: inline-flex; align-items: center; gap: 24px; width: fit-content; min-height: 0; padding: 0 0 7px; border: 0; border-bottom: 1px solid rgba(192,36,47,.55); border-radius: 0; background: transparent; box-shadow: none; color: #16161F; text-decoration: none; font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; font-size: .7rem; line-height: 1; letter-spacing: .18em; text-transform: uppercase; font-weight: 700; transition: opacity .2s ease; }
        .homePage .homeTextCtaLight { color: #fff; border-bottom-color: rgba(255,255,255,.58); }
        .homePage .homeTextCta:hover { opacity: .48; background: transparent; }

        .homePage .homeEditorialSection { display: grid; grid-template-columns: 220px 1px minmax(0, 1fr); column-gap: 72px; padding: 48px 0; border-bottom: 1px solid rgba(0,0,0,.18); }
        .homePage .homeSectionMeta { padding-top: 2px; }
        .homePage .homeSectionNum { display: block; margin: 0 0 24px; color: #C8A24A; font-family: "Playfair Display", Georgia, serif; font-size: clamp(1.85rem, 2.4vw, 2.35rem); line-height: 1; letter-spacing: -.04em; font-weight: 300; opacity: .9; }
        .homePage .homeSectionEyebrow { display: block; max-width: 24ch; color: #C0242F; font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; font-size: .64rem; line-height: 1.45; letter-spacing: .22em; text-transform: uppercase; font-weight: 600; opacity: .58; }
        .homePage .homeSectionDivider { width: 1px; min-height: 230px; background: rgba(0,0,0,.08); }
        .homePage .homeSectionBody { max-width: 760px; padding-top: 1px; }
        .homePage .homeSectionTitle { margin: 0 0 22px; max-width: 24ch; color: #16161F; font-family: "Playfair Display", Georgia, serif; font-size: clamp(1.85rem, 2.35vw, 2.55rem); line-height: 1.08; letter-spacing: -.052em; font-weight: 400; }
        .homePage .homeSectionText { margin: 0 0 28px; max-width: 74ch; color: #16161F; font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; font-size: .95rem; line-height: 1.72; font-weight: 300; opacity: .76; }
        .homePage .homeQualityNote { text-align: center; padding: 28px 0 0; }
        .homePage .homeQualityKicker { margin: 0 0 13px; color: #C0242F; font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; font-size: .7rem; letter-spacing: .3em; text-transform: uppercase; font-weight: 600; opacity: .62; }
        .homePage .homeQualitySub { margin: 0; color: #16161F; font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; font-size: .92rem; line-height: 1.6; opacity: .58; }

        .homePage.lang-fr .homeHeroTitle, .homePage.lang-de .homeHeroTitle { font-size: clamp(2.4rem, 3.55vw, 3.9rem); max-width: 14ch; }
        .homePage.lang-fr .homeHeroButton, .homePage.lang-de .homeHeroButton { font-size: .61rem; letter-spacing: .11em; }

        @media (max-width: 1100px) {
          .homeAssociationInner { grid-template-columns: 150px minmax(0,1fr); gap: 18px; }
          .homeAssociationItem { grid-template-columns: 76px minmax(0,1fr); gap: 13px; padding-left: 16px; padding-right: 16px; }
          .homeAssociationLogoWrap { width: 76px; height: 66px; }
          .homeAssociationName { font-size: .93rem; }
          .homePage .homeWaysHeading { grid-template-columns: 180px minmax(0,1fr); gap: 48px; }
          .homePage .homeEditorialSection { grid-template-columns: 180px 1px minmax(0, 1fr); column-gap: 48px; }
        }
        @media (max-width: 900px) {
          .homeAssociationInner { grid-template-columns: 1fr; gap: 0; padding-top: 14px; padding-bottom: 14px; }
          .homeAssociationIntro { flex-direction: row; align-items: center; justify-content: flex-start; padding: 0 0 10px; }
          .homeAssociationGrid { border-top: 1px solid rgba(96,24,24,.14); }
          .homeAssociationItem { grid-template-columns: 64px minmax(0,1fr); padding: 12px 12px; }
          .homeAssociationLogoWrap { width: 64px; height: 56px; }
          .homeAssociationRole { font-size: .52rem; letter-spacing: .09em; }
          .homePage .homeHeroActions { grid-template-columns: 1fr; width: min(540px, 100%); }
          .homePage .homeWaysGrid { grid-template-columns: 1fr; }
          .homePage .homeWayCard { min-height: 380px; }
        }
        @media (max-width: 820px) {
          .homePage .homeHeroImageWrap, .homePage .homeHeroContent { min-height: 690px; }
          .homePage .homeHeroTitle { font-size: clamp(2.55rem, 9vw, 3.85rem); max-width: 12ch; }
          .homePage .homeHeroLead { font-size: .96rem; max-width: 52ch; }
          .homePage .homeWaysHeading { grid-template-columns: 1fr; gap: 12px; }
          .homePage .homeEditorialSection { grid-template-columns: 1fr; row-gap: 22px; padding: 42px 0; }
          .homePage .homeSectionDivider { display: none; }
          .homePage .homeSectionNum { margin-bottom: 12px; }
          .homePage .homeSectionBody, .homePage .homeSectionTitle { max-width: none; }
        }
        @media (max-width: 520px) {
          .homeEventBannerLink {
            min-height: 40px;
            padding: 8px 0;
            font-size: 0.62rem;
            letter-spacing: 0.10em;
          }

          .homeEventBannerArrow {
            font-size: 0.9rem;
          }

          .homeAssociationStrip { border-top-width:2px; }
          .homeAssociationInner { padding-top:10px; padding-bottom:10px; overflow:hidden; }
          .homeAssociationIntro { padding-bottom:8px; gap:10px; }
          .homeAssociationEyebrow { font-size:.56rem; }
          .homeAssociationRule { width:42px; }
          .homeAssociationGrid { display:flex; gap:10px; overflow-x:auto; scroll-snap-type:x proximity; border-top:1px solid rgba(96,24,24,.14); padding:10px 0 2px; scrollbar-width:none; }
          .homeAssociationGrid::-webkit-scrollbar { display:none; }
          .homeAssociationItem { flex:0 0 210px; grid-template-columns:54px minmax(0,1fr); min-height:64px; gap:10px; padding:6px 10px 6px 0; border-left:0; border-right:1px solid rgba(96,24,24,.12); border-bottom:0; scroll-snap-align:start; }
          .homeAssociationItem:last-child { border-right:0; }
          .homeAssociationLogoWrap { width:54px; height:50px; }
          .homeAssociationName { font-size:.82rem; }
          .homeAssociationRole { font-size:.48rem; line-height:1.35; letter-spacing:.07em; }
          .homePage .homeHeroImageWrap, .homePage .homeHeroContent { min-height:620px; }
          .homePage .homeHeroContent { justify-content:flex-end; padding-top:54px; padding-bottom:30px; }
          .homePage .homeHeroKicker { font-size: .58rem; letter-spacing: .2em; }
          .homePage .homeHeroTitle { font-size: clamp(2.08rem, 10.7vw, 2.8rem); margin-bottom: 18px; }
          .homePage .homeHeroLead { font-size: .88rem; line-height: 1.52; margin-bottom: 24px; }
          .homePage .homeHeroActions { gap:14px; width:100%; }
          .homePage .homeHeroAction { gap:7px; }
          .homePage .homeHeroButton { width:100%; min-height: 50px; padding: 13px 14px; font-size: .6rem; letter-spacing: .1em; }
          .homePage .homeHeroActionSub { font-size: .69rem; }
          .homePage .homeWaysSection { padding: 38px 0 34px; }
          .homePage .homeWayCard { min-height: 0; padding: 28px 24px; }
          .homePage .homeWaysTitle { font-size: 2.15rem; }
          .homePage .homeWayTitle { font-size: 1.9rem; }
          .homePage .homeLevelTrack, .homePage .homeCpfsSteps { margin-top: 8px; }
          .homePage.lang-fr .homeHeroImageWrap, .homePage.lang-fr .homeHeroContent, .homePage.lang-de .homeHeroImageWrap, .homePage.lang-de .homeHeroContent { min-height: 660px; }
          .homePage.lang-fr .homeHeroTitle, .homePage.lang-de .homeHeroTitle { font-size: clamp(1.75rem, 8.6vw, 2.34rem); max-width: 15ch; }
        }
      `}</style>
    </Layout>
  );
}
