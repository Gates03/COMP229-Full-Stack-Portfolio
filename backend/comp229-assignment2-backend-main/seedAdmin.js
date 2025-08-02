const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const User = require('./server/models/user');

// Load environment variables
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    const existing = await User.findOne({ email: 'admin@portfolio.com' });
    if (!existing) {
      await User.create({ 
        email: 'admin@portfolio.com', 
        password: 'admin123', 
        role: 'admin' 
      });
      console.log('Admin created successfully!');
      console.log('Email: admin@portfolio.com');
      console.log('Password: admin123');
    } else {
      console.log('Admin already exists');
    }
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error:', err);
    mongoose.disconnect();
  });