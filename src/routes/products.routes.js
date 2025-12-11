import express from "express";

import {
  createProductController,
  deletedProductController,
  updateProductController,
  getAllProductsController,
  getProductsByIdController,
} from "../controllers/products.controllers.js";

const router = express.Router();

router.get("/", getAllProductsController);

router.get("/:id", getProductsByIdController);

router.post("/create", createProductController);

router.delete("/:id", deletedProductController);

router.put("/:id", updateProductController);

export default router;
