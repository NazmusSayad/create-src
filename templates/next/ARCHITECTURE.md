# Project Architecture

Next.js template with feature-based architecture.

## Structure

```
├── app/                 # Next.js App Router (pages, layouts)
├── features/            # Feature modules (business logic)
├── src/                 # Shared utilities and components
└── public/              # Static assets
```

## Import Pattern

```tsx
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Home } from '@features/home'
```
