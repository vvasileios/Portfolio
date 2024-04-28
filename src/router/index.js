import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Portfolio",
      component: () => import("@/pages/PortfolioPage.vue"),
    },
    {
      path: "/table",
      name: "ProjectTable",
      component: () => import("@/pages/ProjectTable.vue"),
    },
  ],
});

export default router;
