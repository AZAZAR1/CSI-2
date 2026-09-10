import Link from "next/link";
import { useRouter } from "next/router";
import { COPY } from "./copy";

const ICSI_LINKEDIN_URL =
  "https://www.linkedin.com/company/cigar-sommelier-institute/";

const LINKEDIN_LABEL = {
  en: "LinkedIn",
  fr: "LinkedIn",
  de: "LinkedIn",
};

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

        <div className="small">
          <Link
            className="underline"
            href="/privacy"
            locale={lang}
          >
            {c.privacy}
          </Link>

          {" · "}

          <Link
            className="underline"
            href="/terms"
            locale={lang}
          >
            {c.terms}
          </Link>

          {" · "}

          <a
            className="underline"
            href={ICSI_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="International Cigar Sommelier Institute on LinkedIn"
          >
            {LINKEDIN_LABEL[lang] || "LinkedIn"} ↗
          </a>
        </div>
      </div>
    </div>
  );
}
