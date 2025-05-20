/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 needed for static export
  distDir: 'out',   // 👈 this is where `next export` puts files
  basePath: '/book-web', // 👈 IMPORTANT for GitHub Pages
  trailingSlash: true,   // 👈 ensures correct routing
};

export default nextConfig;
