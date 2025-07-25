import {$anilibria_api} from '@/shared/lib/api';
import {SearchParams} from "@/shared/entities/aninlibria/model/AnilibriaApiParams";
import {callApi, ConfigWithParams} from "@/shared/lib/call-api";
import {TitlesPagination} from "@/shared/entities/aninlibria/model/AnilibriaTypes";

export const getSearch = (config?: ConfigWithParams<SearchParams>) => {
    return callApi<SearchParams, TitlesPagination>({
        api: $anilibria_api,
        method: 'GET',
        endpoint: '/title/search',
        config
    });
}