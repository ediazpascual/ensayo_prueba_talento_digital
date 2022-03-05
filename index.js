const express = require("express");
const app = express();
app.listen(3000);

const { getStores, getCategories, getBrands, getTable } = require("./query.js");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/stores", async (req, res) => {
  const response = await getStores();
  res.send(response);
});

app.get("/categories", async (req, res) => {
  const response = await getCategories();
  res.send(response);
});

app.get("/brands", async (req, res) => {
  const response = await getBrands();
  res.send(response);
});

app.get("/table", async (req, res) => {
  const { storeName, categoryName, brandName } = req.query;
  const response = await getTable(storeName, categoryName, brandName);
  res.send(response);
});
