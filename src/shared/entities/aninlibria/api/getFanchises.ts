import {$anilibria_api} from '@/shared/lib/api';
import {FranchisesParams} from "@/shared/entities/aninlibria/model/AnilibriaApiParams";
import {callApi, ConfigWithParams} from "@/shared/lib/call-api";
import {Franchises} from "@/shared/entities/aninlibria/model/AnilibriaTypes";

export const getFranchises = (config?: ConfigWithParams<FranchisesParams>) => {
    return callApi<FranchisesParams, Franchises[]>({
        api: $anilibria_api,
        method: 'GET',
        endpoint: '/title/franchises',
        config
    });
}