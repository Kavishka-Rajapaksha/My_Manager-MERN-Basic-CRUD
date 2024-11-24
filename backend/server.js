require('dotenv').config();

const express = require ('express');
const mongoose = require('mongoose');   


//  express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next() 
})

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

