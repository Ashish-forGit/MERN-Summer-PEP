


require('dotenv').config();
const exprees = require('express');
const {productRouter} = require('./routes/productRouters.js')
require('./config/db.js')
const app = exprees();

app.use(exprees.json());

app.use('/products',productRouter);

app.listen(process.env.PORT,()=>{
    console.log(`----------Server started -> ${process.env.PORT}---------`);
})