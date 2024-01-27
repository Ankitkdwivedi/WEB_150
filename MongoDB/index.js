const express = require('express');//function
const app=express();
const mongoose=require('mongoose');//object 
//connection

mongoose.connect('mongodb://127.0.0.1:27017/Movies_gla')//returns a promise 
.then(()=>{console.log("conneted");})//resolve
.catch((err)=>{console.log("error h ");})//reject

//creating Schema

let movieSchema=new mongoose.Schema({
    name:String,
    year:Number,
    imdb:Number,
    isWatched:Boolean
})

//creating a model
//model is js class 
let Movie=mongoose.model('Movie',movieSchema);//collections(model) name Movie

let shaktiman= new Movie({name:"shaktiman",year:2010,imdb:8,isWatched:false});
shaktiman.save()
.then(()=>{console.log("saved successfully");})
.then((err)=>{console.log("error h");})
app.listen(8080,()=>{
    console.log("server is running");
})