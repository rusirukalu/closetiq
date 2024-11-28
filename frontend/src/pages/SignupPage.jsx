import React, { useState } from 'react';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle user sign-up
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      navigate('/dashboard'); // Redirect to dashboard after successful sign-up
    } catch (err) {
      setError(err.message);
    }
  };

  // Navigate to the Home Page
  const handleBackToHome = () => {
    navigate('/'); // Navigate to the Home page
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center p-6">
      <motion.div
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Back to Home Button */}
        <motion.button
          onClick={handleBackToHome}
          className="absolute top-4 left-4 px-4 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-500 transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          &lt; back
        </motion.button>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-6">
          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </motion.div>

          {/* Password Input */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </motion.div>

          {/* Sign Up Button */}
          <motion.button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Sign Up
          </motion.button>
        </form>

        {/* Google Sign Up Button */}
        <motion.button
          onClick={() => alert('Google login functionality can be added here')}
          className="w-full py-3 mt-4 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-100 transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <i className="fab fa-google mr-2"></i> Continue with Google
        </motion.button>
        
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;
