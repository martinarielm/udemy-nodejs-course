import Product from "../models/Product.js";

const getAllProducts = async (req, res) => {
  const { company, featured, name, sort } = req.query;
  const query = {};

  if (featured) {
    query.featured = featured === "true";
  }

  if (company) {
    query.company = company;
  }

  if (name) {
    query.name = { $regex: name, $options: "i" };
  }

  let products = Product.find(query);

  if (sort) {
    const sortList = sort.split(",").join(" ");
    products = products.sort(sortList);
  } else {
    products = products.sort("createdAt");
  }

  const sortedProducts = await products;

  res.status(200).json(sortedProducts);
};

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
};

export { getAllProducts, getAllProductsStatic };
