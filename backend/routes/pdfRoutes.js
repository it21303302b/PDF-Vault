const express = require('express')
const {
    getAllPDFs,
    getPDF,
    createPDF,
    deletePDF,
    updatePDF
} = require('../controllers/pdfController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

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