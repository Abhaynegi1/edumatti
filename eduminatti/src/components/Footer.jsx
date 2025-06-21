import React from 'react';
import { Phone, Mail, Globe } from 'lucide-react';

/**
 * Footer Component
 * 
 * Displays the website footer with company information, quick links, contact details, and top cities.
 * This component provides navigation and contact information at the bottom of the page.
 * 
 * @component
 * @returns {JSX.Element} The footer component
 */
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">EDU</h3>
            <p className="text-blue-200">
              Finding the perfect school for every student's journey to success.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Schools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-blue-200">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 9557695360</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@edu.com</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                <span>www.edu.com</span>
              </div>
            </div>
          </div>
          
          {/* Top Cities */}
          <div>
            <h4 className="font-semibold mb-4">Top Cities</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">Dehradun Schools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Delhi Schools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mumbai Schools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bangalore Schools</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2025 EDU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 