import { spawn } from 'cross-spawn'

export async function execShellCommand(
  cwd: string,
  ...args: string[]
): Promise<void> {
  const [bin, ...binArgs] = args

  await new Promise<void>((resolve, reject) => {
    const child = spawn(bin, binArgs, {
      shell: true,
      stdio: 'inherit',
      cwd,
    })

    child.on('close', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`Command failed with exit code ${code}`))
    })

    child.on('error', reject)
  })
}
