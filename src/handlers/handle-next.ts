import fs from 'fs'
import path from 'path'
import { getTemplate } from '../download/get-template'

export async function handleNext(cwd: string) {
  console.log(`Handling 'next' for path: ${cwd}`)

  const files = await getTemplate('next')
  if (!files.length) {
    throw new Error('Failed to download Next.js template files.')
  }

  console.log(`Found ${files.length} files to write.`)
  for (const file of files) {
    const filePath = path.join(cwd, file.path)
    const dir = path.dirname(filePath)

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    const buffer = Buffer.from(await file.blob.arrayBuffer())
    fs.writeFileSync(filePath, buffer)
  }
}
