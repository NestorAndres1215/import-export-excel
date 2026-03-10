import { Product } from "../models/Product.js";
import { exportToExcel, importFromExcel } from "../services/excel.service.js";
import path from "path";

export const listProducts = async (req, res) => {
  res.json(await Product.findAll());
};

export const exportProducts = async (req, res) => {
  const products = [
    { id: 1, name: "Leche", price: 20, stock: 10 },
    { id: 2, name: "Pan", price: 10, stock: 5 }
  ];
  const filePath = path.join("uploads", "productos.xlsx");

  await exportToExcel(products, filePath);
  res.download(filePath);
};

export const importProducts = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No se subió ningún archivo" });
    }

    const filePath = req.file.path;
    const rows = await importFromExcel(filePath);

    if (!rows || rows.length === 0) {
      return res.status(400).json({ message: "El archivo Excel está vacío" });
    }

    const productsToCreate = rows.map(row => ({
      name: row[0],
      price: row[1],
      stock: row[2],
    }));

    await Product.bulkCreate(productsToCreate);

    res.json({ message: "Datos importados correctamente", total: productsToCreate.length });
  } catch (error) {
    res.status(500).json({ message: "Error al importar productos", error: error.message });
  }
};