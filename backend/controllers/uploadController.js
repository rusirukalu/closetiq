const WardrobeItem = require('../models/WardrobeItem');

exports.handleImageUpload = (req, res) => {
  // Get the uploaded file information
  const { filename, path: filePath } = req.file;

  // Create a new wardrobe item and save it to MongoDB
  const newItem = new WardrobeItem({
    name: filename,  // Use the image filename as the name
    image: filePath, // Store the image path
  });

  newItem.save()
    .then(item => {
      res.status(200).json({ message: 'Image uploaded successfully!', item });
    })
    .catch(err => {
      res.status(500).json({ error: 'Error uploading image', err });
    });
};
