type CtaProps = {
  t: (key: string) => string;
};

export const Cta = ({ t }: CtaProps) => {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black">
          {t("cta.title")}
        </h2>
        <p className="text-base sm:text-lg text-black mb-6 sm:mb-8 max-w-2xl mx-auto">
          {t("cta.description")}
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors duration-200 shadow-lg text-sm sm:text-base">
          {t("cta.button")}
        </button>
      </div>
    </section>
  );
};
