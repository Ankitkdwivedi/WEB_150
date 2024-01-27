const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const Content=require('./models/content.js')

mongoose.set('strictQuery' , true);
mongoose.connect('mongodb://127.0.0.1:27017/newblogs') 
.then(()=>{console.log("DB CONNECTED")})
.catch((err)=>{console.log("error in DB" , err)})

app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , 'views'));
// seedDB()
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}))

app.get('/blogs' , async (req,res)=>{
    let allBlogs = await Content.find();
    res.render('main' , {allBlogs})
})
app.get('/blogs/:id',async(req,res)=>{
    let blogId = req.params.id;
    let singleBlog = await Content.findById(blogId);
    res.render('show',{singleBlog});
})

const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`server connected at port: ${PORT}`);
})