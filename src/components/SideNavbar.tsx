"use client";

import { useState, useEffect } from "react";
import { FaChartLine, FaDatabase, FaTrophy, FaFileAlt, FaChartBar, FaFlag, FaMoneyBillAlt } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define valid sidebar paths
const sidebarPaths = [
  "/FinancialMarketData",
  "/FinancialStatementAnalysis",
  "/KeyPerformanceIndicator",
  "/EconomicData",
  "/EconomicIndicator",
  "/PoliticalIndicator",
  "/FinancialIndicator",
];

export default function SideNavbar() {
  const [isOpen, setIsOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname(); // Get the current path

  // Detect screen width and auto-collapse on mobile devices or below 990px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 990) {
        setIsOpen(false); // Collapse on screens 990px and below
      } else {
        setIsOpen(true); // Expand on screens above 990px
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Run on initial load

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle dropdown for a specific section
  const toggleDropdown = (section: string) => {
    setOpenDropdown((prev) => (prev === section ? null : section));
  };

  // Function to check if a link is active and restrict to sidebar paths
  const isActive = (path: string) => {
    console.log("Current Pathname:", pathname);
    console.log("Checking Path:", path);
    console.log("Is Active:", sidebarPaths.includes(pathname) && pathname === path);
    return sidebarPaths.includes(pathname) && pathname === path;
  };

  return (
    <aside
      className={`${isOpen ? "w-90" : "w-24"} transition-all h-screen bg-gray-800 overflow-hidden sm:w-90 flex align-items-center`}
    >
      {/* Toggle Sidebar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`absolute top-28 ${isOpen ? "left-[16rem]" : "left-20"} bg-white rounded-full p-2 text-2xl`}
      >
        {isOpen ? "<" : ">"}
      </button>

      <div className="flex flex-col justify-start pl-4 mt-16 pt-28">
        {/* Dashboard Heading */}
        <h2
          className={`text-4xl text-white font-bold mb-4 ${isOpen ? "block" : "hidden"}`}
        >
          Dashboard
        </h2>

        {/* Navigation Links */}
        <nav>
          {/* Financial Market Data Dropdown */}
          <div>
            <button onClick={() => toggleDropdown("FinancialMarketData")}>
              <Link
                href="/FinancialMarketData"
                className={`flex items-center p-2 hover:bg-black text-xl w-full rounded-lg ${
                  openDropdown === "FinancialMarketData" || isActive("/FinancialMarketData")
                    ? "text-blue-500 font-bold"
                    : "text-white"
                }`}
              >
                <FaDatabase className="mr-2 text-2xl" />
                <span className={`${isOpen ? "block" : "hidden"}`}>Financial Market Data</span>
              </Link>
            </button>
            {/* Dropdown Menu */}
            {openDropdown === "FinancialMarketData" && (
              <div className="ml-6 rounded-lg">
                <Link
                  href="/FinancialStatementAnalysis"
                  className={`flex items-center p-2 hover:bg-black text-xl w-full rounded-lg ${
                    isActive("/FinancialStatementAnalysis")
                      ? "text-blue-500 font-bold"
                      : "text-white"
                  }`}
                >
                  <FaFileAlt className="mr-2 text-2xl" />
                  <span className={`${isOpen ? "block" : "hidden"}`}>Financial Statement Analysis</span>
                </Link>
                <Link
                  href="/KeyPerformanceIndicator"
                  className={`flex items-center p-2 hover:bg-black text-xl w-full rounded-lg ${
                    isActive("/KeyPerformanceIndicator")
                      ? "text-blue-500 font-bold"
                      : "text-white"
                  }`}
                >
                  <FaTrophy className="mr-2 text-2xl" />
                  <span className={`${isOpen ? "block" : "hidden"}`}>Key Performance Indicator</span>
                </Link>
              </div>
            )}
          </div>

          {/* Economic Data Dropdown */}
          <div>
            <button onClick={() => toggleDropdown("EconomicData")}>
              <Link
                href="/EconomicData"
                className={`flex items-center p-2 hover:bg-black text-xl w-full rounded-lg ${
                  openDropdown === "EconomicData" || isActive("/EconomicData")
                    ? "bg-gray-700 text-blue-500 font-bold"
                    : "text-white"
                }`}
              >
                <FaChartLine className="mr-2 text-2xl" />
                <span className={`${isOpen ? "block" : "hidden"}`}>Economic Data</span>
              </Link>
            </button>
            {/* Dropdown Menu */}
            {openDropdown === "EconomicData" && (
              <div className="ml-6 rounded-lg">
                <Link
                  href="/EconomicIndicator"
                  className={`flex items-center p-2 hover:bg-black text-xl rounded-lg ${
                    isActive("/EconomicIndicator")
                      ? "bg-gray-700 text-blue-500 font-bold"
                      : "text-white"
                  }`}
                >
                  <FaChartBar className="mr-2 text-2xl" />
                  <span className={`${isOpen ? "block" : "hidden"}`}>Economic Indicator</span>
                </Link>
                <Link
                  href="/PoliticalIndicator"
                  className={`flex items-center p-2 hover:bg-black text-xl rounded-lg ${
                    isActive("/PoliticalIndicator")
                      ? "bg-gray-700 text-blue-500 font-bold"
                      : "text-white"
                  }`}
                >
                  <FaFlag className="mr-2 text-2xl" />
                  <span className={`${isOpen ? "block" : "hidden"}`}>Political Indicator</span>
                </Link>
                <Link
                  href="/FinancialIndicator"
                  className={`flex items-center p-2 hover:bg-black text-xl rounded-lg ${
                    isActive("/FinancialIndicator")
                      ? "bg-gray-700 text-blue-500 font-bold"
                      : "text-white"
                  }`}
                >
                  <FaMoneyBillAlt className="mr-2 text-2xl" />
                  <span className={`${isOpen ? "block" : "hidden"}`}>Financial Indicator</span>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </aside>
  );
}