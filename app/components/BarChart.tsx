"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

type ConservationData = {
  acronym: string;
  status: string;
  count: number;
  percentage: string;
};

type DatasetType = "L1" | "L3";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const BarChart = () => {
  const [selectedDataset, setSelectedDataset] = useState<DatasetType>("L1");
  const t = useTranslations('barChart');

  // Get data from translations
  const datasetData = t.raw(`datasets.${selectedDataset}.data`) as ConservationData[];
  const datasetDescription = t(`datasets.${selectedDataset}.description`);

  // Filter to show only the 5 required categories
  const currentData = datasetData.filter(item => 
    ["LC", "NT", "VU", "EN", "CR"].includes(item.acronym)
  );

  // Get categories with 0 count for both datasets
  const zeroCountCategories = datasetData.filter(item => 
    item.count === 0 && ["NE", "DD", "EW", "EX"].includes(item.acronym)
  );

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <motion.div 
          className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_500px] md:gap-12 items-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <DatasetSelector selectedDataset={selectedDataset} setSelectedDataset={setSelectedDataset} datasetDescription={datasetDescription} />
          <div className="col-span-1">
            <Bars data={currentData} />
          </div>
        </motion.div>
        {zeroCountCategories.length > 0 && (
          <motion.div 
            className="mt-8 rounded-lg bg-slate-800 p-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h4 className="mb-3 text-lg font-semibold text-slate-50">
              {t('noSpeciesRecorded')}
            </h4>
            <p className="mb-3 text-sm text-slate-300">
              {t('noSpeciesDescription')}
            </p>
            <div className="flex flex-wrap gap-2">
              {zeroCountCategories.map((category) => (
                <span
                  key={category.acronym}
                  className="rounded-md bg-slate-700 px-3 py-1 text-sm text-slate-200"
                >
                  {category.acronym} - {category.status}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

const DatasetSelector = ({
  selectedDataset,
  setSelectedDataset,
  datasetDescription,
}: {
  selectedDataset: DatasetType;
  setSelectedDataset: (dataset: DatasetType) => void;
  datasetDescription: string;
}) => {
  const t = useTranslations('barChart');
  
  return (
    <div className="col-span-1 py-12">
      <h3 className="mb-6 text-3xl font-semibold text-slate-50">
        {t('title')}
      </h3>
      <div className="mb-6 space-y-2">
        {(["L1", "L3"] as DatasetType[]).map((dataset) => {
          const colors = {
            L1: "bg-indigo-500",
            L3: "bg-fuchsia-500",
          };
          
          return (
            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => setSelectedDataset(dataset)}
              key={dataset}
              className={`w-full rounded-md ${colors[dataset]} py-2 font-medium text-white ${
                selectedDataset === dataset ? "ring-2 ring-white" : ""
              }`}
            >
              {dataset}
            </motion.button>
          );
        })}
      </div>
      <div className="text-slate-400">
        <span className="text-sm">
          {t('showingDataFor')} <span className="font-semibold text-white">{selectedDataset}</span> <span className="text-slate-300">({datasetDescription})</span>
        </span>
      </div>
    </div>
  );
};

const Bars = ({ data }: { data: ConservationData[] }) => {
  const maxCount = Math.max(...data.map(item => item.count));
  
  const colors = {
    LC: "bg-green-500",
    NT: "bg-yellow-500", 
    VU: "bg-orange-500",
    EN: "bg-red-500",
    CR: "bg-red-700",
  };

  return (
    <div
      className="col-span-1 grid min-h-[200px] gap-2"
      style={{
        gridTemplateColumns: `repeat(${data.length}, minmax(0, 1fr))`,
      }}
    >
      {data.map((item) => {
        const height = maxCount > 0 ? ((item.count / maxCount) * 100).toFixed(2) : 0;
        return (
          <div key={item.acronym} className="col-span-1 group relative">
            <div className="relative flex h-full w-full items-end overflow-hidden rounded-2xl bg-gradient-to-b from-slate-700 to-slate-800">
              <motion.span
                animate={{ height: `${height}%` }}
                className={`relative z-0 w-full ${colors[item.acronym as keyof typeof colors]}`}
                transition={{ type: "spring" }}
              />
              <span className="absolute bottom-0 left-[50%] mt-2 inline-block w-full -translate-x-[50%] p-2 text-center text-sm text-slate-50">
                <b>{item.acronym}</b>
                <br></br>
                <span className="text-xs text-slate-200">
                  {item.count}
                </span>
              </span>
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 text-slate-50 text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
              <div className="font-semibold">{item.acronym}</div>
              <div className="text-xs text-slate-300">{item.status}</div>
              <div className="text-xs text-slate-400">{item.count} species</div>
              
              {/* Tooltip arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};


