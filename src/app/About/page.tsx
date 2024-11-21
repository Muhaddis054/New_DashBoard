import Navbar from '../../components/Navbar/Navbar';
import SideNavbar from '../../components/SideNavbar/SideNavbar';
import Footer from '../../components/Footer/Footer';


const About = () => {
    return (
    <div className="flex h-screen">

      <SideNavbar />

      <div className="flex-1 flex flex-col">
        <Navbar  />
      
        <main className="p-6 bg-gray-50 flex-1 mt-16">
          {/* Hero Section */}
          <section className="bg-gray-800 text-white text-center p-8 rounded-lg shadow-md mb-6">
            <h1 className="text-4xl font-bold mb-4">About Us Of My Projrect</h1>
            <p className="text-lg">
              Discover amazing features and insights to help you!
            </p>
          </section>

          {/* Feature Section */}
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

export default About;
