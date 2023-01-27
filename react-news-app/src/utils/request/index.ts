import axios, { Method, AxiosResponse } from 'axios';

const axiosApi = axios.create({
  // @ts-ignore
  baseURL: process.env.REACT_APP_API_DOMAIN,
});

const request = <T = any, D = any, R = AxiosResponse<T>>(method: Method, url: string, data?: D, params?: any, baseURL?: string): Promise<R> => {
  return axiosApi.request<T, R, D>({
    method,
    url,
    data,
    params,
    baseURL,
  }).then((response): R => {
    return response;
  }).catch((error: any) => {
    return error.response;
  });
};

export default request;
