"use client";

import React, { useEffect, useState } from "react";
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

// Register the required chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Define the structure of the data
interface FinancialData {
  date: string;
  value: number;
}

const FinancialGraph = () => {
  const [data, setData] = useState<FinancialData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://nrpuapi-137b31326fcb.herokuapp.com/api/financial/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        console.log(result);  // Log the response to check its structure
        const financialData = result.data || [];  // Assuming 'data' is the key holding the array
        if (Array.isArray(financialData)) {
          setData(financialData);
        } else {
          setError("Data is not in the expected format");
        }
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  // Ensure the structure of data is correct (check for null or undefined values)
  if (!data || !Array.isArray(data)) {
    return <p className="text-center">No data available or invalid data format.</p>;
  }

  const labels = data.map((entry) => entry.date);
  const values = data.map((entry) => entry.value);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Financial Data",
        data: values,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-center mb-4">Financial Graph</h2>
      <Line data={chartData} />
    </div>
  );
};

export default FinancialGraph;
