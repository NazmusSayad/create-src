import kleur from 'kleur'
import { execShellCommand } from '../utils/shell'
import { getPackageManager } from './pm'

export async function finalizeFolder(cwd: string) {
  console.log('')

  await execShellCommand(cwd, 'git', 'init')

  const pm = await getPackageManager()
  await execShellCommand(cwd, ...pm.install)
  await execShellCommand(
    cwd,
    ...pm.execute,
    'eslint',
    ...(pm.needDoubleDash ? ['--'] : []),
    '--fix',
    '.'
  )

  console.log(kleur.green('Done!'))
}
