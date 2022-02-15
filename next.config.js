/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
  },
};

module.exports = nextConfig;
