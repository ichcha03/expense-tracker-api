// Load environment variables from .env file
require('dotenv').config();

// Import Express — the framework that handles HTTP requests
const express = require('express');
// Import Mongoose — the library to connect to MongoDB
const mongoose = require('mongoose');

// Create an Express application
const app = express();

// Get the PORT from environment variables (from .env)
const PORT = process.env.PORT || 5000;
// Get the MongoDB connection string from .env
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware: Tell Express to automatically parse incoming JSON requests
app.use(express.json());

// TEST ROUTE: A basic GET route so we can verify the server is working
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Expense Tracker API!',
    version: '1.0.0',
    status: 'Server is running ✅'
  });
});

// Connect to MongoDB Atlas using Mongoose
// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas!');
    // Start the server only after DB connection is successful
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
      console.log(`Current environment: ${process.env.NODE_ENV || 'development'}`);
    });
  })
  .catch((error) => {
    console.error('❌ Failed to connect to MongoDB:', error.message);
    process.exit(1); // Stop the app if DB connection fails
  });
