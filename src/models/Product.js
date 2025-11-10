import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Product = sequelize.define("Product", {
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  stock: { type: DataTypes.INTEGER, defaultValue: 0 }
}, {
  tableName: "products",   // 👈 Nombre exacto de la tabla
  timestamps: false        // 👈 Evita que busque createdAt / updatedAt
});
