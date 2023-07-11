/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'pl', 'es', 'fr', 'zh', 'hi'],
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/login',
        permanent: false,
        destination: '/',
      }
    ]
  },
}

module.exports = nextConfig
