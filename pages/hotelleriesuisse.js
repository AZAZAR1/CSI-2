import Head from "next/head";
import Link from "next/link";

export default function HotellerieSuisseMemberSpecial() {
  const email = "Admin@cigarsommelierinstitute.com";
  const subject = encodeURIComponent("HotellerieSuisse Member Special");
  const mailto = `mailto:${email}?subject=${subject}`;

  return (
    <>
      <Head>
        <title>HotellerieSuisse Member Special | ICSI</title>
        <meta
          name="description"
          content="Offre exclusive pour les membres HotellerieSuisse : 20 % de réduction sur les formations ICSI Levels II & III et 10 % sur l’implémentation CPFS avec PredictorPro."
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://www.cigarsommelierinstitute.com/hotelleriesuisse"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="HotellerieSuisse Member Special | ICSI" />
        <meta
          property="og:description"
          content="Développez l’expertise de vos équipes et professionnalisez votre offre cigare grâce aux formations ICSI et à PredictorPro."
        />
        <meta
          property="og:url"
          content="https://www.cigarsommelierinstitute.com/hotelleriesuisse"
        />
        <meta property="og:type" content="website" />
      </Head>

      <main className="page">
        <section className="hero">
          <div className="heroGlow" />
          <div className="container heroInner">
            <div className="eyebrow">OFFRE EXCLUSIVE MEMBRES HOTELLERIESUISSE</div>

            <h1>
              Développez l’expertise de vos équipes.
              <span> Professionnalisez votre offre cigare.</span>
            </h1>

            <p className="lead">
              Développez l’expertise de vos équipes et professionnalisez votre
              offre cigare grâce à des formations spécialisées et à un outil
              digital d’aide au conseil et à la vente.
            </p>

            <div className="heroOffers">
              <div className="offerBadge">
                <strong>–20 %</strong>
                <span>ICSI Levels II & III</span>
              </div>
              <div className="offerBadge">
                <strong>–10 %</strong>
                <span>CPFS + PredictorPro</span>
              </div>
            </div>

            <div className="heroActions">
              <a className="btn btnPrimary" href={mailto}>
                <span>PROFITER DE L’OFFRE</span><span className="btnArrow">→</span>
              </a>
              <a className="btn btnGhost" href="#details">
                <span>VOIR LES AVANTAGES</span><span className="btnArrow">→</span>
              </a>
            </div>

            <p className="exclusive">
              Conditions exclusivement réservées aux membres de HotellerieSuisse.
            </p>
          </div>
        </section>

        <section className="intro" id="details">
          <div className="container narrow">
            <div className="sectionLabel">POUR LES HÔTELS & ÉQUIPES F&amp;B</div>
            <h2>Une offre pensée pour l’hospitalité premium</h2>
            <p>
              L’International Cigar Sommelier Institute (ICSI) accompagne les
              hôtels, bars, lounges et établissements premium dans le développement
              d’un service cigare plus professionnel, plus cohérent et plus
              performant commercialement.
            </p>
            <p>
              L’offre s’adresse en particulier aux hôtels 4 et 5 étoiles, resorts,
              cigar lounges, bars et établissements avec une activité F&amp;B premium,
              ainsi qu’aux F&amp;B Managers, Bar Managers, responsables de lounge,
              sommeliers et équipes de service.
            </p>
          </div>
        </section>

        <section className="offersSection">
          <div className="container">
            <div className="sectionHeader">
              <div className="sectionLabel">MEMBER SPECIAL</div>
              <h2>Deux leviers complémentaires</h2>
            </div>

            <div className="cards">
              <article className="card">
                <div className="discount">–20 %</div>
                <div className="cardKicker">FORMATION</div>
                <h3>ICSI Level II</h3>
                <h4>Certified Cigar Sommelier Course</h4>

                <p>
                  Le standard professionnel ICSI pour le service du cigare :
                  diagnostic, dynamique des arômes et accords scientifiques entre
                  cigares et boissons.
                </p>

                <ul>
                  <li>Renforcer la qualité du conseil client</li>
                  <li>Standardiser les recommandations de l’équipe</li>
                  <li>Développer le cross-selling et l’upselling</li>
                  <li>Améliorer l’expérience client</li>
                </ul>

                <div className="priceBlock">
                  <div>
                    <span>Prix catalogue</span>
                    <del>€399</del>
                  </div>
                  <div className="memberPrice">
                    <span>Prix membre</span>
                    <strong>€319.20</strong>
                  </div>
                </div>

                <Link href="/courses" className="textLink">
                  Découvrir les formations →
                </Link>
              </article>

              <article className="card">
                <div className="discount">–20 %</div>
                <div className="cardKicker">FORMATION AVANCÉE</div>
                <h3>ICSI Level III</h3>
                <h4>Advanced Cigar Sommelier Course</h4>

                <p>
                  Approfondissement de l’expertise avec la modélisation prédictive
                  et les diagnostics avancés appliqués aux blends, millésimes,
                  périodes de stabilisation et accords.
                </p>

                <ul>
                  <li>Développer une expertise avancée</li>
                  <li>Mieux comprendre les conditions de service</li>
                  <li>Contribuer à l’optimisation de l’offre cigare</li>
                  <li>Approfondir la science des accords</li>
                </ul>

                <div className="priceBlock">
                  <div>
                    <span>Prix catalogue</span>
                    <del>€299</del>
                  </div>
                  <div className="memberPrice">
                    <span>Prix membre</span>
                    <strong>€239.20</strong>
                  </div>
                </div>

                <p className="note">
                  Le Level III s’inscrit dans la continuité du Level II.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="cpfsSection">
          <div className="container">
            <div className="cpfsGrid">
              <div>
                <div className="sectionLabel">HOSPITALITY SOLUTIONS</div>
                <h2>CPFS &amp; PredictorPro</h2>
                <p className="bigText">
                  Du service cigare à la performance commerciale.
                </p>
                <p>
                  Le Cigar Peak-Flavor System® (CPFS) structure la gestion du cigare
                  depuis son arrivée et son stockage jusqu’à la recommandation au
                  client et aux accords avec les boissons.
                </p>
                <p>
                  Au cœur du système, <strong>PredictorPro</strong> est une application
                  professionnelle d’aide au conseil et à la vente. Elle donne accès
                  à une base de données internationale de blends, identifie des
                  alternatives comparables dans l’inventaire du lieu et génère des
                  recommandations d’accords avec whisky, rhum, cognac, vin, tequila,
                  bière, cocktails et boissons sans alcool.
                </p>

                <div className="benefits">
                  <span>Conseil plus cohérent</span>
                  <span>Cross-selling intelligent</span>
                  <span>Upselling cigare–boisson</span>
                  <span>Meilleure rotation du stock</span>
                  <span>Service standardisé</span>
                </div>
              </div>

              <aside className="pricingPanel">
                <div className="discount large">–10 %</div>
                <h3>Tarif membre HotellerieSuisse</h3>

                <div className="pricingRow">
                  <div>
                    <span>Implémentation</span>
                    <small>prix catalogue CHF 3’000</small>
                  </div>
                  <strong>CHF 2’700</strong>
                </div>

                <div className="pricingRow">
                  <div>
                    <span>PredictorPro</span>
                    <small>prix catalogue CHF 499 / mois</small>
                  </div>
                  <strong>CHF 449.10 / mois</strong>
                </div>

                <div className="saving">
                  <span>Économie la première année</span>
                  <strong>CHF 898.80</strong>
                </div>

                <Link href="/cpfs-implementation" className="btn btnDark">
                  <span>DÉCOUVRIR CPFS</span><span className="btnArrow">→</span>
                </Link>
              </aside>
            </div>
          </div>
        </section>

        <section className="implementation">
          <div className="container">
            <div className="sectionHeader light">
              <div className="sectionLabel">UNE IMPLÉMENTATION ACCOMPAGNÉE</div>
              <h2>Pas simplement un logiciel.</h2>
              <p>
                CPFS est déployé avec votre établissement selon un processus
                structuré en cinq étapes.
              </p>
            </div>

            <div className="steps">
              {[
                ["01", "Venue Assessment", "Analyse de l’offre, du stock et du fonctionnement de l’établissement."],
                ["02", "Inventory Integration", "Intégration de l’inventaire cigares et boissons."],
                ["03", "Training & Certification", "Formation et certification des équipes."],
                ["04", "PredictorPro Go-Live", "Mise en service de la plateforme dans l’établissement."],
                ["05", "Ongoing Sales Support", "Accompagnement continu des équipes après le lancement."],
              ].map(([n, title, text]) => (
                <div className="step" key={n}>
                  <span>{n}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="demo">
          <div className="container demoGrid">
            <div>
              <div className="sectionLabel">EXCLUSIF MEMBRES</div>
              <h2>Démonstration PredictorPro gratuite sur place</h2>
              <p>
                Découvrez concrètement comment PredictorPro peut être utilisé par
                vos équipes : recherche de cigares, recommandations clients,
                alternatives disponibles, cross-selling et accords cigares–boissons.
              </p>
              <p>
                Lorsque cela est possible, la démonstration s’appuie sur des
                exemples issus de <strong>l’inventaire réel de votre établissement</strong>.
              </p>
            </div>

            <div className="demoCard">
              <span className="miniLabel">DURÉE INDICATIVE</span>
              <strong>60 min.</strong>
              <p>
                Démonstration + première évaluation des besoins de votre établissement.
              </p>
              <a className="btn btnPrimary full" href={mailto}>
                <span>DEMANDER UNE DÉMONSTRATION</span><span className="btnArrow">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="conditions">
          <div className="container narrow">
            <div className="sectionLabel">CONDITIONS</div>
            <h2>Comment bénéficier du Member Special ?</h2>
            <p>
              L’offre est exclusivement réservée aux membres de HotellerieSuisse et
              n’est pas cumulable avec d’autres promotions ICSI. La qualité de membre
              doit être indiquée au moment de l’inscription ou de la demande
              d’implémentation.
            </p>
            <p>
              L’offre est valable pendant la durée du partenariat entre ICSI et
              HotellerieSuisse.
            </p>

            <div className="finalCta">
              <div>
                <span>MENTION À INDIQUER</span>
                <strong>« HotellerieSuisse Member Special »</strong>
              </div>
              <a className="btn btnPrimary" href={mailto}>
                <span>CONTACTER ICSI</span><span className="btnArrow">→</span>
              </a>
            </div>

            <div className="contactLine">
              <a href="https://www.cigarsommelierinstitute.com">
                cigarsommelierinstitute.com
              </a>
              <span>•</span>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        :global(body) {
          margin: 0;
          background: #f4ecdc;
          color: #1c1a18;
        }

        :global(*) {
          box-sizing: border-box;
        }

        .page {
          font-family: Arial, Helvetica, sans-serif;
          background: #f4ecdc;
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .narrow {
          width: min(820px, calc(100% - 40px));
        }

        .hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 78% 25%, rgba(165, 122, 52, 0.20), transparent 28%),
            linear-gradient(145deg, #090909 0%, #15110e 55%, #080808 100%);
          color: #fff;
          padding: 108px 0 96px;
          min-height: 720px;
          display: flex;
          align-items: center;
        }

        .hero:after {
          content: "";
          position: absolute;
          right: -8%;
          bottom: -22%;
          width: 520px;
          height: 520px;
          border: 1px solid rgba(194, 154, 87, 0.22);
          border-radius: 50%;
        }

        .heroInner {
          position: relative;
          z-index: 1;
        }

        .eyebrow,
        .sectionLabel,
        .cardKicker,
        .miniLabel {
          letter-spacing: 0.14em;
          font-size: 12px;
          font-weight: 700;
          color: #9f1f2b;
        }

        .hero .eyebrow {
          color: #d7b16e;
        }

        h1,
        h2,
        h3,
        h4 {
          margin-top: 0;
        }

        h1,
        h2,
        h3,
        h4,
        .card h3,
        .pricingPanel h3,
        .bigText,
        .saving strong,
        .demoCard strong,
        .step > span {
          font-family: "Playfair Display", Georgia, "Times New Roman", serif;
        }

        h1 {
          max-width: 900px;
          font-size: clamp(48px, 6.5vw, 82px);
          line-height: 0.98;
          margin: 24px 0 28px;
          font-weight: 700;
        }

        h1 span {
          color: #d7b16e;
        }

        .lead {
          max-width: 790px;
          font-size: 21px;
          line-height: 1.55;
          color: rgba(255,255,255,0.86);
        }

        .heroOffers {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          margin: 38px 0 30px;
        }

        .offerBadge {
          min-width: 245px;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          border: 1px solid rgba(215,177,110,.38);
          background: rgba(255,255,255,.04);
          border-radius: 4px;
        }

        .offerBadge strong {
          color: #d7b16e;
          font-size: 26px;
          font-family: "Playfair Display", Georgia, "Times New Roman", serif;
        }

        .offerBadge span {
          font-size: 14px;
        }

        .heroActions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 10px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 34px;
          min-height: 64px;
          min-width: 285px;
          padding: 0 28px;
          border-radius: 0;
          border: 1px solid transparent;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.14em;
          transition: background .2s ease, color .2s ease, border-color .2s ease;
        }

        .btnArrow {
          font-size: 28px;
          line-height: 1;
          font-weight: 300;
          letter-spacing: 0;
        }

        .btnPrimary {
          background: #8f251f;
          color: #fff;
          border-color: #b66f5f;
        }

        .btnPrimary:hover {
          background: #a12d27;
          border-color: #cf8a78;
        }

        .btnGhost {
          background: #f1e8d8;
          color: #17130f;
          border-color: #f1e8d8;
        }

        .btnGhost:hover {
          background: #fff8ec;
          border-color: #fff8ec;
        }

        .btnDark {
          background: #8f251f;
          color: #fff;
          border-color: #b66f5f;
          width: 100%;
          margin-top: 12px;
        }

        .btnDark:hover {
          background: #a12d27;
          border-color: #cf8a78;
        }

        .exclusive {
          margin-top: 24px;
          color: rgba(255,255,255,.58);
          font-size: 13px;
        }

        .intro,
        .offersSection,
        .cpfsSection,
        .demo,
        .conditions {
          padding: 92px 0;
        }

        .intro h2,
        .sectionHeader h2,
        .cpfsSection h2,
        .demo h2,
        .conditions h2 {
          font-size: clamp(34px, 4vw, 52px);
          line-height: 1.08;
          margin: 12px 0 22px;
        }

        .intro p,
        .cpfsSection p,
        .demo p,
        .conditions p {
          font-size: 17px;
          line-height: 1.75;
          color: #4c463f;
        }

        .offersSection {
          background: #efe3cf;
        }

        .sectionHeader {
          margin-bottom: 38px;
        }

        .cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .card {
          position: relative;
          background: #f8f1e5;
          border: 1px solid #dcccb1;
          padding: 34px;
        }

        .discount {
          position: absolute;
          top: 22px;
          right: 22px;
          background: #9f1f2b;
          color: white;
          font-weight: 800;
          padding: 8px 10px;
          border-radius: 2px;
        }

        .discount.large {
          position: static;
          display: inline-block;
          margin-bottom: 18px;
          font-size: 19px;
        }

        .card h3 {
          font-size: 36px;
          margin: 18px 0 4px;
        }

        .card h4 {
          color: #9c7847;
          font-family: "Playfair Display", Georgia, "Times New Roman", serif;
          font-size: 22px;
          margin-bottom: 22px;
        }

        .card p,
        .card li {
          font-size: 15px;
          line-height: 1.65;
          color: #4d463d;
        }

        .card ul {
          padding-left: 20px;
        }

        .priceBlock {
          margin: 28px 0 18px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          padding-top: 22px;
          border-top: 1px solid #d8c5a6;
        }

        .priceBlock div {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .priceBlock span {
          font-size: 12px;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: #786f64;
        }

        .priceBlock del {
          font-size: 21px;
        }

        .memberPrice strong {
          color: #9f1f2b;
          font-size: 27px;
        }

        .textLink {
          color: #9f1f2b;
          font-weight: 700;
          text-decoration: none;
        }

        .note {
          margin-top: 18px;
          font-size: 13px !important;
          color: #746b60 !important;
        }

        .cpfsSection {
          background: #f7efe1;
        }

        .cpfsGrid {
          display: grid;
          grid-template-columns: minmax(0, 1.5fr) minmax(320px, .8fr);
          gap: 60px;
          align-items: start;
        }

        .bigText {
          font-family: "Playfair Display", Georgia, "Times New Roman", serif;
          font-size: 26px !important;
          color: #9c7847 !important;
        }

        .benefits {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }

        .benefits span {
          border: 1px solid #d1bea0;
          background: #fffaf2;
          padding: 9px 12px;
          font-size: 13px;
        }

        .pricingPanel {
          background: #fffaf2;
          border: 1px solid #d8c5a6;
          padding: 30px;
          position: sticky;
          top: 24px;
        }

        .pricingPanel h3 {
          font-family: "Playfair Display", Georgia, "Times New Roman", serif;
          font-size: 28px;
          margin-bottom: 22px;
        }

        .pricingRow {
          padding: 18px 0;
          border-top: 1px solid #e1d5c1;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
        }

        .pricingRow span,
        .pricingRow small {
          display: block;
        }

        .pricingRow small {
          color: #7d7368;
          margin-top: 5px;
        }

        .pricingRow strong {
          text-align: right;
          white-space: nowrap;
          color: #9f1f2b;
        }

        .saving {
          margin: 20px 0 8px;
          padding: 20px;
          background: #17130f;
          color: white;
        }

        .saving span,
        .saving strong {
          display: block;
        }

        .saving span {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .1em;
          opacity: .7;
        }

        .saving strong {
          margin-top: 4px;
          color: #d7b16e;
          font-family: "Playfair Display", Georgia, "Times New Roman", serif;
          font-size: 28px;
        }

        .implementation {
          background: #11100f;
          color: white;
          padding: 94px 0;
        }

        .sectionHeader.light .sectionLabel {
          color: #d7b16e;
        }

        .sectionHeader.light h2 {
          color: white;
        }

        .sectionHeader.light p {
          color: rgba(255,255,255,.64);
          max-width: 680px;
          line-height: 1.6;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1px;
          background: rgba(255,255,255,.13);
          border: 1px solid rgba(255,255,255,.13);
        }

        .step {
          background: #11100f;
          padding: 28px 22px;
          min-height: 220px;
        }

        .step > span {
          font-family: "Playfair Display", Georgia, "Times New Roman", serif;
          color: #d7b16e;
          font-size: 32px;
        }

        .step h3 {
          margin: 20px 0 10px;
          font-size: 18px;
        }

        .step p {
          color: rgba(255,255,255,.62);
          font-size: 14px;
          line-height: 1.55;
        }

        .demoGrid {
          display: grid;
          grid-template-columns: 1.4fr .7fr;
          gap: 60px;
          align-items: center;
        }

        .demoCard {
          background: #17130f;
          color: white;
          padding: 32px;
        }

        .demoCard strong {
          display: block;
          font-size: 44px;
          font-family: "Playfair Display", Georgia, "Times New Roman", serif;
          color: #d7b16e;
          margin: 10px 0;
        }

        .demoCard p {
          color: rgba(255,255,255,.68);
          font-size: 14px;
        }

        .full {
          width: 100%;
          margin-top: 12px;
        }

        .conditions {
          background: #eaddc8;
        }

        .finalCta {
          margin-top: 34px;
          padding: 24px;
          border: 1px solid #ccb895;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .finalCta span,
        .finalCta strong {
          display: block;
        }

        .finalCta span {
          font-size: 11px;
          letter-spacing: .1em;
          color: #776c61;
        }

        .finalCta strong {
          margin-top: 6px;
          font-size: 18px;
        }

        .contactLine {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 24px;
          font-size: 14px;
        }

        .contactLine a {
          color: #9f1f2b;
          text-decoration: none;
        }

        @media (max-width: 900px) {
          .hero {
            min-height: auto;
            padding: 86px 0 72px;
          }

          .cards,
          .cpfsGrid,
          .demoGrid {
            grid-template-columns: 1fr;
          }

          .steps {
            grid-template-columns: 1fr;
          }

          .step {
            min-height: auto;
          }

          .pricingPanel {
            position: static;
          }
        }

        @media (max-width: 600px) {
          .container,
          .narrow {
            width: min(100% - 28px, 1180px);
          }

          h1 {
            font-size: 46px;
          }

          .lead {
            font-size: 18px;
          }

          .heroOffers,
          .heroActions {
            flex-direction: column;
          }

          .offerBadge,
          .heroActions .btn {
            width: 100%;
          }

          .btn {
            min-width: 0;
            min-height: 58px;
            padding: 0 20px;
            gap: 18px;
            font-size: 12px;
          }

          .intro,
          .offersSection,
          .cpfsSection,
          .demo,
          .conditions,
          .implementation {
            padding: 68px 0;
          }

          .card {
            padding: 28px 22px;
          }

          .priceBlock {
            grid-template-columns: 1fr;
          }

          .finalCta {
            align-items: stretch;
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
