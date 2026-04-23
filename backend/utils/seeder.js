const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const Data = require('../models/Data');

dotenv.config({ path: '../.env' });

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('✅ MongoDB terhubung untuk seeder');
};

const seedData = async () => {
  await connectDB();

  await User.deleteMany();
  await Data.deleteMany();
  console.log('🗑️  Data lama dihapus');

  const superadmin = await User.create({
    nama: 'Super Admin',
    email: 'superadmin@simpade.id',
    password: 'admin123',
    role: 'superadmin'
  });

  const admin = await User.create({
    nama: 'Admin SIMPADE',
    email: 'admin@simpade.id',
    password: 'admin123',
    role: 'admin'
  });

  const user1 = await User.create({
    nama: 'User',
    email: 'tes@simpade.id',
    password: 'user1234',
    role: 'user'
  });

  await Data.insertMany([
    {
      judul: 'Laporan Bulanan Januari 2025',
      deskripsi: 'Laporan kegiatan bulan Januari 2025',
      kategori: 'penting',
      status: 'aktif',
      createdBy: admin._id
    },
    {
      judul: 'Pengumuman Rapat Mingguan',
      deskripsi: 'Rapat mingguan dilaksanakan setiap Senin pukul 09.00',
      kategori: 'umum',
      status: 'aktif',
      createdBy: admin._id
    },
    {
      judul: 'Arsip Dokumen 2024',
      deskripsi: 'Kumpulan dokumen tahun 2024',
      kategori: 'arsip',
      status: 'nonaktif',
      createdBy: user1._id
    }
  ]);

  console.log('✅ Seeder berhasil!');

  process.exit();
};

seedData().catch(err => {
  console.error('❌ Seeder error:', err);
  process.exit(1);
});