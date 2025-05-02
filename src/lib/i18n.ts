import type { AstroGlobal } from "astro";

type TranslationKey = string;
type TranslationValue = string | { [key: string]: TranslationValue };

interface Translations {
  [key: string]: TranslationValue;
}

const translations: { [locale: string]: Translations } = {};

// Pre-import all translations
const enTranslations = await import("../locales/en/common.json");
const uaTranslations = await import("../locales/ua/common.json");
const esTranslations = await import("../locales/es/common.json");

translations["en"] = enTranslations.default || enTranslations;
translations["ua"] = uaTranslations.default || uaTranslations;
translations["es"] = esTranslations.default || esTranslations;

export function t(
  key: string,
  locale: string,
  params: Record<string, string> = {}
): string {
  if (!translations[locale]) {
    return key;
  }

  const keys = key.split(".");
  let value: TranslationValue | undefined = translations[locale];

  for (const k of keys) {
    if (typeof value === "object" && value !== null) {
      value = value[k];
    } else {
      return key;
    }
  }

  if (typeof value === "string") {
    const result = value.replace(
      /\{\{(\w+)\}\}/g,
      (_, param) => params[param] || ""
    );

    return result;
  }

  return key;
}
