import axios from "axios";
import type { AxiosInstance } from "axios";
import type { ZRequestInterceptors, ZRequestConfig } from "./type";

// import { Toast } from "vant";
// import { ComponentInstance } from "vant/lib/utils";

const DEAFULT_LOADING = true;

class ZRequest {
  instance: AxiosInstance;
  interceptors?: ZRequestInterceptors;
  showLoading?: boolean;

  constructor(config: ZRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config);

    // 保存基本信息
    this.showLoading = config.showLoading ?? DEAFULT_LOADING;
    this.interceptors = config.interceptors;

    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch,
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch,
    );

    // 2.添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          //添加ui组件库的loading
          // this.loading = Toast.loading({
          //   message: "加载中...",
          //   forbidClick: true,
          //   loadingType: "spinner",
          // });
        }
        return config;
      },
      (err) => {
        return err;
      },
    );

    this.instance.interceptors.response.use(
      (res) => {
        // 将loading移除
        // this.loading?.close();

        const data = res.data;
        // 请求失败以code方式返回
        if (data.returnCode === "-1001") {
          console.log("请求失败~, 错误信息");
        } else {
          return data;
        }
      },
      (err) => {
        // 将loading移除
        // this.loading?.close();

        // 请求失败以状态码方式返回 例子: 判断不同的HttpErrorCode显示不同的错误信息
        if (err.response.status === 404) {
          console.log("404的错误~");
        }
        return err;
      },
    );
  }

  request<T = any>(config: ZRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }

      // 2.判断是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          // 2.将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEAFULT_LOADING;

          // 3.将结果resolve返回出去
          resolve(res);
        })
        .catch((err) => {
          // 将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEAFULT_LOADING;
          reject(err);
          return err;
        });
    });
  }

  get<T = any>(config: ZRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }

  post<T = any>(config: ZRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }

  delete<T = any>(config: ZRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" });
  }

  patch<T = any>(config: ZRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" });
  }

  put<T = any>(config: ZRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PUT" });
  }
}

export default ZRequest;
