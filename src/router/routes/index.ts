import { RouteRecordRaw } from "vue-router";

const RootRoute: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Root",
    redirect: "/home",
  },
];

// import.meta.globEager() 直接引入所有的模块 Vite 独有的功能
const modules = import.meta.glob("./modules/**/*.ts", { eager: true, import: "default" });
const routeModuleList: RouteRecordRaw[] = [];

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = modules[key] || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = routeModuleList;

export const basicRoutes = [...RootRoute, ...routeModuleList];
