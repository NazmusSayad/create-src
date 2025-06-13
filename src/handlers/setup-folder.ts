import { confirm } from '@inquirer/prompts'
import fs from 'fs'
import kleur from 'kleur'
import path from 'path'

export async function setupFolder(cwd: string) {
  const shouldContinue = await confirm({
    message: 'Are you sure you want to continue with the folder setup?',
    default: true,
  })

  if (!shouldContinue) {
    throw new Error('Folder setup cancelled by the user.')
  }

  if (!fs.existsSync(cwd)) {
    console.log(kleur.dim(`${kleur.blue(cwd)} does not exist. Creating it...`))
    fs.mkdirSync(cwd, { recursive: true })
  }

  const existingFiles = fs.readdirSync(cwd)
  if (existingFiles.length > 0) {
    const shouldOverwrite = await confirm({
      message:
        'The folder is not empty. Do you want to overwrite existing files?',
      default: false,
    })

    if (!shouldOverwrite) {
      throw new Error('Folder setup cancelled due to non-empty folder.')
    }

    console.log(
      kleur.dim(
        `${kleur.blue(cwd)} is not empty. Removing existing ${
          existingFiles.length > 1 ? 'files' : 'file'
        }...`
      )
    )

    existingFiles.forEach((file) => {
      fs.rmSync(path.join(cwd, file), { recursive: true, force: true })
    })
  }
}
