/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "fr", "de"],
    defaultLocale: "en"
  },

  async redirects() {
    return [
      {
        source: "/courses",
        destination: "/courses",
        permanent: true
      },
      {
        source: "/fr/courses",
        destination: "/fr/courses",
        permanent: true
      },
      {
        source: "/de/courses",
        destination: "/de/courses",
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
