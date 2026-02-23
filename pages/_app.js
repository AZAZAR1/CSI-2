import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>International Cigar Sommelier Institute</title>
        <meta
          name="description"
          content="Swiss luxury. Scientific authority. Discreet mastery of the cigar experience."
        />
        <link rel="icon" href="/img/csi_logo_emboss.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}