import React from 'react';
import { motion } from 'framer-motion';  // Import Framer Motion for animations

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto text-center px-6">
        {/* About Introduction */}
        <motion.h2 
          className="text-4xl font-bold mb-6 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What is AI Stylist?
        </motion.h2>
        <motion.p 
          className="text-xl mb-12 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          AI Stylist is a cutting-edge platform that helps you style your wardrobe using Artificial Intelligence. Upload photos of your clothes, and our AI will suggest personalized outfit combinations based on the occasion, weather, and your preferences.
        </motion.p>

        {/* How It Works Section */}
        <motion.h2 
          className="text-3xl font-bold mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <motion.div 
            className="bg-gray-50 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <i className="fas fa-upload text-4xl mb-4 text-yellow-500"></i>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 1: Upload Your Wardrobe</h3>
            <p className="text-gray-600">
              Take photos of your clothes and upload them directly to your profile. Organize your wardrobe and start styling!
            </p>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div 
            className="bg-gray-50 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <i className="fas fa-brain text-4xl mb-4 text-yellow-500"></i>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 2: AI-powered Recommendations</h3>
            <p className="text-gray-600">
              Our AI stylist analyzes your wardrobe and suggests the best outfits tailored to your style, preferences, and the occasion.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            className="bg-gray-50 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <i className="fas fa-save text-4xl mb-4 text-yellow-500"></i>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Step 3: Save and Share</h3>
            <p className="text-gray-600">
              Save your favorite outfits, and share them with your friends or on social media. Get inspired and stay stylish!
            </p>
          </motion.div>
        </div>

        {/* Additional Content (Optional) */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose AI Stylist?</h2>
          <p className="text-lg text-gray-600 mb-6">
            With AI Stylist, you’ll never have to worry about what to wear again. Whether you’re dressing for a casual day out or a formal event, our AI will always recommend the best outfits from your wardrobe.
          </p>
          <p className="text-lg text-gray-600">
            Enjoy a personalized shopping experience with endless outfit combinations, tailored just for you!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;


