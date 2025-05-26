import type {NextConfig} from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "anilibria.tv",
            },
            {
                protocol: "https",
                hostname: "cache.libria.fun",
            },
        ],
    },
};

const withNextIntl = createNextIntlPlugin("./src/shared/lib/i18n/request.ts");
export default withNextIntl(nextConfig);
