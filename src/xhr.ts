import { AxiosRequestConfig } from "./types";

// 封装XMLHttpRequest 请求
export default function xhr(config: AxiosRequestConfig): void {
  const { url, method = 'GET', data = null} = config;

  const request = new XMLHttpRequest();

  request.open(method.toUpperCase(), url, true);

  request.send(data);
}
