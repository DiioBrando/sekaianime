import { $anilibria_api } from '@/shared/lib/api';
import {AxiosRequestConfig} from "axios";
import {RandomParams} from "@/shared/entities/aninlibria/model/AnilibriaApiParams";
import {callApi} from "@/shared/lib/callApi";
import {Title} from "@/shared/entities/aninlibria/model/AnilibriaTypes";

export const getRandom = ({axiosConfig, params}: {axiosConfig?: AxiosRequestConfig, params?: RandomParams}) => {
    return callApi<RandomParams, Title>({ api: $anilibria_api, method: 'GET', endpoint: '/title/random', axiosConfig, params });
}