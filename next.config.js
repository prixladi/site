/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
  },
  experimental: {
    serverComponents: true,
    reactRoot: 'concurrent',
  },
  reactStrictMode: true,
  trailingSlash: true,
});
