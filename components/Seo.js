import Head from "next/head";
import { useRouter } from "next/router";

export default function Seo({ title, description, path }) {
  const router = useRouter();
  const locale = router.locale || "en";
  const baseUrl = "https://cigarsommelierinstitute.com";

  const canonical = `${baseUrl}/${locale}${path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Hreflang */}
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en${path}`} />
      <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr${path}`} />
      <link rel="alternate" hrefLang="de" href={`${baseUrl}/de${path}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en${path}`} />

      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
    </Head>
  );
}