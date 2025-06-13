import { downloadRepo } from './download-repo'

type TemplateResult = {
  path: string
  blob: Blob
}

export async function getTemplate(template: string) {
  const { zip, name } = await downloadRepo('NazmusSayad', 'create-src', 'main', (loaded, total) => {
    // console.log(`Loading: ${loaded} / ${total} bytes`)
  })

  const templatePath = `${name}/templates/${template}/`

  const files = Object.keys(zip.files).filter((fileName) => {
    return fileName.startsWith(templatePath) && !fileName.endsWith('/')
  })

  const result: TemplateResult[] = []

  if (files.length === 0) {
    throw new Error(`Template "${template}" not found in the repository.`)
  }

  for (const fileName of files) {
    const fileObj = zip.file(fileName)

    if (fileObj) {
      result.push({
        path: fileName.slice(templatePath.length),
        blob: await fileObj.async('blob'),
      })
    }
  }

  return result
}
