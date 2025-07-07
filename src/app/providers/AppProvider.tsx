"use client";
import {ReactNode, useEffect} from "react";
import {ClientProvider} from "@/app/providers/query-client-provider";
import {Toaster} from "@/app/providers/toast-provider";
import {RadixTheme, NextThemes} from "@/app/providers/theme-provider";
import {useUser} from "@/shared/stores/user";
import {SidebarProvider} from "@/shared/components/ui/sidebar";

export function AppProvider({children}: { children: ReactNode }) {
    const {refreshUserToken} = useUser();

    useEffect(() => {
        if ((typeof window !== 'undefined') && localStorage.getItem('accessToken')) {
            refreshUserToken();
        }
    }, []);

    return (
        <ClientProvider>
            <NextThemes
                themes={['dark', 'light']}
                defaultTheme={'system'}
                attribute={'class'}
                enableSystem
                disableTransitionOnChange
            >
                <RadixTheme>
                    <SidebarProvider defaultOpen={false}>
                        {children}
                    </SidebarProvider>
                </RadixTheme>
                <Toaster/>
            </NextThemes>
        </ClientProvider>
    );
}