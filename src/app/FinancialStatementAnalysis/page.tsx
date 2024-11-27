"use client";
import React from 'react';
import SectorsSelection from '@/components/SectorSelection';
import FinancialStatementIndicatorSelection from '@/components/FinancialStatementAnalysisIndicatorSelection';

function FinancialStatement() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Financial Statement Analysis</h1>


      <SectorsSelection />

      <FinancialStatementIndicatorSelection />

      <div className="mt-6 text-center">
        <button
          className="w-full p-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 "
        >
          Submit
        </button>

      </div>
    </div>

  );
}

export default FinancialStatement;
