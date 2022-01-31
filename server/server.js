const express = require("express");
const fs = require("fs");
const path = require("path");
const PORT = 9000;

const app = express();

app.get("/products", (req, res) => {
  fs.readFile(path.join(__dirname, "./data.json"), (err, data) => {
    if (err) throw err;
    let products = JSON.parse(data);
    res.send(products);
  });
});

app.use(express.static(path.join(__dirname, "../build")));
app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../build"));
});

app.listen(PORT);
