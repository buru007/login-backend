const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./Routes/Routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000; // Use Render's assigned port
// Middleware
app.use(express.json());  
app.use(cors({ origin: "http://localhost:3000" }));

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
