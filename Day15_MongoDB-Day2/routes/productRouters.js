const exprees = require('express')
const {getProducts, createProduct } = require('../controllers/productControllers.js')

const productRouter = exprees.Router();

productRouter.route("/products").get(getProducts);
productRouter.route("/products").post(createProduct);




module.exports = {productRouter};