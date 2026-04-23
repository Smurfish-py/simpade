const Data = require('../models/Data');
const path = require('path');
const fs = require('fs');

exports.getAllData = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, search, kategori, status } = req.query;
    const query = {};

    if (search) {
      query.$text = { $search: search };
    }
    if (kategori) query.kategori = kategori;
    if (status) query.status = status;

    if (req.user.role === 'user') {
      query.createdBy = req.user._id;
    }

    const total = await Data.countDocuments(query);
    const data = await Data.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .populate('createdBy', 'nama email');

    res.status(200).json({
      success: true,
      total,
      page: parseInt(page),
      totalPages: Math.ceil(total / limit),
      data
    });
  } catch (err) {
    next(err);
  }
};

exports.getDataById = async (req, res, next) => {
  try {
    const data = await Data.findById(req.params.id).populate('createdBy', 'nama email');
    if (!data) return res.status(404).json({ success: false, message: 'Data tidak ditemukan.' });

    if (req.user.role === 'user' && data.createdBy._id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'Tidak memiliki akses ke data ini.' });
    }

    res.status(200).json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

exports.createData = async (req, res, next) => {
  try {
    req.body.createdBy = req.user._id;

    if (req.file) {
      req.body.lampiran = req.file.filename;
    }

    const data = await Data.create(req.body);
    res.status(201).json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

exports.updateData = async (req, res, next) => {
  try {
    let data = await Data.findById(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: 'Data tidak ditemukan.' });

    if (req.user.role === 'user' && data.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'Tidak memiliki akses.' });
    }

    if (req.file) {
      if (data.lampiran) {
        const oldFile = path.join(__dirname, '..', 'uploads', data.lampiran);
        if (fs.existsSync(oldFile)) fs.unlinkSync(oldFile);
      }
      req.body.lampiran = req.file.filename;
    }

    data = await Data.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

exports.deleteData = async (req, res, next) => {
  try {
    const data = await Data.findById(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: 'Data tidak ditemukan.' });

    if (req.user.role === 'user' && data.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'Tidak memiliki akses.' });
    }

    if (data.lampiran) {
      const filePath = path.join(__dirname, '..', 'uploads', data.lampiran);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }

    await data.deleteOne();
    res.status(200).json({ success: true, message: 'Data berhasil dihapus.' });
  } catch (err) {
    next(err);
  }
};