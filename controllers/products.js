const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ featured: true });
  res.status(200).json({ products, hbHits: products.length });
};
const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "Product route." });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
