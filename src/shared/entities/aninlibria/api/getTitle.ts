import {$anilibria_api} from '@/shared/lib/api';
import {TitleParams} from "@/shared/entities/aninlibria/model/AnilibriaApiParams";
import {callApi, ConfigWithParams} from "@/shared/lib/call-api";
import {Title} from "@/shared/entities/aninlibria/model/AnilibriaTypes";

export const getTitle = (config?: ConfigWithParams<TitleParams>) => {
    return callApi<TitleParams, Title>({
        api: $anilibria_api,
        method: 'GET',
        endpoint: '/title',
        config
    });
}