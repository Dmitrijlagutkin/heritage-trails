import { t } from "../../../i18n/i18n";

interface DescriptionProps {
  currentLocale: string | undefined;
}

export const Description = ({ currentLocale }: DescriptionProps) => {
  const locale = currentLocale || "ua";

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6 text-[var(--color-natural-white)]">
        {t("home.main_screen.title", locale)}
      </h1>
      <p className="text-xl text-[var(--color-natural-white)] opacity-90">
        {t("home.main_screen.description", locale)}
      </p>
    </div>
  );
};
