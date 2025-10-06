import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL("https://ik.imagekit.io/0xi06nwt9/**")]
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/rent',
                permanent: true, // 308 Permanent Redirect
            },
        ];
    },
};

export default nextConfig;
