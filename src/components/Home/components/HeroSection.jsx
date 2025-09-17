import React from "react";
import canImage from "../../../assets/can1.webp";
import logoImage from "../../../assets/image.webp";

const HeroSection = () => {
  return (
    <section className="bg-[#d7e0e7] max-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden" data-aos="fade-up">
      {/* Background Curve */}
      <div className="absolute z-50 -bottom-4.5 left-0 w-full">
        <svg
          className="w-full h-[80px] sm:h-[120px] md:h-[150px] lg:h-[180px] xl:h-[220px]"
          viewBox="0 0 1440 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C320,320 1120,320 1440,0"
            stroke="#fff"
            strokeWidth="16"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0,0 C320,320 1120,320 1440,0 L1440,500 L0,500 Z"
            fill="#D7E0E7"
            filter="drop-shadow(0px -5px 10px rgba(0, 84, 231, 0.1))"
          />
        </svg>
      </div>

      {/* Card */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="z-10 flex flex-col lg:flex-row w-full max-w-[1000px] rounded-[20px] lg:rounded-[30px] items-center p-4 sm:p-6 lg:p-8 bg-[#e4e9ed] shadow-lg relative mb-8 sm:mb-12 lg:mb-16"
      >
        {/* Left Image */}
        <div className="w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[400px] h-auto flex-shrink-0 mb-6 sm:mb-8 lg:mb-0 lg:mr-6 xl:mr-8">
          <img
            src={canImage}
            alt="Empire Blue Water Can"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="w-full max-w-[450px] flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Logo */}
          <div className="w-[160px] sm:w-[220px] md:w-[260px] lg:w-[300px] h-auto mb-4 sm:mb-6">
            <img
              src={logoImage}
              alt="Empire Blue Logo"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Title */}
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            World's <span className="text-blue-800">First Non-Expiry </span>
            Water
          </h1>
    
          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed max-w-[450px]">
            Empire Blue Pvt. Ltd. prioritizes health, innovation, and
            sustainability. We are committed to setting new industry standards
            and providing a safe, reliable, and beneficial hydration solution
            for people worldwide.
          </p>

          {/* Contact Button */}
          <div className="relative z-20 mt-2 sm:mt-4 flex justify-center lg:justify-start w-full lg:w-auto">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium shadow-md hover:shadow-lg transition-all duration-200 min-w-[120px] sm:min-w-[140px]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
