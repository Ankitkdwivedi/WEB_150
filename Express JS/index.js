const express=require('express');  //express is a function
const app=express();//entire instance application 
app.listen(8090,()=>{
    console.log("server started");//callback function
})


// app.use((req,res)=>{
//     console.log("hello world");
//     res.send("This is express I am using")  //req and res both are objects 
// })
// app.use('/cat',(req,res)=>{
//     console.log("hi i am mahesh +cat");
//     res.send("Hi I am using nodemon")
// })

app.get('/cat',(req,res)=>{
    console.log("this is get method");   //use stirng match krta h but get exact match krta h routes ko
    res.send("this is cat route ")
})

app.get('/dog',(req,res)=>{
    console.log("this is dog route "); 
    res.send("dog response")
})

app.get('*',(req,res)=>{
    res.send("this is default and will always run")
})
