const express = require("express");
const app = express();

const mongoose = require("mongoose");

const data = require("./data");
const userRouter = require("./routers/userRouter");

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

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
