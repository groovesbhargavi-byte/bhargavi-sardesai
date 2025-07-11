/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpackDevMiddleware: {
    watchOptions: {
      poll: 1000,
      aggregateTimeout: 300,
    },
  },
};

module.exports = nextConfig;