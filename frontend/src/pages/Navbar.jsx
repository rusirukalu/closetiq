import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          closetIQ
        </Link>
        
        {/* Navbar Links */}
        <div className="hidden md:flex space-x-6 text-lg font-semibold text-gray-700">
          {/* Updated Home Link */}
          <a href="#hero" className="hover:text-blue-500">Home</a> {/* Link to Hero Section */}
          <a href="#about" className="hover:text-blue-500">About</a>
          <Link to="/login" className="hover:text-blue-500">Login</Link>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex items-center space-x-4">
          <Link to="/signup">
            <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-lg font-semibold rounded-full hover:bg-yellow-600 transform transition-all duration-300 ease-in-out scale-100 hover:scale-105">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-700">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
