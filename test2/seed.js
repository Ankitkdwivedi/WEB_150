const mongoose = require('mongoose');
const Product = require('./models/content');

let blogs = [
    {
        name:"asdasddjkhfjsdjfsdaf" ,
        desc: "ifkidfjsdkf",
        img: "https://unsplash.com/photos/water-lilies-in-a-pond-with-lily-pads-v6JYm5Q0Tzk",
    },
    {
        name:"asdasddjkhfjsdjfsdaf" ,
        desc: "dsfds",
        img: "https://unsplash.com/photos/water-lilies-in-a-pond-with-lily-pads-v6JYm5Q0Tzk",
    },
    {
        name:"asdasddjkhfjsdjfsdaf" ,
        desc: "dfsdfsdf",
        img: "https://unsplash.com/photos/water-lilies-in-a-pond-with-lily-pads-v6JYm5Q0Tzk",
    },
]


async function seedDB(){
    await Product.insertMany(blogs);
    console.log("Data seeded");
}

module.exports = seedDB;