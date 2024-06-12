const PDF = require('../models/pdfModel')

//get all pdfs

//get one pdf 

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
    createPDF
}