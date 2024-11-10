import { FC } from "react";
import Navigation from "../components/Navigation";

const ProgramsPage: FC = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <section className="hero bg-blue-900 text-white py-16 text-center mt-20 animate__animated animate__fadeIn animate__delay-1s">
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
      <section id="programs" className="programs-section py-16 bg-gray-50 animate__animated animate__fadeIn animate__delay-2s">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Programs We Offer
        </h3>
        <div className="w-4/5 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Karnataka CET",
                icon: "🎓",
                description:
                  "Comprehensive CET preparation for Engineering & Medical aspirants.",
              },
              {
                title: "Mathematics (Grades 1-12)",
                icon: "📐",
                description: "Master Math concepts with personalized guidance.",
              },
              {
                title: "Science (Grades 1-12)",
                icon: "🔬",
                description:
                  "In-depth Science classes focusing on Physics, Chemistry, and Biology.",
              },
              {
                title: "English (All Levels)",
                icon: "📖",
                description:
                  "Enhance your English proficiency for academic and competitive exams.",
              },
              {
                title: "NTSE & Olympiad",
                icon: "🏆",
                description:
                  "Prepare for NTSE, KVPY, and Olympiads with expert tutors.",
              },
              {
                title: "PUC (11th & 12th)",
                icon: "📝",
                description:
                  "Focused coaching for PUC with exam-oriented strategies.",
              },
              {
                title: "Competitive Exams",
                icon: "🎯",
                description:
                  "Ace competitive exams like NDA, NEET, and JEE with our expert guidance.",
              },
            ].map((program, index) => (
              <div
                key={program.title}
                className="program-card p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
                style={{ animationDelay: `${3 + index * 0.2}s` }}
              >
                <div className="text-4xl mb-4">{program.icon}</div>
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
