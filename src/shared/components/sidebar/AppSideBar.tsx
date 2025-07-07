'use client';

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel, SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem, SidebarSeparator
} from "@/shared/components/ui/sidebar";
import {cn} from "@/shared/lib/utils";
import Link from "next/link";
import {
    HomeIcon,
    CalendarIcon,
    LogIn,
    UserPlus,
    LogOut,
    Shuffle,
    PlayIcon,
    UserIcon,
    InfoIcon,
    Github, SettingsIcon,
} from "lucide-react";
import {useRandomTitle} from "@/shared/entities/aninlibria/hooks/useRandomTitle";
import {usePathname} from "next/navigation";
import * as React from "react";

export const AppSideBar = () => {
    const {data: randomTitle, refetch, isLoad} = useRandomTitle({});
    const pathname = usePathname();

    return (
        <Sidebar className={'fixed top-[80px] pb-[80px]'} side={'right'}>
            <SidebarContent className={'p-1 overflow-hidden overflow-y-scroll'}>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation anime</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem className={'grid gap-1.5'}>
                                <SidebarMenuButton className={cn(pathname === '/' && 'bg-accent')} asChild>
                                    <Link href={'/public'}>
                                        <HomeIcon/>
                                        <span>home</span>
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuButton className={cn(pathname === '/catalog' && 'bg-accent')} asChild>
                                    <Link href={'/catalog'}>
                                        <PlayIcon/>
                                        <span>releases</span>
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuButton className={cn(pathname === '/schedule' && 'bg-accent')} asChild>
                                    <Link href={'/schedule'}>
                                        <CalendarIcon/>
                                        <span>schedule</span>
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuButton className={cn(pathname === '/schedule' && 'bg-accent', isLoad && 'cursor-default pointer-events-none opacity-50')} asChild>
                                    <Link href={`/release/${randomTitle?.code}`} onClick={() => refetch()}>
                                        <Shuffle/>
                                        <span>random</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarSeparator/>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation Account</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem className={'grid gap-1.5'}>
                                <SidebarMenuButton asChild>
                                    <Link href={'/sign-in'}>
                                        <LogIn/>
                                        <span>sign-in</span>
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuButton asChild>
                                    <Link href={'/sign-up'}>
                                        <UserPlus/>
                                        <span>sign-up</span>
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuButton asChild>
                                    <Link href={'/profile'}>
                                        <UserIcon/>
                                        <span>profile</span>
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuButton className={'cursor-pointer'}>
                                    <LogOut/>
                                    <span>logout</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarSeparator/>
                <SidebarGroup>
                    <SidebarGroupLabel>More</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem className={'grid gap-1.5'}>
                                <SidebarMenuButton asChild>
                                    <Link href={'/about-us'}>
                                        <InfoIcon/>
                                        <span>about-us</span>
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuButton asChild>
                                    <Link href={'https://github.com/anilibria/docs/blob/master/api_v3.md#-titleupdates'}>
                                        <Github/>
                                        <span>api v3</span>
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuButton asChild>
                                    <Link href={'/settings'}>
                                        <SettingsIcon/>
                                        <span>settings</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}