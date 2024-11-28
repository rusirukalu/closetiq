// models/WardrobeItem.js
const mongoose = require('mongoose');

const wardrobeItemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  category: { type: String, required: true },
  itemImage: { type: String, required: true },  // Store path to the uploaded image
});

const WardrobeItem = mongoose.model('WardrobeItem', wardrobeItemSchema);

module.exports = { WardrobeItem };
