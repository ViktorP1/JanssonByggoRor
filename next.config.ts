/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production"
const repoName = "JanssonByggoRor"

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",

  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
