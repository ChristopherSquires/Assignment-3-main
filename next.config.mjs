/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  /* config options here */
  reactCompiler: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com"
      }
    ]
  }
};

export default nextConfig;
