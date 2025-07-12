'use client';

import {PaginationObserver} from "@/shared/components/pagination/PaginationObserver";
import {Spinner} from "@radix-ui/themes";
import {Skeleton} from "@/shared/components/ui/skeleton";
import {useTitleUpdates} from "@/shared/entities/aninlibria/hooks/useTitleUpdates";
import {AnimeCard} from "@/shared/components/card/AnimeCard";

export const Catalog = () => {
    const { data, showSkeleton, showNextPage, fetchNextPage, items_per_page} = useTitleUpdates({});

    return (
        <section className={'p-2 space-y-2'}>
            <div>
                {/*search and filter*/}
            </div>
            <div className={'grid grid-rows-[repeat(auto-fit,minmax(180px,1fr))] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-[repeat(5,minmax(170px,1fr))] gap-2'}>
                {
                   data?.pages.map(page =>
                        page.list.map(title => (
                                <AnimeCard
                                    key={`${title.id}-${title.code}`}
                                    href={`/release/${title.code}`}
                                    src={title.posters.medium.url}
                                    name={title.names.ru}
                                    genres={title.genres}
                                    parts={[title.type.string, title.status.string, title.season.string].filter(Boolean)}
                                    episode={title.player.episodes.last}
                                />

                            )
                        )
                    )
                }
                {
                    showSkeleton && [...Array(items_per_page)].map((i: number) => (
                        <Skeleton
                            key={i}
                            className={'w-full bg-black/30 rounded-md py-1.5 min-w-[9rem] max-w-[100%] aspect-[3/4]'}
                        />
                    ))
                }
                {
                    showNextPage &&
                    <PaginationObserver onChange={fetchNextPage}/>
                }
            </div>
            {
                showSkeleton &&
                <Skeleton className={'w-full bg-black/30 p-2 rounded-md rounded-t-none'}>
                    <Spinner className={'mx-auto'}/>
                </Skeleton>
            }
        </section>
    );
}