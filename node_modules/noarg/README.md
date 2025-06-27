## NoArg - CLI Argument Parser

### Introduction

`noarg` is a lightweight Node.js package designed to simplify command-line argument parsing for CLI applications. With `noarg`, you can effortlessly define and parse command-line arguments and options, making it easier to build robust and user-friendly command-line interfaces.

## Features

- Fully type safe.
- Suitable for both _commonjs_ and _esm_.
- Supports **nested** commands with individual configurations.
- Handles `required`, `optional`, and list arguments with ease.
- Provides robust **error handling** with descriptive messages.
- Works seamlessly with child programs, enabling modular CLI design.
- Configurable **default** values and **prompts** for missing arguments.
- Automatically generates `help` and `usage` documentation.
- Supports disabling and enabling CLI colors.

### Command Structure

```sh
app (program) <required arguments> <optional arguments> ...<list arguments> [options] [ignored arguments]
```

### Auto Help and Usages creation

<details>
  <summary>Click to see cli help</summary>

![image](https://github.com/user-attachments/assets/1c9048dc-6121-4beb-85c4-ce87b00de84b)

</details>

<details>
  <summary>Click to see cli usages docs</summary>

![image](https://github.com/user-attachments/assets/0491b11f-5f64-4b77-83c2-a49de9833170)

</details>

## Getting Started

#### Installation

To install `noarg` package, you can use npm:

```bash
npm install noarg
```

#### Importing the Package

You can import `noarg` into your Node.js application as follows:

```javascript
import NoArg, { t } from 'noarg'
```

#### Creating a Command

You can create a command with `noarg.create()` method. Each command can have its own set of options, arguments, and configurations.

```javascript
const app = NoArg.create(commandName, commandConfig).on(commandHandler)
```

- `commandName`: Name of the command.
- `commandConfig`: Configuration object for the command.
- `commandHandler`: Function to handle the command execution.

### Example

```javascript
import NoArg from 'noarg'

const app = NoArg.create('app', {
  description: 'This is a test program',
  flags: {
    config: NoArg.string().ask('Where is the config?'),
  },
  arguments: [
    { name: 'arg-1', type: NoArg.number() },
    { name: 'arg-2', type: NoArg.boolean() },
    { name: 'arg-3', type: NoArg.string() },
  ],
  optionalArguments: [
    { name: 'arg-4', type: NoArg.string() },
    { name: 'arg-5', type: NoArg.boolean() },
  ],
  listArgument: {
    name: 'args',
    type: NoArg.string(),
    minLength: 1,
    maxLength: 3,
  },
  trailingArguments: '--',
  config: {},
  system: {},
}).on(([arg1, arg2, arg3, optArg4, optArg5, listArg, trailingArgs], flags) => {
  console.log({ arg1, arg2, arg3, optArg4, optArg5, listArg, trailingArgs })
  console.log(flags)
})
```

### Example: Command Structure

```sh
node app.js arg-1 arg-2 arg-3 optional-arg-1 listArg-1 listArg-2 --config config.json
```

#### Types

- `NoArg.string()`: Defines an option of type string.
- `NoArg.number()`: Defines an option of type number.
- `NoArg.boolean()`: Defines an option of type boolean.
- `NoArg.array()`: Defines an option of type array. (Only available for options)
- `NoArg.tuple()`: Defines an option of type tuple. (Only available for options)

### Use common config

```ts
import NoArg from 'noarg'

const app = NoArg.create('app', {})

const listArguments = {
  name: 'list',
  type: NoArg.boolean(),
} as const

const config = NoArg.defineConfig({
  arguments: [{ name: 'arg1', type: NoArg.string() }],
  optionalArguments: [{ name: 'optArg1', type: NoArg.string() }],
  flags: { hobbies: NoArg.array(NoArg.string()) },
  listArguments,
})

app.create('dev', config)
app.create('build', config)
```

### Disable cli colors

```ts
import NoArg from 'noarg'

NoArg.colors.enable()
NoArg.colors.disable()

// By default it's enabled
```

### Tips

- Help option is automatically available.
- Another awesome feature is that it shows how to use this CLI and its structure, which can be seen using the `--help-usage` flag.

### Example

```sh
node app.js --help
node app.js --help-usage
```

### Conclusion

`noarg` simplifies the process of parsing command-line arguments for Node.js applications. With its intuitive API and powerful features, you can easily build CLI applications with robust argument handling.
