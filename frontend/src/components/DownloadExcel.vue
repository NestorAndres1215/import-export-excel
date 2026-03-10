<template>
  <button class="download-btn" @click="downloadExcel">
    <i class="fa-solid fa-download"></i>
    Descargar Excel
  </button>
</template>

<script>
import { exportProducts } from "../services/productService.js";

export default {
  setup() {
    const downloadExcel = async () => {
      await exportProducts();
    };
    return { downloadExcel };
  },
};
</script>

<style scoped>
.download-btn {
  width: 100%;
  padding: 14px 24px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  color: #0b0f1a;
  font-family: 'Syne', sans-serif;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: transform 0.15s, box-shadow 0.15s;
  box-shadow: 0 4px 20px rgba(251,191,36,0.3);
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(251,191,36,0.45);
}

.download-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(251,191,36,0.2);
}
</style>