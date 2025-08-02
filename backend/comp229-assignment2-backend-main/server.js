// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');


// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const userRoutes = require('./server/routes/userRoutes');
const contactRoutes = require('./server/routes/contactRoutes');
const authRoutes = require('./server/routes/auth');
const educationRoutes = require('./server/routes/education'); 


// Use routes
app.use('/api/users', userRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/auth', authRoutes);
app.use('/api/education', educationRoutes);

// Basic test route
app.get('/', (req, res) => {
  res.send('Portfolio API Backend Running Successfully!');
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection error:', err));
