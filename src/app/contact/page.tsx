import { FC } from "react";
import ContactForm from "../components/ContactForm";

const ContactPage: FC = () => {
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
      <section className="relative bg-green-600 text-white py-24 sm:py-32 lg:py-40 mt-20 animate__animated animate__fadeIn animate__delay-1s">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("https://via.placeholder.com/1500x500")',
          }}
        ></div>
        <div className="relative container mx-auto text-center px-4 sm:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate__animated animate__fadeInUp">
            Contact Us
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
            We are here to help! Reach out for any questions or inquiries.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-white text-center animate__animated animate__fadeIn animate__delay-1s">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-customYellow mb-4 animate__animated animate__fadeInUp animate__delay-2s">
              Get in Touch
            </h2>

            <p className="text-xl sm:text-2xl text-gray-700 max-w-2xl mx-auto">
              We would love to hear from you
            </p>
          </div>

          {/* Contact Information */}
          <div className="max-w-3xl mx-auto text-gray-700 text-lg mb-12 space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-customYellow">
                Our Location
              </h3>
              <p>123 Main Street, City Name, Country</p>
              {/* Map Placeholder */}
              <div className="my-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d243.10407163960616!2d77.57986901335424!3d12.864891197308499!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b0a0d8588d9%3A0x6060fa5334b6df51!2sPolar%20Bear%20Ice%20Cream%20Sundeas%20-%20Jambusavari%20Dinne!5e0!3m2!1sen!2sin!4v1731238040028!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-customYellow">
                Business Hours
              </h3>
              <div className="space-y-2">
                <p>Monday - Friday: 5:00 AM - 8:00 AM & 5:00 PM to 8:00 PM</p>
                <p>Saturday: 2:00 PM - 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-customYellow">
                Contact Information
              </h3>
              <div className="space-y-2">
                <p>Email: info@puremind.com</p>
                <p>Phone: (123) 456-7890</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
