type StatusOverviewProps = {
  t: (key: string) => string;
};
export const StatusOverview = ({ t }: StatusOverviewProps) => {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-black">
          {t("stats.title")}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div className="text-center p-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-1 sm:mb-2">
              150+
            </div>
            <div className="text-sm sm:text-base text-black">
              {t("stats.speciesTracked")}
            </div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-600 mb-1 sm:mb-2">
              45
            </div>
            <div className="text-sm sm:text-base text-black">
              {t("stats.nearThreatened")}
            </div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 mb-1 sm:mb-2">
              23
            </div>
            <div className="text-sm sm:text-base text-black">
              {t("stats.vulnerable")}
            </div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-1 sm:mb-2">
              12
            </div>
            <div className="text-sm sm:text-base text-black">
              {t("stats.endangered")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
