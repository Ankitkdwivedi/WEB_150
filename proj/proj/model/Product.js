const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({ // schema is a blue print
    name:{
        type:String,
        required:true,
        trim:true
    },

    img:{
        type:String,
        trim:true,
    },

    price:{
        type:Number,
        required:true,
        min:0
    },

    desc:{
        type:String,
        trim:true,
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,//mongoose ke doosre schema ke type me object id lo
            ref:'Review'   //konsa schema review vala schema 
        }
    ]
})

const Product = mongoose.model('Product',productSchema);

module.exports = Product;