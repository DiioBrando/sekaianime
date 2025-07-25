'use client';

import {getRandom} from "@/shared/entities/aninlibria/api";
import {useQuery} from "@tanstack/react-query";
import {ConfigWithParams} from "@/shared/lib/call-api";
import {RandomParams} from "@/shared/entities/aninlibria/model/AnilibriaApiParams";

const DEFAULT_PARAMS = {
    filter: 'id,code',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        queryKey: queryKey ?? ['title', 'random', mergedParams],
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