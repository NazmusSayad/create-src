import { select } from '@inquirer/prompts'

export type PackageManager = {
  name: string
  install: string[]
  execute: string[]
}

const PACKAGE_MANAGERS: PackageManager[] = [
  {
    name: 'antfu/ni',
    install: ['ni'],
    execute: ['nlx'],
  },
  {
    name: 'pnpm',
    install: ['pnpm', 'add'],
    execute: ['pnpm', 'dlx'],
  },
  {
    name: 'npm',
    install: ['npm', 'install'],
    execute: ['npm', 'exec'],
  },
  {
    name: 'bun',
    install: ['bun', 'add'],
    execute: ['bun', 'x'],
  },
  {
    name: 'yarn',
    install: ['yarn', 'add'],
    execute: ['yarn', 'dlx'],
  },
]

let selectedPackageManager: PackageManager | null = null

export async function getPackageManager() {
  if (selectedPackageManager) return selectedPackageManager

  selectedPackageManager = await select<PackageManager>({
    message: 'Package manager executable',
    choices: PACKAGE_MANAGERS.map((pm) => ({
      name: pm.name,
      value: pm,
    })),
  })

  return selectedPackageManager
}
