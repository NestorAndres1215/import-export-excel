<template>
  <div class="upload-wrapper">

    <!-- Drop zone / file selector -->
    <label class="dropzone" :class="{ 'dropzone--active': selectedFile }">
      <input type="file" accept=".xlsx,.xls" @change="handleFile" class="file-input" />

      <div v-if="!selectedFile" class="dropzone__empty">
        <div class="dropzone__icon">
          <i class="fa-solid fa-cloud-arrow-up"></i>
        </div>
        <p class="dropzone__title">Arrastra tu archivo aquí</p>
        <p class="dropzone__sub">o haz clic para seleccionar</p>
        <span class="dropzone__badge">.xlsx · .xls</span>
      </div>

      <div v-else class="dropzone__selected">
        <div class="file-icon">
          <i class="fa-solid fa-file-excel"></i>
        </div>
        <div class="file-info">
          <p class="file-name">{{ selectedFile.name }}</p>
          <p class="file-size">{{ (selectedFile.size / 1024).toFixed(1) }} KB · listo para subir</p>
        </div>
        <button type="button" class="file-clear" @click.prevent="clearFile">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </label>

    <!-- Upload button -->
    <button
      class="upload-btn"
      @click="uploadFile"
      :disabled="!selectedFile || uploading"
    >
      <span v-if="!uploading">
        <i class="fa-solid fa-upload"></i>
        Subir Excel
      </span>
      <span v-else>
        <i class="fa-solid fa-spinner fa-spin"></i>
        Importando...
      </span>
    </button>

    <!-- Success message -->
    <div v-if="success" class="success-msg">
      <i class="fa-solid fa-circle-check"></i>
      Archivo importado correctamente
    </div>

  </div>
</template>

<script>
import { ref } from "vue";
import { importProducts } from "../services/productService.js";

export default {
  setup() {
    const selectedFile = ref(null);
    const uploading   = ref(false);
    const success     = ref(false);

    const handleFile = (e) => {
      selectedFile.value = e.target.files[0];
      success.value = false;
    };

    const clearFile = () => {
      selectedFile.value = null;
      success.value = false;
    };

    const uploadFile = async () => {
      if (!selectedFile.value) return;
      uploading.value = true;
      try {
        await importProducts(selectedFile.value);
        success.value = true;
        selectedFile.value = null;
      } finally {
        uploading.value = false;
      }
    };

    return { selectedFile, uploading, success, handleFile, clearFile, uploadFile };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700&family=DM+Sans:wght@300;400;500&display=swap');

.upload-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Dropzone */
.dropzone {
  display: block;
  border: 2px dashed rgba(255,255,255,0.1);
  border-radius: 14px;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
  background: rgba(255,255,255,0.02);
}
.dropzone:hover,
.dropzone--active {
  border-color: rgba(74,222,128,0.4);
  background: rgba(34,197,94,0.04);
}

.file-input {
  display: none;
}

/* Empty state */
.dropzone__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 24px;
  gap: 6px;
}

.dropzone__icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: rgba(34,197,94,0.1);
  color: #4ade80;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  margin-bottom: 8px;
}

.dropzone__title {
  font-size: 14px;
  font-weight: 500;
  color: #cbd5e1;
}
.dropzone__sub {
  font-size: 12px;
  color: #475569;
}
.dropzone__badge {
  margin-top: 8px;
  padding: 4px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  color: #475569;
  font-size: 11px;
  font-weight: 500;
}

/* Selected state */
.dropzone__selected {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
}

.file-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(34,197,94,0.1);
  color: #4ade80;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}

.file-info { flex: 1; overflow: hidden; }
.file-name {
  font-size: 14px;
  font-weight: 500;
  color: #e2e8f0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.file-size {
  font-size: 12px;
  color: #4ade80;
  margin-top: 2px;
}

.file-clear {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: none;
  background: rgba(255,255,255,0.06);
  color: #64748b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  transition: background 0.2s, color 0.2s;
  flex-shrink: 0;
}
.file-clear:hover { background: rgba(239,68,68,0.15); color: #f87171; }

/* Upload button */
.upload-btn {
  width: 100%;
  padding: 14px 24px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, #4ade80, #22c55e);
  color: #0b0f1a;
  font-family: 'Syne', sans-serif;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: transform 0.15s, box-shadow 0.15s, opacity 0.15s;
  box-shadow: 0 4px 20px rgba(34,197,94,0.3);
}
.upload-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(34,197,94,0.45);
}
.upload-btn:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(34,197,94,0.2);
}
.upload-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
  box-shadow: none;
}

/* Success */
.success-msg {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 10px;
  background: rgba(34,197,94,0.08);
  border: 1px solid rgba(34,197,94,0.2);
  color: #4ade80;
  font-size: 13px;
  font-weight: 500;
  animation: fadeUp 0.3s ease both;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>