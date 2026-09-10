import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const NAV_COPY = {
  en: {
    courses: "Courses",
    hospitality: "Hospitality Solutions",
    predictor: "PredictorPro",
    science: "Science",
    about: "About",
    contact: "Contact ICSI",
  },

  fr: {
    courses: "Cours",
    hospitality: "Solutions Hospitality",
    predictor: "PredictorPro",
    science: "Science",
    about: "À propos",
    contact: "Contacter ICSI",
  },

  de: {
    courses: "Kurse",
    hospitality: "Hospitality-Lösungen",
    predictor: "PredictorPro",
    science: "Wissenschaft",
    about: "Über ICSI",
    contact: "ICSI kontaktieren",
  },
};

export default function Nav() {
  const router = useRouter();
  const lang = (router.locale || "en").toLowerCase();
  const nav = NAV_COPY[lang] || NAV_COPY.en;

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
              width={140}
              height={140}
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

        {/* ===== MENU ===== */}
        <div className="menu">

          <Link
            href="/courses"
            locale={lang}
          >
            {nav.courses}
          </Link>

          <Link
            href="/cpfs-implementation"
            locale={lang}
          >
            {nav.hospitality}
          </Link>

          <Link
            href="/portal/PredictorPro"
            locale={lang}
          >
            {nav.predictor}
          </Link>

          <Link
            href="/system"
            locale={lang}
          >
            {nav.science}
          </Link>

          <Link
            href="/about"
            locale={lang}
          >
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

            <button
              type="button"
              className={lang === "de" ? "active" : ""}
              onClick={() => switchLocale("de")}
              aria-label="Deutsch"
            >
              DE
            </button>
          </div>

        </div>
      </div>

      <style jsx global>{`
        /*
         * CONTACT ICSI
         * Deliberately differentiated from the editorial navigation.
         */

        .nav .navContactButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          min-height: 40px;
          padding: 0 18px;

          background: #601818;
          border: 1px solid #601818;

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

        /*
         * Keep longer new navigation labels clean on medium screens.
         */
        @media (max-width: 1180px) {
          .nav .menu {
            gap: 16px;
          }

          .nav .menu > a {
            font-size: 0.76rem;
          }

          .nav .navContactButton {
            padding-left: 14px;
            padding-right: 14px;
            font-size: 0.66rem;
          }
        }
      `}</style>
    </div>
  );
}
