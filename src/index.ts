import { AxiosRequestConfig } from "./types";
import xhr from "./xhr";

export default function axios(config: AxiosRequestConfig): void {
  xhr(config);
}
