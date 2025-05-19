"use client";
import {ReactNode, Suspense} from "react";
import {ClientProvider} from "@/app/providers/query-client-provider";
import {Toaster} from "@/app/providers/toast-provider";
import {ThemeProvider} from "@/app/providers/theme-provider";

export function AppProvider({children}: { children: ReactNode }) {
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