const mongoose = require('mongoose');

const wardrobeItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },  // e.g., shirt, pants, jacket
  color: { type: String },
  occasion: { type: String },  // e.g., casual, formal
  image: { type: String }  // URL or path to image
});

module.exports = mongoose.model('WardrobeItem', wardrobeItemSchema);
