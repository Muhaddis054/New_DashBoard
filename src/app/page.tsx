"use client";

import Navbar from "../components/Navbar/Navbar";
import SideNavbar from "../components/SideNavbar/SideNavbar";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div className="flex h-screen">
      {/* Side Navbar */}
      <SideNavbar />

      <div className="flex-1 flex flex-col">
        {/* Fixed Navbar */}
        <Navbar />

        <main className="p-6 bg-gray-50 flex-1 mt-16">
          <section className="bg-gray-800 text-white text-center p-8 rounded-lg shadow-md mb-6">
            <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
            <p className="text-lg">
              Discover amazing features and insights to help you!
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              Feature 1
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              Feature 2
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              Feature 3
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
