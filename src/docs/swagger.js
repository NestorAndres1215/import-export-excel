import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

export const swaggerDocs = (app) => {

  const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Excel Import Export API",
        version: "1.0.0",
      },
    },
    apis: ["./src/routes/*.js"], // ✅ Asegúrate que apunte a tus rutas
  };

  const swaggerSpec = swaggerJSDoc(swaggerOptions);

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
