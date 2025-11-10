import express from "express";
import multer from "multer";
import { listProducts, exportProducts, importProducts } from "../controllers/product.controller.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

/**
 * @openapi
 * /products:
 *   get:
 *     summary: List all products
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: List returned successfully
 */
router.get("/", listProducts);

/**
 * @openapi
 * /products/export:
 *   get:
 *     summary: Export products to Excel
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: Excel exported successfully
 */
router.get("/export", exportProducts);

/**
 * @openapi
 * /products/import:
 *   post:
 *     summary: Import products from Excel
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Excel imported successfully
 */
router.post("/import", upload.single("file"), importProducts);

export default router;
