const express = require('express');
const User=require('../models/User');
const passport = require('passport');

const router=express.Router();

router.get('/register',(req,res)=>{
    res.render('auth/signup');
})
router.get('/login',(req,res)=>{
    res.render('auth/login');
})
router.post('/register',async(req,res)=>{
    let{username,email,password}=req.body;

    let newUser =new User({username,email});
    let nayabanda=await User.register(newUser,password);
    res.redirect('/products')
})

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login',failureMessage:true }),
  (req, res)=> {
    res.redirect('/products');
  });

  router.get('/logout',(req,res)=>{
    ()=>{
      req.logout();
    }
    res.redirect('/login')
  })


  router.post('/logout', function(req, res, next){
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });
module.exports=router; 