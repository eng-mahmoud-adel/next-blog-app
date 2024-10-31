import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [{ hostname: "media2.dev.to" }, { hostname: "rankenjordan.org" }],
    },

    async redirects() {
        return [
            {
                source: "/",
                destination: "/blogs",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
