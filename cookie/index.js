const express=require('express');
const cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())

app.get('/', function (req, res) {
    res.send('Learning cookie')
  })
  

//cookie bhejna

app.get('/setcookies',(req,res)=>{
    res.cookie('mode','dark');
    res.cookie('name','ankit');
    res.cookie('location','gla');
    res.send('chal gya')
})

// access all the cookies
app.get('/allcookies',(req,res)=>{
    console.log(req.cookies);
    const {name}=req.cookies;
    console.log(name)
    res.send('ok got all');
})
  app.listen(8080,()=>{
    console.log('server is runnig fine');
  })