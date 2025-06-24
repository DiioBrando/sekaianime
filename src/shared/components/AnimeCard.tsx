'use client';
import Link from 'next/link';
import Image from 'next/image';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/shared/components/ui/card';
import {Button} from '@/shared/components/ui/button';
import {DotIcon, ListPlus, PlayIcon} from 'lucide-react';
import {Title} from '@/shared/entities/aninlibria/model/AnilibriaTypes';
import {cn} from '@/shared/lib/utils';

type VariantType = 'default' | 'genres' | 'franchise' | 'short';

interface CardVariantStyles {
    overlay: string;
    content: string;
    image: string;
    card: string;
}

const variantsCard: Record<VariantType, CardVariantStyles> = {
    default: {
        overlay: 'bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition',
        content: 'inset-0 flex-col justify-between opacity-0 group-hover:opacity-100 transition',
        image: 'max-w-full max-h-full',
        card: 'w-full min-w-[140px] max-w-[200px] min-h-[200px] max-h-[280px] aspect-[3/4]',
    },
    genres: {
        overlay: 'bg-[linear-gradient(rgba(16,16,16,0)_0%,rgba(16,16,16,0.2)_70%,rgb(0,0,0)_100%)]',
        content: 'inset-0 flex-col justify-between',
        image: 'max-w-full max-h-full',
        card: 'w-full min-w-[140px] max-w-[300px] min-h-[200px] max-h-[280px] aspect-[3/4]',
    },
    franchise: {
        overlay: 'hover:bg-black/50',
        content: 'max-w-[50%] inset-y-0 right-0 py-4 flex flex-col justify-between',
        image: 'max-w-[50%] h-full object-left',
        card: 'h-[200px] max-w-[100%] w-[400px]',
    },
    short: {
        overlay: 'bg-black/80 backdrop-blur-[1px]',
        content: 'inset-0 flex-col justify-between px-5 py-3',
        image: 'w-full h-full opacity-0 group-hover:opacity-100 transition',
        card: 'min-w-[150px] max-w-[100%] h-[200px] w-[400px]',
    },
};

export type TAnimeCard = {
    data: Title;
    srcImage: string;
    variant?: VariantType;
    linkTo: string;
};

export type TCardVariant = Pick<TAnimeCard, 'data'>;

const ListWithDots = ({items, className = 'text-[12px]'}: { items: (string | number)[]; className?: string }) => (
    <div className={cn('flex flex-wrap justify-center text-slate-200', className)}>
        {items.map((item, index, array) => (
            <div key={index} className={'flex items-center'}>
                {item}
                {array.length - 1 > index && <DotIcon className={'h-[15px] w-[15px]'}/>}
            </div>
        ))}
    </div>
);

