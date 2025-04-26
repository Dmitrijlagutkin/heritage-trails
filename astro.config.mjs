// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import i18n from "@astrolicious/i18n";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    i18n({
      defaultLocale: "en",
      locales: ["en", "es", "ua"], // must include the default locale
      client: {
        data: true,
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
