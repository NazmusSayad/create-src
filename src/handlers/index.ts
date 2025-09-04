import { handleNext } from './handle-next'
import { handleNpmTsc } from './handle-npm-tsc'
import { handleNpmVite } from './handle-npm-vite'
import { handleNpmize } from './handle-npmize'

export const handlers = {
  next: handleNext,

  vite: async (cwd: string) => {
    console.log('cwd:', cwd)
    console.log('Vite is not supported yet.')
  },

  npm: handleNpmize,
  'npm-tsc': handleNpmTsc,
  'npm-vite': handleNpmVite,
} as const
