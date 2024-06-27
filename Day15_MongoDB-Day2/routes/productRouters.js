const exprees = require('express')
const {getProducts, createProduct, updateProduct, patchProduct, removeProduct } = require('../controllers/productControllers.js')

const productRouter = exprees.Router();

productRouter.route("/products").get(getProducts);
productRouter.route("/products").post(createProduct);
productRouter.route("/products/:id").put(updateProduct);
productRouter.route("/products/:id").patch(patchProduct);
productRouter.route("/products/:id").delete(removeProduct);




module.exports = {productRouter};