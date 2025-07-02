'use client';

import {PaginationObserver} from "@/shared/components/pagination/PaginationObserver";
import {AnimeCard} from "@/shared/components/AnimeCard";
import {Spinner} from "@radix-ui/themes";
import {Skeleton} from "@/shared/components/ui/skeleton";
import {useTitleUpdates} from "@/shared/entities/aninlibria/hooks/useTitleUpdates";

export const Catalog = () => {
    const { data, isDataPending, fetchNextPage, hasNextPage, items_per_page} = useTitleUpdates({});

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
                                    data={title}
                                    linkTo={`release/${title.code}`}
                                    srcImage={title.posters.medium.url}
                                />

                            )
                        )
                    )
                }
                {
                    isDataPending && [...Array(items_per_page)].map((i: number) => (
                        <Skeleton
                            key={i}
                            className={'w-full bg-black/30 rounded-md py-1.5 min-w-[9rem] max-w-[100%] aspect-[3/4]'}
                        />
                    ))
                }
                {
                    (!isDataPending && hasNextPage) &&
                    <PaginationObserver onChange={fetchNextPage}/>
                }
            </div>
            {
                isDataPending &&
                <Skeleton className={'w-full bg-black/30 p-2 rounded-md rounded-t-none'}>
                    <Spinner className={'mx-auto'}/>
                </Skeleton>
            }
        </section>
    );
}