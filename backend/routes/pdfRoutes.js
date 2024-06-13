const express = require('express');
const {
  getAllPDFs,
  getPDF,
  createPDF,
  deletePDF,
  updatePDF
} = require('../controllers/pdfController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// require auth for all pdf routes
router.use(requireAuth);

// get all pdfs
router.get('/', getAllPDFs);

// get one pdf
router.get('/:id', getPDF);

// add pdf
router.post('/', createPDF);

// delete pdf
router.delete('/:id', deletePDF);

// update pdf
router.patch('/:id', updatePDF);

module.exports = router;
