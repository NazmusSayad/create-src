import path from 'path'
import * as dts from 'unplugin-dts/vite'
import { defineConfig } from 'vite'
import packageJSON from './package.json'

const externalsDeps = new Set([
  ...Object.keys(packageJSON.dependencies || {}),
  ...Object.keys(packageJSON.devDependencies || {}),
  ...Object.keys(packageJSON.peerDependencies || {}),
])

export default defineConfig({
  plugins: [dts.default({ tsconfigPath: './tsconfig.build.json' })],

  build: {
    outDir: './build',

    lib: {
      name: 'index',
      entry: path.join(__dirname, './src/index.ts'),

      formats: ['cjs', 'es', 'iife', 'umd', 'system'],

      cssFileName: 'index',
      fileName(format, entryName) {
        return `${entryName}.${format}.js`
      },
    },

    rollupOptions: {
      external(id) {
        for (const pkg of externalsDeps) {
          if (id === pkg || id.startsWith(`${pkg}/`)) {
            return true
          }
        }

        return false
      },
    },
  },
})
