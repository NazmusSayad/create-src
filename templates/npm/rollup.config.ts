import typescript from '@rollup/plugin-typescript'
import { defineConfig, type ModuleFormat } from 'rollup'
import dts from 'rollup-plugin-dts'

const inputs = {
  index: 'src/index.ts',
} as const

export default defineConfig([
  {
    input: inputs,
    output: [
      createOutput({ format: 'esm', ext: 'mjs', sourcemap: true }),
      createOutput({ format: 'commonjs', ext: 'cjs', sourcemap: true }),
      createOutput({ format: 'amd', ext: 'amd.js', sourcemap: true }),
      createOutput({ format: 'system', ext: 'system.js', sourcemap: true }),
    ],

    external: [/node_modules/],
    plugins: [typescript({ tsconfig: './tsconfig.json' })],
  },

  {
    input: inputs,
    output: createOutput({ format: 'esm', ext: 'd.ts', sourcemap: false }),

    plugins: [dts({ tsconfig: './tsconfig.json' })],
  },
])

function createOutput(options: {
  format: ModuleFormat
  ext: string
  sourcemap: boolean
}) {
  return {
    dir: 'dist',
    indent: '  ',

    format: options.format,
    sourcemap: options.sourcemap,

    entryFileNames({ name }) {
      return `${name}.${options.ext}`
    },
  }
}
