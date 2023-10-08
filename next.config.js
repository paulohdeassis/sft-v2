/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      DIRECTUS_TOKEN: process.env.DIRECTUS_TOKEN,
    }
}

module.exports = nextConfig
