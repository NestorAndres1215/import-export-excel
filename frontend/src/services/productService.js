import axios from "axios";

const API_URL = "http://localhost:3000/products";

export const listProducts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const exportProducts = async () => {
  const res = await axios.get(`${API_URL}/export`, { responseType: "blob" });
  const url = window.URL.createObjectURL(new Blob([res.data]));
  const a = document.createElement("a");
  a.href = url;
  a.download = "products.xlsx";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const importProducts = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await axios.post(`${API_URL}/import`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};