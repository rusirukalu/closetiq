import React, { useState } from 'react';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import { motion } from 'framer-motion';  // Import framer-motion

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle email/password login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // Get user information
      const user = result.user;
      // Redirect to dashboard after successful login
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  // Navigate to the Home Page
  const handleBackToHome = () => {
    navigate('/'); // Navigate to the Home page
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center p-6">
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

        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Email Input */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            required
          />
        </motion.div>

        {/* Password Input */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            required
          />
        </motion.div>

        {/* Login Button */}
        <motion.button
          type="submit"
          onClick={handleLogin}
          className="w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Login
        </motion.button>

        {/* Google Login Button */}
        <motion.button
          onClick={handleGoogleLogin}
          className="w-full py-3 mt-4 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-100 transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <i className="fab fa-google mr-2"></i> Continue with Google
        </motion.button>
        
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a></p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
