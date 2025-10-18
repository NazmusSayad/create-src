import { handleNext } from './handle-next'
import { handleNpm } from './handle-npm'
import { handleNpmTsc } from './handle-npm-tsc'
import { handleNpmVite } from './handle-npm-vite'
import { handleNpmize } from './handle-npmize'

export const handlers = {
  next: handleNext,

  vite: async (cwd: string) => {
    console.log('cwd:', cwd)
    console.log('Vite is not supported yet.')
  },

  npm: handleNpm,
  npmize: handleNpmize,
  'npm-tsc': handleNpmTsc,
  'npm-vite': handleNpmVite,
} as const
