const getAllProducts = (req, res) => {
  res.status(200).json({ msg: "Products route" });
};

const getAllProductsStatic = (req, res) => {
  res.status(200).json({ msg: "Products testing route" });
};

export { getAllProducts, getAllProductsStatic };
