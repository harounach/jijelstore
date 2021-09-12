const express = require("express");
const app = express();

const mongoose = require("mongoose");

const userRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL || "mongodb://localhost/jijelstore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use("/api/products", productRouter);

app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
