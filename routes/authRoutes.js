const express = require('express');
const { register, login, deleteUser, userExists } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/delete-user', deleteUser);
router.get('/user-exists', userExists);

// Example protected route
router.get('/profile', protect, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;