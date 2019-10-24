import { AxiosRequestConfig } from "./types";
import buildUrl from './helpers/url';

// 封装XMLHttpRequest 请求
export default function xhr(config: AxiosRequestConfig): void {
  let { url, method = 'GET', data = null, params} = config;

  const request = new XMLHttpRequest();

  // 处理url,params传参
  url = buildUrl(url, params);

  request.open(method.toUpperCase(), url, true);

  request.send(data);
}
