import { defineConfig, type Format } from 'tsdown'
import packageJSON from './package.json' with { type: 'json' }

export default defineConfig({
  entry: {
    index: './src/index.ts',
  },

  outDir: './dist',
  tsconfig: './tsconfig.json',
  format: ['cjs', 'esm'] satisfies Format[],

  dts: true,
  sourcemap: true,

  target: 'ES6',
  minify: 'dce-only',

  deps: {
    neverBundle: [
      /node:/gim,
      ...getExternal((packageJSON as any).dependencies),
      ...getExternal((packageJSON as any).peerDependencies),
    ],
  },
})

function getExternal(dependencies: unknown) {
  return Object.keys((dependencies ?? {}) as Record<string, string>).map(
    (dep) => new RegExp(`(^${dep}$)|(^${dep}/)`)
  )
}
