"use client";
import {ReactNode, Suspense, useEffect} from "react";
import {ClientProvider} from "@/app/providers/query-client-provider";
import {Toaster} from "@/app/providers/toast-provider";
import {ThemeProvider} from "@/app/providers/theme-provider";
import {useUser} from "@/shared/stores/user";

export function AppProvider({children}: { children: ReactNode }) {
    const {refreshUserToken} = useUser();

    useEffect( () => {
        if((typeof window !== 'undefined') && localStorage.getItem('accessToken')) {
            refreshUserToken();
        }
    }, []);

    return (
        <Suspense fallback={<div>Loading...</div> as ReactNode}>
            <ClientProvider>
                <ThemeProvider
                    themes={['dark', 'light']}
                    defaultTheme={'system'}
                    attribute={'class'}
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <Toaster/>
                </ThemeProvider>
            </ClientProvider>
        </Suspense>
    );
}