import {$anilibria_api} from '@/shared/lib/api';
import {AxiosRequestConfig} from "axios";
import {RandomParams} from "@/shared/entities/aninlibria/model/AnilibriaApiParams";
import {callApi, ConfigWithParams} from "@/shared/lib/callApi";
import {Title} from "@/shared/entities/aninlibria/model/AnilibriaTypes";

export const getRandom = (config?: ConfigWithParams<RandomParams>) => {
    return callApi<RandomParams, Title>({
        api: $anilibria_api,
        method: 'GET',
        endpoint: '/title/random',
        config
    });
}