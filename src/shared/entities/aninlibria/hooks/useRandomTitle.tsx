'use client';

import {getRandom} from "@/shared/entities/aninlibria/api";
import {useQuery} from "@tanstack/react-query";
import {ConfigWithParams} from "@/shared/lib/callApi";
import {RandomParams} from "@/shared/entities/aninlibria/model/AnilibriaApiParams";

const DEFAULT_PARAMS = {
    filter: 'id,code',
}

export const useRandomTitle = ({config, queryKey}: { config?: ConfigWithParams<RandomParams>, queryKey?: any }) => {
    const {params, ...propsConfig} = config || {};

    const mergedParams: RandomParams = {
        ...DEFAULT_PARAMS,
        ...params
    };

    const {isFetching, isLoading, ...propsQuery} = useQuery({
        queryFn: () => getRandom({
            params: {
                ...mergedParams,
            },
            ...propsConfig,
        }),
        queryKey: queryKey ?? ['title', 'random', params],
        enabled: true,
        select: (data) => data.data,
    });

    return {
        isLoad: isFetching || isLoading,
        isFetching,
        isLoading,
        ...propsQuery,
    }
}