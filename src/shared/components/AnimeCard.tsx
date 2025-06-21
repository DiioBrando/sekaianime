'use client';
import Link from "next/link";
import Image from "next/image";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/shared/components/ui/card";
import {Button} from "@/shared/components/ui/button";
import {DotIcon, ListPlus, PlayIcon} from "lucide-react";
import {Title} from "@/shared/entities/aninlibria/model/AnilibriaTypes";

const variantsCard = {
    variants: {
        default: {
            overlay: 'bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition',
            content: 'inset-0 flex-col justify-between opacity-0 group-hover:opacity-100 transition',
            image: 'max-w-full max-h-full',
            card: 'max-w-[190px] max-h-[280px]',
        },
        genres: {
            overlay: 'bg-[linear-gradient(rgba(16,16,16,0)_0%,rgba(16,16,16,0.2)_70%,rgb(0,0,0)_100%)]',
            content: 'inset-0 flex-col justify-between',
            image: 'max-w-full max-h-full',
            card: 'max-w-[190px] max-h-[320px]',
        },
        franchise: {
            overlay: 'hover:bg-black/40',
            content: 'inset-y-0 right-0 flex-col justify-between max-w-[50%]',
            image: 'max-w-[50%] max-h-full',
            card: 'max-w-[400px] max-h-[200px]',
        },
        short: {
            overlay: 'hover:bg-black/40',
            content: 'inset-0 flex-col justify-between',
            image: 'max-w-full max-h-full',
            card: 'max-w-[200px] max-h-[200px]',
        },
    }
}

export type TAnimeCard = {
    data: Title;
    srcImage: string | undefined;
    variant?: 'default' | 'genres' | 'franchise' | 'short';
}

export type TCardVariant = Pick<TAnimeCard, 'data'>;

export const AnimeCard = ({data, srcImage, variant = 'default'}: TAnimeCard) => {
    const title = data;
    const genres = title.genres.slice(0, 3);
    const parts = [title.season.year, title.season.string, title.type.string, title.status.string].filter(Boolean);
    const style = variantsCard.variants[variant];
    return (
        <Card className={`group relative overflow-hidden w-full h-full border-0 ${style.card}`}>
            <Link href={'/'} className={'absolute inset-0 z-25 pointer-event-auto'}></Link>
            <div className={`absolute inset-0 z-10 pointer-events-none ${style.overlay}`}></div>
            <div className={'absolute inset-0 z-0'}>
                <Image
                    className={`h-full w-full object-cover ${style.image}`}
                    width={300}
                    height={300}
                    src={(srcImage && `https://anilibria.tv${srcImage}`) ?? `/images/default.jpg`}
                    alt={'title'}
                    loading={'lazy'}
                />
            </div>
            <div className={`absolute z-20 flex px-3 py-5 pointer-events-auto h-full w-full ${style.content}`}>
                {variant === 'default' && (<>
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
                                                {(array.length - 1 > index) &&
                                                    <DotIcon className={'h-[15px] w-[15px]'}/>}
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
                                <Button className={'bg-white/30 text-white flex items-center text-sm cursor-pointer h-[30px] pointer-events-auto'}>
                                    <PlayIcon/>
                                    Watch
                                </Button>
                                <Button className={'bg-white/30 text-white cursor-pointer h-[30px] pointer-events-auto'}>
                                    <ListPlus/>
                                </Button>
                            </div>
                        </CardFooter>
                    </>)}
                {variant === 'genres' && (<GenresCard data={data}/>)}
                {variant === 'franchise' && (<FranchiseCard data={data}/>)}
            </div>
        </Card>
    )
}

export const GenresCard = ({data}: TCardVariant) => {
    return (
        <>
            <CardHeader></CardHeader>
            <CardContent className={'p-0 text-center text-[15px]'}></CardContent>
            <CardFooter className={'p-0 flex flex-col space-y-1'}>
                {/* name genre */}
                <div className={'flex flex-wrap justify-center text-slate-200 text-[16px] text-center'}>
                    {}
                </div>
                {/* length genre */}
                <div className={'flex flex-wrap justify-center text-slate-200 text-[13px]'}>
                    {}
                </div>
            </CardFooter>
        </>
    )
}

export const FranchiseCard = ({data}: TCardVariant) => {
    return (
        <>
            <CardHeader className={'p-0'}>
                {/* name franchise */}
                <CardTitle className={'flex flex-wrap'}>
                    {}
                </CardTitle>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className={'p-0 flex items-start flex-col space-y-1'}>
                {/* year franchise */}
                <div className={'flex flex-wrap text-slate-200 text-[15px]'}>
                    {}
                </div>
                {/* season number franchise - 2 season or 1 season */}
                <div className={'flex flex-wrap items-center text-slate-200 text-[15px]'}>
                    {} <DotIcon className={'h-[15px] w-[15px]'}/> {}
                </div>
                {/* length time franchise  1 hour 6 minutes */}
                <div className={'flex flex-wrap text-slate-200 text-[13px]'}>
                    {}
                </div>
            </CardFooter>
        </>
    )
}