import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT, // ← IMPORTANTE
    logging: false
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // crea tablas si no existen
    console.log("✅ Conexión a la base de datos establecida.");
  } catch (error) {
    console.error("❌ Error al conectar DB:", error);
  }
};
