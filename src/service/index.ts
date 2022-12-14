// service统一出口
import ZRequest from "@/service/request";
import { TIME_OUT } from "@/service/request/config";
import localCache from "@/utils/cache";
import router from "@/router";
import { message } from "ant-design-vue";

const apiRequest = new ZRequest({
  baseURL: import.meta.env.VITE_GLOB_API_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = localCache.getCache("token");
      if (token) {
        // @ts-ignore
        config.headers.Authorization = `Bearer ${tyoken}`;
      }
      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (res) => {
      return res;
    },
    responseInterceptorCatch: (err) => {
      console.log(err);
      if (err.response.status === 401) {
        localCache.deleteCache("token");
        message.error("登录已过期");
        router.push("/");
      }
      return err;
    },
  },
});
// 如果有多个
// const apiRequest2 = new ZRequest({
//   baseURL: ''
// })
export const apiRequest2 = new ZRequest({
  baseURL: import.meta.env.VITE_GLOB_API_URL_OTHER,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = localCache.getCache("token");
      if (token) {
        // @ts-ignore
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (res) => {
      return res;
    },
    responseInterceptorCatch: (err) => {
      return err;
    },
  },
});
// export default apiRequest2
export default apiRequest;
