/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: "/out",
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
