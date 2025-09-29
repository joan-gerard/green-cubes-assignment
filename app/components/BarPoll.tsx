"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type ConservationData = {
  acronym: string;
  status: string;
  count: number;
  percentage: string;
};

type DatasetType = "L1" | "L3";

const BarPoll = () => {
  const [selectedDataset, setSelectedDataset] = useState<DatasetType>("L1");

  const data = {
    L1: {
      description: "Based to a Brazil location whitelist",
      items: [
      { acronym: "NE", status: "Not Evaluated", count: 0, percentage: "0.00%" },
      {
        acronym: "DD",
        status: "Data Deficient",
        count: 0,
        percentage: "0.00%",
      },
      {
        acronym: "LC",
        status: "Least Concern",
        count: 634,
        percentage: "91.09%",
      },
      {
        acronym: "NT",
        status: "Near Threatened",
        count: 35,
        percentage: "5.03%",
      },
      { acronym: "VU", status: "Vulnerable", count: 18, percentage: "2.59%" },
      { acronym: "EN", status: "Endangered", count: 7, percentage: "1.01%" },
      {
        acronym: "CR",
        status: "Critically Endangered",
        count: 2,
        percentage: "0.29%",
      },
      {
        acronym: "EW",
        status: "Extinct in the Wild",
        count: 0,
        percentage: "0.00%",
      },
      { acronym: "EX", status: "Extinct", count: 0, percentage: "0.00%" },
      ]
    },
    L3: {
      description: "Species must be captured by two or more of the models",
      items: [
      { acronym: "NE", status: "Not Evaluated", count: 0, percentage: "0.00%" },
      {
        acronym: "DD",
        status: "Data Deficient",
        count: 0,
        percentage: "0.00%",
      },
      {
        acronym: "LC",
        status: "Least Concern",
        count: 239,
        percentage: "95.22%",
      },
      {
        acronym: "NT",
        status: "Near Threatened",
        count: 7,
        percentage: "2.79%",
      },
      { acronym: "VU", status: "Vulnerable", count: 4, percentage: "1.59%" },
      { acronym: "EN", status: "Endangered", count: 1, percentage: "0.40%" },
      {
        acronym: "CR",
        status: "Critically Endangered",
        count: 0,
        percentage: "0.00%",
      },
      {
        acronym: "EW",
        status: "Extinct in the Wild",
        count: 0,
        percentage: "0.00%",
      },
      { acronym: "EX", status: "Extinct", count: 0, percentage: "0.00%" },
      ]
    },
  };

  // Filter to show only the 5 required categories
  const currentData = data[selectedDataset].items.filter(item => 
    ["LC", "NT", "VU", "EN", "CR"].includes(item.acronym)
  );

  // Get categories with 0 count for both datasets
  const zeroCountCategories = data[selectedDataset].items.filter(item => 
    item.count === 0 && ["NE", "DD", "EW", "EX"].includes(item.acronym)
  );

  return (
    <section className="bg-slate-900 px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_400px] md:gap-12">
          <DatasetSelector selectedDataset={selectedDataset} setSelectedDataset={setSelectedDataset} data={data} />
          <div className="col-span-1">
            <Bars data={currentData} />
          </div>
        </div>
        {zeroCountCategories.length > 0 && (
          <div className="mt-8 rounded-lg bg-slate-800 p-6">
            <h4 className="mb-3 text-lg font-semibold text-slate-50">
              No Species Recorded
            </h4>
            <p className="mb-3 text-sm text-slate-300">
              No species belonging to these conservation statuses have been recorded:
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
          </div>
        )}
      </div>
    </section>
  );
};

const DatasetSelector = ({
  selectedDataset,
  setSelectedDataset,
  data,
}: {
  selectedDataset: DatasetType;
  setSelectedDataset: (dataset: DatasetType) => void;
  data: any;
}) => {
  return (
    <div className="col-span-1 py-12">
      <h3 className="mb-6 text-3xl font-semibold text-slate-50">
        Conservation Status Data
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
          Showing data for: <span className="font-semibold text-white">{selectedDataset}</span> <span className="text-slate-300">({data[selectedDataset].description})</span>
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
          <div key={item.acronym} className="col-span-1">
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
          </div>
        );
      })}
    </div>
  );
};

export default BarPoll;

