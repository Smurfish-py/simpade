const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  judul: {
    type: String,
    required: [true, 'Judul wajib diisi'],
    trim: true,
    maxlength: [200, 'Judul maksimal 200 karakter']
  },
  deskripsi: {
    type: String,
    trim: true
  },
  kategori: {
    type: String,
    required: [true, 'Kategori wajib diisi'],
    enum: ['umum', 'penting', 'arsip'],
    default: 'umum'
  },
  status: {
    type: String,
    enum: ['aktif', 'nonaktif', 'pending'],
    default: 'aktif'
  },
  lampiran: {
    type: String // nama file / path
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

DataSchema.index({ judul: 'text', deskripsi: 'text' });

module.exports = mongoose.model('Data', DataSchema);