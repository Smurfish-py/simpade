const express = require('express');
const router = express.Router();
const {
  register,
  login,
  getMe,
  updateProfil,
  gantiPassword
} = require('../controllers/authController');
const { protect } = require('../middleware/auth');

router.post('/register', register);
router.post('/login',    login);
router.get('/me',        protect, getMe);
router.put('/updateprofil',  protect, updateProfil);
router.put('/gantipassword', protect, gantiPassword);

module.exports = router;