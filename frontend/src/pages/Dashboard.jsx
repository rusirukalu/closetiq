import React, { useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';  // Import useUser hook
import { motion } from 'framer-motion';  // Import framer-motion

const Dashboard = () => {
  const { userName, setUserName } = useUser();  // Get userName from context
  const navigate = useNavigate();
  
  // Sample wardrobe items (dynamic in the real app)
  const [wardrobeItems, setWardrobeItems] = useState([
    { id: 1, name: 'T-Shirt', image: 'https://via.placeholder.com/150', category: 'Shirt' },
    { id: 2, name: 'Jeans', image: 'https://via.placeholder.com/150', category: 'Pants' },
    { id: 3, name: 'Jacket', image: 'https://via.placeholder.com/150', category: 'Outerwear' },
  ]);
  
  // Sample outfit recommendations (dynamic in the real app)
  const [outfitRecommendations, setOutfitRecommendations] = useState([
    { id: 1, name: 'Casual Look', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Evening Wear', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Formal Outfit', image: 'https://via.placeholder.com/150' },
  ]);
  
  // Modal state for image upload
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(null);
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('Shirt');  // Default category
  
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
    }
  };

  // Handle closing the modal
  const closeModal = () => {
    setShowModal(false);
    setImage(null); // Clear selected image
    setItemName(''); // Clear item name
    setCategory('Shirt'); // Reset category
  };

  // Handle saving new wardrobe item
  const handleAddItem = () => {
    if (itemName && image) {
      setWardrobeItems([
        ...wardrobeItems,
        { id: wardrobeItems.length + 1, name: itemName, image, category },
      ]);
      closeModal();
    } else {
      alert('Please provide an item name and image.');
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
        
        {/* Wardrobe Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Wardrobe</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {wardrobeItems.map((item) => (
              <motion.div
                key={item.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md mb-4" />
                <h4 className="text-xl font-medium text-gray-800">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Outfit Recommendations Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Outfit Recommendations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {outfitRecommendations.map((outfit) => (
              <motion.div
                key={outfit.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img src={outfit.image} alt={outfit.name} className="w-full h-40 object-cover rounded-md mb-4" />
                <h4 className="text-xl font-medium text-gray-800">{outfit.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Add More Wardrobe Item Button */}
        <motion.button
          onClick={() => setShowModal(true)} // Open the modal on button click
          className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-full hover:bg-yellow-600 transform transition-all duration-300 w-full md:w-1/3 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Add More Items
        </motion.button>
      </motion.div>

      {/* Image Upload Modal */}
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg w-96"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Upload a New Item</h3>
            
            {/* Item Name */}
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="Item Name"
              className="mb-4 p-2 border border-gray-300 rounded-lg w-full"
            />

            {/* Category Selector */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mb-4 p-2 border border-gray-300 rounded-lg w-full"
            >
              <option value="Shirt">Shirt</option>
              <option value="Pants">Pants</option>
              <option value="Jacket">Jacket</option>
              <option value="Shoes">Shoes</option>
              <option value="Outerwear">Outerwear</option>
              {/* Add more categories as needed */}
            </select>

            {/* Image Input */}
            <input
              type="file"
              onChange={handleImageChange}
              className="mb-4 p-2 border border-gray-300 rounded-lg w-full"
            />
            {image && <img src={image} alt="Uploaded preview" className="w-full h-40 object-cover mb-4" />}
            
            <div className="flex justify-between">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-white rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddItem}
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
              >
                Add Item
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Dashboard;
