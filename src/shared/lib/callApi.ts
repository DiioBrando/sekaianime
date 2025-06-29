import {AxiosRequestConfig, AxiosResponse} from "axios";
import type {Dispatcher} from "undici-types";

export const callApi = <P extends Record<string, any> = any, R = any>({api, method, endpoint, config}: {
    api: AxiosInstance;
    method: Dispatcher.HttpMethod;
    endpoint: string;
    config?: AxiosRequestConfig<P>;
}): Promise<AxiosResponse<R>> => {
    return api[method]<R>(endpoint, config);
}