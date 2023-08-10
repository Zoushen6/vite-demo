import type { RouteRecordRaw } from "vue-router";
const test1: RouteRecordRaw = {
  path: "/test",
  name: "Test",
  meta: {
    keepAlive: false, //设置页面是否需要使用缓存
  },
  children: [
    {
      path: "/test1",
      name: "Test1",
      meta: {
        keepAlive: false, //设置页面是否需要使用缓存
      },
      component: () => import("@/view/Demo/Test1.vue"),
    },
    {
      path: "/test2",
      name: "Test2",
      meta: {
        keepAlive: false, //设置页面是否需要使用缓存
      },
      // component: () => import("@/view/Demo/Test2.vue"),
      children: [
        {
          path: "/test2",
          name: "Test2",
          meta: {
            keepAlive: false, //设置页面是否需要使用缓存
          },
          component: () => import("@/view/Demo/Test2.vue"),
        },
      ],
    },
  ],
};

export default test1;
