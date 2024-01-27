const express = require('express');
const path = require('path');
const app=express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))
const methodOverride = require('method-override');
const { v4: nayi_id } = require('uuid');
let data=[
    {
        id:nayi_id(),
        quote:'good morning',
        name:'ankit'
    },
    {
        id:nayi_id(),
        quote:'good morning',
        name:'ankit'
    },
    {
        id:nayi_id(),
        quote:'good morning',
        name:'ankit'
    },
    {
        id:nayi_id(),
        quote:'good morning',
        name:'ankit'
    }
]













app.get('/home',(req,res)=>{
    res.render('home',{data});
})


app.get('/new',(req,res)=>{
    res.render('new');
})

app.post('/home',(req,res)=>{
    const{quote,name}=req.body;
    data.push({id:nayi_id(),quote:quote,name:name});
    res.redirect('/home')
})

app.get('/show/:id',(req,res)=>{
    const{id}=req.params;
    const data1=data.find((item)=>{
        return item.id==id;
    });
    res.render('show',{data1});
})
app.listen(8080,()=>{
    console.log('working fine');
})
