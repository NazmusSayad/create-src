import { confirm } from '@inquirer/prompts'
import { execa } from 'execa'
import fs from 'fs'
import kleur from 'kleur'
import path from 'path'
import { getTemplate } from '../download/get-template'

export async function handleNext(cwd: string) {
  const files = await getTemplate('next')
  if (!files.length) {
    throw new Error('Failed to download Next.js template files.')
  }

  for (const file of files) {
    const filePath = path.join(cwd, file.path)
    const dir = path.dirname(filePath)

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    const buffer = Buffer.from(await file.blob.arrayBuffer())
    fs.writeFileSync(filePath, buffer)
  }

  console.log('')
  await installShadcnUI(cwd)
}

async function installShadcnUI(cwd: string) {
  const shouldInstallShadcn = await confirm({
    message: 'Do you want to install shadcn/ui with all components?',
    default: true,
  })

  if (!shouldInstallShadcn) return

  console.log(kleur.blue('Installing shadcn/ui...'))

  try {
    await execa('npx', ['shadcn@latest', 'init', '--force'], {
      cwd,
      stdio: 'inherit',
    })

    console.log(kleur.blue('Adding all shadcn/ui components...'))
    await execa('npx', ['shadcn@latest', 'add', '--all'], {
      cwd,
      stdio: 'inherit',
    })

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
