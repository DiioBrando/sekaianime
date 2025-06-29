import {$anilibria_api} from '@/shared/lib/api';
import {AxiosRequestConfig} from "axios";
import {TSearchAdvanced} from "@/shared/entities/aninlibria/model/AnilibriaApiParams";
import {callApi, ConfigWithParams} from "@/shared/lib/callApi";
import {TitlesPagination} from "@/shared/entities/aninlibria/model/AnilibriaTypes";

export const getSearchAdvanced = (config?: ConfigWithParams<TSearchAdvanced>) => {
    return callApi<TSearchAdvanced, TitlesPagination>({
        api: $anilibria_api,
        method: 'GET',
        endpoint: '/title/search/advanced',
        config
    });
}