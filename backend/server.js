require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const uploadRoutes = require('./routes/uploadRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');
const { connectDB } = require('./config/db');
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());  // Enable CORS for the frontend
app.use(express.json());  // For parsing JSON request bodies

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/upload', uploadRoutes);
app.use('/api/recommendations', recommendationRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
