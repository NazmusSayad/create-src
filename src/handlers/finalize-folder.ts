import { execa } from 'execa'

export async function finalizeFolder(cwd: string) {
  await execa('git', ['init'], { cwd, stdio: 'inherit' })
  await execa('npm', ['install'], { cwd, stdio: 'inherit' })
}
