const express = require('express')
const {
    createPDF,
} = require('../controllers/pdfController')

const router = express.Router()

//get all pdfs
router.get('/', (req,res) =>{
    res.json({mssge:'Get all PDFs'})
})

//get one pdfs
router.get('/:id', (req,res) =>{
    res.json({mssge:'Get one PDF'})
})

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