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
    PROD_HOST: 'https://vercel.com/svoznyuk18',
    DEV_HOST: 'http://127.0.0.1:3000'
  }
}

module.exports = nextConfig
