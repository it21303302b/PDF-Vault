const PDF = require('../models/pdfModel')
const mongoose = require('mongoose')

//get all pdfs
const getAllPDFs = async (req, res) => {
    const pdfs = await PDF.find({}).sort({createdAt: -1})
    
    res.status(200). json(pdfs)
}

//get one pdf 
const getPDF = async (req,res) =>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res. status(404). json({error: 'No such PDF id'})
    }

    const pdf = await PDF.findById(id)

    if (!pdf) {
        return res. status(404) .json({error: 'No such PDF'})
    }
        
    res.status(200).json(pdf)
        
}

//add pdf

const createPDF = async (req,res) =>{
    const {title, discription} = req.body

    try{
        const pdf = await PDF.create({title, discription})
        res.status(200).json(pdf)
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

//delete pdf

//update pdf


module.exports = {
    getAllPDFs,
    getPDF,
    createPDF
}