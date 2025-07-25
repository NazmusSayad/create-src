import type { NextConfig } from 'next'

export default {
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
} satisfies NextConfig
