# Types Directory

TypeScript type definitions shared across the app.

## Structure

```
types/
├── index.ts             # Main type exports
├── api.ts               # API response types
├── auth.ts              # Authentication types
├── ui.ts                # UI component types
└── database.ts          # Database types
```

## Usage

```tsx
import type { User, ApiResponse } from '@/types'
import type { ButtonProps } from '@/types/ui'

interface UserCardProps {
  user: User
  onClick: () => void
}
```
