"use client";
import { animate, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";

export const StatusOverview = () => {
  const t = useTranslations();

  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:py-24">
      <h2 className="mb-8 text-center text-base text-white sm:text-4xl font-bold md:mb-16">
        {t("stats.title")}
      </h2>

      <div className="flex flex-col items-center justify-center sm:flex-row">
        <Stat
          num={150}
          suffix="+"
          subheading={t("stats.speciesTracked")}
        />
        <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
        <Stat
          num={45}
          suffix=""
          subheading={t("stats.nearThreatened")}
        />
        <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
        <Stat
          num={23}
          suffix=""
          subheading={t("stats.vulnerable")}
        />
        <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
        <Stat
          num={12}
          suffix=""
          subheading={t("stats.endangered")}
        />
      </div>
    </div>
  );
};

interface Props {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
}

const Stat = ({ num, suffix, decimals = 0, subheading }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex w-72 flex-col items-center py-8 sm:py-0">
      <p className="mb-2 text-center text-7xl font-semibold sm:text-6xl text-white">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-48 text-center text-gray-300">{subheading}</p>
    </div>
  );
};
