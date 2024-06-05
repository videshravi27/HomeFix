require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const serviceRoutes = require('./routes/serviceRoutes')
const userRoutes = require('./routes/userRoutes')

//Express App
const app = express()

//Middleware
app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/services', serviceRoutes)
app.use('/api/user', userRoutes)

//Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to Database')
        //Listen for req
        app.listen(process.env.PORT, () =>{
            console.log('Listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })