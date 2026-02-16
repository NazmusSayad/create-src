import { select } from '@inquirer/prompts'

export type PackageManager = {
  name: string
  add: string[]
  install: string[]
  execute: string[]
  needDoubleDash?: boolean
}

const PACKAGE_MANAGERS: PackageManager[] = [
  {
    name: 'npm',
    add: ['npm', 'install'],
    install: ['npm', 'install'],
    execute: ['npm', 'exec'],
    needDoubleDash: true,
  },
  {
    name: 'pnpm',
    add: ['pnpm', 'add'],
    install: ['pnpm', 'install'],
    execute: ['pnpm', 'dlx'],
  },
  {
    name: 'antfu/ni',
    add: ['ni'],
    install: ['ni'],
    execute: ['nlx'],
  },
  {
    name: 'bun',
    add: ['bun', 'add'],
    install: ['bun', 'install'],
    execute: ['bun', 'x'],
  },
  {
    name: 'yarn',
    add: ['yarn', 'add'],
    install: ['yarn', 'install'],
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
