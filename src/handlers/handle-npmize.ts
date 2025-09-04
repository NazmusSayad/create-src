import { finalizeFolder } from '../helpers/finalize-folder'
import { writeTemplate } from '../helpers/write-template'

export async function handleNpmize(cwd: string) {
  await writeTemplate('npm', cwd)
  await finalizeFolder(cwd)
}
