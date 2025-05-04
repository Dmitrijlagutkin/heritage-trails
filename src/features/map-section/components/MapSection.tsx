interface MapSectionProps {
  currentLocale: string | undefined;
}

export const MapSection = ({ currentLocale }: MapSectionProps) => {
  const locale = currentLocale || "ua";

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
        <h2 className="text-secondary font-bold text-3xl mb-6">MAP</h2>
      </div>
    </section>
  );
};
