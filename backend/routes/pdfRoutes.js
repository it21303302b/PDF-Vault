const express = require('express')

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
router.post('/', (req,res) =>{
    res.json({mssge:'Add a PDFs'})
})

//delete pdfs
router.delete('/:id', (req,res) =>{
    res.json({mssge:'Delete PDFs'})
})

//update pdfs
router.patch('/:id', (req,res) =>{
    res.json({mssge:'Update PDFs'})
})

module.exports = router