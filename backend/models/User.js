const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  preferences: { type: Object, default: {} },  // Stores user preferences
  wardrobe: [{ type: mongoose.Schema.Types.ObjectId, ref: 'WardrobeItem' }]
});

module.exports = mongoose.model('User', userSchema);
