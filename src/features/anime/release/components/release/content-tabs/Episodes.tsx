'use client';

import {ShortCard} from "@/shared/components/card/ShortCard";
import {Skeleton} from "@/shared/components/ui/skeleton";
import {Title} from "@/shared/entities/aninlibria/model/AnilibriaTypes";

export type TEpisodeProps = {
    title: Title | undefined;
    showResults: boolean;
    showSkeleton: boolean;
}

export const Episodes = ({title, showResults, showSkeleton}: TEpisodeProps) => {
    return (
        <>
            {
                showResults &&
                (title && title?.player) &&
                Object.values(title.player.list).map((item) => (
                    <ShortCard key={item?.uuid} name={item?.name} episode={item?.episode} src={item?.preview}
                               href={`/video/${item?.uuid}`}/>
                ))
            }
            {
                showSkeleton &&
                [...Array(12)].map((_, index) => (
                    <Skeleton key={index} className={'min-w-[150px] max-w-[100%] h-[200px] w-[400px]'}/>
                ))
            }
        </>
    )
}