import { NoArg } from 'noarg'

export const app = NoArg.create('create-src', {
  arguments: [
    {
      name: 'template',
      description: 'The template to use for creating the source code.',
      type: NoArg.string('next', 'vite').ask('Please enter the template name:'),
    },
  ],
})

app.on(([template]) => {
  console.log(`Selected template: ${template}`)
})
