const express = require('express')
const app = express();

const fsPromise = require('fs/promises')

app.use(express.json());

app.get('/products', async (req,res)=>{
   const products = await getData();
    res.json({
        status: 'success...',
        data: {
            products: products,
        }
    });
})

const getData = async()=>{
    const text = await fsPromise.readFile("./data.json", { encoding: 'utf-8'})
    let products;
    try {
        products = JSON.parse(text);
    } catch (error) {
        products = [];  
    }
    return products;

}

app.post('/products', async(req,res)=>{
    const body = req.body;
    const products = await getData();
    // const prLen = products.length;
    // const lastIndex = prLen - 1 ;
    // const lastItem = products[lastIndex];
    // const lastId = lastItem.id;


    let lastId = 1;
    if(products.length!=0){
        lastId = products[products.length - 1].id+1;
    }
    body.id = lastId;
    products.push(body);
    fsPromise.writeFile("data.json", JSON.stringify(products))
    console.log(products);
    res.status(201)
    res.json({
        status: 'success...',
        data: {
            products: body
        },
    })
});

app.put('/products/:id', (req, res)=>{
    const params = req.params;
    console.log(params);
    const body = req.body;
    console.log(body);
    res.send({
        status: 'success'
    })
})



// app.patch('/products/:id', async (req, res) => {
//     const id = req.params.id;
//     const body = req.body;
//     const products = await getData();
//     const index = products.findIndex((product) => product.id === parseInt(id));
  
//     if (index === -1) {
//       res.status(404);
//       res.json({
//         status: 'error',
//         message: 'Product not found',
//       });
//     } else {
//       products[index] = { ...products[index], ...body };
//       fsPromise.writeFile("data.json", JSON.stringify(products));
//       res.json({
//         status: 'success',
//         data: {
//           product: products[index],
//         },
//       });
//     }
//   });






const port = 1400;
app.listen(port,()=>{
    console.log(`Server started at ${port}`);
})