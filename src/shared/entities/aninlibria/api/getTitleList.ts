import {$anilibria_api} from '@/shared/lib/api';
import {TitleParams} from "@/shared/entities/aninlibria/model/AnilibriaApiParams";
import {callApi, ConfigWithParams} from "@/shared/lib/callApi";
import {Titles} from "@/shared/entities/aninlibria/model/AnilibriaTypes";

export const getTitleList = (config?: ConfigWithParams<TitleParams>) => {
    return callApi<TitleParams, Titles>({
        api: $anilibria_api,
        method: 'GET',
        endpoint: '/title/list',
        config
    });
}