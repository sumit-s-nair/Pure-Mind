"use client"

import { FC } from "react";
import ContactForm from "../components/ContactForm";
import Navigation from "../components/Navigation";

const ContactPage: FC = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-green-600 text-white py-32 sm:py-40 lg:py-48 mt-20 animate__animated animate__fadeIn">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url("https://via.placeholder.com/1500x500")',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-green-600 to-transparent opacity-80"></div>
        <div className="relative container mx-auto text-center px-6 sm:px-10">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 animate__animated animate__fadeInUp">
            Contact Us
          </h1>
          <p className="text-2xl sm:text-3xl max-w-4xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
            We're here to help! Reach out for any questions or inquiries.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-gray-100 animate__animated animate__fadeIn animate__delay-1s">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Get in Touch Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-green-700 mb-4 animate__animated animate__fadeInUp animate__delay-2s">
              Get in Touch
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
              We would love to hear from you
            </p>
          </div>

          {/* Contact Details with Card Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Location Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-4 text-center">
              <h3 className="text-2xl font-semibold text-green-700">Our Location</h3>
              <p>123 Main Street, City Name, Country</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d243.10407163960616!2d77.57986901335424!3d12.864891197308499!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b0a0d8588d9%3A0x6060fa5334b6df51!2sPolar%20Bear%20Ice%20Cream%20Sundeas%20-%20Jambusavari%20Dinne!5e0!3m2!1sen!2sin!4v1731238040028!5m2!1sen!2sin"
                width="100%"
                height="250"
                className="rounded-lg mt-4"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-4 text-center">
              <h3 className="text-2xl font-semibold text-green-700">Business Hours</h3>
              <ul className="space-y-2">
                <li>Mon - Fri: 5:00 AM - 8:00 AM & 5:00 PM - 8:00 PM</li>
                <li>Saturday: 2:00 PM - 6:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            {/* Contact Info Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-4 text-center">
              <h3 className="text-2xl font-semibold text-green-700">Contact Information</h3>
              <p>Email: <a href="mailto:info@puremind.com" className="text-blue-600 hover:underline">info@puremind.com</a></p>
              <p>Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">(123) 456-7890</a></p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-green-700 mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
