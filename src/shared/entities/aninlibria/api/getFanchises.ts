import { $anilibria_api } from '@/shared/lib/api';
import {AxiosRequestConfig} from "axios";
import {FranchisesParams} from "@/shared/entities/aninlibria/model/AnilibriaApiParams";
import {callApi} from "@/shared/lib/callApi";
import {Franchises} from "@/shared/entities/aninlibria/model/AnilibriaTypes";

export const getFranchises = ({config}: {config?: AxiosRequestConfig<FranchisesParams>}) => {
    return callApi<FranchisesParams, Franchises[]>({ api: $anilibria_api, method: 'GET', endpoint: '/title/franchises', config });
}