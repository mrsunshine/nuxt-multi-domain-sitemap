// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/sitemap', '@nuxtjs/i18n'],
  i18n: {
    langDir: 'locales/',
    locales: [
      {
        code: 'hr',
        iso: 'hr-HR',
        file: 'hr.ts',
        domain: 'test1.hr',
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.ts',
        domain: 'test2.com',
      },
    ],
    differentDomains: true,
    detectBrowserLanguage: false,
    strategy: 'prefix',
    defaultLocale: 'en',
  },
  site: {
    url: 'http://nuxtseo.com',
  },
});
