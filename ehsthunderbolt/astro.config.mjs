import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import robots from "astro-robots";
import webmanifest from "astro-webmanifest";

// https://astro.build/config
export default defineConfig({
  site: "https://ehsthunderbolt.websiteremakes.altonrose.dev",
  integrations: [
    sitemap({}),
    tailwind({
      configFile: "./tailwind.config.ts",
      applyBaseStyles: false,
    }),
    react({}),
    mdx({}),
    robots({}),
    webmanifest({
      name: "Your App name",
      icon: "src/images/your-icon.svg",
      short_name: "App",
      description: "Here is your app description",
      start_url: "/",
      theme_color: "#3367D6",
      background_color: "#3367D6",
      display: "standalone",
    }),
  ],
  // output: "hybrid",
  // adapter: cloudflare(),
});
