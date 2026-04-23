const User = require('../models/User');

const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({
    success: true,
    token,
    user: {
      id: user._id,
      nama: user.nama,
      email: user.email,
      role: user.role,
      foto: user.foto
    }
  });
};

exports.register = async (req, res, next) => {
  try {
    const { nama, email, password, role } = req.body;

    const safeRole = role === 'superadmin' ? 'user' : role;

    const user = await User.create({ nama, email, password, role: safeRole });
    sendTokenResponse(user, 201, res);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ success: false, message: 'Email sudah terdaftar.' });
    }
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email dan password wajib diisi.' });
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ success: false, message: 'Email atau password salah.' });
    }

    if (!user.isAktif) {
      return res.status(403).json({ success: false, message: 'Akun Anda dinonaktifkan. Hubungi admin.' });
    }

    user.lastLogin = new Date();
    await user.save({ validateBeforeSave: false });

    sendTokenResponse(user, 200, res);
  } catch (err) {
    next(err);
  }
};

exports.getMe = async (req, res) => {
  res.status(200).json({ success: true, data: req.user });
};

exports.updateProfil = async (req, res, next) => {
  try {
    const fieldsToUpdate = { nama: req.body.nama, email: req.body.email };
    const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
      new: true,
      runValidators: true
    });
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

exports.gantiPassword = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('+password');

    if (!(await user.matchPassword(req.body.passwordLama))) {
      return res.status(401).json({ success: false, message: 'Password lama salah.' });
    }

    user.password = req.body.passwordBaru;
    await user.save();
    sendTokenResponse(user, 200, res);
  } catch (err) {
    next(err);
  }
};