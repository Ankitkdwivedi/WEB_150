const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const userSchmema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
    }
})
userSchmema.plugin(passportLocalMongoose);

let User=mongoose.model('User',userSchmema);
module.exports=User;