'use client';

import {useInfiniteQuery} from "@tanstack/react-query";
import {getTitleUpdates} from "@/shared/entities/aninlibria/api";
import {ConfigWithParams} from "@/shared/lib/callApi";
import {UpdatesParams} from "@/shared/entities/aninlibria/model/AnilibriaApiParams";

const DEFAULT_PARAMS = {
        items_per_page: 20,
        filter: 'id,code,names,posters,status,genres,type,season,player',
}

export const useTitleUpdates = ({config, queryKey}: { config?: ConfigWithParams<UpdatesParams>, queryKey?: any }) => {
    const {params = DEFAULT_PARAMS, ...propsConfig} = config || {};

    const mergedParams: UpdatesParams = {
        ...DEFAULT_PARAMS,
        ...params,
    };

    const {isFetchingNextPage, isLoading, hasNextPage,...propsQuery} = useInfiniteQuery({
        queryFn: ({pageParam}) => getTitleUpdates({
            params: {
                page: pageParam,
                ...mergedParams,
            },
            ...propsConfig,
        }),
        queryKey: queryKey ?? ['title', 'updates', mergedParams],
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            const {current_page, pages} = lastPage.data.pagination;
            return current_page >= pages? undefined: current_page + 1;
        },
        select: (data) => ({
            pages: data.pages.flatMap((pages) => pages.data),
            pageParams: data.pageParams,
        }),
    });
    const showSkeleton = isLoading || isFetchingNextPage;
    const showNextPage = !(isLoading || isFetchingNextPage) && hasNextPage;

    return {
        showSkeleton,
        showNextPage,
        hasNextPage,
        items_per_page: DEFAULT_PARAMS.items_per_page ?? config?.params?.items_per_page,
        ...propsQuery,
    }
}