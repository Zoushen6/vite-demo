import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { basicRoutes } from "@/router/routes";

const router = createRouter({
  routes: basicRoutes as unknown as RouteRecordRaw[],
  history: createWebHashHistory(),
});

export default router;
