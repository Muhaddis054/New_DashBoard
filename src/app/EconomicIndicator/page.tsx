"use client";

import React, { useState } from "react";
import IndicatorDropdown from "@/components/IndicatorDropdown";
import {fetchEconomicData } from "@/components/EconomicDataInidcatorSelection/api";
import { EconomicIndicators } from "@/components/EconomicDataInidcatorSelection/EconomicIndicatorSelection"
import {years} from '@/components/years'

export default function EconomicIndicator() {
  const [year, setYear] = useState(""); // Selected year
  const [indicator, setIndicator] = useState(""); // Selected indicator
  const [data, setData] = useState<any>(null); // Data fetched from the API
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

 
   // Handle data fetching
   async function handleSubmit() {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchEconomicData(year, indicator);
      setData(result);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Economic Indicators</h1>

      {/* Indicator dropdown component */}
      <IndicatorDropdown
        years={years}
        indicators={EconomicIndicators}
        onYearChange={setYear}
        onIndicatorChange={setIndicator}
      />

      <div className="mt-6 text-center">
        <button
          onClick={handleSubmit} // Trigger fetchData when button is clicked
          className="w-full p-3 bg-gray-800 text-white rounded-md hover:bg-gray-700"
        >
          Submit
        </button>
      </div>

      {/* Show loading, error, or results */}
      {loading && <div className="text-center mt-4">Loading...</div>}
      {error && <div className="text-center mt-4 text-red-500">{error}</div>}

      {/* Display fetched data */}
      {data && !loading && !error && (
        <div className="mt-6 text-center text-blue">
          <h2 className="text-2xl font-semibold">Results</h2>
          <pre className="text-2xl text-white bg-gray-800 p-4 rounded-md">{JSON.stringify(data, null, 2)}</pre> {/* Display data as JSON for now */}
        </div>
      )}
    </div>
  );
};

