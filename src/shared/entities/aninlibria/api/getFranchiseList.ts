import {$anilibria_api} from '@/shared/lib/api';
import {AxiosRequestConfig} from "axios";
import {FranchiseListParams} from "@/shared/entities/aninlibria/model/AnilibriaApiParams";
import {callApi, ConfigWithParams} from "@/shared/lib/callApi";
import {TitlesPagination} from "@/shared/entities/aninlibria/model/AnilibriaTypes";

export const getFranchiseList = (config?: ConfigWithParams<FranchiseListParams>) => {
    return callApi<FranchiseListParams, TitlesPagination>({
        api: $anilibria_api,
        method: 'GET',
        endpoint: '/title/franchise/list',
        config
    });
}