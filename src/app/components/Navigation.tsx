import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-blue-900 text-white z-20 shadow-lg animate-on-load">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold cursor-pointer">
          Pure Mind
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-semibold">
          <Link href="/" className="hover:text-yellow-300 transition duration-300">Home</Link>
          <Link href="/about" className="hover:text-yellow-300 transition duration-300">About Us</Link>
          <Link href="/programs" className="hover:text-yellow-300 transition duration-300">Programs</Link>
          <Link href="/contact" className="hover:text-yellow-300 transition duration-300">Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes size={24} className="text-white" />
            ) : (
              <FaBars size={24} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 text-white py-4 space-y-4 font-semibold shadow-inner">
          <Link href="/" className="block text-center hover:bg-blue-700 p-2" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" className="block text-center hover:bg-blue-700 p-2" onClick={toggleMenu}>
            About Us
          </Link>
          <Link href="/programs" className="block text-center hover:bg-blue-700 p-2" onClick={toggleMenu}>
            Programs
          </Link>
          <Link href="/contact" className="block text-center hover:bg-blue-700 p-2" onClick={toggleMenu}>
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
