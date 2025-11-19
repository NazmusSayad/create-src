import type { NextConfig } from 'next'

export default {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
} satisfies NextConfig
