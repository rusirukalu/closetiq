require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const uploadRoutes = require('./routes/uploadRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');

// Initialize the app
const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());  // Enable CORS for the frontend
app.use(express.json());  // For parsing JSON request bodies

connectDB();  

app.use('/api/upload', uploadRoutes);
app.use('/api/recommendations', recommendationRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
