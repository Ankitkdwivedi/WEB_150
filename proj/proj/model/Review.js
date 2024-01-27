const mongoose = require('mongoose');

let reviewSchema = new mongoose.Schema({ // schema is a blue print
    rating:{
        type:Number,
        min:0,
        max:5
    },
    comment:{
        type:String,
        trim:true,
    },
})

const Review = mongoose.model('Review',reviewSchema);

module.exports = Review;