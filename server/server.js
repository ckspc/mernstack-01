const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')


require('dotenv').config()

const app=express()

//connect db
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:false
}).then(()=>console.log("Connected DB !"))
.catch((err)=>console.log(err))


//middleware
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))


//route
const BlogRoute = require('./route/blog')
//create 
app.use('/api',BlogRoute)



const port = process.env.PORT || 8080
app.listen(port,()=>console.log(`Start server in port ${port}`))