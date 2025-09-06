
import type {NextConfig} from 'next';
import withPWAInit from "@ducanh2912/next-pwa";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dibhlslwjfwsbrvqaxwu.supabase.co',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

const withPWA = withPWAInit({
  dest: "public",
  disable: isDev,
  // add more options here
});


export default withPWA(nextConfig);

    