import React from 'react';
import Link from 'next/link';

const HomepageHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dfwty72r9/image/upload/v1752528175/semi-submersible-oil-rig-vessel_frnubt.jpg"
          alt="Semi-submersible oil rig vessel"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Building Sustainable Energy Infrastructure for Tomorrow
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Combining global standards with fresh local expertise to power
              progress.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 text-center transform hover:scale-105 shadow-lg"
              >
                Contact
              </Link>

              <Link
                href="/services"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 text-center transform hover:scale-105"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageHero;
