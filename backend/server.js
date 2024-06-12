require('dotenv').config()

const express = require('express')
const pdfRoutes = require('./routes/pdfRoutes')
const mongoose = require('mongoose')

const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console. log(req.path, req.method)
    next()
})

//routes
app.use('/api/PDF',pdfRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, ()=> {
            console.log('connected to db & listning on port ',process.env.PORT)
        })
    })
    .catch((error) =>{
        console.log(error)
    })

