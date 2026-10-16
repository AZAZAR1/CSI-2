/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ["en", "fr"],
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
        permanent: true,
        locale: false
      },
      {
        source: "/de/programs",
        destination: "/de/courses",
        permanent: true,
        locale: false
      },
      {
        source: "/event",
        destination: "/",
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;
