/** @type {import('next').NextConfig} */
const nextConfig = {
  remotePatterns: [{ hostname: "image.tmdb.org" }],
  images: {
    remotePatterns: [{ hostname: "image.tmdb.org" }],
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
