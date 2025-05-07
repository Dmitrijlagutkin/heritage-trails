// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://heritage-trails.com', // Replace with your actual domain
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ua", "es"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true,
    },
  },
  output: "static",
  build: {
    format: "directory",
    inlineStylesheets: 'auto',
  },
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    build: {
      cssMinify: true,
      minify: true,
    },
    define: {
      'import.meta.env.MAP_TILER_API_KEY': JSON.stringify(process.env.MAP_TILER_API_KEY)
    }
  },
});
