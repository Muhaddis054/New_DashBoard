// "use client"; 

// import React, { useState } from "react";
// import IndicatorDropdown from "@/components/IndicatorDropdown";
// import { fetchEconomicData } from "@/components/EconomicDataInidcatorSelection/api";
// import { FinancialIndicators } from "@/components/EconomicDataInidcatorSelection/FinancialIndicatorSelection";
// import { years } from "@/components/years";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Registering necessary Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// // Define types for the data structure
// type EconomicData = {
//   Years: number;
//   [key: string]: number | null; // Other indicators can be dynamically added here
// };

// type ApiResponse = {
//   data: EconomicData[];
// };

// type ChartData = {
//   labels: string[];
//   datasets: {
//     label: string;
//     data: number[];
//     fill: boolean;
//     borderColor: string;
//     tension: number;
//   }[];
// };

// const FinancialIndicator = () => {
//   const [year, setYear] = useState<string>("");
//   const [indicator, setIndicator] = useState<string>("");
//   const [data, setData] = useState<ChartData | null>(null); // Data fetched from the API
//   const [loading, setLoading] = useState<boolean>(false); // Loading state
//   const [error, setError] = useState<string | null>(null); // Error state

//   const allIndicators = [
//     "Total debt service (% of exports of goods, services and primary income)",
//     "Broad money (% of GDP)",
//     "Broad money growth (annual %)",
//     "Official exchange rate (LCU per US$, period average)",
//     "Real effective exchange rate index (2010 = 100)",
//   ];

//   // Handle data fetching
//   async function handleSubmit() {
//     setLoading(true);
//     setError(null);

//     try {
//       let result: ApiResponse;
//       if (indicator === "All") {
//         // Fetch data for each indicator when "All" is selected
//         const allData = await Promise.all(
//           allIndicators.map(async (ind) => {
//             return fetchEconomicData(year, ind);
//           })
//         );

//         // Extract years from the first data set (assuming years are consistent across indicators)
//         const years = allData[0].data.map((item: EconomicData) => item.Years.toString());

//         // Prepare datasets for each indicator
//         const combinedData = allData.map((res, index) => {
//           const indicatorData = res.data;

//           return {
//             label: allIndicators[index], // Set the label as the indicator name
//             data: indicatorData.map((item: EconomicData) => {
//               const indicatorValue = item[allIndicators[index]] ?? 0;
//               return Number(indicatorValue);
//             }), // Correct the mapping here
//             fill: false,
//             borderColor: `rgba(${(index + 1) * 50}, ${(index + 1) * 30}, 150, 1)`, // Dynamic color for each line
//             tension: 0.1,
//           };
//         });

//         setData({
//           labels: years, // Use the years from the first indicator dataset
//           datasets: combinedData, // Use the combined data for all indicators
//         });
//       } else {
//         // Fetch data for a single indicator
//         result = await fetchEconomicData(year, indicator);

//         setData({
//           labels: result.data.map((item: EconomicData) => item.Years.toString()), // Get years from the response
//           datasets: [
//             {
//               label: indicator,
//               data: result.data.map((item: EconomicData) => {
//                 const indicatorValue = item[indicator] ?? 0;
//                 return Number(indicatorValue);
//               }), // Ensure correct mapping here
//               fill: false,
//               borderColor: "rgba(75, 192, 192, 1)", // Default color for single indicator
//               tension: 0.1,
//             },
//           ],
//         });
//       }
//     } catch (err: unknown) {
//       setError((err as Error).message || "An unexpected error occurred.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   // Prepare chart data
//   const chartData = data ? data : null;

//   return (
//     <div className="p-8">
//       <h1 className="text-4xl font-bold mb-6 text-center">Financial Indicators</h1>
//       <IndicatorDropdown
//         years={years}
//         indicators={FinancialIndicators}
//         onYearChange={setYear}
//         onIndicatorChange={setIndicator}
//       />

//       <div className="mt-6 text-center">
//         <button
//           onClick={handleSubmit}
//           className="w-full p-3 bg-gray-800 text-white rounded-md hover:bg-gray-700"
//         >
//           Submit
//         </button>

//         {/* Show loading, error, or results */}
//         {loading && <div className="text-center mt-4">Loading...</div>}
//         {error && <div className="text-center mt-4 text-red-500">{error}</div>}

//         {/* Display the chart if data is available */}
//         {chartData && !loading && !error && (
//           <div className="mt-6" style={{ width: "100%", height: "400px" }}>
//             <h2 className="text-2xl font-semibold">Graph</h2>
//             <Line
//               data={chartData}
//               options={{
//                 responsive: true,
//                 plugins: {
//                   title: {
//                     display: true,
//                     text: `Financial Indicator: ${indicator}`,
//                     font: { size: 20 },
//                   },
//                 },
//                 scales: {
//                   x: { title: { display: true, text: "Year" } },
//                   y: { title: { display: true, text: "Value" } },
//                 },
//               }}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FinancialIndicator;
