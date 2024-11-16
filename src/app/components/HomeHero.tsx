"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeHero: React.FC = () => (
  <div className="w-full pt-20">
    {/* Hero Section */}
    <section
      id="home"
      className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 px-6 lg:px-12">
        {/* Image Section with Animation */}
        <div className="flex justify-center md:justify-end p-10 md:p-0">
          <Image
            src="/assets/5437682.svg"
            alt="Empower Your Mind Illustration"
            width={400}
            height={400}
            className="object-contain transform transition-transform duration-500 ease-out hover:scale-110"
            priority // This attribute helps in preloading the image for better performance
          />
        </div>

        {/* Text Section */}
        <div className="space-y-8 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            Empower Your Mind with <br className="hidden md:block" />
            <span className="text-blue-600">Pure Knowledge</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            Unlock your potential with our expert-led courses and personalized resources.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              href="/contact"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-out transform hover:-translate-y-1 focus:ring-4 focus:ring-yellow-300 focus:outline-none"
            >
              Book a Free Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HomeHero;
