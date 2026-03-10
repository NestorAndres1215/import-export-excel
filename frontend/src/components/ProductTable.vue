<template>
  <div class="table-wrapper">
    <!-- Loading -->
    <div v-if="loading" class="state-msg">
      <i class="fa-solid fa-spinner fa-spin"></i>
      Cargando productos...
    </div>

    <!-- Empty -->
    <div v-else-if="products.length === 0" class="state-msg">
      <i class="fa-solid fa-box-open"></i>
      No hay productos registrados
    </div>

    <!-- Table -->
    <table v-else class="product-table">
      <thead>
        <tr>
          <th><i class="fa-solid fa-hashtag"></i> ID</th>
          <th><i class="fa-solid fa-tag"></i> Nombre</th>
          <th><i class="fa-solid fa-dollar-sign"></i> Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td class="td-id">#{{ product.id }}</td>
          <td class="td-name">{{ product.name }}</td>
          <td class="td-price">S/ {{ Number(product.price).toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { listProducts } from "../services/productService.js";

export default {
  setup() {
    const products = ref([]);
    const loading  = ref(true);

    onMounted(async () => {
      products.value = await listProducts();
      loading.value  = false;
    });

    return { products, loading };
  },
};
</script>

<style scoped>
.table-wrapper { width: 100%; }

/* States */
.state-msg {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 48px 24px;
  color: #475569;
  font-size: 14px;
}
.state-msg i { font-size: 16px; color: #334155; }

/* Table */
.product-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.product-table thead tr {
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.product-table th {
  padding: 14px 24px;
  text-align: left;
  color: #475569;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.product-table th i { margin-right: 6px; font-size: 10px; }

.product-table tbody tr {
  border-bottom: 1px solid rgba(255,255,255,0.04);
  transition: background 0.15s;
}
.product-table tbody tr:last-child { border-bottom: none; }
.product-table tbody tr:hover { background: rgba(255,255,255,0.03); }

.product-table td {
  padding: 14px 24px;
  color: #cbd5e1;
}

.td-id {
  color: #475569;
  font-size: 12px;
  font-family: monospace;
}

.td-name { color: #e2e8f0; font-weight: 500; }

.td-price {
  color: #818cf8;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}
</style>