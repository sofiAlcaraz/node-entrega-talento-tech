import * as model from "../models/products.model.js";

export const getAllProductsController = async (req, res) => {
  res.json(await model.getAllProducts());
};

export const getProductsByIdController = async (req, res) => {
  res.json(await model.getProductById(req.params.id));
};

export const createProductController = async (req, res) => {
  const newProduct = req.body;
  await model.createProduct(newProduct);
  res.status(201).json({ message: "Product successfully created" });
};

export const deletedProductController = async (req, res) => {
  const deletedId = req.params.id;
  await model.deletedProduct(deletedId);
  res.status(200).json({ message: "Product successfully removed" });
};
