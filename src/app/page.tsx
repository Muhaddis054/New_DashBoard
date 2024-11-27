import React from "react";

import Image from "next/image"; // Import the Image component

export default function Home() {
  return (
    <main>
      <section className="p-10 text-center bg-gray-50">
        <h1 className="text-4xl font-bold">Welcome to Our Platform</h1>
        <p className="text-lg mt-4">Analyze  with confidence.</p>
      </section>
      <section className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-xl font-bold">Objectives and About The Project</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Natus beatae veritatis, recusandae officia quis odio. Blanditiis recusandae ab error provident praesentium.
            Excepturi magni nam in aliquid eos dignissimos vitae et! 1. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Unde vel doloribus, quisquam ipsa laboriosam molestias sed excepturi dicta aspernatur, 
            illum quos, saepe sapiente quod fuga deleniti ducimus! Deserunt, porro tempore.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10 text-left max-w-sm md:max-w-md lg:max-w-lg mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-left">
            Picture Of Award Winning
          </h2>
          <Image
            src="/images/Award.jpeg"
            alt="Award"
            width={350}
            height={350}
            className="mx-auto  mb-6"
          />
        </div>
      </section>
      <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-xl font-bold">Vision</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vero rem ipsum sit.
            Quisquam illo explicabo aut voluptas, rerum laboriosam corporis amet vero veritatis adipisci.
            Quaerat illo magni velit voluptate.</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-xl font-bold">Mission</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vero rem ipsum sit.
            Quisquam illo explicabo aut voluptas, rerum laboriosam corporis amet vero veritatis adipisci.
            Quaerat illo magni velit voluptate.</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-xl font-bold">Service We Provide</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Tempora hic nobis odio magnam quam cumque sunt facilis, earum vel et non, excepturi ullam rerum quod quasi corporis.
            Quasi, doloremque illum!</p>
        </div>
      </section>

    </main>
  );
}
