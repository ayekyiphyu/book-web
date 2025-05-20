/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export
  basePath: '/book-web',
  assetPrefix: '/book-web/',
  trailingSlash: true, // recommended for GitHub Pages
};

export default nextConfig;
