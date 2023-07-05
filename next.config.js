/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },
  env: {
    PROD_HOST: 'https://designo-svoznyuk18.vercel.app',
    DEV_HOST: 'http://127.0.0.1:3000'
  }
}

module.exports = nextConfig
