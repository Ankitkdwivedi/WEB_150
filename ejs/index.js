const express=require('express')
const path=require('path')
const app=express();

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')))
app.set('views',path.join(__dirname,'views'));

app.get('/home',(req,res)=>{
    let random=Math.floor(Math.random()*10)
    res.render('index',{random})
})

app.listen(8080,()=>{
    console.log('working fine');
})
