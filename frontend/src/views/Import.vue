<template>
  <div class="import-page">
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
          <i class="fa-solid fa-file-arrow-up"></i>
        </div>
        <h1>Importar <span>Productos</span></h1>
        <p class="subtitle">Carga tu catálogo desde un archivo Excel</p>
      </div>

      <!-- Card contenedor del componente -->
      <div class="import-card">
        <div class="import-card__header">
          <i class="fa-solid fa-table"></i>
          <span>Archivo de importación</span>
        </div>
        <div class="import-card__body">
          <UploadExcel />
        </div>
      </div>

      <!-- Info chips -->
      <div class="info-chips">
        <div class="chip">
          <i class="fa-solid fa-file-excel"></i>
          Formato .xlsx
        </div>
        <div class="chip">
          <i class="fa-solid fa-shield-halved"></i>
          Datos seguros
        </div>
        <div class="chip">
          <i class="fa-solid fa-bolt"></i>
          Carga rápida
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UploadExcel from "../components/UploadExcel.vue";
export default { components: { UploadExcel } };
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }

.import-page {
  min-height: 100vh;
  background: #0b0f1a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'DM Sans', sans-serif;
  position: relative;
  overflow: hidden;
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

.import-page::before {
  content: '';
  position: absolute;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 500px;
  background: radial-gradient(ellipse, rgba(34,197,94,0.08) 0%, transparent 70%);
  pointer-events: none;
}

.content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 620px;
  padding: 40px 24px;
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
  background: rgba(34,197,94,0.12);
  color: #4ade80;
  font-size: 26px;
  margin-bottom: 20px;
  box-shadow: 0 8px 32px rgba(34,197,94,0.15);
}

h1 {
  font-family: 'Syne', sans-serif;
  font-size: clamp(26px, 5vw, 38px);
  font-weight: 800;
  color: #f1f5f9;
  letter-spacing: -1px;
}
h1 span { color: #4ade80; }

.subtitle {
  margin-top: 8px;
  color: #64748b;
  font-size: 14px;
  font-weight: 300;
}

.import-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 20px;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.import-card:hover {
  border-color: rgba(34,197,94,0.25);
  box-shadow: 0 0 40px rgba(34,197,94,0.08);
}

.import-card__header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
  background: rgba(255,255,255,0.03);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  color: #64748b;
  font-size: 13px;
  font-weight: 500;
}
.import-card__header i { color: #4ade80; font-size: 14px; }

.import-card__body {
  padding: 28px 24px;
  color: #e2e8f0;
}

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
.chip i { font-size: 11px; color: #4ade80; }

@media (max-width: 480px) {
  .import-card__body { padding: 20px 16px; }
}
</style>