import {useQuery} from "@tanstack/react-query";
import {ConfigWithParams} from "@/shared/lib/callApi";
import {SearchParams} from "@/shared/entities/aninlibria/model/AnilibriaApiParams";
import {getSearch} from "@/shared/entities/aninlibria/api";

const DEFAULT_PARAMS = {
    filter: 'id,code,posters,names,type,season',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useSearch = ({config, queryKey}: { config?: ConfigWithParams<SearchParams>, queryKey?: any }) => {
    const {params, ...propsConfig} = config || {};

    const mergedParams: SearchParams = {
        ...DEFAULT_PARAMS,
        ...params
    };

    const {data, isLoading, isFetching, ...propsQuery} = useQuery({
        queryFn: () => getSearch({
            params: {
                ...mergedParams,
            },
            ...propsConfig,
        }),
        queryKey: queryKey ?? ['title', 'search', mergedParams],
        select: (data) => data.data,
        enabled: !!params?.search,
    });

    const showSkeleton = !!params?.search && (isLoading || isFetching);
    const showResults = !!params?.search && !isFetching && data?.list.length;

    return {
        isLoading, isFetching,
        showSkeleton,
        showResults,
        data,
        ...propsQuery,
    }
}