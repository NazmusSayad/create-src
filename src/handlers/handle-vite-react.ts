import { finalizeFolder } from '../helpers/finalize-folder'
import { writeTemplate } from '../helpers/write-template'
import { installShadcnUI } from './shared/shadcn'

export async function handleViteReact(cwd: string) {
  await writeTemplate('vite-react', cwd)
  await installShadcnUI(cwd)
  await finalizeFolder(cwd)
}
