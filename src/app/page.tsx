"use client";

import React from "react";
import Head from "next/head";
import HomeHero from "./components/HomeHero";
import Navigation from "./components/Navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  FaGraduationCap,
  FaCalculator,
  FaFlask,
  FaBook,
  FaTrophy,
  FaPen,
  FaBullseye,
} from "react-icons/fa";

// Lazy load ContactForm for performance
const ContactForm = dynamic(() => import("./components/ContactForm"), {
  ssr: false,
});

const HomePage: React.FC = () => (
  <div className="w-full">
    <Head>
      <title>Pure Mind Tutoring Center</title>
    </Head>

    <Navigation />
    <div className="animate__animated animate__fadeIn animate__delay-1s">
      <HomeHero />
    </div>

    {/* About Us Section */}
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image
          src="https://via.placeholder.com/400x300"
          alt="About Us Image"
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
          priority
        />
        <div>
          <h3 className="text-3xl font-bold text-customBlue mb-4">About Us</h3>
          <p>We nurture young minds with personalized learning experiences.</p>
        </div>
      </div>
    </section>

    {/* Programs Section */}
    <section id="programs" className="py-16 bg-gray-50">
      <h3 className="text-3xl font-bold text-center text-customBlue mb-8">
        Programs We Offer
      </h3>
      <div className="flex space-x-6 px-6 overflow-x-scroll scrollbar-hide">
        {[
          {
            title: "Karnataka CET",
            icon: <FaGraduationCap className="text-4xl text-customBlue" />,
          },
          {
            title: "Mathematics (Grades 1-12)",
            icon: <FaCalculator className="text-4xl text-customBlue" />,
          },
          {
            title: "Science (Grades 1-12)",
            icon: <FaFlask className="text-4xl text-customBlue" />,
          },
          {
            title: "English (All Levels)",
            icon: <FaBook className="text-4xl text-customBlue" />,
          },
          {
            title: "NTSE & Olympiad",
            icon: <FaTrophy className="text-4xl text-customBlue" />,
          },
          {
            title: "PUC (11th & 12th)",
            icon: <FaPen className="text-4xl text-customBlue" />,
          },
          {
            title: "Competitive Exams",
            icon: <FaBullseye className="text-4xl text-customBlue" />,
          },
        ].map((program) => (
          <div
            key={program.title}
            className="bg-white shadow-md p-6 w-72 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4">{program.icon}</div>
            <h4 className="text-2xl font-semibold text-customBlue mb-2">
              {program.title}
            </h4>
          </div>
        ))}
      </div>
    </section>

    {/* Contact Form Section */}
    <section className="py-20 bg-gray-100">
      <ContactForm />
    </section>

    {/* Footer */}
    <footer className="text-center py-4 bg-gray-200">
      <p>© {new Date().getFullYear()} Pure Mind Tutoring Center</p>
    </footer>
  </div>
);

export default HomePage;
