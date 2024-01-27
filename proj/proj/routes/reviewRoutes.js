const express = require('express');
const Product = require('../model/Product');
const router = express.Router();  // mini application // instance // wo saare kaam jo app kr rha tha wo router kr sakta hai

router.post('/products/:id/reviews',(req,res)=>{
    let{id}=req.params;
    let {rating,comment}=req.body;
    let review=new Review({rating,comment});
    Product.findByIdAndUpdate(id,{$push:{reviews:review}},()=>{
        
})

module.exports = router;