import { $anilibria_api } from '@/shared/lib/api';
import {AxiosRequestConfig} from "axios";
import {TitleParams} from "@/shared/entities/aninlibria/model/AnilibriaApiParams";
import {callApi} from "@/shared/lib/callApi";
import {Title} from "@/shared/entities/aninlibria/model/AnilibriaTypes";

export const getTitle = ({axiosConfig, params}: {axiosConfig?: AxiosRequestConfig, params?: TitleParams}) => {
    return callApi<TitleParams, Title>({ api: $anilibria_api, method: 'GET', endpoint: '/title', axiosConfig, params });
}