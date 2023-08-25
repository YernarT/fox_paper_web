// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",

  devtools: { enabled: false },

  devServer: {
    port: 3000,
  },

  css: [
    "~/assets/style/variables.css",
    "~/assets/style/reset.css",
    // Global class
    "~/assets/style/itisit-container.css",
    "~/assets/style/itisit-icon.css",
  ],

  modules: ["nuxt-icon", "@pinia/nuxt", "nuxt-lodash"],

  nitro: {
    prerender: {
      failOnError: false,
    },
  },
});
