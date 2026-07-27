// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Create · Deliver · Capture | Flow-Based Business Solutions',

      htmlAttrs: {
        lang: 'en',
      },

      /*
       * Google Tag Manager.
       * This loads GTM globally across every page and language version.
       */
      script: [
        {
          key: 'google-tag-manager',
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MM9FFQBW');`,
          tagPosition: 'head',
        },
      ],

      /*
       * Google Tag Manager fallback for visitors with JavaScript disabled.
       * Nuxt places this immediately after the opening <body> tag.
       */
      noscript: [
        {
          key: 'google-tag-manager-noscript',
          innerHTML:
            '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MM9FFQBW" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          tagPosition: 'bodyOpen',
        },
      ],

      link: [
        /*
         * Critical hero preload.
         * This makes the browser request the landing-page hero image immediately,
         * before Vue hydration and before the component tree finishes rendering.
         */
        {
          rel: 'preload',
          as: 'image',
          href: '/team/HeroHome.webp',
          type: 'image/webp',
          fetchpriority: 'high',
        },

        { rel: 'author', href: '/about-us' },
        { rel: 'canonical', href: 'https://createdelivercapture.com' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-16x16.png',
          sizes: '16x16',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-32x32.png',
          sizes: '32x32',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-96x96.png',
          sizes: '96x96',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-128x128.png',
          sizes: '128x128',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-196x196.png',
          sizes: '196x196',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '57x57',
          href: '/apple-touch-icon-57x57.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '60x60',
          href: '/apple-touch-icon-60x60.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '72x72',
          href: '/apple-touch-icon-72x72.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '76x76',
          href: '/apple-touch-icon-76x76.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '114x114',
          href: '/apple-touch-icon-114x114.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '120x120',
          href: '/apple-touch-icon-120x120.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '144x144',
          href: '/apple-touch-icon-144x144.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '152x152',
          href: '/apple-touch-icon-152x152.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon-180x180.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '192x192',
          href: '/apple-touch-icon-192x192.png',
        },
      ],

      meta: [
        { name: 'theme-color', content: '#0A0A0A' },
        { name: 'color-scheme', content: 'dark' },
        {
          name: 'description',
          content:
            'CDC helps businesses Create value, Deliver results, and Capture opportunities with Flow-Based Methodologies, IBP & EBP, SCM, and Digital Transformation.',
        },
        { name: 'author', content: 'Create Deliver Capture' },
        { name: 'referrer', content: 'origin-when-cross-origin' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        {
          name: 'keywords',
          content:
            'Create Deliver Capture, Flow-Based Methodologies, Business Planning, Supply Chain Management, Digital Transformation, CDC Consulting',
        },
        {
          property: 'og:title',
          content: 'Create · Deliver · Capture | Flow-Based Business Solutions',
        },
        {
          property: 'og:description',
          content:
            'CDC helps businesses Create value, Deliver results, and Capture opportunities with Flow-Based Methodologies, IBP & EBP, SCM, and Digital Transformation.',
        },
        {
          property: 'og:image',
          content: 'https://createdelivercapture.com/og_cover.png',
        },
        {
          name: 'twitter:title',
          content: 'Create · Deliver · Capture | Flow-Based Business Solutions',
        },
        {
          name: 'twitter:description',
          content:
            'CDC helps businesses Create value, Deliver results, and Capture opportunities with Flow-Based Methodologies, IBP & EBP, SCM, and Digital Transformation.',
        },
        {
          name: 'twitter:image',
          content: 'https://createdelivercapture.com/og_cover.png',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://createdelivercapture.com',
      staticformsAccessKey: '',
      scmCalculatorApiBase: process.env.NUXT_PUBLIC_SCM_CALCULATOR_API_BASE || '',
    },
  },

  compatibilityDate: '2025-07-15',

  /*
   * Disable devtools in production.
   * This avoids shipping unnecessary development overhead.
   */
  devtools: {
    enabled: false,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/i18n',
  ],

  shadcn: {
    componentDir: '~/components/ui',
  },

  image: {
    quality: 70,
    format: ['webp'],
  },

  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'locales',

    bundle: {
      optimizeTranslationDirective: false,
    },

    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'fr',
        name: 'Français',
        file: 'fr.json',
      },
      {
        code: 'de',
        name: 'Deutsch',
        file: 'de.json',
      },
    ],
  },
})
