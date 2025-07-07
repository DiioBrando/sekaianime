"use client";

import {ReactNode, useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {queryConfig} from "@/shared/config/tanstak/config";

export function ClientProvider({children}: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient({defaultOptions: queryConfig}));

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}