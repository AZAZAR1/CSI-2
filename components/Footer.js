import Link from "next/link";
import { useRouter } from "next/router";
import { COPY } from "./copy";

export default function Footer() {
  const { locale } = useRouter();
  const lang = locale || "en";
  const c = COPY[lang];
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="container footerGrid">
        <div>
          <div className="badge">Swiss institutional minimal • Scientific authority</div>
          <div className="small" style={{ marginTop: 10 }}>
            © {year} {c.brand}. All rights reserved.
          </div>
        </div>
        <div className="small">
          <Link className="underline" href="/privacy" locale={lang}>{c.privacy}</Link>{" "}
          ·{" "}
          <Link className="underline" href="/terms" locale={lang}>{c.terms}</Link>
        </div>
      </div>
    </div>
  );
}