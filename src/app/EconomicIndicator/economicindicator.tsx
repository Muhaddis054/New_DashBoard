"use client";

import React, { useState } from "react";
import IndicatorDropdown from "@/components/IndicatorDropdown";
import { fetchEconomicData } from "@/components/EconomicDataInidcatorSelection/api";
import { EconomicIndicators } from "@/components/EconomicDataInidcatorSelection/EconomicIndicatorSelection";
import { years } from "@/components/years";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registering necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Define types for economic data and chart data
type EconomicData = {
  Years: number; // Year is a number
  [key: string]: number | null; // Other keys are indicators, their values can be numbers or null
};

type ChartData = {
  labels: string[]; // X-axis labels (years)
  datasets: {
    label: string; // Dataset name (indicator)
    data: number[]; // Data points for the chart
    fill: boolean; // Whether the dataset area should be filled
    borderColor: string; // Border color of the dataset
    tension: number; // Line tension for the chart
  }[];
};

const EconomicIndicator = () => {
  const [year, setYear] = useState<string>("");
  const [indicator, setIndicator] = useState<string>("");
  const [group1Data, setGroup1Data] = useState<ChartData | null>(null);
  const [group2Data, setGroup2Data] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const group1Indicators = [
    "Poverty headcount ",
    "Unemployment Rate",
    "GDP per capita (constant 2015 US$)",
    "GDP per capita (current US$)",
    "GDP growth (annual %)",
    "Inflation, consumer prices (annual %)",
    "Current account balance (% of GDP)",
  ];

  const group2Indicators = [
    "GDP (constant LCU)",
    "Current account balance (BoP, current US$)",
  ];

  async function handleSubmit() {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchEconomicData(year, indicator);

      // Ensure result.data is an array of EconomicData
      const data: EconomicData[] = result.data; // Ensure 'data' exists and is an array

      if (indicator === "All") {
        const years = data.map((item) => item.Years.toString());

        // Prepare datasets for Group 1 indicators
        const group1Datasets = group1Indicators.map((ind, index) => ({
          label: ind.trim(),
          data: data.map((item) => Number(item[ind] ?? 0)), // Ensure the data is a number or 0
          fill: false,
          borderColor: `rgba(${index * 30}, ${index * 60}, 200, 1)`,
          tension: 0.1,
        }));

        // Prepare datasets for Group 2 indicators
        const group2Datasets = group2Indicators.map((ind, index) => ({
          label: ind.trim(),
          data: data.map((item) => Number(item[ind] ?? 0)), // Ensure the data is a number or 0
          fill: false,
          borderColor: `rgba(${index * 100}, 100, ${index * 50}, 1)`,
          tension: 0.1,
        }));

        setGroup1Data({ labels: years, datasets: group1Datasets });
        setGroup2Data({ labels: years, datasets: group2Datasets });
      } else {
        const years = data.map((item) => item.Years.toString());

        // Prepare dataset for a single indicator
        const singleDataset = [
          {
            label: indicator,
            data: data.map((item) => Number(item[indicator] ?? 0)), // Ensure the data is a number or 0
            fill: false,
            borderColor: "rgba(75, 192, 192, 1)",
            tension: 0.1,
          },
        ];

        setGroup1Data({ labels: years, datasets: singleDataset });
        setGroup2Data(null); // Clear Group 2 chart when displaying a single indicator
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Economic Indicators</h1>
      <IndicatorDropdown
        years={years}
        indicators={EconomicIndicators}
        onYearChange={setYear}
        onIndicatorChange={setIndicator}
      />
      <div className="mt-6 text-center">
        <button
          onClick={handleSubmit}
          className="w-full p-3 bg-gray-800 text-white rounded-md hover:bg-gray-700"
        >
          Submit
        </button>
        {loading && <div className="mt-4 text-center">Loading...</div>}
        {error && <div className="mt-4 text-center text-red-500">{error}</div>}
        {group1Data && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Group 1 Indicators</h2>
            <Line
              data={group1Data}
              options={{
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: "Group 1 Indicators",
                  },
                },
              }}
            />
          </div>
        )}
        {group2Data && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Group 2 Indicators</h2>
            <Line
              data={group2Data}
              options={{
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: "Group 2 Indicators",
                  },
                },
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default EconomicIndicator;
