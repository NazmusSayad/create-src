export async function execShellCommand(
  cwd: string,
  ...args: string[]
): Promise<void> {
  const [bin, ...binArgs] = args
  const command = [bin, ...binArgs].join(' ')
  const { exec } = await import('child_process')

  return new Promise((resolve, reject) => {
    exec(
      command,
      { cwd },
      (error: Error | null, stdout: string, stderr: string) => {
        if (error) {
          reject(error)
        } else {
          process.stdout.write(stdout)
          process.stderr.write(stderr)
          resolve()
        }
      }
    )
  })
}
