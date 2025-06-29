import { $anilibria_api } from '@/shared/lib/api';
import {AxiosRequestConfig} from "axios";
import {ChangesParams} from "@/shared/entities/aninlibria/model/AnilibriaApiParams";
import {callApi} from "@/shared/lib/callApi";
import {TitlesPagination} from "@/shared/entities/aninlibria/model/AnilibriaTypes";

export const getChanges = ({axiosConfig, params}: {axiosConfig?: AxiosRequestConfig, params?: ChangesParams}) => {
    return callApi<ChangesParams, TitlesPagination>({ api: $anilibria_api, method: 'GET', endpoint: '/title/changes', axiosConfig, params });
}