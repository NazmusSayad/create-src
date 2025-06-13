/* eslint-disable check-file/folder-naming-convention */

import { downloadRepo } from '../download-repo'

downloadRepo('microsoft', 'TypeScript', (total, loaded) => {
  // console.log(`Loading: ${loaded} / ${total} bytes`)
})
  .then((zip) => {
    console.log('Repository downloaded and unzipped successfully')
    console.log(`Files in the repository: ${Object.keys(zip.files).length}`)
  })
  .catch((error) => {
    console.error('Error downloading or unzipping the repository:', error)
  })
