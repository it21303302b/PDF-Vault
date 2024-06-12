const express = require('express')
const PDF = require('../models/pdfModel')

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
router.post('/', async (req,res) =>{
    const {title, discription} = req.body

    try{
        const pdf = await PDF.create({title, discription})
        res.status(200).json(pdf)
    }catch (error){
        res.status(400).json({error: error.message})
    }
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