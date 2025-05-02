import React from "react";
import { messages } from "../i18n/messages";

interface MapSectionProps {
  currentLocale: string | undefined;
}

export const MapSection = ({ currentLocale }: MapSectionProps) => {
  const locale = currentLocale || "ua";

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-[var(--color-natural-lightgray)] p-8 rounded-lg">
        <h2 className="text-[var(--color-secondary-lightgreen)] font-bold text-3xl mb-6">
          {messages[locale as keyof typeof messages].explore}
        </h2>
        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Map will be implemented here</p>
        </div>
      </div>
    </section>
  );
};
