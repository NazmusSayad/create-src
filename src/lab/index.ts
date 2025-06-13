import fs from 'fs'
import path from 'path'
import { getTemplate } from '../download/get-template'

getTemplate('next')
  .then((files) => {
    console.log(files)

    files.forEach((file) => {
      const filePath = `./__templates__/${file.name}`

      const folderName = path.dirname(filePath)
      if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName, { recursive: true })
      }

      file.blob
        .arrayBuffer()
        .then((arrayBuffer) => {
          fs.writeFileSync(filePath, Buffer.from(arrayBuffer))
        })
        .catch((error) => {
          console.error(`Error writing file ${filePath}:`, error)
        })
    })
  })
  .catch((error) => {
    console.error('Error fetching template:', error)
  })
