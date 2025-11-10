import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/product.routes.js";
import { connectDB } from "./config/db.js";
import { swaggerDocs } from "./docs/swagger.js";

// Cargar variables de entorno
dotenv.config();

const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use("/products", productRoutes);

// Swagger Docs (http://localhost:3000/api-docs)
swaggerDocs(app);

// Conectar a la base de datos
connectDB();

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en: http://localhost:${PORT}`);
  console.log(`📄 Documentación Swagger: http://localhost:${PORT}/api-docs`);
});
