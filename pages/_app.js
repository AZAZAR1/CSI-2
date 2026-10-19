import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

const SITE_NAME = "International Cigar Sommelier Institute";
const SITE_URL = "https://www.cigarsommelierinstitute.com";

const SITE_DESCRIPTION =
  "Swiss luxury. Scientific authority. Discreet mastery of the cigar experience through the Cigar Peak-Flavor System®.";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/img/csi_logo_color.png`,
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Geneva",
    addressCountry: "CH",
  },
  founder: {
    "@type": "Person",
    name: "Anthony Azar",
    jobTitle: "Founder",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: ["en", "fr"],
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Default site metadata */}
        <title key="title">{SITE_NAME}</title>
        <meta
          key="description"
          name="description"
          content={SITE_DESCRIPTION}
        />

        {/* Responsive viewport */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        {/* Favicon */}
        <link
          rel="icon"
          href="/img/csi_logo_emboss.png"
        />

        {/* Theme */}
        <meta
          name="theme-color"
          content="#ffffff"
        />

        {/* Global Organization structured data */}
        <script
          key="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgSchema),
          }}
        />

        {/* Global Website structured data */}
        <script
          key="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/*
          Course structured data intentionally removed.

          Levels I, II, III and IV will be defined
          exclusively on the Courses page.
        */}
      </Head>

      {/* Google Tag Manager - preserved */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NF2QVQN5');
          `,
        }}
      />

      {/* Render current page */}
      <Component {...pageProps} />
    </>
  );
}
