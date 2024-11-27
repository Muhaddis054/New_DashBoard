"use client";
import React, { useState } from "react";

// Data for indicators
const KeyPerformanceindicatorData = [
  {
    indicator: "Key Performance Indicator",
    subIndicators: [
      {
        subIndicator: " Profitability Ratios",
        subSubIndicators: [" Net Profit  margin / Net profit to sales ","Asset turnover" ,"Return on Assets", "Financial leverage","Return on equity"," Gross profit  margin / Gross profit to sales", "Operating return on assets", "Return on capital employed"],
      },
      {
        subIndicator: " Liquidity Ratios",
        subSubIndicators: ["Current ratio"," Quick ratio " ," Cash to current liabilities"],
      },
      {
        subIndicator: " Activity Ratios",
        subSubIndicators: ["Inventory Turnover Ratio "," No. of days in inventory" ," Receivables turnover ratio", "No. of days in receivables"," Working capital turnover"," Cash conversion cycle "],
      },
      {
        subIndicator: " Cash Flow Ratios",
        subSubIndicators: ["Cash flow from operations to sales  ","Cash return on assets " ,"Cash return on equity", "Cash to income","Debt coverage ratio"],
      },
      {
        subIndicator: " Valuation Ratios",
        subSubIndicators: [" Paid up value of shares ","Market price per share" ,"Basic earnings per share ", "Price earnings ratio","Dividend payout ratio"," Cash dividend per share", " Book value per share"],
      },
      {
        subIndicator: " Solvency Ratios",
        subSubIndicators: ["Debt equity ratio ","Debt to assets ratio " ,"Debt to capital ratio", " Interest cover ratio"],
      },
    ],
  },
]

function KeyPerformanceIndicatorSelection() {
  const [selectedIndicator, setSelectedIndicator] = useState("");
  const [selectedSubIndicator, setSelectedSubIndicator] = useState("");

  // Filter data dynamically
  const subIndicators =
  KeyPerformanceindicatorData.find((item) => item.indicator === selectedIndicator)
      ?.subIndicators || [];

  const subSubIndicators =
    subIndicators.find((item) => item.subIndicator === selectedSubIndicator)
      ?.subSubIndicators || [];

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {/* Indicator Dropdown */}
      <select
        className="flex-1 p-2 border rounded-md"
        value={selectedIndicator}
        onChange={(e) => {
          setSelectedIndicator(e.target.value);
          setSelectedSubIndicator(""); // Reset sub-indicator on indicator change
        }}
      >
        <option value="">Select Indicator</option>
        {KeyPerformanceindicatorData.map((item) => (
          <option key={item.indicator} value={item.indicator}>
            {item.indicator}
          </option>
        ))}
      </select>

      {/* Sub Indicator Dropdown */}
      <select
        className="flex-1 p-2 border rounded-md"
        value={selectedSubIndicator}
        onChange={(e) => setSelectedSubIndicator(e.target.value)}
        disabled={!selectedIndicator}
      >
        <option value="">Select Sub Indicator</option>
        {subIndicators.map((item) => (
          <option key={item.subIndicator} value={item.subIndicator}>
            {item.subIndicator}
          </option>
        ))}
      </select>

      {/* Sub Sub Indicator Dropdown */}
      <select
        className="flex-1 p-2 border rounded-md"
        disabled={!selectedSubIndicator}
      >
        <option value="">Select Sub Sub Indicator</option>
        {subSubIndicators.map((subSubIndicator) => (
          <option key={subSubIndicator} value={subSubIndicator}>
            {subSubIndicator}
          </option>
        ))}
      </select>
    </div>
  );
}

export default KeyPerformanceIndicatorSelection;
