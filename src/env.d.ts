/// <reference types="astro/client" />

declare module "virtual:i18n-astro" {
  export function getLocale(): string;
  export function t(key: string): string;
}

declare module "i18n:astro" {
  export function getLocale(): string;
  export function t(key: string): string;
}

type TranslationKeys = {
  home: {
    main_screen: {
      title: string;
      subtitle: string;
      description_1: string;
      description_2: string;
    };
    map_section: {
      title: string;
      subtitle: string;
      description: string;
      button: string;
    };
    features_section: {
      title: string;
      description: string;
    };
    footer: {
      about: {
        title: string;
        description: string;
        links: {
          about: string;
          contact: string;
          privacy: string;
        };
      };
      explore: {
        title: string;
        links: {
          parks: string;
          trails: string;
          activities: string;
        };
      };
      legal: {
        title: string;
        links: {
          terms: string;
          privacy: string;
          cookies: string;
        };
      };
      social: {
        title: string;
      };
      copyright: string;
      sitemap: string;
      accessibility: string;
    };
  };
  header: {
    explore_map: string;
    about: string;
  };
};
