"use client";
import { FC, useEffect } from "react";
import Navigation from "../components/Navigation";
import Image from "next/image";
import Link from "next/link";

const AboutPage: FC = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-load");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.remove("opacity-0", "translate-y-10");
        el.classList.add("opacity-100", "translate-y-0");
      }, index * 200);
    });
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-36 mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("https://via.placeholder.com/1500x500")',
          }}
        ></div>
        <div className="relative container mx-auto text-center z-10 animate-on-load opacity-0 translate-y-10 transition duration-700">
          <h1 className="text-5xl font-extrabold mb-4">
            Meet Dr. Shashank Wazarkar
          </h1>
          <p className="text-2xl max-w-2xl mx-auto">
            The Head Faculty at Pure Mind, dedicated to providing the highest
            quality education.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16 animate-on-load opacity-0 translate-y-10 transition duration-700">
            <Image
              src="https://via.placeholder.com/150"
              alt="Dr. Shashank Wazarkar"
              className="rounded-full shadow-lg mb-6"
              width={180}
              height={180}
            />
            <h2 className="text-4xl font-semibold text-customBlue mb-2">
              Dr. Shashank Wazarkar
            </h2>
            <p className="text-xl text-gray-600">Head Faculty, Pure Mind</p>
          </div>

          <div className="max-w-3xl mx-auto text-gray-700 text-lg space-y-6 leading-relaxed animate-on-load opacity-0 translate-y-10 transition duration-700">
            <p>
              Dr. Shashank Wazarkar is a seasoned educator with over 15 years of
              experience in the field of education. Known for his passion for
              teaching and deep understanding of academic excellence, Dr.
              Wazarkar has inspired countless students to achieve their best. He
              brings a wealth of knowledge and experience to Pure Mind, where he
              leads with a hands-on approach to academic success.
            </p>
            <p>
              He completed his Ph.D. in Education from a prestigious institution,
              and his research on innovative teaching methods has been widely
              recognized. Dr. Wazarkar is not only a mentor to his students but
              also a guiding light for the entire faculty at Pure Mind.
            </p>
            <p>
              Outside of the classroom, Dr. Wazarkar is an advocate for
              continuous learning and personal growth, regularly attending
              educational conferences and conducting workshops.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { label: "Years of Experience", value: "15+" },
            { label: "Students Mentored", value: "2000+" },
            { label: "Research Papers", value: "25+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-lg shadow-lg animate-on-load opacity-0 translate-y-10 transition duration-700"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className="text-4xl font-bold text-customBlue mb-4">
                {stat.value}
              </h3>
              <p className="text-lg text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center">
        <div className="animate-on-load opacity-0 translate-y-10 transition duration-700">
          <h3 className="text-4xl font-bold mb-4">Ready to Learn with Us?</h3>
          <p className="text-lg mb-8">
            Join Pure Mind and experience personalized tutoring from experts.
          </p>
          <Link
          href={"/contact"}
           className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-lg">
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-200">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Pure Mind Tutoring Center. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default AboutPage;
