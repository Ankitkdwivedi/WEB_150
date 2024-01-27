const express = require('express');
const Product = require('../models/Product');
const { isloggedIn } = require('../middleware');
const router = express.Router(); 

router.get('/products' , async (req,res)=>{
    let allProducts = await Product.find();
    res.render('product/index' , {allProducts})
})


router.get('/product/new' ,isloggedIn , (req,res)=>{
    res.render('product/new');
})


router.post('/products' ,isloggedIn , async(req,res)=>{
    let {name,img , price , desc} = req.body;
    await Product.create({name,img , price , desc});
    res.redirect('/products');
})


router.get('/products/:id' ,isloggedIn , async(req,res)=>{
    let {id} = req.params;
    let foundProduct=await Product.findById(id).populate('reviews');
    res.render('product/show' , {foundProduct})

})


router.get('/products/:id/edit' ,isloggedIn , async(req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    console.log('sam1',foundProduct,'sam');
    res.render('product/edit' , {foundProduct})
})


// TO ACTUALLY CHANGE IN db
router.patch('/products/:id' ,isloggedIn , async(req,res)=>{
    let {id} = req.params;
    let {name , img , price , desc} = req.body;
    await Product.findByIdAndUpdate( id , {name , img , price , desc});
    res.redirect(`/products/${id}`);
})

// DELETE THE EXISTING PRODUCT
router.delete('/products/:id' ,isloggedIn , async(req,res)=>{
    let {id} = req.params;
    let product= await Product.findById(id);
    for(let id of product.reviews){
        await Review.findByIdAndDelete(id);
    }
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})


// export so that you can use it in app.ja
module.exports = router;