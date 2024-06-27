const { productCollection } = require('../config/db.js')

const getProducts = async (req,res)=>{
    const products = await productCollection.find().toArray();
    res.send({
        status: 'success',
        datta : {
            products: products
        }
    });
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
    const newProduct = await productCollection.insertOne(product);
    res.json({
      status:'success..',
      data:{
        product: newProduct
        }
      })
  
  }

//   const updateProduct = async (req, res) => {
//     const { id } = req.params;
//     const product = req.body;
//     if (!product.title || !product.price) {
//         return res.json({
//             status: 'error',
//             message: 'title and price are required'
//         });
//     }
//     const updatedProduct = await productCollection.updateOne(
//         { _id: id },
//         { $set: product }
//     );
//     if (updatedProduct.matchedCount === 0) {
//         return res.json({
//             status: 'error',
//             message: 'Product not found'
//         });
//     }
//     res.json({
//         status: 'success',
//         data: {
//             product: updatedProduct
//         }
//     });
// }




module.exports = {
    getProducts,
    createProduct,
    
}