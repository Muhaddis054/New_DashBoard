"use client";

import React, { useState } from "react";

const FinancialStatementIndicatorData = [
  {
    indicator: "Non-Current Assets",
    subIndicators: [
      {
        subIndicator: "Capital work in progress",
        subSubIndicators: [],
      },
      {
        subIndicator: "Operating fixed assets at cost",
        subSubIndicators: [],
      },
      {
        subIndicator: "Operating fixed assets after deducting accumulated depreciation",
        subSubIndicators: [],
      },
      {
        subIndicator: "Intangible assets",
        subSubIndicators: [],
      },
      {
        subIndicator: "Long term investments",
        subSubIndicators: [
          "Investments in subsidiaries",
          "Investments in associates",
        ],
      },
      {
        subIndicator: "Other non-current assets",
        subSubIndicators: [
          "Long term loans and advances",
          "Long term deposits",
        ],
      },
    ],
  },
  {
    indicator: "Current Assets",
    subIndicators: [
      {
        subIndicator: " Cash & bank balance",
        subSubIndicators: [],
      },
      {
        subIndicator: "Inventories",
        subSubIndicators: ["Raw material", "Work in progress", "Finished goods"],
      },
      {
        subIndicator: "Trade Debt / accounts receivables",
        subSubIndicators: [],
      },
      {
        subIndicator: "Short term loans and advances",
        subSubIndicators: [],
      },
      {
        subIndicator: "Short term investments",
        subSubIndicators: [],
      },
      {
        subIndicator: "Other current assets",
        subSubIndicators: ["Stores, spares & loose tools", "Trade deposits & pre-payments"],
      },
    ],
  },
  {
    indicator: "Shareholders Equity",
    subIndicators: [
      {
        subIndicator: " Issued, Subscribed & Paid up capital",
        subSubIndicators: [" Ordinary Shares", "Preference shares"],
      },
      {
        subIndicator: " Reserves",
        subSubIndicators: ["Capital Reserve", "Revenue Reserve"],
      },
      {
        subIndicator: "Surplus on revaluation of fixed assets",
        subSubIndicators: [],
      },
    ],
  },
  {
    indicator: "Non-Current Liabilitied",
    subIndicators: [
      {
        subIndicator: " Long term borrowings",
        subSubIndicators: ["Long term secured loans", "Long term unsecured loans", "Long term lease finance"],
      },
      {
        subIndicator: " Subordinated loans / Sponsor's loans",
        subSubIndicators: [],
      },
      {
        subIndicator: "Debentures/TFCs (bonds payable)",
        subSubIndicators: [],
      },
      {
        subIndicator: "Employees benefit obligations",
        subSubIndicators: [],
      },
      {
        subIndicator: "Other non-current liabilities",
        subSubIndicators: [
        ],
      },
    ],
  },
  {
    indicator: "Current Liabilities",
    subIndicators: [
      {
        subIndicator: "Trade Credit & other accounts payables",
        subSubIndicators: ["Trade credits"],
      },
      {
        subIndicator: "Short term Borrowings",
        subSubIndicators: ["Short term Secured loans", "Short term unsecured loans", "Short term lease finance"],
      },
      {
        subIndicator: "Current portion of non-current liabilities",
        subSubIndicators: [],
      },
      {
        subIndicator: "Other current liabilities",
        subSubIndicators: ["Interest / markup payables", "Taxes payable"],
      },
    ],
  },
  {
    indicator: "Operations",
    subIndicators: [
      {
        subIndicator: "Sales",
        subSubIndicators: ["Local sales (Net)", "Export Sales (Net)"],
      },
      {
        subIndicator: "Cost of sales",
        subSubIndicators: ["Cost of material", "Labour", "Overhead"],
      },
      {
        subIndicator: "Gross profit / (loss) (F1-F2)",
        subSubIndicators: [],
      },
      {
        subIndicator: "General, administrative and other expenses",
        subSubIndicators: ["Selling & distribution expenses", "Administrative and other expenses"],
      },
      {
        subIndicator: "Other income / (loss)",
        subSubIndicators: [],
      },
      {
        subIndicator: "EBIT",
        subSubIndicators: [],
      },
      {
        subIndicator: "Financial expenses",
        subSubIndicators: ["Interest expenses"],
      },
      {
        subIndicator: " Profit / (loss) before taxation ",
        subSubIndicators: [],
      },
      {
        subIndicator: "Tax expenses",
        subSubIndicators: ["Current", "Deferred"],
      },
      {
        subIndicator: " Profit / (loss) after tax ",
        subSubIndicators: [""],
      },
      {
        subIndicator: "Cash dividends",
        subSubIndicators: [],
      },
      {
        subIndicator: "Bonus shares / stock dividends",
        subSubIndicators: [],
      },
    ],
  },
  {
    indicator: "Statement of Cash Flows",
    subIndicators: [
      {
        subIndicator: "Net cash flows from operating activities",
        subSubIndicators: [],
      },
      {
        subIndicator: "Net cash flows from investing activities",
        subSubIndicators: [],
      },
      {
        subIndicator: "Net cash flows from financing activities",
        subSubIndicators: [],
      },
    ],
  },
  {
    indicator: "Miscellaneous",
    subIndicators: [
      {
        subIndicator: "Total capital employed",
        subSubIndicators: [],
      },
      {
        subIndicator: "Retention in business",
        subSubIndicators: [],
      },
      {
        subIndicator: "Depreciation for the year",
        subSubIndicators: [],
      },
      {
        subIndicator: "Salaries, wages and employee benefits",
        subSubIndicators: [],
      },
      {
        subIndicator: "Total fixed liabilities (D1+D3)",
        subSubIndicators: [],
      },
      {
        subIndicator: "Contractual liabilities",
        subSubIndicators: [],
      },
      {
        subIndicator: "Operating Cash Flow",
        subSubIndicators: [],
      },

    ],
  },
];

function FinancialStatementIndicatorSelection() {
  const [selectedIndicator, setSelectedIndicator] = useState("");
  const [selectedSubIndicator, setSelectedSubIndicator] = useState("");

  // Filter data dynamically
  const subIndicators =
    FinancialStatementIndicatorData.find((item) => item.indicator === selectedIndicator)
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
        {FinancialStatementIndicatorData.map((item) => (
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

      {/* Conditionally render Sub Sub Indicator Dropdown */}
      {subSubIndicators.length > 0 && (
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
      )}
    </div>
  );
}

export default FinancialStatementIndicatorSelection;
