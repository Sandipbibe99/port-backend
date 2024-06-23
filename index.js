import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import mongoose from 'mongoose'
import routes from './routes/userRoutes.js'
const app = express()
app.use(cors());
const PORT = process.env.PORT || 9900

mongoose.connect(process.env.MONGODBURL).then(() => {
    console.log('Connected successfully')

    app.listen(PORT , () => {
        console.log(`Running on port ${PORT}`)
    })
})

app.use(express.json())

app.use('/api' , routes)