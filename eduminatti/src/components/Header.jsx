import React from 'react';

/**
 * Header Component
 * 
 * Displays the main navigation header with logo, navigation links, and authentication buttons.
 * This component is responsible for the top navigation bar of the school finder website.
 * 
 * @component
 * @returns {JSX.Element} The header component with navigation
 */
const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
<div className="flex items-center">
            {/* Replace the src with your actual logo path */}
            <img 
              src="logo.webp" 
              alt="EDU Logo" 
              className="h-12 w-auto bg-white p-2 rounded"
              onError={(e) => {
                // Fallback to text logo if image fails to load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <h1 className="text-2xl font-bold text-blue-600 hidden">EDU</h1>
          </div>
          
          {/* Navigation Links - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </a>
            
            {/* Special button-style nav items with custom color */}
            <a 
              href="#" 
              className="relative px-4 py-2 text-white rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:scale-105"
              style={{
                background: 'rgb(2, 97, 143)',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgb(1, 77, 114)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgb(2, 97, 143)';
              }}
            >
              <span className="relative z-10">Compare Schools</span>
              <div 
                className="absolute inset-0 rounded-lg opacity-0 animate-pulse"
                style={{ background: 'rgb(52, 147, 193)' }}
              ></div>
            </a>
            
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Blogs
            </a>
            
            {/* Another special button with same custom color */}
            <a 
              href="#" 
              className="relative px-4 py-2 text-white rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:scale-105"
              style={{
                background: 'rgb(2, 97, 143)',
                '&:hover': {
                  background: 'rgb(1, 77, 114)'
                }
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgb(1, 77, 114)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgb(2, 97, 143)';
              }}
            >
              <span className="relative z-10">Get Consultation</span>
              <div 
                className="absolute inset-0 rounded-lg opacity-0 animate-ping animation-delay-1000"
                style={{ background: 'rgb(52, 147, 193)' }}
              ></div>
            </a>
          </nav>
          
          {/* Mobile menu button - Shows on smaller screens */}
          <div className="lg:hidden">
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu - Hidden by default, you can add state to toggle this */}
        <div className="lg:hidden hidden border-t border-gray-200 pt-4 pb-4">
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">About</a>
            <a 
              href="#" 
              className="px-4 py-2 text-white rounded-lg font-medium text-center"
              style={{ background: 'rgb(2, 97, 143)' }}
            >
              Compare Schools
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">Contact</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">Blogs</a>
            <a 
              href="#" 
              className="px-4 py-2 text-white rounded-lg font-medium text-center"
              style={{ background: 'rgb(2, 97, 143)' }}
            >
              Get Consultation
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes subtlePulse {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.3; }
        }
        
        .animate-pulse {
          animation: subtlePulse 2s ease-in-out infinite;
        }
        
        .animate-ping {
          animation: subtlePulse 2s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </header>
  );
};

export default Header;