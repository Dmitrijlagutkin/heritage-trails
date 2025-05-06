import { getRelativeLocaleUrl } from "astro:i18n";

interface LanguageSwitcherProps {
  currentLocale: string | undefined;
}

export default function LanguageSwitcher({
  currentLocale,
}: LanguageSwitcherProps) {
  const languages = [
    { code: "ua", name: "Українська", flag: "🇺🇦", countryCode: "ua" },
    { code: "en", name: "English", flag: "🇺🇸", countryCode: "us" },
    { code: "es", name: "Español", flag: "🇪🇸", countryCode: "es" },
  ];

  return (
    <div className="flex">
      {languages.map((lang) => (
        <a
          key={lang.code}
          href={getRelativeLocaleUrl(lang.code, "")}
          data-astro-transition="fade"
          className={`px-2 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
            currentLocale === lang.code
              ? "bg-[var(--color-secondary-lightgreen)] text-[var(--color-primary)]"
              : "bg-[var(--color-natural-white)] bg-opacity-10 text-[var(--color-natural-white)] hover:bg-opacity-20"
          }`}
        >
          <span className="text-base">{lang.flag}</span>
          {lang.countryCode}
        </a>
      ))}
    </div>
  );
}
