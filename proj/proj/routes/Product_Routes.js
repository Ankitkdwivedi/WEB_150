const express = require('express');
const Product = require('../model/Product');
const router = express.Router();  // mini application // instance // wo saare kaam jo app kr rha tha wo router kr sakta hai


// read
router.get('/products',async (req, res) => {
    let products= await Product.find({});// promise deta hai    // {} ka mtlb empty object it is optional
    res.render('products/index', {products: products});
})


module.exports = router;