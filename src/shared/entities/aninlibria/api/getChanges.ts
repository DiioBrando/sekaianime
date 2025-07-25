import {$anilibria_api} from '@/shared/lib/api';
import {ChangesParams} from "@/shared/entities/aninlibria/model/AnilibriaApiParams";
import {callApi, ConfigWithParams} from "@/shared/lib/call-api";
import {TitlesPagination} from "@/shared/entities/aninlibria/model/AnilibriaTypes";

export const getChanges = (config?: ConfigWithParams<ChangesParams>) => {
    return callApi<ChangesParams, TitlesPagination>({
        api: $anilibria_api,
        method: 'GET',
        endpoint: '/title/changes',
        config
    });
}