const User = require('../models/User');
const Data = require('../models/Data');

exports.getDashboardStats = async (req, res, next) => {
  try {
    const [totalUser, totalAdmin, totalData, dataAktif] = await Promise.all([
      User.countDocuments({ role: 'user' }),
      User.countDocuments({ role: { $in: ['admin', 'superadmin'] } }),
      Data.countDocuments(),
      Data.countDocuments({ status: 'aktif' }),
    ]);

    const dataTerbaru = await Data.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .populate('createdBy', 'nama email');

    res.status(200).json({
      success: true,
      data: {
        stats: { totalUser, totalAdmin, totalData, dataAktif },
        dataTerbaru
      }
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, search, role } = req.query;
    const query = {};

    if (search) {
      query.$or = [
        { nama: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }
    if (role) query.role = role;

    const total = await User.countDocuments(query);
    const users = await User.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.status(200).json({
      success: true,
      total,
      page: parseInt(page),
      totalPages: Math.ceil(total / limit),
      data: users
    });
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: 'User tidak ditemukan.' });
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ success: false, message: 'Email sudah digunakan.' });
    }
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    delete req.body.password;

    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!user) return res.status(404).json({ success: false, message: 'User tidak ditemukan.' });
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: 'User tidak ditemukan.' });

    if (user.role === 'superadmin') {
      return res.status(403).json({ success: false, message: 'Superadmin tidak dapat dihapus.' });
    }

    await user.deleteOne();
    res.status(200).json({ success: true, message: 'User berhasil dihapus.' });
  } catch (err) {
    next(err);
  }
};

exports.toggleAktifUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: 'User tidak ditemukan.' });

    user.isAktif = !user.isAktif;
    await user.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
      message: `User ${user.isAktif ? 'diaktifkan' : 'dinonaktifkan'}.`,
      data: user
    });
  } catch (err) {
    next(err);
  }
};