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
              aria-hidden="true"
            >
              <rect
                x="1"
                y="1"
                width="32"
                height="32"
                rx="2"
                fill="currentColor"
              />

              <circle
                cx="9.2"
                cy="10"
                r="2.1"
                fill="#121214"
              />

              <rect
                x="7.2"
                y="13.5"
                width="4"
                height="13"
                fill="#121214"
              />

              <path
                d="M15 13.5h3.8v1.8c1.2-1.5 2.9-2.3 5-2.3
                   4.3 0 5.2 2.8 5.2 6.5v7h-4v-6.3
                   c0-1.8-.1-4.1-2.6-4.1-2.6 0-3 1.9-3 3.9v6.5H15z"
                fill="#121214"
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

        .footer .footerLinkedIn {
          display: inline-flex;
          align-items: center;
          gap: 12px;

          color: #f7f4ef;
          text-decoration: none;

          transition:
            opacity 160ms ease,
            transform 160ms ease;
        }

        .footer .footerLinkedIn:hover {
          opacity: 0.72;
          transform: translateY(-1px);
        }

        .footer .footerLinkedInIcon {
          display: block;

          width: 30px;
          height: 30px;

          flex: 0 0 30px;

          color: #f7f4ef;
        }

        .footer .footerLinkedInText {
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            Segoe UI,
            Roboto,
            Helvetica,
            Arial;

          font-size: 0.95rem;
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
            width: 27px;
            height: 27px;
            flex-basis: 27px;
          }

          .footer .footerLinkedInText {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}
