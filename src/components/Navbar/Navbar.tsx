import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa"; // Importing icons for the menu

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to check if the link is active by comparing the pathname
  const isActive = (path: string) => {
    const cleanPath = pathname.split("?")[0].toLowerCase();  // Remove query params and make it lowercase
    return cleanPath === path.toLowerCase();  // Compare the path in a case-insensitive manner
  };

  return (
    <nav className="flex justify-between items-center p-6 bg-gray-800 shadow-md w-full">
      {/* Logo */}
      <h1 className="text-xl sm:text-4xl font-bold text-white flex justify-between items-center flex-grow">
        Investment Risk Analysis
      </h1>

      {/* Mobile Hamburger Menu Icon */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden text-white text-2xl"  // Show for screens smaller than lg
      >
        {isMobileMenuOpen ? <FaBars /> : <FaBars />} {/* Show either the close or open menu icon */}
      </button>

      {/* Desktop Navbar links */}
      <div className="hidden lg:flex space-x-6"> {/* Show only on screens large and up */}
        <Link
          href="/"
          className={`px-6 py-4 ${isActive("/") ? "font-bold text-blue-500" : "text-white"} sm:text-2xl`}
        >
          Home
        </Link>
        <Link
          href="/About"
          className={`px-6 py-4 ${isActive("/about") ? "font-bold text-blue-500" : "text-white"} sm:text-2xl`}
        >
          About Us
        </Link>
      </div>

      {/* Mobile Navbar links */}
      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"
          } lg:hidden bg-gray-700 p-4 space-y-4 mt-4 w-full`}  // Only show on small screens
      >
        <Link
          href="/"
          className={`block px-4 py-2 text-white text-xl ${isActive("/") ? "font-bold text-blue-500" : ""}`}
        >
          Home
        </Link>
        <Link
          href="/About"
          className={`block px-4 py-2 text-white text-xl ${isActive("/about") ? "font-bold text-blue-500" : ""}`}
        >
          About Us
        </Link>
      </div>
    </nav>
  );
}
