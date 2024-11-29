import React, { useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';  // Import useUser hook
import { motion } from 'framer-motion';  // Import framer-motion
import axios from 'axios'; // Import axios for API calls

const Dashboard = () => {
  const { userName, setUserName } = useUser();  // Get userName from context
  const navigate = useNavigate();

  // State for the uploaded image and prediction result
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);  // Prediction result state
  const [loading, setLoading] = useState(false);  // Loading state to show spinner
  
  // Modal state for image upload
  const [showModal, setShowModal] = useState(false);
  
  // Fetch the user's name from Firebase if not set yet
  useEffect(() => {
    const user = auth.currentUser;
    if (user && !userName) {
      setUserName(user.displayName);  // Set the global user name from Firebase
    }
  }, [userName, setUserName]);

  // Handle logout
  const handleLogout = async () => {
    try {
      await auth.signOut();  // Firebase logout
      setUserName('');  // Clear the user's name from global state
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Display image preview
      setPrediction(null); // Reset prediction before new image upload
    }
  };

  // Handle closing the modal
  const closeModal = () => {
    setShowModal(false);
    setImage(null); // Clear selected image
    setPrediction(null); // Clear previous prediction result
  };

  // Handle sending the image to the Flask backend for classification
  const handleUploadAndPredict = async () => {
    if (!image) {
      alert("Please upload an image first!");
      return;
    }

    setLoading(true);  // Start loading
    const formData = new FormData();
    formData.append('file', image); // Append the image file

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPrediction(response.data);  // Set the prediction result
    } catch (error) {
      console.error('Error during prediction:', error);
    } finally {
      setLoading(false);  // End loading
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-8">
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logout Button at the Top Right */}
        <motion.button
          onClick={handleLogout}
          className="absolute top-4 right-4 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-full hover:bg-yellow-600 transform transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Logout
        </motion.button>

        {/* Welcome Section */}
        <motion.h2
          className="text-3xl font-semibold text-center text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome, {userName || 'User'}!
        </motion.h2>

        {/* Main Prediction Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Upload Item for AI Prediction</h3>
          
          {/* Image Upload Section */}
          <input
            type="file"
            onChange={handleImageChange}
            className="mb-4 p-2 border border-gray-300 rounded-lg w-full"
          />
          {image && <img src={image} alt="Uploaded preview" className="w-full h-40 object-cover mb-4" />}
          
          {/* Predict Button */}
          <motion.button
            onClick={handleUploadAndPredict}
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-full hover:bg-yellow-600 transform transition-all duration-300 w-full md:w-1/3 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {loading ? "Predicting..." : "Predict Category"}
          </motion.button>

          {/* Display Prediction Result */}
          {prediction && (
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-gray-800">Predicted Category: {prediction.category}</h4>
              <p className="text-gray-600">Confidence: {prediction.confidence}</p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
