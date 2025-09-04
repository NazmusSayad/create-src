import kleur from 'kleur'
import { NoArg } from 'noarg'
import path from 'path'
import { handlers } from './handlers'
import { setupFolder } from './helpers/setup-folder'

const BASE_DIR = process.cwd()

export const app = NoArg.create('create-src', {
  arguments: [
    {
      name: 'Template',
      description: 'The template to use for creating the source code.',
      type: NoArg.string(
        ...(Object.keys(handlers) as Array<keyof typeof handlers>)
      ).ask('Please enter the template name:'),
    },

    {
      name: 'Project Name',
      description: 'The name of the project.',
      type: NoArg.string()
        .default(BASE_DIR)
        .ask('Please enter the project name:'),
    },
  ],
})

app.on(async ([templateName, projectName]) => {
  console.log('')

  const folder = path.resolve(BASE_DIR, projectName)

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

    await handler(folder)
    console.log(
      kleur.green(`Project created successfully in ${kleur.blue(folder)}!`)
    )
  } catch (err) {
    console.log('')

    if (err instanceof Error) {
      console.error(kleur.red(`Error: ${err.message}`))
    } else {
      console.error(kleur.red('An unexpected error occurred'))
    }
  }
})
