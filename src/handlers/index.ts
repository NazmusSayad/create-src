import { handleNext } from './handle-next'

export const handlers = {
  next: handleNext,

  async vite(cwd: string) {
    console.log('cwd:', cwd)
    console.log('Vite is not supported yet.')
  },
} as const
