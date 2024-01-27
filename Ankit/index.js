const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const productRoutes = require("./routes/productRoutes");
const ejsMate = require('ejs-mate');
const methodOverride  = require('method-override');
const reviewRoutes = require("./routes/reviewRoutes");
const session = require('express-session');
const authRoutes = require("./routes/authRoutes");
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User =  require('./models/User');


mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/Test3')
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log(err)})
 

app.engine('ejs' , ejsMate);
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname,'views'));


app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

let configSession = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}

app.use(session(configSession));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new LocalStrategy(User.authenticate()));

app.use((req,res,next)=>{
    res.locals.curruser=req.user;
    next();
})


app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);

const port = 5555;
app.listen(port,()=>{
    console.log(`server connected`);
})
