const express = require("express");
const app = express();

const data = require("./data");

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
