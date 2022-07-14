/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["codeby.vteximg.com.br", "cataas.com"],
  },
};

module.exports = nextConfig;
