import { finalizeFolder } from '../helpers/finalize-folder'
import { writeTemplate } from '../helpers/write-template'

export async function handleNpmTSDown(cwd: string) {
  await writeTemplate('npm-tsdown', cwd)
  await finalizeFolder(cwd)
}
