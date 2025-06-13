import { downloadRepo } from './download-repo'

type TemplateResult = {
  path: string
  blob: Blob
}

export async function getTemplate(template: string) {
  const { zip, name } = await downloadRepo(
    'NazmusSayad',
    'create-src',
    'main',
    downloadProgress,
    () => process.stdout.write('\n')
  )

  const result: TemplateResult[] = []
  const templatePath = `${name}/templates/${template}/`

  const files = Object.keys(zip.files).filter(
    (fileName) => fileName.startsWith(templatePath) && !fileName.endsWith('/')
  )

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

function downloadProgress(loaded: number, total: number | null) {
  function formatBytes(bytes: number) {
    if (bytes < 1024) return `${bytes}B`
    if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)}KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)}MB`
  }

  if (total) {
    const percentage = Math.round((loaded / total) * 100)
    const barWidth = 30
    const filledWidth = Math.round((percentage / 100) * barWidth)
    const progressBar =
      '▓'.repeat(filledWidth) + '░'.repeat(barWidth - filledWidth)

    process.stdout.write(
      `\r⬇️  Downloading [${progressBar}] ${percentage}% ${formatBytes(loaded)}/${formatBytes(total)}`
    )
  } else {
    const spinner = ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷'][
      Math.floor(Date.now() / 100) % 8
    ]
    process.stdout.write(`\r${spinner} Downloading... ${formatBytes(loaded)}`)
  }
}
