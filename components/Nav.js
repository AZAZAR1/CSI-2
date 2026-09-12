import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NAV_COPY = {
  en: {
    courses: "Courses",
    hospitality: "Hospitality Solutions",
    predictor: "PredictorPro",
    science: "Science",
    about: "About",
    contact: "Contact Us",
  },

  fr: {
    courses: "Cours",
    hospitality: "Solutions d'Hospitalité",
    predictor: "PredictorPro",
    science: "Science",
    about: "À propos",
    contact: "Contactez Nous",
  },

};

export default function Nav() {
  const router = useRouter();
  const lang = (router.locale || "en").toLowerCase();
  const nav = NAV_COPY[lang] || NAV_COPY.en;
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => { setMobileOpen(false); }, [router.asPath]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const switchLocale = (locale) => {
    router.push(router.asPath, router.asPath, {
      locale,
    });
  };

  return (
    <div className="nav">
      <div className="container navInner">

        {/* ===== BRAND ===== */}
        <Link
          className="brandWrap"
          href="/"
          locale={lang}
          aria-label="International Cigar Sommelier Institute"
        >
          <div className="brandLogoWrap">
            <Image
              src="/img/csi_logo_color.png"
              alt="International Cigar Sommelier Institute"
              width={92}
              height={92}
              className="brandLogo"
              priority
            />
          </div>

          <div className="brandText">
            <div>INTERNATIONAL</div>
            <div>CIGAR</div>
            <div>SOMMELIER</div>
            <div>INSTITUTE</div>
          </div>
        </Link>

        <button type="button" className={`mobileMenuToggle ${mobileOpen ? "isOpen" : ""}`}
          onClick={() => setMobileOpen((v) => !v)} aria-expanded={mobileOpen}
          aria-controls="icsi-mobile-menu" aria-label={mobileOpen ? "Close navigation" : "Open navigation"}>
          <span /><span /><span />
        </button>

        {/* ===== MENU ===== */}
        <div id="icsi-mobile-menu" className={`menu ${mobileOpen ? "mobileOpen" : ""}`}>

          <Link href="/courses" locale={lang}>
            {nav.courses}
          </Link>

          <Link href="/cpfs-implementation" locale={lang}>
            {nav.hospitality}
          </Link>

          <Link
            href="/predictorpro-access"
            locale={lang}
            aria-label="Reserved PredictorPro access"
          >
            {nav.predictor}
          </Link>

          <Link href="/system" locale={lang}>
            {nav.science}
          </Link>

          <Link href="/about" locale={lang}>
            {nav.about}
          </Link>

          {/* ===== PRIMARY CTA ===== */}
          <Link
            href="/contact"
            locale={lang}
            className="navContactButton"
          >
            {nav.contact}
          </Link>

          {/* ===== LANGUAGE SWITCHER ===== */}
          <div className="lang">
            <button
              type="button"
              className={lang === "en" ? "active" : ""}
              onClick={() => switchLocale("en")}
              aria-label="English"
            >
              EN
            </button>

            <button
              type="button"
              className={lang === "fr" ? "active" : ""}
              onClick={() => switchLocale("fr")}
              aria-label="Français"
            >
              FR
            </button>

          </div>

        </div>
      </div>

      <style jsx global>{`
        /* =========================================================
           ICSI NAVIGATION
           ========================================================= */

        .nav .navInner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          min-height: 128px;
        }

        /* =========================================================
           BRAND
           ========================================================= */

        .nav .brandWrap {
          display: flex;
          align-items: center;
          gap: 18px;

          flex: 0 0 auto;
          min-width: 355px;

          text-decoration: none;
          color: #16161f;
        }

        .nav .brandLogoWrap {
          flex: 0 0 92px;

          width: 92px;
          height: 92px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav .brandLogo {
          display: block !important;

          width: 92px !important;
          height: 92px !important;

          max-width: 92px !important;
          max-height: 92px !important;

          object-fit: contain !important;

          flex-shrink: 0;
        }

        .nav .brandText {
          display: flex;
          flex-direction: column;

          width: auto;
          min-width: 220px;

          color: #16161f;

          font-family:
            "Playfair Display",
            Georgia,
            serif;

          font-size: 1rem;
          line-height: 0.98;
          letter-spacing: 0.025em;
          font-weight: 400;

          white-space: nowrap;
        }

        .nav .brandText div {
          display: block;
          width: auto;

          margin: 0;
          padding: 0;

          white-space: nowrap !important;
          word-break: normal !important;
          overflow-wrap: normal !important;
        }

        /* =========================================================
           MAIN MENU
           ========================================================= */

        .nav .menu {
          display: flex;
          align-items: center;
          justify-content: flex-end;

          flex: 1 1 auto;

          gap: 25px;

          min-width: 0;

          white-space: nowrap;
        }

        .nav .menu > a:not(.navContactButton) {
          flex-shrink: 0;

          color: #56545c;
          text-decoration: none;

          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            Segoe UI,
            Roboto,
            Helvetica,
            Arial;

          font-size: 0.82rem;
          line-height: 1;
          font-weight: 400;

          white-space: nowrap;

          transition: color 160ms ease;
        }

        .nav .menu > a:not(.navContactButton):hover {
          color: #601818;
        }

        /* =========================================================
           CONTACT ICSI
           ========================================================= */

        .nav .navContactButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          min-height: 46px;
          padding: 0 20px;

          background: #601818;
          border: 1px solid #601818;
          border-radius: 10px;

          color: #faf4e8 !important;
          text-decoration: none !important;

          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            Segoe UI,
            Roboto,
            Helvetica,
            Arial;

          font-size: 0.7rem;
          line-height: 1;
          font-weight: 600;

          letter-spacing: 0.12em;
          text-transform: uppercase;

          white-space: nowrap;

          transition:
            background 160ms ease,
            border-color 160ms ease,
            color 160ms ease;
        }

        .nav .navContactButton:hover {
          background: #c0242f;
          border-color: #c0242f;
          color: #ffffff !important;
        }

        /* =========================================================
           LANGUAGE SELECTOR
           ========================================================= */

        .nav .lang {
          display: flex;
          align-items: center;
          gap: 7px;

          flex-shrink: 0;
          margin-left: 2px;
        }

        .nav .lang button {
          min-width: 39px;
          height: 39px;

          padding: 0 10px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          border: 1px solid rgba(22, 22, 31, 0.14);
          border-radius: 18px;

          background: transparent;
          color: #67646b;

          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            Segoe UI,
            Roboto,
            Helvetica,
            Arial;

          font-size: 0.7rem;

          cursor: pointer;
        }

        .nav .lang button.active {
          color: #16161f;
          border-color: #c8a24a;
        }

        .nav .mobileMenuToggle { display:none; width:44px; height:44px; padding:10px; border:0; background:transparent; cursor:pointer; }
        .nav .mobileMenuToggle span { display:block; width:24px; height:1.5px; margin:5px auto; background:#16161f; transition:transform 180ms ease,opacity 180ms ease; }
        .nav .mobileMenuToggle.isOpen span:nth-child(1) { transform:translateY(6.5px) rotate(45deg); }
        .nav .mobileMenuToggle.isOpen span:nth-child(2) { opacity:0; }
        .nav .mobileMenuToggle.isOpen span:nth-child(3) { transform:translateY(-6.5px) rotate(-45deg); }

        /* =========================================================
           MEDIUM DESKTOP
           Reduce spacing before touching the ICSI identity.
           ========================================================= */

        @media (max-width: 1380px) {
          .nav .navInner {
            gap: 22px;
          }

          .nav .brandWrap {
            min-width: 330px;
            gap: 14px;
          }

          .nav .brandLogoWrap {
            flex-basis: 82px;
            width: 82px;
            height: 82px;
          }

          .nav .brandLogo {
            width: 82px !important;
            height: 82px !important;
            max-width: 82px !important;
            max-height: 82px !important;
          }

          .nav .brandText {
            min-width: 205px;
            font-size: 0.9rem;
          }

          .nav .menu {
            gap: 18px;
          }

          .nav .menu > a:not(.navContactButton) {
            font-size: 0.76rem;
          }

          .nav .navContactButton {
            min-height: 42px;
            padding: 0 16px;
            font-size: 0.65rem;
          }

          .nav .lang {
            gap: 4px;
          }

          .nav .lang button {
            min-width: 34px;
            height: 34px;
            padding: 0 7px;
          }
        }

        /* =========================================================
           TABLET / SMALL LAPTOP

           At this width it is better to retain the ICSI seal and
           remove the written wordmark than distort or wrap it.
           ========================================================= */

        @media (max-width: 1180px) {
          .nav .brandWrap {
            min-width: auto;
          }

          .nav .brandText {
            display: none;
          }

          .nav .brandLogoWrap {
            flex-basis: 78px;
            width: 78px;
            height: 78px;
          }

          .nav .brandLogo {
            width: 78px !important;
            height: 78px !important;
            max-width: 78px !important;
            max-height: 78px !important;
          }

          .nav .menu {
            gap: 15px;
          }

          .nav .menu > a:not(.navContactButton) {
            font-size: 0.72rem;
          }

          .nav .navContactButton {
            padding: 0 13px;
          }
        }
        @media (max-width: 760px) {
          .nav { position:relative; z-index:70; background:#fff; border-bottom:1px solid rgba(22,22,31,.1); }
          .nav .navInner { min-height:82px; gap:12px; }
          .nav .brandLogoWrap { flex-basis:62px; width:62px; height:62px; }
          .nav .brandLogo { width:62px !important; height:62px !important; max-width:62px !important; max-height:62px !important; }
          .nav .mobileMenuToggle { display:block; margin-left:auto; position:relative; z-index:72; }
          .nav .menu { display:none; position:absolute; top:82px; left:0; right:0; z-index:71; padding:18px 24px 28px; background:#fff; border-top:1px solid rgba(22,22,31,.08); border-bottom:1px solid rgba(22,22,31,.12); box-shadow:0 18px 38px rgba(22,22,31,.1); white-space:normal; }
          .nav .menu.mobileOpen { display:flex; flex-direction:column; align-items:stretch; gap:0; }
          .nav .menu > a:not(.navContactButton) { width:100%; padding:15px 0; border-bottom:1px solid rgba(22,22,31,.08); font-size:.88rem; line-height:1.2; }
          .nav .navContactButton { width:100%; min-height:50px; margin-top:20px; border-radius:0; }
          .nav .lang { width:100%; margin:18px 0 0; justify-content:flex-start; }
          .nav .lang button { min-width:44px; height:40px; }
        }
      `}</style>
    </div>
  );
}
