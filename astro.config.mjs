import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import { Locales } from "./configs/locales.config.ts";
import { Plugins } from "./configs/plugins.config.ts";
import { Sidebar } from "./configs/sidebar.config.ts";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap(),
    starlight({
      title: "All Contributors",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/all-contributors/allcontributors.org",
        },
      ],
      editLink: {
        baseUrl:
          "https://github.com/all-contributors/allcontributors.org/edit/main/",
      },
      favicon: "/favicon.png",
      logo: {
        src: "./src/assets/logo.png",
      },
      lastUpdated: true,
      defaultLocale: "en",
      locales: Locales,
      sidebar: Sidebar,
      customCss: ["src/styles/custom.css", "src/styles/landing.css"],
      plugins: Plugins,
      credits: true,
    }),
  ],
  redirects: {
    "/": {
      status: 301,
      destination: "/en/",
    },
  },
});
