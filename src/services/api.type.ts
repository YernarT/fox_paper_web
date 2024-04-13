export type HTTP_Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type ItIsQuery = Record<string, string>;

export interface ItIsFetchConfig {
  url: string;
  method: HTTP_Method;
  query: ItIsQuery;
  headers: Record<string, any>;
  body: BodyInit | null | undefined;
  responseType: "json" | "stream";
}

export interface ItIsFetchError extends Record<string, unknown> {
  message: string;
}

export type ItIsFetch_RequestInterceptorHandler = (
  config: ItIsFetchConfig
) => void;
export type ItIsFetch_ResponseInterceptorSuccessHandler = (
  context: unknown
) => void;
export type ItIsFetch_ResponseInterceptorFailHandler = (context: {
  config: ItIsFetchConfig;
  response: Response;
}) => void;
export type ItIsFetch_ResponseInterceptorHandler = [
  ItIsFetch_ResponseInterceptorSuccessHandler,
  ItIsFetch_ResponseInterceptorFailHandler
];

export type ItIsFetchSerializer = <T>(value: T) => string;
export type ItIsFetchDeserializer = <T>(value: string) => T;

export interface ItIsFetchResponse<T> {
  isOk: boolean;
  data: T;
  message: string;
  reAuth: boolean;
  config: ItIsFetchConfig;
  response: Response;
}

// 请求成功:
// 返回 ItIsResponse<T> 类型，T 为 data 属性的类型
// 请求失败:
// 返回 { message: string, config: ..., response: ... }
