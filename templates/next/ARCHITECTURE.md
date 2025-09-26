# Project Architecture

Next.js template with feature-based architecture.

## Structure

```
├── src/                 # Source code root
│   ├── app/             # Next.js App Router (pages, layouts)
│   ├── features/        # Feature modules (business logic)
│   ├── components/      # Reusable UI components
│   ├── lib/             # Shared utilities and config
│   ├── hooks/           # Shared React hooks
│   ├── types/           # TypeScript definitions
│   ├── styles/          # Global styles
│   └── utils/           # Pure utility functions
└── public/              # Static assets
```

## Import Pattern

```tsx
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Home } from '@/features/home'
```

## Features Directory

Feature modules are now located in `src/features/` and follow a feature-based organization for business logic and UI components.

Example structure:

```
src/features/
├── home/                # Home page feature
│   ├── index.ts         # Public exports
│   └── home.tsx         # Main component
```

Usage:

```tsx
import { Home } from '@/features/home'
```

For more details, see `src/features/ARCHITECTURE.md`.
