'use client';
import Link from "next/link";
import Image from "next/image";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/shared/components/ui/card";
import {Button} from "@/shared/components/ui/button";
import {DotIcon, ListPlus, PlayIcon} from "lucide-react";
import {Title} from "@/shared/entities/aninlibria/model/AnilibriaTypes";

export type TAnimeCard = {
    data: Title;
    variant?: 'default' | 'genres' | 'short' | 'vertical' | 'horizontal';
}

export const AnimeCard = ({data, variant = 'default'}: TAnimeCard) => {
    const title = data;
    const genres = title.genres.slice(0, 4);
    const parts = [title.season.year, title.season.string, title.type.string, title.status.string].filter(Boolean);
    return (
        <Card className={'group relative overflow-hidden w-full h-full max-w-[190px] max-h-[280px] border-0'}>
            <Link href={'/test-path'} className={'absolute inset-0 z-25 pointer-event-auto'}></Link>
            <div
                className={'absolute inset-0 z-10 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition pointer-events-none'}></div>
            <div className={'absolute inset-0 z-0'}>
                <Image
                    className={'h-full w-full object-cover'}
                    width={100}
                    height={100}
                    src={`https://anilibria.tv${title.posters.medium.url}`}
                    alt={'title'}
                    loading={'lazy'}
                />
            </div>
            <div className={'absolute inset-0 z-20 flex flex-col justify-between px-3 py-5 pointer-events-auto h-full w-full opacity-0 group-hover:opacity-100 transition'}>
                <CardHeader>
                    <Button className={'rounded-xs bg-white/30 text-white h-[30px] text-[14px]'}>{title.player.episodes.last} Episode</Button>
                </CardHeader>
                <CardContent className={'p-0 text-center text-[15px]'}>
                    <CardTitle>
                        {title.names.ru}
                    </CardTitle>
                </CardContent>
                <CardFooter className={'p-0 flex flex-col space-y-1'}>
                    <div className={'flex flex-col gap-1'}>
                        <div className={'flex flex-wrap justify-center text-slate-200 text-[12px] text-center'}>
                            {
                                parts.map((part, index, array) => (
                                    <div key={index} className={'flex items-center'}>
                                        {part}
                                        {(array.length - 1 > index) && <DotIcon className={'h-[15px] w-[15px]'}/>}
                                    </div>
                                ))
                            }
                        </div>
                        <div className={'flex flex-wrap justify-center text-slate-200 text-[10px]'}>
                            {
                                genres.map((genre, index, array) => (
                                    <div key={index} className={'flex items-center'}>
                                        {genre}
                                        {
                                            (array.length - 1 > index) &&
                                            <DotIcon className={'h-[15px] w-[15px]'}/>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={'flex gap-1'}>
                        <Button
                            className={'bg-white/30 text-white flex items-center text-sm cursor-pointer h-[30px] pointer-events-auto'}>
                            <PlayIcon/>
                            Watch
                        </Button>
                        <Button className={'bg-white/30 text-white cursor-pointer h-[30px] pointer-events-auto'}>
                            <ListPlus/>
                        </Button>
                    </div>
                </CardFooter>
            </div>
        </Card>
    )
}