import express from "express";
import {
  addProducts,
  getProductById,
  getproducts,
  deleteProduct
} from "../controllers/Products.js";

const router = express.Router();

router.post("/add", addProducts);
router.get("/", getproducts);
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);

export default router;
