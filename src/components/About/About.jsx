import React from 'react';

const About = () => {
  return (
    <div className="bg-[#d7e0e7] py-16 sm:py-20 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left Content */}
            <div className="p-8 sm:p-10 lg:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                About Our Water
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  At AquaPure, we believe in delivering water that's not just pure, but perfect. 
                  Our advanced 7-stage purification process ensures that every drop meets the highest 
                  standards of quality and taste.
                </p>
                
                <p>
                  Sourced from protected natural springs, our water is enriched with essential 
                  minerals and goes through rigorous testing to guarantee its purity and safety 
                  for you and your family.
                </p>
                
                <div className="pt-2">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center">
                    Learn More About Our Process
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="h-64 md:h-auto bg-gray-200">
              <img 
                src="/src/assets/about-water.jpg" 
                alt="Pure Water" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
