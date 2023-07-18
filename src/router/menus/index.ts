import mitt from "mitt";
import type { RouteLocationNormalized } from "vue-router";

const emitter = mitt();
const key = Symbol();
let lastChangeTab: RouteLocationNormalized;
import { toRaw } from "vue";

export const setRouteChange = (lastChangeRoute: RouteLocationNormalized) => {
  const r = toRaw(lastChangeRoute);
  emitter.emit(key, r);
  lastChangeTab = r;
};

export function listenerRouteChange(callback: (route: any) => void, immediate = true) {
  emitter.on(key, callback);
  immediate && lastChangeTab && callback(lastChangeTab);
}
