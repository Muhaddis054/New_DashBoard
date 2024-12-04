"use client";

import React, { useState, useEffect } from "react";
import SectorsSelection from "@/components/SectorSelection";
import FinancialStatementIndicatorSelection from "@/components/FinancialStatementAnalysisIndicatorSelection";
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

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function FinancialStatement() {
  const [sector, setSector] = useState<string>(""); // Selected sector
  const [indicator, setIndicator] = useState<string>(""); // Selected financial indicator
  const [selectedYear, setSelectedYear] = useState<string>(""); // Selected year
  const [data, setData] = useState<any>(null); // Fetched data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const [availableYears, setAvailableYears] = useState<string[]>([]); // Available years for selection

  // Fetch the available years for the selected sector and indicator
  useEffect(() => {
    if (sector && indicator) {
      // Reset data and year selection when sector or indicator changes
      setData(null);
      setSelectedYear("");

      const fetchYears = async () => {
        try {
          const response = await fetch(
            `https://nrpuapi-137b31326fcb.herokuapp.com/api/financial/sector/${sector}/indicator/${indicator}/years`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch years");
          }
          const result = await response.json();
          setAvailableYears(result.years); // Assuming the API returns 'years' array
        } catch (err: any) {
          setError(err.message || "An unexpected error occurred.");
        }
      };

      fetchYears();
    }
  }, [sector, indicator]);

  // Handle data fetching when the Submit button is clicked
  async function handleSubmit() {
    if (!sector || !indicator || !selectedYear) {
      setError("Please select sector, indicator, and year.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://nrpuapi-137b31326fcb.herokuapp.com/api/financial/sector/${sector}/indicator/${indicator}/year/${selectedYear}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setData(result.data); // Assuming the API returns 'data' array
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  }

  // Prepare the data for the chart
  const chartData = data && Array.isArray(data) && data.length > 0
    ? {
        labels: data.map((item: any) => item.year), // X-axis: Years
        datasets: [
          {
            label: indicator,
            data: data.map((item: any) => item[indicator] ?? 0), // Y-axis data for the selected indicator
            fill: false,
            borderColor: "rgba(75, 192, 192, 1)",
            tension: 0.1,
          },
        ],
      }
    : null;

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Financial Statement Analysis</h1>

      {/* Sector Selection */}
      <SectorsSelection
      />

      {/* Financial Statement Indicator Selection */}
      <FinancialStatementIndicatorSelection
      />

      {/* Year Selection Dropdown */}
      {availableYears.length > 0 && (
        <div className="mt-6">
          <select
            className="p-2 border rounded-md"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">Select Year</option>
            {availableYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Submit Button */}
      <div className="mt-6 text-center">
        <button
          onClick={handleSubmit}
          className="w-full p-3 bg-gray-800 text-white rounded-md hover:bg-gray-700"
          disabled={loading} // Disable button while loading
        >
          Submit
        </button>
      </div>

      {/* Show Loading, Error, or Results */}
      {loading && <div className="text-center mt-4">Loading...</div>}
      {error && <div className="text-center mt-4 text-red-500">{error}</div>}

      {/* Display the Chart if Data is Available */}
      {chartData && !loading && !error ? (
        <div className="mt-6" style={{ width: "100%", height: "400px" }}>
          <h2 className="text-2xl font-semibold">Graph</h2>
          <Line
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: `Financial Data for ${indicator}`,
                  font: { size: 20 },
                },
              },
              scales: {
                x: { title: { display: true, text: "Year" } },
                y: { title: { display: true, text: "Value" } },
              },
            }}
          />
        </div>
      ) : (
        !loading && !error && <div className="text-center mt-4">No data available.</div>
      )}
    </div>
  );
}

export default FinancialStatement;
