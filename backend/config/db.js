// backend/config/db.js

const mongoose = require('mongoose');
require('dotenv').config();  // For loading environment variables

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('MongoDB connected');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB', err);
      process.exit(1); // Exit the process if DB connection fails
    });
};

module.exports = connectDB;
