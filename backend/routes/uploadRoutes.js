// routes/uploadRoutes.js
const express = require('express');
const router = express.Router();
const { upload, dimensionCheck } = require('../config/multer'); // Ensure multer config is imported correctly
const { WardrobeItem } = require('../models/WardrobeItem'); // Model for wardrobe item

// Image upload route
router.post('/upload', upload, dimensionCheck, async (req, res) => {
  try {
    const { itemName, category } = req.body;  // Get item name and category from the request body
    const itemImage = req.file.path;  // Path to the uploaded image

    // Save the item to the MongoDB database
    const newItem = new UserWardrobeItem({
      itemName,
      category,
      itemImage,
    });

    await newItem.save();
    res.status(200).send({ message: 'Item uploaded successfully!', item: newItem });
  } catch (error) {
    res.status(500).send({ error: 'Error uploading image' });
  }
});

module.exports = router;
