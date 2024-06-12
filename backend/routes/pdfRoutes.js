const express = require('express')
const {
    getAllPDFs,
    getPDF,
    createPDF,
    deletePDF,
    updatePDF
} = require('../controllers/pdfController')

const router = express.Router()

//get all pdfs
router.get('/', getAllPDFs)

//get one pdfs
router.get('/:id', getPDF)

//add pdfs
router.post('/', createPDF)

//delete pdfs
router.delete('/:id', deletePDF)

//update pdfs
router.patch('/:id', updatePDF)

module.exports = router