const express = require('express');
const multer = require('multer');
const uploadController = require('../controllers/uploadController');
const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/'); // Destination folder for uploads
  },
  filename: function (req, file, cb) {
    // Generate a unique filename using the current timestamp
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Route for uploading an image
router.post('/upload', upload.single('image'), uploadController.handleImageUpload);

module.exports = router;
