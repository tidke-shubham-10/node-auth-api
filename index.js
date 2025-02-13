const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectMongoDB } = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

connectMongoDB(process.env.MONGO_URI);

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));