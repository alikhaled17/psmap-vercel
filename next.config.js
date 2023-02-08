/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ["en-US", "ar-SA"],
    defaultLocale: "en-US",
  },
};

module.exports = nextConfig;
