import { createRouter, createWebHistory } from "vue-router";
import PortfolioPage from "../pages/PortfolioPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Portfolio",
      component: PortfolioPage,
    },
  ],
});

export default router;
