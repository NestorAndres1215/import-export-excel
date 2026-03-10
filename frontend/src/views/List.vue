<template>
  <div class="list-page">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

    <div class="bg-grid"></div>

    <div class="content">
      <!-- Back button -->
      <router-link to="/" class="back-btn">
        <i class="fa-solid fa-arrow-left"></i>
        Volver al Dashboard
      </router-link>

      <!-- Header -->
      <div class="header">
        <div class="page-icon">
          <i class="fa-solid fa-list-check"></i>
        </div>
        <h1>Lista de <span>Productos</span></h1>
        <p class="subtitle">Visualiza y gestiona todo tu inventario</p>
      </div>

      <!-- Table card -->
      <div class="table-card">
        <div class="table-card__header">
          <div class="header-left">
            <i class="fa-solid fa-boxes-stacked"></i>
            <span>Inventario</span>
          </div>
        </div>
        <div class="table-card__body">
          <ProductTable />
        </div>
      </div>

      <!-- Info chips -->
      <div class="info-chips">
        <div class="chip">
          <i class="fa-solid fa-rotate"></i>
          Actualizado al cargar
        </div>
        <div class="chip">
          <i class="fa-solid fa-database"></i>
          Todos los registros
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductTable from "../components/ProductTable.vue";
export default { components: { ProductTable } };
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }

.list-page {
  min-height: 100vh;
  background: #0b0f1a;
  display: flex;
  justify-content: center;
  font-family: 'DM Sans', sans-serif;
  position: relative;
  overflow: hidden;
  padding: 40px 24px;
}

.bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

.list-page::before {
  content: '';
  position: absolute;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 500px;
  background: radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%);
  pointer-events: none;
}

.content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 900px;
  animation: fadeUp 0.5s ease both;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #475569;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 36px;
  transition: color 0.2s;
}
.back-btn:hover { color: #94a3b8; }
.back-btn i { font-size: 12px; }

.header { text-align: center; margin-bottom: 36px; }

.page-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 18px;
  background: rgba(99,102,241,0.12);
  color: #818cf8;
  font-size: 26px;
  margin-bottom: 20px;
  box-shadow: 0 8px 32px rgba(99,102,241,0.2);
}

h1 {
  font-family: 'Syne', sans-serif;
  font-size: clamp(26px, 5vw, 38px);
  font-weight: 800;
  color: #f1f5f9;
  letter-spacing: -1px;
}
h1 span { color: #818cf8; }

.subtitle {
  margin-top: 8px;
  color: #64748b;
  font-size: 14px;
  font-weight: 300;
}

.table-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 20px;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.table-card:hover {
  border-color: rgba(99,102,241,0.25);
  box-shadow: 0 0 40px rgba(99,102,241,0.08);
}

.table-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
  background: rgba(255,255,255,0.03);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #64748b;
  font-size: 13px;
  font-weight: 500;
}
.header-left i { color: #818cf8; font-size: 14px; }

.table-card__body { overflow-x: auto; }

.info-chips {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  animation: fadeUp 0.5s 0.2s ease both;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 14px;
  border-radius: 999px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  color: #475569;
  font-size: 12px;
  font-weight: 500;
}
.chip i { font-size: 11px; color: #818cf8; }
</style>