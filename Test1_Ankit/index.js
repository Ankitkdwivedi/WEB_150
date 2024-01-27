const express = require('express'); 
const path = require('path');
const { v4: new_id } = require('uuid');
const app=express();
app.use(express.static(__dirname + '/public'));


app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.set(__dirname+'/views');
let data=[
    {
        id:new_id(),
        quote:'Work Hard',
        username:'ankit'
    },
    {   id:new_id(),
        quote:'good morning',
        username:'Rohit'
    },
    {   id:new_id(),
        quote:'Good night',
        username:'Ankit'
    },
    {   id:new_id(),
        quote:'Give your best',
        username:'ankit'
    },
]
app.get('/',(req,res)=>{
    res.render('home',{data});  
})

app.get('/show/:id',(req,res)=>{
    const{id}=req.params;
    const one=data.find((item)=>{
        return item.id==id;
    })
    res.render('show',{one});
})

app.get('/new',(req,res)=>{
    res.render('new');
})
app.post('/',(req,res)=>{
    const{author,quote}=req.body;
    data.push({id:new_id(),quote:quote,username:author});
    res.redirect('/')
})
app.listen(4444,()=>{
    console.log('server is working fine');
})