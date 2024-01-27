const express = require('express');
const app = express();
const path =require('path');
const mongoose = require('mongoose'); 
const seedDB = require('./seed');
const productRoutes = require('./routes/Product_Routes');
// const userRoutes = require('./routes/userRoutes');  


app.set('view engine','ejs');  
app.set('views' , path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname ,"public")));

mongoose.connect('mongodb://127.0.0.1:27017/baigan')
.then(()=>{   
    console.log('Connected to MongoDB'); 
})
.catch((err)=>{
    console.log(err);                  
})


// seedDB();
app.use(productRoutes);
    


let port = 8080;
app.listen(port ,()=>{
    console.log(`server is running on port ${port}`);
})
