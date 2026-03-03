import Head from "next/head";
import { useRouter } from "next/router";

const SITE = {
  name: "International Cigar Sommelier Institute",
  domain: "https://cigarsommelierinstitute.com",
  ogImage: "/img/og-default.png", // put a 1200x630 image in /public/img/
};

export default function Seo({
  title,
  description,
  path = "",
  ogImage,
  noindex = false,
}) {
  const router = useRouter();
  const locale = (router.locale || "en").toLowerCase();

  const url = `${SITE.domain}${path || router.asPath}`.split("?")[0];

  // Hreflang URLs (adjust if your locale routing differs)
  const alternates = {
    en: `${SITE.domain}${router.pathname}`,
    fr: `${SITE.domain}/fr${router.pathname === "/" ? "" : router.pathname}`,
    de: `${SITE.domain}/de${router.pathname === "/" ? "" : router.pathname}`,
  };

  return (
    <Head>
      <title>{title ? `${title} | ${SITE.name}` : SITE.name}</title>
      {description && <meta name="description" content={description} />}

      {noindex && <meta name="robots" content="noindex,nofollow" />}
      {!noindex && <meta name="robots" content="index,follow" />}

      <link rel="canonical" href={url} />

      {/* hreflang */}
      <link rel="alternate" hrefLang="en" href={alternates.en} />
      <link rel="alternate" hrefLang="fr" href={alternates.fr} />
      <link rel="alternate" hrefLang="de" href={alternates.de} />
      <link rel="alternate" hrefLang="x-default" href={alternates.en} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title || SITE.name} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={`${SITE.domain}${ogImage || SITE.ogImage}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || SITE.name} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={`${SITE.domain}${ogImage || SITE.ogImage}`} />
    </Head>
  );
}