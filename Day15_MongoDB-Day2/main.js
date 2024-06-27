


require('dotenv').config();
const exprees = require('express');
const {productRouter} = require('./routes/productRouters.js')

const app = exprees();

app.use(exprees.json());

app.use(productRouter);

app.listen(process.env.PORT,()=>{
    console.log(`----------Server started -> ${process.env.PORT}---------`);
})