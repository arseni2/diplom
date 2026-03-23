import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '10000',
            pathname: '/uploads/**',
          },
          // Для продакшена:
          // {
          //   protocol: 'https',
          //   hostname: 'your-api-domain.com',
          //   pathname: '/uploads/**',
          // },
        ],
      },
    // async redirects() {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/rent',
    //             permanent: true,
    //         },
    //     ];
    // },

    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true
    },

    transpilePackages: ["@gravity-ui/uikit"]
};

export default nextConfig;
