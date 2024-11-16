"use client";
import { FC, useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import {
  FaGraduationCap,
  FaCalculator,
  FaFlask,
  FaBook,
  FaTrophy,
  FaPen,
  FaBullseye,
} from "react-icons/fa";

const ProgramsPage: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger visibility after component mounts to start animations
    setIsVisible(true);
  }, []);

  const programs = [
    {
      title: "Karnataka CET",
      icon: <FaGraduationCap />,
      description:
        "Comprehensive CET preparation for Engineering & Medical aspirants.",
    },
    {
      title: "Mathematics (Grades 1-12)",
      icon: <FaCalculator />,
      description: "Master Math concepts with personalized guidance.",
    },
    {
      title: "Science (Grades 1-12)",
      icon: <FaFlask />,
      description:
        "In-depth Science classes focusing on Physics, Chemistry, and Biology.",
    },
    {
      title: "English (All Levels)",
      icon: <FaBook />,
      description:
        "Enhance your English proficiency for academic and competitive exams.",
    },
    {
      title: "NTSE & Olympiad",
      icon: <FaTrophy />,
      description: "Prepare for NTSE, KVPY, and Olympiads with expert tutors.",
    },
    {
      title: "PUC (11th & 12th)",
      icon: <FaPen />,
      description: "Focused coaching for PUC with exam-oriented strategies.",
    },
    {
      title: "Competitive Exams",
      icon: <FaBullseye />,
      description: "Ace competitive exams like NDA, NEET, and JEE with our expert guidance.",
    },
  ];

  return (
    <div>
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <section className="hero bg-blue-900 text-white py-16 text-center mt-20 transition duration-700">
        <h1 className="text-5xl font-bold mb-4">Welcome to Pure Mind</h1>
        <p className="text-xl mb-6">
          Unlock your potential with expert coaching and personalized guidance
        </p>
        <a
          href="#programs"
          className="bg-customYellow text-white py-3 px-6 rounded-lg text-lg hover:bg-yellow-500 transition duration-300"
        >
          Explore Our Programs
        </a>
      </section>

      {/* Programs Section */}
      <section
        id="programs"
        className="programs-section py-16 bg-gray-50"
      >
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Programs We Offer
        </h3>
        <div className="w-4/5 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className={`program-card p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-700 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-4 text-customBlue">{program.icon}</div>
                <h4 className="text-2xl font-semibold mb-2 text-customBlue">
                  {program.title}
                </h4>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
