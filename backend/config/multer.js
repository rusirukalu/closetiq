const multer = require('multer');
const path = require('path');
const sharp = require('sharp'); // To read image dimensions

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Path to store the uploaded images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate a unique file name
  },
});

// Multer upload configuration
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10 MB
}).single('itemImage'); // Only a single file upload for the item image

// Function to validate image dimensions
const validateImageDimensions = (file, cb) => {
    sharp(file.path)
      .metadata()
      .then((metadata) => {
        const { width, height, channels } = metadata;
  
        // Set your fixed width and height values (e.g., 1920x1080 for full HD)
        const requiredWidth = 1920;
        const requiredHeight = 1080;
  
        // Allow either grayscale (1 channel) or RGB (3 channels)
        const allowedChannels = [1, 3]; // Grayscale or RGB
  
        // Check if the image has the exact required dimensions
        if (width !== requiredWidth || height !== requiredHeight || !allowedChannels.includes(channels)) {
          return cb(new Error(`Image must have exactly ${requiredWidth}x${requiredHeight} pixels and ${allowedChannels.join(' or ')} channels (grayscale or RGB). Current dimensions: ${width}x${height}, Channels: ${channels}`), false);
        }
  
        // Image is valid, continue with the upload
        cb(null, true);
      })
      .catch((err) => {
        cb(new Error('Error reading image metadata'), false);
      });
  };
  
// Apply the dimension validation as a middleware
const dimensionCheck = (req, res, next) => {
  if (req.file) {
    validateImageDimensions(req.file, (err, isValid) => {
      if (err) {
        return res.status(400).send(err.message); // Send error if validation fails
      }
      next(); // Continue with the next middleware (uploading the image)
    });
  } else {
    next(); // No file to validate, continue with the next middleware
  }
};

// Export the upload and dimensionCheck functions
module.exports = { upload, dimensionCheck };
