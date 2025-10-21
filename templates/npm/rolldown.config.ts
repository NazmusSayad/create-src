import { defineConfig, ModuleFormat, OutputOptions } from 'rolldown'
import { dts } from 'rolldown-plugin-dts'
import packageJSON from './package.json'

const inputs = {
  index: 'src/index.ts',
} as const

export default defineConfig([
  {
    input: inputs,
    platform: 'neutral',
    tsconfig: './tsconfig.json',

    optimization: {
      inlineConst: true,
    },

    external: [
      /node:/gim,
      /node_modules/gim,
      ...getExternal((packageJSON as any).dependencies),
      ...getExternal((packageJSON as any).devDependencies),
      ...getExternal((packageJSON as any).peerDependencies),
    ],

    output: [
      createOutput('mjs', 'esm', true),
      createOutput('cjs', 'commonjs', true),
    ],
  },

  {
    input: inputs,
    tsconfig: './tsconfig.json',
    output: [createOutput('ts', 'esm')],
    plugins: [dts({ emitDtsOnly: true, tsconfig: './tsconfig.json' })],
  },
])

function createOutput(
  ext: string,
  format: ModuleFormat,
  sourcemap?: boolean
): OutputOptions {
  const isBuildMode = process.env.ROLLDOWN_MODE === 'build'

  return {
    dir: 'dist',
    format: format,

    minify: isBuildMode ? 'dce-only' : false,
    sourcemap: isBuildMode ? false : (sourcemap ?? false),

    entryFileNames({ name }) {
      return `${name}.${ext}`
    },

    chunkFileNames({ name }) {
      return `${name}.${crypto.randomUUID()}.${ext}`
    },
  }
}

function getExternal(dependencies: unknown) {
  return Object.keys((dependencies ?? {}) as Record<string, string>).map(
    (dep) => new RegExp(`^${dep}`)
  )
}
