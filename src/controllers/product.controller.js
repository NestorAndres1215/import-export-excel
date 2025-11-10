import { Product } from "../models/Product.js";
import { exportToExcel, importFromExcel } from "../services/excel.service.js";
import path from "path";

export const listProducts = async (req, res) => {
  res.json(await Product.findAll());
};

export const exportProducts = async (req, res) => {
  const products = await Product.findAll();
  const filePath = path.join("uploads", "productos.xlsx");

  await exportToExcel(products, filePath);
  res.download(filePath);
};

export const importProducts = async (req, res) => {
  const filePath = req.file.path;
  const rows = await importFromExcel(filePath);

  for (const row of rows) {
    await Product.create({
      name: row[0],
      price: row[1],
      stock: row[2]
    });
  }

  res.json({ message: "✅ Datos importados correctamente" });
};
