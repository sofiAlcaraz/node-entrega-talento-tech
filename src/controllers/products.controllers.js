import * as model from "../models/products.model.js";

export const getAllProductsController = async (req, res) => {
  const products = await model.getAllProducts();
  const total = products.length;

  res.setHeader("Content-Range", `items 0-${products.length - 1}/${total}`);

  res.json(products);
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

export const updateProductController = async (req, res) => {
  const id = req.params.id;
  const product = req.body;
  if (!req.body.name) {
    return res.status(400).json({ message: "El campo 'name' es requerido" });
  }
  if (!req.body.state) {
    return res.status(400).json({ message: "El campo 'state' es requerido " });
  }
  const result = await model.editProduct(product, id);
  if (result === "NOT_FOUND") {
    return res.status(404).json({ message: "Product not found" });
  }
  if (result === false) {
    return res.status(500).json({ message: "Error updating product" });
  }
  return res.status(200).json({ message: "Product successfully edited" });
};
