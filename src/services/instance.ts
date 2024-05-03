/** 初始化请求实例 */

import { ItIsFetch } from "@/services/api";
import { localStorage } from "@/utils/localStorage";

const isDev = true;

const SERVICE_HOST_DEV = "http://127.0.0.1";
const SERVICE_HOST_PROD = "https://api.fox-paper.kz";
const SERVICE_PORT_DEV = "8000";

const BASE_URL = isDev
  ? `${SERVICE_HOST_DEV}:${SERVICE_PORT_DEV}/api`
  : `${SERVICE_HOST_PROD}/api`;

export const iFetch = new ItIsFetch();

iFetch.baseUrl = BASE_URL;

iFetch.request.interceptor.add(async (config) => {
  const token = await localStorage.get("token", null);
  token && (config.headers["Authorization"] = token);
});
