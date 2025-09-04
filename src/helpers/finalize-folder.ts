import { execShellCommand } from '../utils/shell'

export async function finalizeFolder(cwd: string) {
  await execShellCommand(cwd, 'git', 'init')
  await execShellCommand(cwd, 'npm', 'install')
  await execShellCommand(cwd, 'npx', 'eslint', '--fix', '.')
}
