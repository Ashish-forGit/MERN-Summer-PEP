// const { productCollection } = require('../config/db.js')
const { productModel } = require('../models/productModel.js')

const getProducts = async (req,res)=>{
    const products = await productModel.find({});
    res.send({
        status: 'success',
        data : {
            products
        }
    });
}

const createProduct = async(req,res)=>{
  try {
    const product = req.body;
    const body = req.body;
    console.log("**************************\n",body);
    if(!product.title || !product.price){
      return res.json({
        status:'error',
        message:'title and price are required'
        })
        
    }
    const newProduct = await productModel.create(product);
    res.json({
      status:'success..',
      data:{
        product: newProduct
        }
      })

  } catch (error) {
    res.json({
      status:'error',
      message: error.message
      })
  }    
}


const updateProduct = async (req, res) => {
  try {
      const { id } = req.params;
      const productUpdates = req.body;
      if (!productUpdates.title || !productUpdates.price) {
          return res.json({
              status: 'error',
              message: 'title and price are required'
          });
      }
      const updatedProduct = await productModel.findOneAndReplace({_id : id }, productUpdates,{new: true});
      if (!updatedProduct) {
          return res.json({
              status: 'error',
              message: 'Product not found'
          });
      }
      res.json({
          status: 'success',
          data: {
              product: updatedProduct
          }
      });
  } catch (error) {
      res.json({
          status: 'error',
          message: error.message
      });
  }
}

const patchProduct = async (req, res) => {
  try {
      const { id } = req.params;
      const productUpdates = req.body;
      const updatedProduct = await productModel.findByIdAndUpdate(id, { $set: productUpdates }, { new: true });
      if (!updatedProduct) {
          return res.json({
              status: 'error',
              message: 'Product not found'
          });
      }
      res.json({
          status: 'success',
          data: {
              product: updatedProduct
          }
      });
  } catch (error) {
      res.json({
          status: 'error',
          message: error.message
      });
  }
}

const removeProduct = async (req, res) => {
  try {
      const { id } = req.params;
      const deletedProduct = await productModel.findByIdAndDelete(id);
      if (!deletedProduct) {
          return res.json({
              status: 'error',
              message: 'Product not found'
          });
      }
      res.json({
          status: 'success',
          message: 'Product deleted'
      });
  } catch (error) {
      res.json({
          status: 'error',
          message: error.message
      });
  }
}

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  patchProduct,
  removeProduct
}