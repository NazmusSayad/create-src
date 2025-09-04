import { finalizeFolder } from '../helpers/finalize-folder'
import { writeTemplate } from '../helpers/write-template'

export async function handleNpmTsc(cwd: string) {
  await writeTemplate('npm-tsc', cwd)
  await finalizeFolder(cwd)
}
