import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { BsChatDotsFill } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Company Information */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-700 rounded mr-3 flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900">EMPIRE BLUE</h3>
                <p className="text-sm text-gray-600">For Health Conscious People</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Providing clean and safe water solutions for a healthier tomorrow. Our commitment to quality and innovation makes us the trusted choice in water treatment.
            </p>
            <div className="flex space-x-4">
              <a aria-label="facebook" href="#" className="w-8 h-8 bg-gray-100 hover:bg-blue-50 text-blue-700 rounded-full flex items-center justify-center transition-colors">
                <FaFacebookF />
              </a>
              <a aria-label="twitter" href="#" className="w-8 h-8 bg-gray-100 hover:bg-blue-50 text-blue-700 rounded-full flex items-center justify-center transition-colors">
                <FaTwitter />
              </a>
              <a aria-label="instagram" href="#" className="w-8 h-8 bg-gray-100 hover:bg-blue-50 text-blue-700 rounded-full flex items-center justify-center transition-colors">
                <FaInstagram />
              </a>
              <a aria-label="linkedin" href="#" className="w-8 h-8 bg-gray-100 hover:bg-blue-50 text-blue-700 rounded-full flex items-center justify-center transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-blue-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-700 text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-700 text-sm">Our Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-700 text-sm">Latest News</a></li>
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div>
            <h4 className="text-lg font-bold text-blue-900 mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-700 text-sm">Water Testing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-700 text-sm">Water Purification</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-700 text-sm">Water Treatment</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-700 text-sm">Expert Consultation</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact Us */}
          <div>
            <h4 className="text-lg font-bold text-blue-900 mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start text-blue-800">
                <FiMapPin className="mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600 text-sm">Empire Blue Pvt. Ltd.<br />Chhindwara, Madhya Pradesh<br />India</p>
              </div>
              <div className="flex items-center text-blue-800">
                <FiPhone className="mr-3 flex-shrink-0" />
                <p className="text-gray-600 text-sm">+91 8867268719</p>
              </div>
              <div className="flex items-center text-blue-800">
                <FiMail className="mr-3 flex-shrink-0" />
                <p className="text-gray-600 text-sm">info@empireblue.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© 2025 Empire Blue. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <a href="#" className="text-gray-600 hover:text-blue-700 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-blue-700 text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
        {/* Chat Button */}
        <button aria-label="chat" className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-800 transition-colors relative">
          <BsChatDotsFill className="text-xl" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
        </button>
        
        {/* Scroll to Top Button */}
        <button aria-label="back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-800 transition-colors">
          <IoIosArrowUp className="text-2xl" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
