import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { basicRoutes } from "@/router/routes";

const router = createRouter({
  routes: basicRoutes as unknown as RouteRecordRaw[],
  history: createWebHistory(),
});

export default router;
