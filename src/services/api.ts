// @todo: interceptor 支持异步调用！
// @todo: 返回值 类型注解

import type {
  ItIsQuery,
  ItIsFetchConfig,
  // ItIsFetchError,
  ItIsFetch_RequestInterceptorHandler,
  ItIsFetch_ResponseInterceptorSuccessHandler,
  ItIsFetch_ResponseInterceptorFailHandler,
  ItIsFetch_ResponseInterceptorHandler,
  ItIsFetchSerializer,
  ItIsFetchDeserializer,
  ItIsFetchResponse,
} from "./api.type";

export class ItIsFetch {
  baseUrl = "";
  headers: Record<string, any> = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  // `onUploadProgress` 允许为上传处理进度事件
  // onUploadProgress(progressEvent: Event) {
  //   // 处理原生进度事件
  // }
  // `onDownloadProgress` 允许为下载处理进度事件
  // onDownloadProgress(progressEvent: Event) {
  //   // 处理原生进度事件
  // }
  // `validateStatus` 定义了对于给定的 HTTP状态码是 resolve 还是 reject promise。
  validateStatus(status: number): boolean {
    return status >= 200 && status < 300;
  }

  #requestInterceptors: ItIsFetch_RequestInterceptorHandler[] = [];
  #responseInterceptors: ItIsFetch_ResponseInterceptorHandler[] = [];

  serializer: ItIsFetchSerializer = JSON.stringify;
  deserializer: ItIsFetchDeserializer = JSON.parse;

  // @todo: 端到端加密请求
  useEncrypt = false;
  // secretKey = process.env.SECRET_KEY || "SECRET_KEY";

  request = {
    interceptor: {
      add: (handler: ItIsFetch_RequestInterceptorHandler) => {
        this.#requestInterceptors.push(handler);
      },
    },
  };

  response = {
    interceptor: {
      add: (
        onSuccess: ItIsFetch_ResponseInterceptorSuccessHandler,
        onFail: ItIsFetch_ResponseInterceptorFailHandler
      ) => {
        this.#responseInterceptors.push([onSuccess, onFail]);
      },
    },
  };

  // @todo: 接收 ItIsFetch 实例对象, 继承所有配置项
  constructor() {}

  #generateRequestConfiguration(url: string, config: Partial<ItIsFetchConfig>) {
    // Init URL
    url = this.baseUrl + url;
    if (config.query) {
      url += "?" + new URLSearchParams(config.query);
    }

    config.url = url;
    config.headers = { ...this.headers, ...(config?.headers ?? {}) };
    config.responseType = config?.responseType ?? "json";

    for (const handler of this.#requestInterceptors) {
      handler(config as ItIsFetchConfig);
    }

    const isFormDataBody = config.body && config.body instanceof FormData;

    if (isFormDataBody) {
      delete config.headers["Content-Type"];
    }

    // 序列化阶段
    if (config.body) {
      config.body = this.serializer(config.body);
    }

    return config as ItIsFetchConfig;
  }

  async #serve<T>(
    url: string,
    config: Partial<ItIsFetchConfig> = {}
  ): Promise<ItIsFetchResponse<T>> {
    const _config = this.#generateRequestConfiguration(url, config);

    // 应用请求拦截器
    for (const handler of this.#requestInterceptors) {
      await handler(_config);
    }

    let response;
    let statusCode;
    try {
      response = await fetch(_config.url, _config);
      statusCode = response.status;

      if (_config.responseType === "json") {
        response = await response.json();
      }
      response.status = statusCode;

      if (!this.validateStatus(response.status)) {
        // 处理请求失败的情况
        for (const [_, onFail] of this.#responseInterceptors) {
          await onFail({ config: _config, response });
        }

        return Promise.reject({
          response,
          config: _config,
          message: response?.message ?? "",
        });
      }

      // 处理请求成功的情况
      for (const [onSuccess] of this.#responseInterceptors) {
        await onSuccess({ config: _config, response, data: response.data });
      }

      return Promise.resolve({
        config: _config,
        ...response,
      });
    } catch (error) {
      // 处理网络请求错误
      for (const [_, onFail] of this.#responseInterceptors) {
        onFail({ config: _config, response });
      }
      return Promise.reject({
        response,
        config: _config,
        message: response?.message ?? "",
      });
    }
  }

  async get<T>(
    url: string,
    query: ItIsQuery = {},
    config: Partial<ItIsFetchConfig> = {}
  ): Promise<ItIsFetchResponse<T>> {
    return this.#serve(url, { query, ...config });
  }

  async post<T>(
    url: string,
    body?: unknown,
    config: Partial<ItIsFetchConfig> = {}
  ): Promise<ItIsFetchResponse<T>> {
    // @ts-ignore
    return this.#serve(url, { body, method: "POST", ...config });
  }

  async patch<T>(
    url: string,
    body?: unknown,
    config: Partial<ItIsFetchConfig> = {}
  ): Promise<ItIsFetchResponse<T>> {
    // @ts-ignore
    return this.#serve(url, { body, method: "PATCH", ...config });
  }

  async put<T>(
    url: string,
    body?: unknown,
    config: Partial<ItIsFetchConfig> = {}
  ): Promise<ItIsFetchResponse<T>> {
    // @ts-ignore
    return this.#serve(url, { body, method: "PUT", ...config });
  }

  async delete<T>(
    url: string,
    body?: unknown,
    config: Partial<ItIsFetchConfig> = {}
  ): Promise<ItIsFetchResponse<T>> {
    // @ts-ignore
    return this.#serve(url, { body, method: "DELETE", ...config });
  }
}
