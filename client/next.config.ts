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
                permanent: true,
            },
        ];
    },

    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    pageExtensions: ['page.tsx', 'page.ts'],
    transpilePackages: ["@gravity-ui/uikit"]
    // webpack(config) {
    //     // Убедимся, что CSS обрабатывается
    //     config.module.rules.push({
    //         test: /\.css$/,
    //         use: ['style-loader', 'css-loader'],
    //         include: /@gravity-ui/,
    //     });
    //     return config;
    // },
};

export default nextConfig;
