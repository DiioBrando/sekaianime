import { $anilibria_api } from '@/shared/lib/api';
import {TitlesPagination} from "@/shared/entities/aninlibria/model/AnilibriaTypes";
import {UpdatesParams} from "@/shared/entities/aninlibria/model/AnilibriaApiParams";
import {callApi} from "@/shared/entities/aninlibria/api";
import {AxiosRequestConfig} from "axios";

export const getTitleUpdates = ({axiosConfig, params}: {axiosConfig?: AxiosRequestConfig, params?: UpdatesParams}) => {
   return callApi<UpdatesParams, TitlesPagination>({ api: $anilibria_api, method: 'GET', endpoint: '/title/updates', axiosConfig, params });
}