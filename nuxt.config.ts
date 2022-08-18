import { defineNuxtConfig } from "nuxt";
import GoogleFontsModule from '@nuxtjs/google-fonts'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ["@nuxtjs/google-fonts", "@pinia/nuxt"],
  modules: [
    GoogleFontsModule
  ],
  googleFonts: {
    families: {
      Roboto: true,
      Mulish: true
    }
  }
});
