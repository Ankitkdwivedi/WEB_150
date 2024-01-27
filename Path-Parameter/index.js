const express=require('express')
const app=express();

app.listen(8090,()=>{
    console.log('server is running');
})
//path parameter
// app.get('/r/:ty',(req,res)=>{    //collon ke baad bali cheej hm chang krte rhenge .
//      console.log(req);
//     console.log(req.params);
//     let {ty}=req.params;
//     res.send(`you are asking for ${ty}`)
   
// })

//query parameter 
app.get('/search',(req,res)=>{
    console.log(req.query);
    res.send('query chal rhi h')
})


