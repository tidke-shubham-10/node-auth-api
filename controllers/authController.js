const User = require('../models/User');
const dotenv = require('dotenv');
const { generateToken } = require('../services/authService');

dotenv.config();

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    req.body.id = crypto.randomUUID();
    if (!req.body.username) {
      req.body.username = req.body.email;
    }

    // Create new user
    user = new User(req.body);
    await user.save();

    // Generate JWT
    const token = generateToken(user);

    res.status(201).json(token);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};


// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = generateToken(user);

    res.json(token);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteUser = async (req, res) => {
  const { email, id } = req.body;

  try {
    // Find and delete user by ID or email
    const user = await User.findOneAndDelete(email ? { email } : { id });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};


exports.userExists = async (req, res) => {
  const { email, id } = req.query;

  try {
    // Check if user exists by ID or email
    const user = await User.findOne(email ? { email } : { id });
    
    if (!user) {
      return res.status(404).json({ exists: false, message: 'User not found' });
    }

    res.status(200).json({ exists: true, message: 'User exists' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};