import { $anilibria_api } from '@/shared/lib/api';
import {AxiosRequestConfig} from "axios";
import {SearchParams} from "@/shared/entities/aninlibria/model/AnilibriaApiParams";
import {callApi} from "@/shared/lib/callApi";
import {TitlesPagination} from "@/shared/entities/aninlibria/model/AnilibriaTypes";

export const getSearch = ({axiosConfig, params}: {axiosConfig?: AxiosRequestConfig, params?: SearchParams}) => {
    return callApi<SearchParams, TitlesPagination>({ api: $anilibria_api, method: 'GET', endpoint: '/title/search', axiosConfig, params });
}