// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";
import { siteConfig } from "./src/site.config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: siteConfig.url,
});
