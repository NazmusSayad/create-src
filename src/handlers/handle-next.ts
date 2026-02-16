import { confirm } from '@inquirer/prompts'
import kleur from 'kleur'
import { finalizeFolder } from '../helpers/finalize-folder'
import { getPackageManager } from '../helpers/pm'
import { writeTemplate } from '../helpers/write-template'
import { execShellCommand } from '../utils/shell'

export async function handleNext(cwd: string) {
  await writeTemplate('next', cwd)
  await installShadcnUI(cwd)
  await finalizeFolder(cwd)
}

async function installShadcnUI(cwd: string) {
  console.log('')

  const shouldInstallShadcn = await confirm({
    message: 'Do you want to install shadcn/ui with all components?',
    default: true,
  })

  if (!shouldInstallShadcn) return

  try {
    const pm = await getPackageManager()

    console.log(kleur.blue('Installing shadcn/ui...'))
    await execShellCommand(
      cwd,
      ...pm.execute,
      'shadcn@latest',
      'init',
      '--force'
    )

    console.log(kleur.blue('Adding all shadcn/ui components...'))
    await execShellCommand(cwd, ...pm.install, 'shadcn@latest', 'add', '-a')

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
