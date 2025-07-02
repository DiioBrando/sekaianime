'use client';

import {Button} from "@/shared/components/ui/button";
import Link from "next/link";
import {HomeIcon, SearchIcon, SettingsIcon, Shuffle, UserIcon} from "lucide-react";
import {useRandomTitle} from "@/shared/entities/aninlibria/hooks/useRandomTitle";
import {cn} from "@/shared/lib/utils";
import {usePathname} from "next/navigation";

export const Header = () => {
    const {data: randomTitle, refetch, isLoad} = useRandomTitle({});
    const pathname = usePathname();

    return (
        <header className={'sticky top-0 w-full h-[80px] bg-black/70 z-50 backdrop-blur-sm flex items-center'}>
            <nav className={'mx-auto flex justify-between w-full max-w-[1200px] px-2 sm:px-5'}>
                <div className={'flex gap-1.5'}>
                    <Button variant={'ghost'} className={cn('h-[35px] text-[15px]', pathname === '/' && 'bg-accent')} asChild>
                        <Link href={'/'}>
                            <HomeIcon/>
                        </Link>
                    </Button>
                    <Button variant={'ghost'} className={cn('h-[35px] text-[15px]', pathname === '/catalog' && 'bg-accent')} asChild>
                        <Link href={'/catalog'}>releases</Link>
                    </Button>
                    <Button variant={'ghost'} className={cn('h-[35px] text-[15px]', pathname === '/schedule' && 'bg-accent')} asChild>
                        <Link href={'/schedule'}>schedule</Link>
                    </Button>
                </div>
                <div className={'flex gap-1.5'}>
                    <Button variant={'ghost'} className={cn('h-[35px] text-[15px]', isLoad && 'cursor-default pointer-events-none opacity-50')} asChild>
                        <Link href={`/release/${randomTitle?.code}`} onClick={() => refetch()}>
                            <Shuffle/>
                        </Link>
                    </Button>
                    <Button variant={'ghost'} className={'h-[35px] text-[15px] cursor-pointer'}>
                        <SearchIcon/>
                    </Button>
                    <Button variant={'ghost'} className={cn('h-[35px] text-[15px]', pathname === '/settings' && 'bg-accent')} asChild>
                        <Link href={'/settings'}>
                            <SettingsIcon/>
                        </Link>
                    </Button>
                    <Button variant={'ghost'} className={cn('h-[35px] text-[15px]', pathname === '/profile' && 'bg-accent')} asChild>
                        <Link href={'/profile'}>
                            <UserIcon/>
                        </Link>
                    </Button>
                </div>
            </nav>
        </header>
    );
}