const express = require("express");
let products = require("../products.json");
let getProducts = require("./getProducts");
let getProduct = require("./getProduct");
const app = express();

app.get("/api/products", getProducts);
app.get("/api/product/:id", getProduct);

app.listen(3001, () => console.log("Server running on 3001"));
