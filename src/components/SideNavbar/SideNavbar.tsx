"use client";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineBarChart } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const MenuLink = ({
    href,
    icon: Icon,
    text,
  }: {
    href: string;
    icon: React.ElementType;
    text: string;
  }) => (
    <li className="p-4 flex items-center hover:bg-gray-700 transition">
      <Icon className="mr-2" />
      <Link href={href} className="hover:underline">
        {text}
      </Link>
    </li>
  );

  return (
    <>
      {/* Slider Button */}
      <button
        onClick={toggleSidebar}
        className="p-2 bg-gray-800 text-white fixed top-50 left-4 z-20 rounded-md hover:bg-gray-600 focus:outline-none md:hidden"
      >
        {isOpen ? ">" : "☰"}
      </button>

      {/* SideNavbar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-gray-800 text-white transition-transform duration-300 z-10 md:translate-x-0 md:static md:h-auto`}
      >
        {/* Sidebar Header */}
        <h2 className="text-lg font-bold p-4 border-b bg-gray-900">Dashboard</h2>

        {/* Menu Items */}
        <ul className="flex flex-col">
          <MenuLink href="/economic-data" icon={AiOutlineBarChart} text="Economic Data" />
          <MenuLink href="/financial-data" icon={MdAttachMoney} text="Financial Data" />
        </ul>
      </div>

      {/* Overlay for mobile view */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default SideNavbar;
