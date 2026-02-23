import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { COPY } from "./copy";

export default function Nav() {
  const router = useRouter();
  const lang = router.locale || "en";
  const c = COPY[lang];

  const switchLocale = (l) => {
    router.push(router.asPath, router.asPath, { locale: l });
  };

  return (
    <div className="nav">
      <div className="container navInner">
        <Link className="brand" href="/" locale={lang}>
          <Image src="/img/csi_logo_color.png" alt="CSI logo" width={46} height={46} />
          <div className="name">{c.brand}</div>
        </Link>

        <div className="menu">
          <Link href="/programs" locale={lang}>{c.nav_programs}</Link>
          <Link href="/about" locale={lang}>{c.nav_about}</Link>
          <Link href="/system" locale={lang}>{c.nav_system}</Link>
          <Link href="/partners" locale={lang}>{c.nav_partners}</Link>
          <Link href="/contact" locale={lang}>{c.nav_contact}</Link>

          <div className="lang">
            <button className={lang === "en" ? "active" : ""} onClick={() => switchLocale("en")}>EN</button>
            <button className={lang === "fr" ? "active" : ""} onClick={() => switchLocale("fr")}>FR</button>
            <button className={lang === "de" ? "active" : ""} onClick={() => switchLocale("de")}>DE</button>
          </div>
        </div>
      </div>
    </div>
  );
}