const express = require("express");
const data = require("../data.js");
const expressAsyncHandler = require("express-async-handler");
const Product = require("../models/productModel.js");
const {isAuth, isAdmin} = require('../utils.js')

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ products: createdProducts });
  })
);

productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "product not found" });
    }
  })
);

productRouter.post(
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = new Product({
      name: "sample name" + Date.now(),
      image: '/images/p1.jpg',
      price: 0,
      category: "sample category",
      countInStock: 0,
      description: "sample description",
    });
    const createdProduct = await product.save();
    res.send({message: 'Product Created', product: createdProduct})
  })
);

module.exports = productRouter;
