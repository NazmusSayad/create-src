import { handleNext } from './handle-next'
import { handleNpmTSDown } from './handle-npm-tsdown'
import { handleNpmVite } from './handle-npm-vite'
import { handleViteReact } from './handle-vite-react'

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
    name: 'Vite (React)',
    handler: handleViteReact,
  },

  npm: {
    name: 'NPM TSDown',
    handler: handleNpmTSDown,
  },

  'npm-vite': {
    name: 'NPM Vite',
    handler: handleNpmVite,
  },
}
