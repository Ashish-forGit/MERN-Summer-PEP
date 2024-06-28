const exprees = require('express')
const {checkId, getProducts, createProduct, updateProduct,replaceProduct, removeProduct } = require('../controllers/productControllers.js')

const productRouter = exprees.Router();

productRouter.route("/products").get(getProducts);
productRouter.route("/products").post(createProduct);
productRouter.route("/products/:id").put(checkId, replaceProduct);
productRouter.route("/products/:id").patch(checkId, updateProduct);
productRouter.route("/products/:id").delete(checkId, removeProduct);




module.exports = {productRouter};