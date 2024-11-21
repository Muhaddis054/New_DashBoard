"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between w-full fixed top-0 left-0 z-30">
      {/* Logo */}
      <div className="text-lg font-bold">MyWebsite</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/About" className="hover:underline">
          About Us
        </Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        &#9776; {/* Hamburger Icon */}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 p-4 space-y-4">
          <Link href="/" className="hover:underline block">
            Home
          </Link>
          <Link href="/About" className="hover:underline block">
            About Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
