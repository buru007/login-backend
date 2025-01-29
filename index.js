const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./Routes/Routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000; // Use Render's assigned port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.use(express.json());  // Ensure this is included
// Enable CORS
app.use(require('cors')());
// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error('MongoDB connection error:', error));
