import React from 'react';

const HomeHero: React.FC = () => (
  <div className="w-full pt-20">
    {/* Hero Section */}
    <section
      id="home"
      className="py-20 bg-cover bg-center bg-gray-100"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6">
        
        {/* Left: SVG Image */}
        <div className="flex justify-center p-20">
        <img src="/assets/5437682.svg" alt="Illustration" />
        </div>
        
        {/* Right: Text Content */}
        <div className="text-center md:text-left text-customBlue">
          <h2 className="text-4xl font-bold mb-4">Empower Your Mind with Pure Knowledge</h2>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-customBlue font-bold py-2 px-4 rounded">
            Book a Free Demo
          </button>
        </div>
      </div>
    </section>
  </div>
);

export default HomeHero;
