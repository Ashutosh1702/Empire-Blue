import React from 'react';
import aboutImage from '../../../assets/about.webp';

const AboutSection = () => {
  return (
    <section className="pt-8 sm:pt-14 md:pt-16 pb-12 sm:pb-20 md:pb-24 bg-[#d7e0e7] -mt-8" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" data-aos-duration="1000" className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="md:w-4/5 p-6 sm:p-8 md:p-12 lg:px-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8">
              <span className="text-[#03009b] text-primary">About</span>{' '}
              <span className="relative z-10 bg-gradient-to-r from-[#4284FF] to-[#1a56db] text-transparent bg-clip-text">
                Us
              </span>
            </h2>

            <div className="h-1 w-16 bg-blue-600 rounded-full"></div>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
              Empire Blue Pvt. Ltd., established in July 2025 in Chhindwara,
              Madhya Pradesh, is a pioneering company in the bottled water
              industry — recognized as the world's first manufacturer of
              non-expiry, bacteria-free bottled water.
              <br />
              <br />
              Our mission is to revolutionize the way people consume water by
              ensuring purity, longevity, and health benefits in every drop.
            </p>

            <button className="mt-6 bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </div>

          {/* Right Image */}
          <div className="relative h-[240px] sm:h-[320px] md:h-[400px] w-full flex items-center justify-center">
            <div className="relative h-full w-[92%] max-w-[520px] border-8 border-white rounded-lg shadow-2xl overflow-hidden">
              <img
                src={aboutImage}
                alt="About Empire Blue"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
