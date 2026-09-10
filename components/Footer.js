import Link from "next/link";
import { useRouter } from "next/router";
import { COPY } from "./copy";

const ICSI_LINKEDIN_URL =
  "https://www.linkedin.com/company/cigar-sommelier-institute/";

export default function Footer() {
  const { locale } = useRouter();
  const lang = locale || "en";
  const c = COPY[lang] || COPY.en;
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="container footerGrid">
        <div>
          <div className="badge">
            Swiss institutional • Scientific authority
          </div>

          <div className="small" style={{ marginTop: 10 }}>
            © {year} {c.brand}. All rights reserved.
          </div>
        </div>

        <div className="footerLinks">
          <div className="small footerLegalLinks">
            <Link
              className="underline"
              href="/privacy"
              locale={lang}
            >
              {c.privacy}
            </Link>

            <span className="footerSeparator">·</span>

            <Link
              className="underline"
              href="/terms"
              locale={lang}
            >
              {c.terms}
            </Link>
          </div>

          <a
            className="footerLinkedIn"
            href={ICSI_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="International Cigar Sommelier Institute on LinkedIn"
          >
            <svg
              className="footerLinkedInIcon"
              viewBox="0 0 34 34"
              role="img"
              aria-hidden="true"
            >
              {/* Black LinkedIn square */}
              <rect
                x="1"
                y="1"
                width="32"
                height="32"
                rx="2.5"
                fill="#121214"
              />

              {/* White i */}
              <circle
                cx="9.2"
                cy="10"
                r="2.1"
                fill="#FFFFFF"
              />

              <rect
                x="7.2"
                y="13.5"
                width="4"
                height="13"
                fill="#FFFFFF"
              />

              {/* White n */}
              <path
                d="
                  M15 13.5
                  h3.8
                  v1.8
                  c1.2-1.5 2.9-2.3 5-2.3
                  4.3 0 5.2 2.8 5.2 6.5
                  v7
                  h-4
                  v-6.3
                  c0-1.8-.1-4.1-2.6-4.1
                  -2.6 0-3 1.9-3 3.9
                  v6.5
                  H15
                  z
                "
                fill="#FFFFFF"
              />
            </svg>

            <span className="footerLinkedInText">
              LinkedIn
            </span>
          </a>
        </div>
      </div>

      <style jsx global>{`
        .footer .footerGrid {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        .footer .footerLinks {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .footer .footerLegalLinks {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer .footerSeparator {
          opacity: 0.45;
        }

        /*
         * LinkedIn
         * Explicit black values are used rather than inheriting
         * .footer / .small muted text styling.
         */
        .footer .footerLinkedIn,
        .footer .footerLinkedIn:link,
        .footer .footerLinkedIn:visited {
          display: inline-flex;
          align-items: center;
          gap: 11px;

          color: #121214 !important;
          text-decoration: none !important;

          opacity: 1;

          transition:
            opacity 160ms ease,
            transform 160ms ease;
        }

        .footer .footerLinkedIn:hover {
          color: #121214 !important;
          opacity: 0.72;
          transform: translateY(-1px);
        }

        .footer .footerLinkedIn:focus-visible {
          outline: 2px solid #b88a2a;
          outline-offset: 5px;
          border-radius: 3px;
        }

        .footer .footerLinkedInIcon {
          display: block;

          width: 31px;
          height: 31px;

          min-width: 31px;
          flex: 0 0 31px;
        }

        .footer .footerLinkedInText {
          color: #121214 !important;

          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            "Segoe UI",
            Roboto,
            Helvetica,
            Arial,
            sans-serif;

          font-size: 1rem;
          line-height: 1;
          font-weight: 500;
          letter-spacing: 0;
        }

        @media (max-width: 760px) {
          .footer .footerGrid {
            align-items: flex-start;
            flex-direction: column;
          }

          .footer .footerLinks {
            width: 100%;
            justify-content: space-between;
            gap: 20px;
          }
        }

        @media (max-width: 520px) {
          .footer .footerLinks {
            align-items: flex-start;
            flex-direction: column;
          }

          .footer .footerLinkedInIcon {
            width: 29px;
            height: 29px;
            min-width: 29px;
            flex-basis: 29px;
          }

          .footer .footerLinkedInText {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
}
