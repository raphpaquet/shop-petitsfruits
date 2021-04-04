const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routers/userRouter.js");
const productRouter = require("./routers/productRouter.js");
const dotenv = require("dotenv");
const orderRouter = require("./routers/orderRouter.js");
const uploadRouter = require("./routers/uploadRouter.js");
const path = require("path");

dotenv.config();

const app = express();

// add middlewares for all request that contains data to be translated in req.body in our node app. :
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost/petitsfruits",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use("/api/uploads", uploadRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

const _dirname = path.resolve();
app.use("/uploads", express.static(path.join(_dirname, "/uploads")));
app.use(express.static(path.join(_dirname, "/frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(_dirname, "/frontend/build/index.html"))
);
// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
