# 📦 API de Importación y Exportación de Excel con Node.js + Sequelize + MySQL

## 🎯 Objetivo
Este proyecto permite **exportar datos desde la base de datos a un archivo Excel** y también **importar datos desde un archivo Excel hacia la base de datos**, utilizando Node.js, Express, Sequelize y MySQL.

## 📝 Descripción
La API incluye:
- CRUD base para productos
- Endpoint para **exportar** los registros de la tabla `Products` a un archivo `.xlsx`
- Endpoint para **importar** un archivo Excel y registrar sus datos en la base de datos
- Documentación interactiva con **Swagger UI**
- Uso de **Multer** para recibir archivos y **ExcelJS** para procesarlos

Ideal para sistemas administrativos, inventarios o cualquier aplicación donde se trabaje con datos en Excel.

---

## 🛠️ Tecnologías y Dependencias

### **Backend**
| Herramienta | Uso |
|------------|-----|
| Node.js | Entorno de ejecución |
| Express | Framework web |
| Sequelize | ORM para base de datos |
| MySQL2 | Conector de MySQL |
| ExcelJS | Lectura y creación de archivos Excel |
| Multer | Manejo de archivos subidos |
| Swagger UI | Documentación de API |
| dotenv | Manejo de variables de entorno |
