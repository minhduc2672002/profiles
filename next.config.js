/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/profiles' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/profiles/' : '',
};

module.exports = nextConfig; 