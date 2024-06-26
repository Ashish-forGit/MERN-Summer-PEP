
require('dotenv').config()
require("./database/db.js")
const { database , productsCollection} = require("./database/db.js")
const {getProduct ,createProduct} = require("./controllers/productControllers.js")
const express = require("express");

const app = express();

app.use(express.json());

app.get('/products', getProduct)

app.post('/products', createProduct)

// app.put('/products/:id', async (req,res)=>{
//   const id = req.params.id;
//   const product = req.body;
//   const result = await productsCollection.updateOne(
    
//     );

//       res.json({
//         status:'success..',
//         data:{
//           product: result
//           }
//         })
          


// })








app.listen(process.env.PORT,()=>
  {
    console.log(`***servers started*** at ${process.env.PORT}`);
  })


