import { defineNuxtConfig } from "nuxt";
import GoogleFontsModule from "@nuxtjs/google-fonts";

export default defineNuxtConfig({
  buildModules: ["@nuxtjs/google-fonts", "@pinia/nuxt"],
  modules: [GoogleFontsModule],
  googleFonts: {
    families: {
      Roboto: true,
      Mulish: true,
    },
  },
  head: {
    title: "financAll",
    meta: [{ charset: "utf-8" }],
  },
  env: {
    baseURL: process.env.BASE_URL
  }
});
