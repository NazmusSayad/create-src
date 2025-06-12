# Source Directory

Shared utilities, components, and configuration.

## Structure

```
src/
├── components/          # Reusable UI components
├── lib/                 # Core utilities & config
├── hooks/               # Shared React hooks
├── types/               # TypeScript definitions
├── styles/              # Global styles
├── layouts/             # Page layouts
└── utils/               # Pure utility functions
```

## Usage

```tsx
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useAuth } from '@/hooks/use-auth'
```
