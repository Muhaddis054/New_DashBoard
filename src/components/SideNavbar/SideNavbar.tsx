"use client"
import { useState, useEffect } from "react";
import { FaChartLine, FaDatabase } from "react-icons/fa";

export default function SideNavbar() {
  const [isOpen, setIsOpen] = useState(true);

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

  return (
    <aside
      className={`${isOpen ? "w-90" : "w-16"
        } transition-all h-screen bg-gray-800 sm:w-90 sm:flex-shrink-0 relative`}
    >
      {/* Toggle Button Positioned at the Top of the Sidebar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 left-4 bg-white rounded-full p-2 text-2xl z-10"
      >
        {isOpen ? "<" : ">"}
      </button>

      <div className="flex flex-col justify-start p-4 mt-16">
        {/* Dashboard Heading */}
        <h2
          className={`text-4xl text-white font-bold mb-4 ${isOpen ? "block" : "hidden"}`}
        >
          Dashboard
        </h2>

        {/* Navigation Links */}
        <nav>
          <a
            href="/economics"
            className="flex items-center p-2 hover:bg-black text-white rounded-lg text-2xl"
          >
            <FaChartLine className="mr-2" />
            <span className={`${isOpen ? "block" : "hidden"}`}>Economics</span>
          </a>
          <a
            href="/financial-data"
            className="flex items-center p-2 hover:bg-black text-white rounded-lg text-2xl"
          >
            <FaDatabase className="mr-2" />
            <span className={`${isOpen ? "block" : "hidden"}`}>Financial Data</span>
          </a>
        </nav>
      </div>
    </aside>
  );
}
