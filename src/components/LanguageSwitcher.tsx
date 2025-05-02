import { getRelativeLocaleUrl } from "astro:i18n";

interface LanguageSwitcherProps {
  currentLocale: string | undefined;
}

export default function LanguageSwitcher({
  currentLocale,
}: LanguageSwitcherProps) {
  const languages = [
    { code: "ua", name: "Українська" },
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
  ];

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <a
          key={lang.code}
          href={getRelativeLocaleUrl(lang.code, "")}
          data-astro-transition="fade"
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            currentLocale === lang.code
              ? "bg-[var(--color-secondary-lightgreen)] text-[var(--color-primary)]"
              : "bg-[var(--color-natural-white)] bg-opacity-10 text-[var(--color-natural-white)] hover:bg-opacity-20"
          }`}
        >
          {lang.name}
        </a>
      ))}
    </div>
  );
}
