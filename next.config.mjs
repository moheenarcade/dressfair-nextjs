/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aimg.kwcdn.com",
      },
      {
        protocol: "https",
        hostname: "backend.dressfair.com",
      },
    ],
  },
};

export default nextConfig;
