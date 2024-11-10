import React from "react";
import HomeHero from "./components/HomeHero";
import ContactForm from "./components/ContactForm";

const HomePage: React.FC = () => (
  <div className="w-full">
    {/* Navigation Bar */}
    <nav className="fixed top-0 w-full flex justify-between items-center p-6 bg-blue-900 text-white z-10 shadow-md animate-on-load">
        <h1 className="text-2xl font-bold">Pure Mind</h1>
        <div className="space-x-4 font-bold">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About Us
          </a>
          <a href="#programs" className="hover:underline">
            Programs
          </a>
          <a href="#contact" className="hover:underline">
            Contact Us
          </a>
        </div>
      </nav>

    {/* Hero Section */}
    <div className="animate__animated animate__fadeIn animate__delay-1s">
      <HomeHero />
    </div>

    {/* About Us Section */}
    <section
      id="about"
      className="py-16 bg-white animate__animated animate__fadeIn animate__delay-2s"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/400x300"
            alt="About Us Image"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold text-customBlue mb-4">About Us</h3>
          <p className="text-gray-700">
            At Pure Mind, we focus on nurturing young minds with the best
            educational tools and resources. Our experienced tutors are
            committed to providing personalized learning experiences that help
            students reach their full potential.
          </p>
        </div>
      </div>
    </section>

    {/* Programs Section */}
    <section
      id="programs"
      className="py-16 bg-gray-50 animate__animated animate__fadeIn animate__delay-3s"
    >
      <h3 className="text-3xl font-bold text-center text-customBlue mb-8">
        Programs We Offer
      </h3>
      <div className="w-full overflow-hidden">
        <div className="flex space-x-6 px-6 overflow-x-scroll scrollbar-hide">
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
          ].map((program) => (
            <div
              key={program.title}
              className="bg-white shadow-md rounded-lg p-6 text-center w-80 flex-shrink-0 animate__fadeIn animate__delay-4s"
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

    {/* Testimonials Section */}
    <section
      id="testimonials"
      className="py-16 bg-yellow-200 text-center animate__animated animate__fadeIn animate__delay-4s"
    >
      <h3 className="text-3xl font-bold text-customBlue mb-8">Testimonials</h3>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "John Doe",
            image: "https://via.placeholder.com/150",
            quote:
              "Pure Mind has transformed my child’s approach to learning. The tutors are amazing!",
          },
          {
            name: "Jane Smith",
            image: "https://via.placeholder.com/150",
            quote:
              "The personalized approach and supportive environment have made a world of difference.",
          },
          {
            name: "Samuel Lee",
            image: "https://via.placeholder.com/150",
            quote:
              "I am extremely satisfied with the progress my son has made. Highly recommend Pure Mind!",
          },
        ].map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center animate__fadeIn animate__delay-6s"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
            <h4 className="text-lg font-bold text-customBlue">
              {testimonial.name}
            </h4>
          </div>
        ))}
      </div>
    </section>

    {/* Contact Us Section */}
    <section className="py-20 bg-gray-100 animate__animated animate__fadeIn animate__delay-5s">
      <ContactForm />
    </section>

    {/* Footer */}
    <footer className="text-center py-4 bg-gray-200 animate__animated animate__fadeIn animate__delay-6s">
      <p className="text-gray-600">
        © {new Date().getFullYear()} Pure Mind Tutoring Center. All rights
        reserved.
      </p>
    </footer>
  </div>
);

export default HomePage;
