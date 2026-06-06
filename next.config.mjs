/** @type {import('next').NextConfig} */
const nextConfig = {
  // Clean URL for the standalone marketing page (static file in /public).
  async rewrites() {
    return [{ source: "/landing", destination: "/landing.html" }];
  },
};

export default nextConfig;
