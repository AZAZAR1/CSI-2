import Head from "next/head";
import { useRouter } from "next/router";

export default function Seo({ title, description, path = "/" }) {
  const router = useRouter();

  const baseUrl = "https://cigarsommelierinstitute.com";
  const locale = (router.locale || "en").toLowerCase();
  const defaultLocale = (router.defaultLocale || "en").toLowerCase();

  // Ensure path starts with "/"
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // Default locale should NOT be prefixed (per your config)
  const localePrefix = locale === defaultLocale ? "" : `/${locale}`;
  const canonical = `${baseUrl}${localePrefix}${cleanPath}`;

  // Hreflang URLs
  const hrefEn = `${baseUrl}${cleanPath}`;
  const hrefFr = `${baseUrl}/fr${cleanPath}`;
  const hrefDe = `${baseUrl}/de${cleanPath}`;

  const ogImage = `${baseUrl}/img/og-preview.png`;

  return (
    <Head>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Hreflang */}
      <link rel="alternate" hrefLang="en" href={hrefEn} />
      <link rel="alternate" hrefLang="fr" href={hrefFr} />
      <link rel="alternate" hrefLang="de" href={hrefDe} />
      <link rel="alternate" hrefLang="x-default" href={hrefEn} />

      {/* Open Graph */}
      <meta
        property="og:site_name"
        content="International Cigar Sommelier Institute"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
}