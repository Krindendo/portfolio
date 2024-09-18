import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  author: "Marko Samek",
  date: {
    locale: "en-EN",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  },
  description: "Portfolio of Marko Samek",
  lang: "en-EN",
  ogLocale: "en_EN",
  sortPostsByUpdatedDate: false,
  title: "Marko Samek",
};
