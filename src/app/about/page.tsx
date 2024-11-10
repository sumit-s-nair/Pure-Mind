"use client";
import { FC, useEffect } from 'react';

const AboutPage: FC = () => {
  // Hook to trigger animations on page load
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('fade-in');
      }, index * 300);
    });
  }, []);

  return (
    <div>
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
      <section className="relative bg-blue-600 text-white py-20 mt-20 animate-on-load">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/1500x500")' }}></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Meet Dr. Shashank Wazarkar</h1>
          <p className="text-2xl max-w-2xl mx-auto">
            The Head Faculty at Pure Mind, dedicated to providing the highest quality education.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white text-center animate-on-load">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <img
              src="https://via.placeholder.com/150"
              alt="Dr. Shashank Wazarkar"
              className="rounded-full mb-6"
              style={{ width: '180px', height: '180px' }}
            />
            <h2 className="text-4xl font-semibold text-customBlue">Dr. Shashank Wazarkar</h2>
            <p className="text-xl text-gray-700">Head Faculty, Pure Mind</p>
          </div>

          <div className="max-w-3xl mx-auto text-gray-700 text-lg">
            <p className="mb-6">
              Dr. Shashank Wazarkar is a seasoned educator with over 15 years of experience in the field of education. Known for his passion for teaching and deep understanding of academic excellence, Dr. Wazarkar has inspired countless students to achieve their best. He brings a wealth of knowledge and experience to Pure Mind, where he leads with a hands-on approach to academic success.
            </p>
            <p className="mb-6">
              Dr. Wazarkar completed his Ph.D. in Education from a prestigious institution, and his research on innovative teaching methods has been widely recognized. He is not only a mentor to his students but also a guiding light for the entire faculty at Pure Mind. His commitment to personalized education and development has shaped the direction of our tutoring programs.
            </p>
            <p className="mb-6">
              Outside of the classroom, Dr. Wazarkar is an advocate for continuous learning and personal growth. He regularly attends educational conferences and conducts workshops to stay updated with the latest teaching strategies and methodologies. His holistic approach to education ensures that every student not only excels academically but also develops critical thinking and problem-solving skills.
            </p>
            <p>
              With a focus on nurturing young minds and creating an environment of intellectual curiosity, Dr. Shashank Wazarkar continues to be a pillar of academic excellence at Pure Mind.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
