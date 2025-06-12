# Lib Directory

Core utilities and third-party integrations.

## Structure

```
lib/
├── utils.ts             # Common utilities (cn, etc.)
├── auth.ts              # Auth configuration
├── database.ts          # Database setup
├── validations.ts       # Zod schemas
```

## Usage

```tsx
import { cn } from '@/lib/utils'
import { auth } from '@/lib/auth'
import { userSchema } from '@/lib/validations'

const className = cn('base-class', isActive && 'active')
```
