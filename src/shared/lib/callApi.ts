import {AxiosRequestConfig, AxiosResponse, AxiosInstance} from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ConfigWithParams<P extends Record<string, any>> = Omit<AxiosRequestConfig, 'params'> & {
    params?: P;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const callApi = <P extends Record<string, any> = any, R = any>({api, method, endpoint, config}: {
    api: AxiosInstance;
    method: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE';
    endpoint: string;
    config?: ConfigWithParams<P>;
}): Promise<AxiosResponse<R>> => {
    return api[method.toLowerCase() as Lowercase<typeof method>]<R>(endpoint, config);
}