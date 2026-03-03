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
        source: "/programs",
        destination: "/courses",
        permanent: true
      },
      {
        source: "/fr/programs",
        destination: "/fr/courses",
        permanent: true
      },
      {
        source: "/de/programs",
        destination: "/de/courses",
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
