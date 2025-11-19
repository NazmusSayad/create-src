import kleur from 'kleur'
import { NoArg } from 'noarg'
import path from 'path'
import { handlers } from './handlers'
import { setupFolder } from './helpers/setup-folder'

const BASE_DIR = process.cwd()
const DEFAULT_PROJECT_NAME = 'my-project'

export const app = NoArg.create('create-src', {
  arguments: [
    {
      name: 'Template',
      description: 'The template to use for creating the source code.',
      type: NoArg.string(
        ...(Object.keys(handlers) as Array<keyof typeof handlers>)
      ).ask('Pick to use:'),
    },

    {
      name: 'Project Name',
      description: 'The name of the project.',
      type: NoArg.string()
        .default(DEFAULT_PROJECT_NAME)
        .ask('Enter the project name:'),
    },
  ],
})

app.on(async ([templateName, projectName]) => {
  const folder = path.resolve(BASE_DIR, projectName || DEFAULT_PROJECT_NAME)

  console.log('')
  console.log(
    kleur.bold(
      kleur.yellow(
        `Creating a ${kleur.red(templateName)} project in folder: ${kleur.blue(folder)}`
      )
    )
  )

  try {
    await setupFolder(folder)
    console.log('')

    const handler = handlers[templateName as keyof typeof handlers]
    if (!handler) {
      throw new Error(`Template "${templateName}" is not supported.`)
    }

    console.log(kleur.bold(kleur.yellow(`Using ${handler.name} template...`)))
    await handler.handler(folder)
  } catch {
    console.log('')
    console.error(kleur.red('An unexpected error occurred'))
  }
})
