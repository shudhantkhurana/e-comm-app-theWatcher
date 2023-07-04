import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  updateProductController,
} from "../controllers/ProductController.js";
import formidable from "express-formidable";

const router = express.Router();

// Routes
// Create Product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// Update Product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// Get all Product
router.get("/get-products", getProductController);

// Get single Product
router.get("/get-products/:slug", getSingleProductController);

// Get photo
router.get("/product-photo/:pid", productPhotoController);

// delete product
router.delete(
  "/delete-product/:pid",
  requireSignIn,
  isAdmin,
  deleteProductController
);

//filter product
router.post("/product-filters", productFiltersController);

//product per page
router.get("/product-list/:page", productListController);

//product count
router.get("/product-count", productCountController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

export default router;
