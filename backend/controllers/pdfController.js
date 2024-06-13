const PDF = require('../models/pdfModel');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

// Set up multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// get all pdfs
const getAllPDFs = async (req, res) => {
  const user_id = req.user._id;

  const pdfs = await PDF.find({ user_id }).sort({ createdAt: -1 });

  res.status(200).json(pdfs);
};

// get one pdf
const getPDF = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such PDF id' });
  }

  const pdf = await PDF.findById(id);

  if (!pdf) {
    return res.status(404).json({ error: 'No such PDF' });
  }

  res.status(200).json(pdf);
};

// add pdf
const createPDF = async (req, res) => {
  upload.single('file')(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const { title, description } = req.body;
    const file = req.file;

    let emptyFields = [];

    if (!title) emptyFields.push('title');
    if (!description) emptyFields.push('description');
    if (!file) emptyFields.push('file');

    if (emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all fields', emptyFields });
    }

    try {
      const user_id = req.user._id;
      const pdf = await PDF.create({ title, description, user_id, filePath: file.path });
      res.status(200).json(pdf);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
};

// delete pdf
const deletePDF = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such PDF id' });
  }

  const pdf = await PDF.findOneAndDelete({ _id: id });

  if (!pdf) {
    return res.status(404).json({ error: 'No such PDF' });
  }

  res.status(200).json(pdf);
};

// update pdf
const updatePDF = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such PDF id' });
  }

  const pdf = await PDF.findOneAndUpdate({ _id: id }, {
    ...req.body
  });

  if (!pdf) {
    return res.status(404).json({ error: 'No such PDF' });
  }

  res.status(200).json(pdf);
};

module.exports = {
  getAllPDFs,
  getPDF,
  createPDF,
  deletePDF,
  updatePDF
};
