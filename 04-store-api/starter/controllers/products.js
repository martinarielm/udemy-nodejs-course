import Product from "../models/Product.js";

const getAllProducts = async (req, res) => {
  const { company, featured, fields, name, numericFilters, sort } = req.query;
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

  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replaceAll(
      regEx,
      (match) => `-${operatorMap[match]}-`,
    );
    const options = ["price", "rating"];

    filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        query[field] = { [operator]: Number(value) };
      }
    });
  }

  let products = Product.find(query);

  if (sort) {
    const sortList = sort.split(",").join(" ");
    products = products.sort(sortList);
  } else {
    products = products.sort("createdAt");
  }

  if (fields) {
    const fieldList = fields.split(",").join(" ");
    products = products.select(fieldList);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  products = products.skip(skip).limit(limit);

  const sortedProducts = await products;
  res.status(200).json(sortedProducts);
};

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ price: { $gt: 100 } })
    .select("name price")
    .sort("name");
  res.status(200).json(products);
};

export { getAllProducts, getAllProductsStatic };
