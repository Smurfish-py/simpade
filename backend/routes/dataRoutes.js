const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {
  getAllData,
  getDataById,
  createData,
  updateData,
  deleteData
} = require('../controllers/dataController');
const { protect, authorize } = require('../middleware/auth');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './uploads/'),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  }
});

const fileFilter = (req, file, cb) => {
  const allowed = /pdf|doc|docx|xls|xlsx|jpg|jpeg|png/;
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowed.test(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Tipe file tidak diizinkan.'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: parseInt(process.env.MAX_FILE_SIZE) || 5000000 }
});

router.use(protect);

router.route('/')
  .get(getAllData)
  .post(upload.single('lampiran'), createData);

router.route('/:id')
  .get(getDataById)
  .put(upload.single('lampiran'), updateData)
  .delete(deleteData);

module.exports = router;