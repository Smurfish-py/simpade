const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const User = require('../models/User');

router.get('/profil', protect, async (req, res) => {
  res.status(200).json({ success: true, data: req.user });
});

module.exports = router;