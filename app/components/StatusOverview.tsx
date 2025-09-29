"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const StatusOverview = () => {
  const t = useTranslations();

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-black"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {t("stats.title")}
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {[
            {
              value: "150+",
              color: "text-green-600",
              key: "stats.speciesTracked",
            },
            {
              value: "45",
              color: "text-yellow-600",
              key: "stats.nearThreatened",
            },
            { value: "23", color: "text-orange-600", key: "stats.vulnerable" },
            { value: "12", color: "text-red-600", key: "stats.endangered" },
          ].map((item, idx) => (
            <motion.div
              key={item.key}
              className="text-center p-4"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
            >
              <div
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${item.color} mb-1 sm:mb-2`}
              >
                {item.value}
              </div>
              <div className="text-sm sm:text-base text-black">
                {t(item.key)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
