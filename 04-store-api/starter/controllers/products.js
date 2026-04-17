import Product from "../models/Product.js";

const getAllProducts = async (req, res) => {
  console.log("👨‍🎤 -> getAllProducts -> req.query.params:", req.query);
  const products = await Product.find(req.query);
  res.status(200).json(products);
};

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
};

export { getAllProducts, getAllProductsStatic };
