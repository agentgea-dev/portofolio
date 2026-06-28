/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // three.js ships untranspiled ESM helpers; let Next transpile them
  transpilePackages: ["three"],
};

export default nextConfig;