export const AnimeCard = ({data, srcImage, linkTo, variant = 'default'}: TAnimeCard) => {
    const genres = data.genres.slice(0, 3);
    const parts = [data.season.year, data.season.string, data.type.string, data.status.string].filter(
        (part) => part !== undefined && part !== null,
    );
    const style = variantsCard[variant] || variantsCard.default;

    return (
        <Card className={cn('group relative overflow-hidden border-0', style.card)}>
            <Link href={`/${linkTo}`} className={'absolute inset-0 z-25 pointer-events-auto'}/>
            <div className={cn('absolute inset-0 z-10 pointer-events-none', style.overlay)}/>
            <div>
                <Image
                    className={cn('absolute inset-0 z-0 object-cover border-1', style.image)}
                    src={srcImage ? `https://anilibria.tv${srcImage}` : '/images/default.jpg'}
                    alt={'Anime poster'}
                    loading={'lazy'}
                    width={300}
                    height={300}
                />
            </div>
            <div className={cn('absolute z-20 flex px-3 py-5 pointer-events-auto h-full w-full', style.content)}>
                {variant === 'default' && (<>
                    <CardHeader className={'p-0 lg:px-5'}>
                        <Button className={'rounded-sm bg-white/30 text-white h-[30px] text-[14px]'}>
                            {data.player.episodes.last} Episode
                        </Button>
                    </CardHeader>
                    <CardContent className={'p-0 text-center text-[12px] lg:text-[15px]'}>
                        <CardTitle>{data.names.ru}</CardTitle>
                    </CardContent>
                    <CardFooter className={'p-0 flex flex-col space-y-1'}>
                        <div className={'flex flex-col'}>
                            <ListWithDots items={parts} className={'text-[10px]'}/>
                            <ListWithDots items={genres} className={'text-[10px]'}/>
                        </div>
                        <div className={'flex gap-1'}>
                            <Button
                                className={'bg-white/30 text-white flex items-center text-sm cursor-pointer h-[30px] pointer-events-auto'}
                            >
                                <PlayIcon/>
                                Watch
                            </Button>
                            <Button className={'bg-white/30 text-white cursor-pointer h-[30px] pointer-events-auto'}>
                                <ListPlus/>
                            </Button>
                        </div>
                    </CardFooter>
                </>)}
                {variant === 'genres' && <GenresCard data={data}/>}
                {variant === 'franchise' && <FranchiseCard data={data}/>}
                {variant === 'short' && <ShortCard data={data}/>}
            </div>
        </Card>
    );
};

export const GenresCard = ({data}: TCardVariant) => {
    return (
        <>
            <CardHeader/>
            <CardContent className={'p-0 text-center text-[15px]'}>
                <CardTitle>{/* name genre */}</CardTitle>
            </CardContent>
            <CardFooter className={'p-0 flex flex-col space-y-1'}>{/* length genre */}</CardFooter>
        </>
    );
};

export const FranchiseCard = ({data}: TCardVariant) => {
    return (
        <>
            <CardHeader className={'p-0'}>
                <CardTitle className={'flex flex-wrap text-[13px] xl:text-[15px]'}>{/**/}</CardTitle>
            </CardHeader>
            <CardContent/>
            <CardFooter className={'p-0 flex items-start flex-col space-y-1 wrap-break-word'}>
                <div className={'flex flex-wrap text-slate-200 text-[9px] md:text-[15px]'}>{/* year franchise */}</div>
                <div className={'flex flex-wrap items-center text-slate-200 text-[10px] xl:text-[15px]'}>
                    {/* season number franchise - 2 season or 1 season */}
                    {}<DotIcon className={'h-[15px] w-[15px]'}/> {}
                </div>
                <div className={'flex flex-wrap items-center text-slate-200 text-[10px] xl:text-[15px]'}>
                    {/* length time franchise  1 hour 6 minutes */}
                </div>
            </CardFooter>
        </>
    );
};

export const ShortCard = ({data}: TCardVariant) => {
    return (
        <>
            <CardHeader className={'p-0'}>
                <CardTitle className={'flex flex-wrap text-[13px] xl:text-[15px]'}>
                    {/* name */}
                </CardTitle>
                <CardDescription>{/* episode */}</CardDescription>
            </CardHeader>
            <CardContent/>
            <CardFooter className={'p-0 flex items-start flex-col space-y-3 wrap-break-word'}>
                <div className={'flex flex-col items-start space-y-1'}>
                    <ListWithDots items={[2024, 'Leto', 'TV', 'Status']}/>
                    <ListWithDots items={['Drama', 'Seanon', 'Sport']}/>
                </div>
                <div className={'flex items-center w-full justify-between'}>
                    <Button
                        className={'bg-white/30 text-white flex items-center text-sm cursor-pointer h-[30px] pointer-events-auto'}>
                        <PlayIcon/>
                        Watch
                    </Button>
                    <Button className={'bg-muted/80 text-gray-400 h-[25px] w-full max-w-max'}>
                        {/* time length 23:23/1:13:14/00:11 */}
                    </Button>
                </div>
            </CardFooter>
        </>
    );
};