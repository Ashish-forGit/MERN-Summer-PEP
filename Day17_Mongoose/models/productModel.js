

const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    
    description: String,
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    thumbnil: {
        type: String,
    },
    images: [],
    metaDate: {},
    createdAt : {
        type: Date,
        default: Date.now()
    },
    updatedAt : {
        type: Date,
        default: Date.now()
    }
  });






  const productModel = mongoose.model("products",productSchema)

  module.exports = {productModel};