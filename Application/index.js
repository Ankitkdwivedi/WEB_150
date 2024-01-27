const express = require('express');
const app=express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: nayi_id } = require('uuid');
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(methodOverride('_method'))
let comments=[
    {
        id:nayi_id(),
        username:"manoj tiwari",
        comment:"baby beer peeke",
    },
    {
        id:nayi_id(),
        username:"punnet",
        comment:"nalle chhapri berojgar ",
    },
    {
        id:nayi_id(),
        username:"Honeysingh",
        comment:"yo yo",
    },
    {
        id:nayi_id(),
        username:"Ravi kishan",
        comment:"lahga utha de remote se",
    },
]

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

// app.use('/',(req,res)=>{
//     res.send('hello from application')
// })



// Restful Routing
// Read

app.get('/comments',(req,res)=>{
    res.render('index',{comments})
})

// New

app.get('/comment/new',(req,res)=>{
    res.render('new')
})

// to actually add the comments

app.post('/comments',(req,res)=>{
    console.log(req.body);
    const{name,comment}=req.body
    comments.push({id:nayi_id(),username:name,comment:comment})
    res.redirect('/comments')

})

//showing a particular comment

app.get('/comments/:id',(req,res)=>{
    const{id}=req.params;
    const comment=comments.find((item)=>{
        return item.id==id;
    });
    res.render('show',{comment})
})

//show the edit form
app.get('/comments/:id/edit',(req,res)=>{
    const {id}=req.params;
    const comment=comments.find((item)=>{
        return item.id==id;
    })
    res.render('edit',{comment});
})

//actually edit the comment
app.patch('/comments/:id',(req,res)=>{
    const {id}=req.params;
    let updatecommet=comments.find((item)=>{
        return item.id==id;
    })
    let{name,comment}=req.body;
    console.log(name);
    console.log(comment);
    updatecommet.username=name;
    updatecommet.comment=comment;
    res.redirect('/comments')
})

//deleting a comment
app.delete('/comments/:id',(req,res)=>{
    const id = req.params.id ;  //getting the id from params
    const index = comments.findIndex ((item) => (
        item.id == id));   //finding its position in array
        let newcomments=comments.filter((item)=>{
            return item.id!=id;
        })
        comments=newcomments;
        res.redirect('/comments')
})
app.listen(8080,()=>{
    console.log('working fine on 8080');
})