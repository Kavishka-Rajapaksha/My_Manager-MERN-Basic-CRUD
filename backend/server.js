require('dotenv').config();

const express = require ('express');
const mongoose = require('mongoose');   

const contactRoutes = require('./routes/contact')


//  express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next() 
})

// routes
app.use('/api/contacts', contactRoutes)

// database connectivity 
mongoose.connect(process.env.MONG_URI)
    .then(()=>{

    // listninng to thw port
    app.listen(process.env.PORT, ()=>{
       console.log('Successfully connect to the DB & listning to the port : ',process.env.PORT);
}) 
    })
    .catch((error)=>{
        console.log(error)
    })

