
const { productsCollection} = require("../database/db.js")

const getProduct = async(req,res)=>{
    const products = await productsCollection.find().toArray();
    // const product1 = await productsCollection.findOne();
    // console.log("",products,product1);
    res.json({
      status:'success..',
      data:{
        products: products
  
      }
    })
    }


const createProduct = async(req,res)=>{
    const product = req.body;
    if(!product.title || !product.price){
      return res.json({
        status:'error',
        message:'title and price are required'
        })
        return;
    }
    const result = await productsCollection.insertOne(product);
    res.json({
      status:'success..',
      data:{
        product: result
        }
      })
  
  } 



    module.exports = {getProduct, createProduct};