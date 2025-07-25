import {$anilibria_api} from '@/shared/lib/api';
import {ScheduleParams} from "@/shared/entities/aninlibria/model/AnilibriaApiParams";
import {callApi, ConfigWithParams} from "@/shared/lib/call-api";
import {Schedule} from "@/shared/entities/aninlibria/model/AnilibriaTypes";

export const getSchedule = (config?: ConfigWithParams<ScheduleParams>) => {
    return callApi<ScheduleParams, Schedule[]>({
        api: $anilibria_api,
        method: 'GET',
        endpoint: '/title/schedule',
        config
    });
}