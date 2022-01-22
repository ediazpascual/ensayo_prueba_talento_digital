const express = require("express");
const app = express();
app.listen(3000);

const { getStores, getCategories, getBrands, getTable } = require("./query.js");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/tiendas", async (req, res) => {
  const response = await getStores();
  res.send(response);
});

app.get("/categorias", async (req, res) => {
  const response = await getCategories();
  res.send(response);
});

app.get("/marcas", async (req, res) => {
  const response = await getBrands();
  res.send(response);
});

app.get("/tabla", async (req, res) => {
  const { storeName, categoryName, brandName } = req.query;
  const response = await getTable(storeName, categoryName, brandName);
  res.send(response);
});
