'use client';

import {Badge} from "@radix-ui/themes";
import Image from "next/image";
import {useTitle} from "@/shared/entities/aninlibria/hooks/useTitle";
import {ShortCard} from "@/shared/components/card/ShortCard";
import {Skeleton} from "@/shared/components/ui/skeleton";

export const Release = ({id}: { id: string }) => {
    const {data: title, showResults, showSkeleton} = useTitle({
        config: {
            params: {code: id}
        }
    });
    return (
        <section className={'space-y-4'}>
            {
                showResults &&
                <article className={'relative text-[18px] w-full max-h-[500px] sm:max-h-[360px] flex overflow-hidden md:rounded-lg p-3 sm:my-2'}>
                    <div className={'absolute inset-0 backdrop-blur-sm bg-black/30 z-15 md:z-5'}/>
                    <div className={'w-full md:max-w-[600px] flex flex-col gap-1.5 z-20'}>
                        <h1 className={'text-[25px] sm:text-[18px]'}>{title?.names.ru}</h1>
                        <h2 className={'text-[15px]'}>{title?.names.en}</h2>
                        <div className={'flex flex-wrap gap-1.5'}>
                            {
                                title?.status.string &&
                                <Badge className={'w-max'} color={'blue'}>status: {title?.status.string}</Badge>
                            }
                            {
                                title?.season.string &&
                                <Badge className={'w-max'} color={'blue'}>season: {title?.season.string}</Badge>
                            }
                            {
                                title?.season.year &&
                                <Badge className={'w-max'} color={'blue'}>year: {title?.season.year}</Badge>
                            }
                            {
                                title?.type.episodes &&
                                <Badge className={'w-max'} color={'blue'}>total: {title?.type.episodes}</Badge>
                            }
                            {
                                title?.type.length &&
                                <Badge className={'w-max'} color={'blue'}>runtime: ~{title?.type.length}</Badge>
                            }
                            {
                                title?.type.string &&
                                <Badge className={'w-max'} color={'blue'}>type: {title?.type.string}</Badge>
                            }
                        </div>
                        <p className={'text-[16px] overflow-hidden overflow-y-scroll max-h-[350px] h-full'}>{title?.description}</p>
                        <div className={'flex flex-wrap gap-1.5'}>
                            {
                                title?.genres.map((item, index) => (
                                    <Badge key={index} className={'text-[15px]'}>{item}</Badge>
                                ))
                            }
                        </div>
                    </div>
                    <Image
                        width={650}
                        height={500}
                        src={title?.posters.original.url ? `https://anilibria.tv${title.posters.original.url}` : '/images/default.png'}
                        className={'absolute right-0 top-0 z-10 h-full object-cover max-h-[500px] md:max-h-[360px] sm:max-w-[650px] w-full sm:mask-alpha sm:mask-l-from-black sm:mask-l-from-50% sm:mask-l-to-transparent'}
                        alt={'anime poster'}
                        loading={'lazy'}
                    />
                </article>
            }
            {
                showResults &&
                <article className={'grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:grid-cols-[repeat(3,minmax(150px,1fr))] p-2 gap-1 bg-black/30 rounded-lg'}>
                    {
                        title && title.player &&
                        Object.values(title.player.list).map((item) => (
                            <ShortCard key={item.uuid} name={item.name} episode={item.episode} src={item?.preview}
                                       href={`/video/${item?.uuid}`}/>
                        ))
                    }
                </article>
            }

            {
                showSkeleton &&
                <article className={'relative w-full max-h-[500px] min-h-[500px] sm:min-h-[360px] sm:max-h-[360px] flex overflow-hidden md:rounded-lg p-3 sm:my-2'}>
                    <div className={'absolute inset-0 backdrop-blur-sm bg-black/30 z-15 md:z-5'}/>
                    <div className={'w-full md:max-w-[600px] flex flex-col gap-3 z-20'}>
                        <Skeleton className={'w-full h-[20px] max-w-[65%]'}/>
                        <Skeleton className={'w-full h-[15px] max-w-[45%]'}/>
                        <div className={'flex flex-wrap gap-1.5'}>
                            <Skeleton className={'w-full h-[10px] max-w-[13%]'}/>
                            <Skeleton className={'w-full h-[10px] max-w-[13%]'}/>
                            <Skeleton className={'w-full h-[10px] max-w-[13%]'}/>
                            <Skeleton className={'w-full h-[10px] max-w-[13%]'}/>
                            <Skeleton className={'w-full h-[10px] max-w-[13%]'}/>
                            <Skeleton className={'w-full h-[10px] max-w-[13%]'}/>
                        </div>
                        <Skeleton className={'flex flex-col w-full gap-1.5 max-h-[350px] h-full'}/>
                        <div className={'flex flex-wrap gap-1.5'}>
                            <Skeleton className={'w-full h-[10px] max-w-[13%]'}/>
                            <Skeleton className={'w-full h-[10px] max-w-[13%]'}/>
                            <Skeleton className={'w-full h-[10px] max-w-[13%]'}/>
                        </div>
                    </div>
                    <Skeleton
                        className={'absolute right-0 top-0 z-10 h-full object-cover max-h-[500px] md:max-h-[360px] sm:max-w-[650px] w-full sm:mask-alpha sm:mask-l-from-black sm:mask-l-from-50% sm:mask-l-to-transparent'}/>
                </article>
            }
            {
                showSkeleton &&
                <article className={'grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:grid-cols-[repeat(3,minmax(150px,1fr))] p-2 gap-1 bg-black/30 rounded-lg'}>
                    {
                        [...Array(12)].map((_, index) => (
                            <Skeleton key={index} className={'min-w-[150px] max-w-[100%] h-[200px] w-[400px]'}/>
                        ))
                    }
                </article>
            }
        </section>
    );
}