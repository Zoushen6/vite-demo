import type { RouteRecordRaw } from "vue-router";
const test1: RouteRecordRaw = {
  path: "/test1",
  name: "Test1",
  meta: {
    keepAlive: false, //设置页面是否需要使用缓存
  },
  component: () => import("@/view/Demo/Test1.vue"),
};

export default test1;
