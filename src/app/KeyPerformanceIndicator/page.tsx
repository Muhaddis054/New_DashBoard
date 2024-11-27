"use client";
import React from 'react';
import SectorsSelection from '@/components/SectorSelection';
import KeyPerformanceIndicatorSelection from '@/components/KeyPerformanceIndicatorSelection';

function KeyPerformanceIndicator() {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-6 text-center">Key Performance Indicator</h1>


            <SectorsSelection />

            <KeyPerformanceIndicatorSelection />

            <div className="mt-6 text-center">
                <button
                    className="w-full p-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none"
                >
                    Submit
                </button>

            </div>
        </div>


    );
}

export default KeyPerformanceIndicator;
