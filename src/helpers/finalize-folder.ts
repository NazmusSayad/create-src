import { select } from '@inquirer/prompts'
import kleur from 'kleur'
import { execShellCommand } from '../utils/shell'

export async function finalizeFolder(cwd: string) {
  console.log('')

  const packageManager = await select({
    message: 'Pick your favorite package manager?',
    choices: [
      {
        name: 'pnpm',
        value: 'pnpm',
        description:
          'pnpm is a fast, disk space efficient package manager for JavaScript.',
      },
      {
        name: 'npm',
        value: 'npm',
        description: 'npm is the default package manager for Node.js.',
      },
      {
        name: 'yarn',
        value: 'yarn',
        description:
          'yarn is a fast, reliable, and secure package manager for JavaScript.',
      },
      {
        name: 'bun',
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
