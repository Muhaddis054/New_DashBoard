"use client";
import "../styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import SideNavbar from "@/components/SideNavbar/SideNavbar";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <div className="flex flex-1">
          <SideNavbar />
          <div className="flex-1">
            <Navbar />
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
