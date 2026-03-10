# 📦 API de Importación y Exportación de Excel con Node.js + Sequelize + MySQL + Vue

## 🎯 Objetivo
Este proyecto permite **exportar datos desde la base de datos a un archivo Excel** y **importar datos desde un archivo Excel hacia la base de datos**, utilizando Node.js, Express, Sequelize y MySQL, con un frontend en Vue 3 para interactuar con la API.

Ideal para sistemas administrativos, inventarios o cualquier aplicación donde se trabaje con datos en Excel.

---

## 📝 Descripción
La API y el frontend incluyen:

- CRUD básico para **productos**
- Endpoint para **exportar** registros de la tabla `Products` a un archivo `.xlsx`
- Endpoint para **importar** un archivo Excel y registrar sus datos en la base de datos
- Frontend en **Vue 3** con navegación y botones para importar, exportar y listar productos
- Documentación interactiva con **Swagger UI**
- Uso de **Multer** para recibir archivos y **ExcelJS** para procesarlos
- Configuración de **CORS** para conexión entre frontend y backend

---

## 🛠️ Tecnologías y Dependencias

### Backend
| Herramienta | Uso |
|------------|-----|
| Node.js | Entorno de ejecución |
| Express | Framework web |
| Sequelize | ORM para base de datos |
| MySQL2 | Conector para MySQL |
| ExcelJS | Lectura y creación de archivos Excel |
| Multer | Manejo de archivos subidos |
| Swagger UI | Documentación de API interactiva |
| dotenv | Manejo de variables de entorno |
| cors | Permitir comunicación con frontend en otro puerto |

### Frontend
| Herramienta | Uso |
|------------|-----|
| Vue 3 | Framework de interfaz |
| Vue Router | Navegación entre páginas |
| Axios | Realizar peticiones HTTP al backend |

---
