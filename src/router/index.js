import { createRouter, createWebHistory } from "vue-router";
import PortfolioPage from "@/pages/PortfolioPage.vue";
import ProjectTable from "@/pages/ProjectTable.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Portfolio",
      component: PortfolioPage,
    },
    {
      path: "/table",
      name: "ProjectTable",
      component: ProjectTable,
    },
  ],
});

export default router;
