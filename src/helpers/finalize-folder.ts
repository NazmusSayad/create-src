import { select } from '@inquirer/prompts'
import kleur from 'kleur'
import { execShellCommand } from '../utils/shell'

export async function finalizeFolder(cwd: string) {
  console.log('')

  const packageManager = await select({
    message: 'Pick your favorite package manager?',
    choices: [
      {
        name: 'Pnpm',
        value: 'pnpm',
        description:
          'pnpm is a fast, disk space efficient package manager for JavaScript.',
      },
      {
        name: 'Npm',
        value: 'npm',
        description: 'npm is the default package manager for Node.js.',
      },
      {
        name: 'Yarn',
        value: 'yarn',
        description:
          'yarn is a fast, reliable, and secure package manager for JavaScript.',
      },
      {
        name: 'Bun',
        value: 'bun',
        description:
          'bun is a fast, modern, and secure package manager for JavaScript.',
      },
    ],
  })

  if (packageManager) {
    await execShellCommand(cwd, 'git', 'init')
    await execShellCommand(cwd, packageManager, 'install')
    await execShellCommand(cwd, 'npx', 'eslint', '--fix', '.')
  }

  console.log(kleur.green('Done!'))
}
