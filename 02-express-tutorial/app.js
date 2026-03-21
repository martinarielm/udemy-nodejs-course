import express from "express";
import { products } from "./data.js";

// import path, { dirname } from "node:path";
// import { fileURLToPath } from "node:url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  return res.send("<h1>Home Page</h1><a href='/api/products'>Products</a>");
  // res.json(products);
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  return res.json(newProducts);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find(
    (product) => product.id === Number(req.params.id),
  );

  if (!product) {
    return res.status(404).json("Product not found");
  }

  return res.json(product);
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) =>
      product.name.startsWith(search),
    );
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (!sortedProducts.length) {
    return res.status(200).json({ success: true, data: [] });
  }

  return res.status(200).json(sortedProducts);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
