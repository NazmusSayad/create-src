import fs from 'fs'
import kleur from 'kleur'
import path from 'path'
import { getTemplate } from '../download/get-template'
import { handlers } from '../handlers'

export async function writeTemplate(
  template: keyof typeof handlers,
  cwd: string
) {
  const files = await getTemplate(template)

  if (!files.length) {
    throw new Error(`Failed to download ${template} template files.`)
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

  console.log(kleur.green(`${template} template files written successfully!`))
}
