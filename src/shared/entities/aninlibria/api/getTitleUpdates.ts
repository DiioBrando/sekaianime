import {$anilibria_api} from '@/shared/lib/api';
import {TitlesPagination} from "@/shared/entities/aninlibria/model/AnilibriaTypes";
import {UpdatesParams} from "@/shared/entities/aninlibria/model/AnilibriaApiParams";
import {callApi} from "@/shared/entities/aninlibria/api";
import {ConfigWithParams} from "@/shared/lib/call-api";

export const getTitleUpdates = (config?: ConfigWithParams<UpdatesParams>) => {
    return callApi<UpdatesParams, TitlesPagination>({
        api: $anilibria_api,
        method: 'GET',
        endpoint: '/title/updates',
        config
    });
}