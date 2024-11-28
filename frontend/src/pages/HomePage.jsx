import React from 'react';
import Navbar from '../pages/Navbar';
import HeroSection from '../pages/HeroSection';
import Footer from '../pages/Footer';
import AboutSection from '../pages/AboutSection';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      {/* Service Features Section */}
      <AboutSection />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
