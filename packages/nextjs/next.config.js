// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: false,
  disable: process.env.NODE_ENV === "development",
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  eslint: {
    ignoreDuringBuilds: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
};

module.exports = withPWA({
  ...nextConfig,
});
