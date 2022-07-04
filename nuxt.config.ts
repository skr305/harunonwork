import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'harunon portfolio',
      htmlAttrs: {
        'data-theme': 'cupcake',
        lang: 'ja',
        prefix: 'og: http://ogp.me/ns#',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'description',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'harunon portfolio',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://harunonwork.pages.dev',
        }, //絶対パスで指定
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://harunonwork.pages.dev/public/obp.png',
        }, //絶対パスで指定
        { hid: 'og:title', property: 'og:title', content: 'harunon portfolio' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'harunon portfolio',
        },
        { name: 'twitter:card', content: 'summary' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  modules: [
    // Docs: https://tailwindcss.nuxtjs.org
    '@nuxtjs/tailwindcss',
  ],

  // buildModules: ['@nuxt/image'],
  // image: {
  //   domains: ['https://twitter.com'],
  // },
})
