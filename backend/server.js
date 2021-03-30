const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routers/userRouter.js");
const productRouter = require("./routers/productRouter.js");

const app = express();
mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost/petitsfruits",
  {
    useNewUrlParser: true,
    userUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);


app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
