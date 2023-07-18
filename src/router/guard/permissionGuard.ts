//防止刷新清空store
import router from "@/router";
import { testStore } from "@/store/testStore";
import localCache from "@/utils/cache";
import { setRouteChange } from "@/router/menus";
//刷新时将vuex数据存到localstorage
window.addEventListener("beforeunload", () => {
  const store = testStore();
  localCache.setCache("surveyInfo", store.getAll);
});

// //路由进入前localstorage中取出数据存入vuex 并删除localstorage中的数据
router.beforeEach((to) => {
  console.log(to);
  const store = testStore();
  const value = localCache.getCache("surveyInfo");
  if (value) store.setCurrentInfo(value.id, value.name);
  localCache.deleteCache("surveyInfo");

  setRouteChange(to);
});
