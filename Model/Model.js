const mongoose = require('mongoose');

// Consolidated user schema
const userSchema = new mongoose.Schema(
  {
    name: { type: String }, // Optional for login
    email: { 
      type: String, 
      required: true, 
      unique: true, 
      match: /[^@\s]+@[^@\s]+\.[^@\s]+/, 
    },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);