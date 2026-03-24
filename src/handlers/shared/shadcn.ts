import { confirm } from '@inquirer/prompts'
import kleur from 'kleur'
import { getPackageManager } from '../../helpers/pm'
import { execShellCommand } from '../../utils/shell'

export async function installShadcnUI(cwd: string) {
  console.log('')

  const shouldInstallShadcn = await confirm({
    message: 'Do you want to install shadcn/ui with all components?',
    default: true,
  })

  if (!shouldInstallShadcn) return

  try {
    const pm = await getPackageManager()

    console.log(kleur.blue('Installing dependencies...'))
    await execShellCommand(cwd, ...pm.install)

    console.log(kleur.blue('Installing shadcn/ui...'))
    await execShellCommand(
      cwd,
      ...pm.execute,
      'shadcn@latest',
      'init',
      ...(pm.needDoubleDash ? ['--'] : []),
      '--force'
    )

    console.log(kleur.blue('Adding all shadcn/ui components...'))
    await execShellCommand(
      cwd,
      ...pm.execute,
      'shadcn@latest',
      'add',
      ...(pm.needDoubleDash ? ['--'] : []),
      '--all'
    )

    console.log(
      kleur.green('✅ shadcn/ui installed successfully with all components!')
    )
  } catch (error) {
    console.warn(
      kleur.yellow(
        '⚠️  Failed to install shadcn/ui. You can install it manually later.'
      )
    )
    if (error instanceof Error) {
      console.warn(kleur.dim(error.message))
    }
  }
}
