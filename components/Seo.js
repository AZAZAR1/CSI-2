import Head from "next/head";
import { useRouter } from "next/router";

const BASE_URL = "https://www.cigarsommelierinstitute.com";

export default function Seo({
  title,
  description,
  path = "/"
}) {
  const router = useRouter();

  const locale = (router.locale || "en").toLowerCase();
  const defaultLocale = (
    router.defaultLocale || "en"
  ).toLowerCase();

  // Normalize the supplied page path.
  // Remove query strings, fragments, and trailing slashes.
  function normalizePath(value) {
    let clean = String(value || "/")
      .split("?")[0]
      .split("#")[0];

    if (!clean.startsWith("/")) {
      clean = `/${clean}`;
    }

    clean = clean.replace(/\/+/g, "/");

    // Remove any existing language prefix.
    clean = clean.replace(/^\/(en|fr|de)(?=\/|$)/i, "");

    if (!clean || clean === "/") {
      return "/";
    }

    return clean.replace(/\/+$/, "");
  }

  const cleanPath = normalizePath(path);

  // English is the default, unprefixed language.
  const localePrefix =
    locale === defaultLocale ? "" : `/${locale}`;

  function buildUrl(prefix, pagePath) {
    const combined =
      pagePath === "/"
        ? `${prefix}/`
        : `${prefix}${pagePath}`;

    return `${BASE_URL}${combined}`;
  }

  // Canonical URL for the current page.
  const canonical = buildUrl(localePrefix, cleanPath);

  // Only English and French are supported.
  const hrefEn = buildUrl("", cleanPath);
  const hrefFr = buildUrl("/fr", cleanPath);

  // Social sharing image.
  const ogImage = `${BASE_URL}/img/og-preview.png`;

  return (
    <Head>
      {/* Primary SEO metadata */}
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />

      {/* Canonical URL */}
      <link
        key="canonical"
        rel="canonical"
        href={canonical}
      />

      {/* Supported languages: EN and FR */}
      <link
        key="hreflang-en"
        rel="alternate"
        hrefLang="en"
        href={hrefEn}
      />
      <link
        key="hreflang-fr"
        rel="alternate"
        hrefLang="fr"
        href={hrefFr}
      />
      <link
        key="hreflang-default"
        rel="alternate"
        hrefLang="x-default"
        href={hrefEn}
      />

      {/* Open Graph */}
      <meta
        property="og:site_name"
        content="International Cigar Sommelier Institute"
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:title"
        content={title}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:url"
        content={canonical}
      />
      <meta
        property="og:image"
        content={ogImage}
      />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:title"
        content={title}
      />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta
        name="twitter:image"
        content={ogImage}
      />
    </Head>
  );
}
