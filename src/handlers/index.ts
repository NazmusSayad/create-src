import { handleNext } from './handle-next'
import { handleNpm } from './handle-npm'
import { handleNpmTsc } from './handle-npm-tsc'
import { handleNpmVite } from './handle-npm-vite'
import { handleNpmize } from './handle-npmize'

type HandlerType = Record<
  string,
  {
    name: string
    handler: (cwd: string) => Promise<void>
  }
>

export const handlers: HandlerType = {
  next: {
    name: 'Next.js',
    handler: handleNext,
  },

  vite: {
    name: 'Vite',
    handler: async (cwd: string) => {
      console.log('cwd:', cwd)
      console.log('Vite is not supported yet.')
    },
  },

  npm: {
    name: 'npm',
    handler: handleNpm,
  },
  npmize: {
    name: 'npmize',
    handler: handleNpmize,
  },
  'npm-tsc': {
    name: 'npm-tsc',
    handler: handleNpmTsc,
  },
  'npm-vite': {
    name: 'npm-vite',
    handler: handleNpmVite,
  },
}
