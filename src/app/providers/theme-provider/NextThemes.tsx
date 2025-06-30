"use client";

import {ThemeProvider as NextThemesProvider} from "next-themes"
import {ComponentProps} from "react";

export function NextThemes({children, ...props}: ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}