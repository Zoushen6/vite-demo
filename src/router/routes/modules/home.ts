import type { RouteRecordRaw } from "vue-router";
const home: RouteRecordRaw = {
  path: "/home",
  name: "Home",
  meta: {
    keepAlive: false, //设置页面是否需要使用缓存
  },
  component: () => import("@/components/HelloWorld.vue"),
};

export default home;
