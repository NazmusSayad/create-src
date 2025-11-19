import kleur from 'kleur'
import { execShellCommand } from '../utils/shell'

export async function finalizeFolder(cwd: string) {
  console.log('')

  await execShellCommand(cwd, 'git', 'init')
  await execShellCommand(cwd, 'npm', 'install')
  await execShellCommand(cwd, 'npx', 'eslint', '--fix', '.')

  console.log(kleur.green('Done!'))
}
