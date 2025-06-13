import { downloadRepo } from './download-repo'

export async function getTemplate(template: string) {
  const { zip, name } = await downloadRepo('NazmusSayad', 'create-src', 'main', (loaded, total) => {
    // console.log(`Loading: ${loaded} / ${total} bytes`)
  })

  const templatePath = `${name}/templates/${template}/`

  const files = Object.keys(zip.files).filter((fileName) => {
    return fileName.startsWith(templatePath) && !fileName.endsWith('/')
  })

  const result: {
    name: string
    blob: Blob
  }[] = []

  if (files.length === 0) {
    throw new Error(`Template "${template}" not found in the repository.`)
  }

  for (const fileName of files) {
    const fileObj = zip.file(fileName)
    if (fileObj) {
      const blob = await fileObj.async('blob')
      result.push({
        name: fileName.replace(templatePath, ''),
        blob: blob,
      })
    }
  }

  return result
}
