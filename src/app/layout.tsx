"use client";
import "../styles/globals.css";
import Head from 'next/head';
import Navbar from "@/components/Header";
import SideNavbar from "@/components/SideNavbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <Head>
        <meta charSet="UTF-8" />
        <title>NRPU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="flex flex-col min-h-screen">
        <div className="flex flex-1">
          <SideNavbar />
          <div className="flex-1">
            <Navbar />
            {children}
        <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
