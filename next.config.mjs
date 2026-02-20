/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Improve compilation stability
  experimental: {
    turbo: {
      resolveAlias: {
        // Ensure proper module resolution
      },
    },
  },
}

export default nextConfig
