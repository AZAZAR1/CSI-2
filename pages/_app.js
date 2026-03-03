import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const siteName = "International Cigar Sommelier Institute";
  const siteUrl = "https://cigarsommelierinstitute.com";
  const description =
    "Swiss luxury. Scientific authority. Discreet mastery of the cigar experience through the Peak-Flavor System™.";

  return (
    <>
      <Head>
        {/* Basic */}
        <title>{siteName}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/csi_logo_emboss.png" />

        {/* Canonical Base */}
        <meta property="og:site_name" content={siteName} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={`${siteUrl}/img/og-preview.png`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteName} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={`${siteUrl}/img/og-preview.png`}
        />

        {/* Theme */}
        <meta name="theme-color" content="#ffffff" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: siteName,
              url: siteUrl,
              logo: `${siteUrl}/img/csi_logo_color.png`,
              description: description,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Geneva",
                addressCountry: "Switzerland",
              },
              founder: {
                "@type": "Person",
                name: "Anthony Azar",
              },
            }),
          }}
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}