// const { productCollection } = require('../config/db.js')
const { productModel } = require('../models/productModel.js')

const checkId = async(req, res, next)=>{
    try {
        const { id } = req.params;
        const product =  await productModel.findById(id);
        if(!product){
            res.status(404).json({
            status: "fail",
            message: 'Product ID not found'
        })
        return;
    }
    
    next();
        
    } catch (error) {
        if (error.name === 'CastError') {
            res.status(400)
            res.json({
                status: "fail",
                message: "Invalid Product ID"
            })
            return;
        }
        res.status(500).json({
            status: "fail",
            message: `Internal server error ${error.message}`
        })   
    }
    
}

const getProducts = async (req,res)=>{
    const {limit, page} = req.query;
    const products = await productModel.find({}).limit(10);
    const countDocuments = await productModel.countDocuments()
    res.send({
        status: 'success',
        results: products.length, 
        totalData: countDocuments,
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
      productUpdates.updatedAt = Date.now();
      const updatedProduct = await productModel.findOneAndUpdate({_id : id }, productUpdates,{new: true});
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

const replaceProduct = async (req, res) => {
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

const removeProduct = async (req, res) => {
  try {
      const { id } = req.params;
      const deletedProduct = await productModel.findByIdAndDelete(id);
      res.status(204).json({
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


const listProducts = async (req, res) => {
    try {
        console.log('----->',req.query);
    const { limit = 10, q ="", fields='',page =1 ,sort="price",...filters} = req.query;
    const selectionFields = fields.split('_');
    const sortFields = sort.split('_').join(" ");
    console.log(filters);
    
    // filters
    // const productQuery = productModel.find(filters
    // //{
    // //     title: {
    // //         $regex : q
    // //     }
    // // }
    // );
    let productQuery = productModel.find(filters); 

    //searching functionality
    productQuery = productQuery.where('title').regex(q);

    //reduce responsize and select specific fields
    productQuery = productQuery.select(selectionFields)

    // sorting
    productQuery =  productQuery.sort(sortFields);

     // count the total of result documents
     const countQuery = productQuery.clone();
     const totalData = await countQuery.countDocuments();
 
    //pagination
    productQuery =  productQuery.skip((page-1) * limit);
    //limit
    productQuery = await productQuery.limit(limit);

    res.json({
        status: "success",
        results: productQuery.length,
        totalData: totalData,
        data: {
            pizzas: productQuery,
        },
    });
    } catch (error) {
        res.status(500)
        .json({ status: "error", message: "Internal server error" });
    }
    
};

module.exports = {
  getProducts,
  createProduct,
  listProducts,
  replaceProduct,
  updateProduct,
  removeProduct,
  checkId
}