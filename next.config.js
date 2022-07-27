/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'gateway.ipfscdn.io'],
    loader: 'akamai',
    path: '',
  }
}

module.exports = nextConfig


