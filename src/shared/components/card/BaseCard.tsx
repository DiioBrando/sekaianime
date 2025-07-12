'use client';
import Link from 'next/link';
import Image from 'next/image';
import {Card} from '@/shared/components/ui/card';
import {cn} from '@/shared/lib/utils';
import {ReactNode} from "react";

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
        image: 'w-full h-full',
        card: 'min-w-[9rem] max-w-[100%] aspect-[3/4]',
    },
    genres: {
        overlay: 'bg-[linear-gradient(rgba(16,16,16,0)_0%,rgba(16,16,16,0.2)_70%,rgb(0,0,0)_100%)]',
        content: 'inset-0 flex-col justify-between',
        image: 'w-full h-full',
        card: 'min-w-[9rem] max-w-[100%] aspect-[3/4]',
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
    src: string;
    variant?: VariantType;
    href: string;
    children: ReactNode;
};

export const BaseCard = ({src, href, variant = 'default', children}: TAnimeCard) => {
    const style = variantsCard[variant] || variantsCard.default;

    return (
        <Card className={cn('group relative overflow-hidden border-0', style.card)}>
            <Link href={href} className={'absolute inset-0 z-25 pointer-events-auto'}/>
            <div className={cn('absolute inset-0 z-10 pointer-events-none', style.overlay)}/>
            <Image
                className={cn('absolute inset-0 z-0 object-cover', style.image)}
                src={src ? `https://anilibria.tv${src}` : '/images/default.jpg'}
                alt={'Anime poster'}
                loading={'lazy'}
                width={300}
                height={300}
            />
            <div className={cn('absolute z-20 flex px-3 py-5 pointer-events-auto h-full w-full', style.content)}>
                {children}
            </div>
        </Card>
    );
};