<template>
  <div class="home">
    <div class="bg-grid"></div>

    <div class="content">
      <div class="header">
        <div class="logo-icon">
          <i class="fa-solid fa-box-open"></i>
        </div>
        <h1>Dashboard <span>de Productos</span></h1>
        <p class="subtitle">Gestiona tu inventario de forma rápida y eficiente</p>
      </div>

      <div class="cards">
        <router-link to="/importar" class="card card--import">
          <div class="card-icon">
            <i class="fa-solid fa-file-arrow-up"></i>
          </div>
          <div class="card-body">
            <h2>Importar Excel</h2>
            <p>Carga productos desde un archivo .xlsx</p>
          </div>
          <i class="fa-solid fa-arrow-right card-arrow"></i>
        </router-link>

        <router-link to="/exportar" class="card card--export">
          <div class="card-icon">
            <i class="fa-solid fa-file-arrow-down"></i>
          </div>
          <div class="card-body">
            <h2>Exportar Excel</h2>
            <p>Descarga tu catálogo en formato .xlsx</p>
          </div>
          <i class="fa-solid fa-arrow-right card-arrow"></i>
        </router-link>

        <router-link to="/listar" class="card card--list">
          <div class="card-icon">
            <i class="fa-solid fa-list-check"></i>
          </div>
          <div class="card-body">
            <h2>Listar Productos</h2>
            <p>Visualiza y filtra todo el inventario</p>
          </div>
          <i class="fa-solid fa-arrow-right card-arrow"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');



.home {
  min-height: 60vh;
  background: #0b0f1a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'DM Sans', sans-serif;
  position: relative;
  overflow: hidden;
}

/* Grid background */
.bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

.home::before {
  content: '';
  position: absolute;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 500px;
  background: radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, transparent 70%);
  pointer-events: none;
}

.content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 820px;
  padding: 40px 24px;
  animation: fadeUp 0.6s ease both;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 48px;
}

.logo-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 18px;
  background: linear-gradient(135deg, #6366f1, #818cf8);
  font-size: 26px;
  color: #fff;
  margin-bottom: 20px;
  box-shadow: 0 8px 32px rgba(99,102,241,0.4);
}

h1 {
  font-family: 'Syne', sans-serif;
  font-size: clamp(28px, 5vw, 42px);
  font-weight: 800;
  color: #f1f5f9;
  letter-spacing: -1px;
  line-height: 1.1;
}

h1 span {
  color: #818cf8;
}

.subtitle {
  margin-top: 10px;
  color: #64748b;
  font-size: 15px;
  font-weight: 300;
}

/* Cards */
.cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 22px 28px;
  border-radius: 16px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  animation: fadeUp 0.6s ease both;
}

.card:nth-child(1) { animation-delay: 0.1s; }
.card:nth-child(2) { animation-delay: 0.2s; }
.card:nth-child(3) { animation-delay: 0.3s; }

.card:hover {
  transform: translateX(6px);
  background: rgba(255,255,255,0.07);
  border-color: rgba(255,255,255,0.15);
}

.card--import:hover { box-shadow: 0 0 30px rgba(34,197,94,0.12); border-color: rgba(34,197,94,0.3); }
.card--export:hover { box-shadow: 0 0 30px rgba(251,191,36,0.12); border-color: rgba(251,191,36,0.3); }
.card--list:hover   { box-shadow: 0 0 30px rgba(99,102,241,0.15); border-color: rgba(99,102,241,0.3); }

.card-icon {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.card--import .card-icon { background: rgba(34,197,94,0.12);  color: #4ade80; }
.card--export .card-icon { background: rgba(251,191,36,0.12);  color: #fbbf24; }
.card--list   .card-icon { background: rgba(99,102,241,0.12); color: #818cf8; }

.card-body {
  flex: 1;
}

.card-body h2 {
  font-family: 'Syne', sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: #e2e8f0;
  margin-bottom: 4px;
}

.card-body p {
  font-size: 13px;
  color: #64748b;
  font-weight: 300;
}

.card-arrow {
  font-size: 14px;
  color: #334155;
  transition: color 0.2s, transform 0.2s;
}

.card:hover .card-arrow {
  color: #94a3b8;
  transform: translateX(4px);
}

@media (max-width: 480px) {
  .card { padding: 18px 20px; }
  .card-icon { width: 44px; height: 44px; font-size: 17px; }
}
</style>