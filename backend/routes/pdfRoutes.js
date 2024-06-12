const express = require('express')
const {
    getAllPDFs,
    getPDF,
    createPDF,
} = require('../controllers/pdfController')

const router = express.Router()

//get all pdfs
router.get('/', getAllPDFs)

//get one pdfs
router.get('/:id', getPDF)

//add pdfs
router.post('/', createPDF)

//delete pdfs
router.delete('/:id', (req,res) =>{
    res.json({mssge:'Delete PDFs'})
})

//update pdfs
router.patch('/:id', (req,res) =>{
    res.json({mssge:'Update PDFs'})
})

module.exports = router