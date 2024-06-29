const exprees = require('express')
const {checkId, getProducts, listProducts, createProduct, updateProduct,replaceProduct, removeProduct } = require('../controllers/productControllers.js')

const productRouter = exprees.Router();

productRouter.route("/").get(getProducts);
productRouter.route("/list").get(listProducts);
productRouter.route("/").post(createProduct);
productRouter.route("/:id").put(checkId, replaceProduct);
productRouter.route("/:id").patch(checkId, updateProduct);
productRouter.route("/:id").delete(checkId, removeProduct);




module.exports = {productRouter};