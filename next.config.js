/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true, 
    domains: ["localhost","letsdq.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  assetPrefix: 'https://letsdq.com' || '', 
  trailingSlash: true,
};

module.exports = nextConfig;
