/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
}

module.exports = nextConfig
