# create-src

A powerful CLI tool to create projects with advanced, scalable structures. Supports multiple templates including Next.js web applications and various npm package configurations.

## Features

- Interactive CLI for project scaffolding
- Multiple template options for different project types
- Feature-based architecture for web applications
- Comprehensive build configurations
- Automatic git initialization and dependency installation
- Modern tooling with TypeScript, Oxlint, and Oxfmt

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
create-src <template> <project-name>
```

You will be prompted for:

- **Template**: The project template to use
- **Project Name**: The name of your new project (folder will be created)

## Available Templates

### 🌐 `next` - Next.js Web Application

Full-stack web apps, React websites with:

- Next.js 15 + React 19 + TypeScript
- Feature-based architecture + shadcn/ui
- Tailwind CSS + SCSS support

✅ Production-ready, scalable, modern tooling

⚠️ Larger bundle, requires React knowledge

---

### 📦 `npm` - Basic NPM Package

Overall, good for small-medium size packages with:

- Advanced TypeScript based package
- Uses npmize behind the scenes

✅ Lightweight, quick setup, fast builds, CommonJS and ESM support

⚠️ Limited configuration, basic tooling

---

### 🔧 `npm-tsc` - TypeScript Compiler Package

Perfect for simple cli packages with:

- Pure TypeScript compiler (tsc)
- Watch mode + type checking

✅ Reliable builds, standard tooling

⚠️ Slower builds, no optimization, module support limited

---

### ⚡ `npm-vite` - Vite Bundled Package

Modern packages, multiple output formats. Perfect for web libraries with:

- Vite bundling + multiple formats (CJS/ESM/UMD/etc)
- Tree shaking + optimization

✅ Fast builds, modern bundling, excellent DX

⚠️ Complex config, larger output

---
