"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Cta = () => {
  const t = useTranslations();

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {t("cta.title")}
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg text-black mb-6 sm:mb-8 max-w-2xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {t("cta.description")}
        </motion.p>
        <motion.button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors duration-200 shadow-lg text-sm sm:text-base"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {t("cta.button")}
        </motion.button>
      </div>
    </section>
  );
};
