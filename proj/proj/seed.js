const  mongoose = require("mongoose");
const Product = require("./model/Product");

let products =[
    
   {
        name: "meloni",
        img:"https://feeds.abplive.com/onecms/images/uploaded-images/2023/03/02/b9fdff5a08a50ecd06bc8a142416cf301677754410336607_original.jpg?impolicy=abp_cdn&imwidth=720",
        price:1000,
        desc:"jamun khao"
    },

    {
        name: "modi",
        img:"https://feeds.abplive.com/onecms/images/uploaded-images/2023/03/02/b9fdff5a08a50ecd06bc8a142416cf301677754410336607_original.jpg?impolicy=abp_cdn&imwidth=720",
        price:54,
        desc:"russian"
    }
]

async function seedDB(){
    await Product.insertMany(products);
    console.log("seeded!")
}

module.exports = seedDB;