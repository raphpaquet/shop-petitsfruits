const express = require("express");
const data = require("../data.js");
const expressAsyncHandler = require("express-async-handler");
const Order = require("../models/orderModel.js");
const { isAuth } = require("../utils.js");

const orderRouter = express.Router();

orderRouter.get('/mine', isAuth, expressAsyncHandler(async(req,res) => {
  const orders = await Order.find({user: req.user._id});
  res.send(orders);
}))

orderRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: "Cart is empty" });
    } else {
      const order = new Order({
        seller: req.body.orderItems[0].seller,
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
      });
      const createdOrder = await order.save();
      res
        .status(201)
        .send({ message: "New Order Created", order: createdOrder });
    }
  })
);

orderRouter.get(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: "Order not found" });
    }
  })
);

orderRouter.put(
  "/:id:pay",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update.time,
        email_address: req.body.email_address,
      };
      const updateOrder = await Order.save();
      res.send({ message: "order paid", order: updateOrder });
    } else {
      res.status(404).send({ message: "order not found" });
    }
  })
);

module.exports = orderRouter;
