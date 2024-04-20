// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",

  devtools: { enabled: true },

  devServer: {
    port: 3000,
  },

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },

  css: [
    // Global style, classes
    "~/assets/style/variables.css",
    "~/assets/style/reset.css",
    "~/assets/style/itisit-container.css",
    "~/assets/style/antd.css",
  ],

  modules: ["@pinia/nuxt", "nuxt-icon", "nuxt-lodash"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
