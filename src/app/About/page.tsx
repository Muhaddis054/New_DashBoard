import React from "react";
import Image from "next/image"; // Import the Image component

export default function About() {
  return (
    <main>
      <section className="p-16 text-center bg-gray-50 dark:bg-gray-800">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg mt-4">Analyze with confidence.</p>
      </section>


      {/* Team Section */}
      <section className="p-8 bg-gray-100 dark:bg-gray-700">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Team Member 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <Image
              src="/images/picture-1.jpeg"
              alt="Team Member"
              width={150}
              height={150}
              className="mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-500">CEO</p>
            <p className="text-sm text-gray-600 mt-4">
              John is the visionary behind our company and leads the team with great expertise.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <Image
              src="/images/picture-2.jpeg"
              alt="Team Member"
              width={150}
              height={150}
              className="mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-500">CTO</p>
            <p className="text-sm text-gray-600 mt-4">
              Jane oversees all technical operations and ensures the highest quality in our work.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <Image
              src="/images/picture-3.jpeg"
              alt="Team Member"
              width={150}
              height={150}
              className="mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Alice Johnson</h3>
            <p className="text-gray-500">Lead Developer</p>
            <p className="text-sm text-gray-600 mt-4">
              Alice is our lead developer, ensuring smooth development processes and code quality.
            </p>
          </div>

          {/* Team Member 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <Image
              src="/images/picture-4.jpeg"
              alt="Team Member"
              width={150}
              height={150}
              className="mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Bob Brown</h3>
            <p className="text-gray-500">Product Manager</p>
            <p className="text-sm text-gray-600 mt-4">
              Bob manages our product vision and helps bring ideas to life with his team.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
