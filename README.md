# create-src

A simple CLI tool to create a project with an advanced, scalable structure. Supports Next.js templates with feature-based architecture and shadcn/ui integration.

## Features

- Interactive CLI for project scaffolding
- Next.js template with feature-based structure
- Optional shadcn/ui installation
- Automatic git initialization and dependency installation
- Designed for extensibility (Vite support coming soon)

## Installation

```bash
npm install -g create-src
```

Or use directly with npx:

```bash
npx create-src
```

## Usage

Run the CLI and follow the prompts:

```bash
create-src
```

You will be prompted for:

- **Template**: The project template to use (currently: `next`)
- **Project Name**: The name of your new project (folder will be created)

Example:

```bash
create-src
```

```
? Please enter the template name: next
? Please enter the project name: my-app
? Are you sure you want to continue with the folder setup? (Y/n)
? The folder is not empty. Do you want to overwrite existing files? (y/N)
? Do you want to install shadcn/ui with all components? (Y/n)
```

## Templates

### Next.js (`next`)

- Feature-based directory structure (`src/features/`)
- Pre-configured with TypeScript, ESLint, Prettier, Tailwind CSS
- Optional shadcn/ui integration (all components)

### Vite (`vite`)

- _Coming soon_: Not yet supported

## What Happens

- Downloads the selected template from the repository
- Sets up the project folder (with overwrite confirmation)
- Initializes git and installs dependencies
- Optionally installs shadcn/ui (for Next.js)

## Example Project Structure

```
my-app/
├── app/
├── src/
│   ├── features/
│   ├── components/
│   ├── lib/
│   ├── hooks/
│   ├── types/
│   ├── styles/
│   ├── layouts/
│   └── utils/
└── public/
```

See [`src/ARCHITECTURE.md`](./templates/next/src/ARCHITECTURE.md) for more details on the feature-based structure.

## Requirements

- Node.js 18+
- Internet connection (downloads templates from GitHub)

## Contributing

Contributions are welcome! Please open issues or pull requests on [GitHub](https://github.com/NazmusSayad/create-src).

## License

MIT
