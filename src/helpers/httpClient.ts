import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
export type HttpHeaders = {
  [key: string]: string;
};

export type RequestConfig = {
  headers: HttpHeaders;
};

type headerType = Record<string, string | boolean>;
const headers: Readonly<headerType> = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

class HttpService {
  private instance: AxiosInstance | null = null;

  private createInstance() {
    const http = axios.create({
      baseURL: "/",
      headers,
    });
    this.instance = http;
    return http;
  }

  private get HttpService(): AxiosInstance {
    return this.instance || this.createInstance();
  }

  post(
    url: string,
    payload: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return this.HttpService?.post(url, payload, config);
  }

  get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.HttpService?.get(url, config);
  }
}

export const httpClient = new HttpService();
