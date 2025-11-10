import ExcelJS from "exceljs";

export const exportToExcel = async (products, filePath) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Productos");

  worksheet.columns = [
    { header: "ID", key: "id", width: 10 },
    { header: "Nombre", key: "name", width: 30 },
    { header: "Precio", key: "price", width: 15 },
    { header: "Stock", key: "stock", width: 10 }
  ];

  products.forEach(product => worksheet.addRow(product.dataValues));

  await workbook.xlsx.writeFile(filePath);
};

export const importFromExcel = async (filePath) => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet("Productos");

  const rows = [];
  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1) rows.push(row.values.slice(2));
  });

  return rows;
};
