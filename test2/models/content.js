const mongoose = require('mongoose');

let contentSchema = new mongoose.Schema({
    name: {
        type : String,
        trim : true,
        required : true
    },
    desc: {
        type : String,
        trim : true
    },
    img: {
        type : String,
        trim : true
    },
    
});

let Content = mongoose.model('Content' , contentSchema )

module.exports = Content;


