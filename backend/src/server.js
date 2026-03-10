import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/product.routes.js";
import { connectDB } from "./config/db.js";
import { swaggerDocs } from "./docs/swagger.js";
import cors from "cors";

dotenv.config();

const app = express();

// ====================
// Configuración CORS
// ====================
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  credentials: true
}));

app.use(express.json());

// ====================
// Rutas
// ====================
app.use("/products", productRoutes);

// Documentación Swagger
swaggerDocs(app);

// Conectar base de datos
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en: http://localhost:${PORT}`);
  console.log(`📄 Documentación Swagger: http://localhost:${PORT}/api-docs`);
});