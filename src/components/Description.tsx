import React from "react";
import { messages } from "../i18n/messages";

interface DescriptionProps {
  currentLocale: string | undefined;
}

export const Description = ({ currentLocale }: DescriptionProps) => {
  const locale = currentLocale || "ua";

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6 text-[var(--color-natural-white)]">
        {messages[locale as keyof typeof messages].welcome}
      </h1>
      <p className="text-xl text-[var(--color-natural-white)] opacity-90">
        {messages[locale as keyof typeof messages].learnMore}
      </p>
    </div>
  );
};
