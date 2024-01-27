const express = require('express');
const path = require('path');
const app=express();

let todos=["a","b","c"];
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
// app.use(express.static(path.join(__dirname,'public')))
app.use('/',express.static(path.join(__dirname,'public')))   //jb bhi '/' path hit hoga to ye public folder me jake html file ko render kr dega
// '/' path hit hone se public folder ke andar index.html file chali us file se jquery chali and then js file chli
app.get('/todos',(req,res)=>{
    res.json(todos);                    //json send kr rhe h iska mtlb api h ye
})

app.post('/todos',(req,res)=>{
    // console.log(req.body);
    let{todo}=req.body;
    todos.push(todo);
    res.json({msg:'post req woeked fine'});
})
// app.get('/',(req,res)=>{
//     res.send('running')
// })
app.listen(8080,()=>{
    console.log('working fine');
})