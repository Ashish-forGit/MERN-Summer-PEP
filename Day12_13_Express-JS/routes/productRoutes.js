const express = require("express");
const {
    getProducts,
    createProduct,
    replaceProduct,
    deleteProduct,
    updateProduct,
    validateForTitleAndPrice,
    getDataMiddleware,
    validateIdMiddleware
} = require("../controllers/productControllers.js");

const productRouter = express.Router();

productRouter.use(getDataMiddleware);

productRouter.route("/")
    .get(getProducts)
    .post(validateForTitleAndPrice, createProduct);

productRouter.route("/:id")
    .put(validateIdMiddleware,validateForTitleAndPrice, replaceProduct)
    .patch(validateIdMiddleware, updateProduct)
    .delete(validateIdMiddleware, deleteProduct);

module.exports = productRouter;