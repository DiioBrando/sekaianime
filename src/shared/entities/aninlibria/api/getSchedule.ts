import { $anilibria_api } from '@/shared/lib/api';
import {AxiosRequestConfig} from "axios";
import {ScheduleParams} from "@/shared/entities/aninlibria/model/AnilibriaApiParams";
import {callApi} from "@/shared/lib/callApi";
import {Schedule} from "@/shared/entities/aninlibria/model/AnilibriaTypes";

export const getSchedule = ({axiosConfig, params}: {axiosConfig?: AxiosRequestConfig, params?: ScheduleParams}) => {
    return callApi<ScheduleParams, Schedule[]>({ api: $anilibria_api, method: 'GET', endpoint: '/title/schedule', axiosConfig, params });
}