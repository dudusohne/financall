import { defineNuxtConfig } from "nuxt";
import GoogleFontsModule from "@nuxtjs/google-fonts";

export default defineNuxtConfig({
  buildModules: [
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "@nuxtjs/style-resources",
    "~/modules/material-design-icons.js",
  ],
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
    baseURL: process.env.BASE_URL,
  },
  runtimeConfig: {
    baseURL: process.env.NUXT_BASE_URL ?? "http://localhost:3000",
    public: {
      firebaseApiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY ?? "",
      firebaseAuthDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "",
      firebaseDatabaseURL: process.env.NUXT_PUBLIC_FIREBASE_DATABASE_URL ?? "",
      firebaseProjectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID ?? "",
      firebaseStorageBucket:
        process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "",
      firebaseMessagingSenderId:
        process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "",
      firebaseAppId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID ?? "",
    },
  },
  pwa: {
    workbox: {
      importScripts: ["/firebase-auth-sw.js"],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: process.env.NODE_ENV === "development",
    },
  },
  link: [
    // Add this
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    },
  ],
  nitro: {
    externals: {
      inline: ["uuid"],
    },
  },
  css: ["~assets/scss/global.scss"],
  styleResources: {
    scss: ["./assets/scss/*.scss"],
  },
});
