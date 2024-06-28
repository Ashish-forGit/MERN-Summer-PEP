

const mongoose = require('mongoose')

// const productSchema = new mongoose.Schema({
    
//     description: String,
//     title: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         required: true
//     },
//     thumbnil: {
//         type: String,
//     },
//     images: [],
//     metaDate: {},
//     createdAt : {
//         type: Date,
//         default: Date.now()
//     },
//     updatedAt : {
//         type: Date,
//         default: Date.now()
//     }
//   });

const productSchema = mongoose.Schema({
    pizza_name: String,
    pizza_category: String,
    pizza_size: String,
    total_price: Number
    
})




//   const productModel = mongoose.model("products",productSchema)
  const productModel = mongoose.model("pizzas",productSchema)

  module.exports = {productModel};