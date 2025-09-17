import React, { useState, useCallback, memo } from 'react';
import logo from '../../assets/logo1.webp';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavItem = memo(({ item, isActive, onClick }) => (
  <button
    onClick={() => onClick(item.page)}
    className={`w-full text-left px-4 py-3 text-base font-medium transition-colors duration-200 ${
      isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
    }`}
  >
    {item.name}
  </button>
));

const Navbar = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const navItems = [
    { id: 1, name: 'Home', page: 'home' },
    { id: 2, name: 'About', page: 'about' },
    { id: 3, name: 'Services', page: 'services' },
    { id: 4, name: 'Contact', page: 'contact' },
  ];

  const handleNavClick = useCallback((page) => {
    onNavigate(page);
    setIsOpen(false);
  }, [onNavigate]);

  const toggleMenu = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsOpen(prev => !prev);
      // Reset animation state after transition
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [isAnimating]);

  return (
    <nav className="bg-[#ffffff] border-b border-gray-100 w-full sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src={logo}
              alt="Empire Blue"
              className="h-12 w-auto"
              width={200}
              height={45}
              decoding="async"
              style={{ color: 'transparent' }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.page)}
                className={`px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200 ${
                  currentPage === item.page
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button className="ml-4 bg-blue-700 text-white px-7 py-2.5 rounded-full shadow hover:bg-blue-800 transition-all duration-200 text-base font-medium hover:shadow-lg">
              Book Now <span className="text-base sm:text-lg">→</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <NavItem 
              key={item.id} 
              item={item} 
              isActive={currentPage === item.page}
              onClick={handleNavClick}
            />
          ))}
          <div className="px-4 py-3">
            <button 
              className="w-full bg-blue-700 text-white px-4 py-2.5 rounded-full shadow hover:bg-blue-800 transition-colors duration-200 text-base font-medium"
              onClick={() => handleNavClick('book')}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
