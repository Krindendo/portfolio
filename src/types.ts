export interface SiteConfig {
  author: string;
  url: string;
  date: {
    locale: string | string[] | undefined;
    options: Intl.DateTimeFormatOptions;
  };
  description: string;
  lang: string;
  ogLocale: string;
  title: string;
  webmentions?: {
    link: string;
    pingback?: string;
  };
}
