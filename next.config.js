/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  transpilePackages: ['mdb-react-ui-kit'],
};

module.exports = nextConfig
