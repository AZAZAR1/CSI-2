/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  // Supported languages: English and French only
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en"
  },

  async redirects() {
    return [
      // 1. Redirect all German URLs to English
      {
        source: "/de",
        destination: "/",
        permanent: true,
        locale: false
      },
      {
        source: "/de/:path*",
        destination: "/:path*",
        permanent: true,
        locale: false
      },

      // 2. Redirect legacy programmes URLs
      {
        source: "/programs",
        destination: "/courses",
        permanent: true
      },
      {
        source: "/fr/programs",
        destination: "/fr/courses",
        permanent: true,
        locale: false
      },

      // 3. Keep event page deactivated
      {
        source: "/event",
        destination: "/",
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;

