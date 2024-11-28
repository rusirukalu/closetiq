import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
        id="hero" className="relative bg-cover bg-center h-screen flex justify-center items-center text-white"
      style={{ backgroundImage: "url('https://media.gucci.com/dynamic/b3c8/TK52xBETaf7KIsisDCZmwIY4JUK0NbtrTef+yFRbUK7xYJ81bv6juJgLo4BEDFLm_iG5TF_NkBwjJhcRKMrOxFpG2R_YqPXtWPkOrBwxzHusyS9A316PTWxAOETCFasM8wbtcrnUKVzFuH60ktpF6dwc6HXl+FhLXzbzKmlXreJZKx64Di4zIcY7gk_xWh1cSqwMGgSnI1B2cf_fZJJgYbugE685B+uJZm+IN8zIaurVobKQ2hOSnc6BuhhC88c8bWnGZkp2g9wJMEbZjyBnpatsQEIKrPsJX_G6+xxYK4vhy76NUM_Rzvthk2cnIs+ze1fqFSGRm41pW17kSJ5l0TOxqdeAU43P1LiY+SYs1c8amRKegfa26abq8tGmBISj/HP_Hero-FullBleed-Desktop_Gucci-GiftGiving-Nov24-ASE-240720-0036-6378_001_Default.png')" }} 
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Transform Your Wardrobe with AI
        </h1>
        <p className="text-lg md:text-2xl mb-8 animate__animated animate__fadeIn animate__delay-2s">
          Upload your wardrobe and let our AI stylist recommend outfits for every occasion, effortlessly.
        </p>
        
        <Link to="/login">
          <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xl font-semibold rounded-full hover:bg-yellow-600 transform transition-all duration-300 ease-in-out scale-100 hover:scale-105">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
