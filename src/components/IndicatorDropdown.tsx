"use client";

import React from "react";

type IndicatorDropdownProps = {
  years: string[];
  indicators: string[];
  onYearChange: (value: string) => void;
  onIndicatorChange: (value: string) => void;
};

function IndicatorDropdown({ years, indicators, onYearChange, onIndicatorChange }: IndicatorDropdownProps) {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-4">
        {/* Year Dropdown */}
        <select
          className="flex-1 p-2 border rounded-md"
          onChange={(e) => onYearChange(e.target.value)}
        >
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        {/* Indicator Dropdown */}
        <select
          className="flex-1 p-2 border rounded-md"
          onChange={(e) => onIndicatorChange(e.target.value)}
        >
          <option value="">Select Indicator</option>
          {indicators.map((indicator) => (
            <option key={indicator} value={indicator}>
              {indicator}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default IndicatorDropdown;
