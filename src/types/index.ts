export type Method = 'get' | 'GET'
| 'post' | 'POST'
| 'delete' | 'DELETE'
| 'put' | 'PUT'
| 'options' | 'OPTIONS'
| 'head' | 'HEAD'
| 'patch' | 'PATCH'

export interface AxiosRequestConfig {
  url: string;
  method?: Method;
  data?: any;
  params?: any;
}
