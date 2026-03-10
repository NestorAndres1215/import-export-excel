import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Import from "../views/Import.vue";
import Export from "../views/Export.vue";
import List from "../views/List.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/importar", name: "Import", component: Import },
  { path: "/exportar", name: "Export", component: Export },
  { path: "/listar", name: "List", component: List },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;