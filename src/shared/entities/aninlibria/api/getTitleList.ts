import { $anilibria_api } from '@/shared/lib/api';
import {AxiosRequestConfig} from "axios";
import {TitleParams} from "@/shared/entities/aninlibria/model/AnilibriaApiParams";
import {callApi} from "@/shared/lib/callApi";
import {Titles} from "@/shared/entities/aninlibria/model/AnilibriaTypes";

export const getTitleList = ({axiosConfig, params}: {axiosConfig?: AxiosRequestConfig, params?: TitleParams}) => {
    return callApi<TitleParams, Titles>({ api: $anilibria_api, method: 'GET', endpoint: '/title/list', axiosConfig, params });
}