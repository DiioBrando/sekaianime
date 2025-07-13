import {ConfigWithParams} from "@/shared/lib/callApi";
import {TitleParams} from "@/shared/entities/aninlibria/model/AnilibriaApiParams";
import {useQuery} from "@tanstack/react-query";
import {getTitle} from "@/shared/entities/aninlibria/api";

const DEFAULT_PARAMS = {
    filter: 'id,code,names,posters,status,genres,type,season,player,franchises,team,description,blocked',
}

export const useTitle = ({config, queryKey}: { config?: ConfigWithParams<TitleParams>, queryKey?: any }) => {
    const {params, ...propsConfig} = config || {};

    const mergedParams: TitleParams = {
        ...DEFAULT_PARAMS,
        ...params
    };

    const {data, isFetching, isLoading, ...propsQuery} = useQuery({
        queryFn: () => getTitle({
            params: {
                ...mergedParams,
            },
            ...propsConfig,
        }),
        queryKey: queryKey ?? ['title', 'current', mergedParams],
        select: (data) => data.data,
    });

    const showSkeleton = isLoading || isFetching;
    const showResults = !isFetching && data != null && Object.keys(data).length > 0;

    return {
        showSkeleton,
        showResults,
        isFetching,
        isLoading,
        data,
        ...propsQuery,
    }
}