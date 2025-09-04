import { finalizeFolder } from '../helpers/finalize-folder'
import { writeTemplate } from '../helpers/write-template'

export async function handleNpmVite(cwd: string) {
  await writeTemplate('npm-vite', cwd)
  await finalizeFolder(cwd)
}
