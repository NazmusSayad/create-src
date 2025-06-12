# Data Directory

Static data and data transformation utilities.

## Structure

```
data/
├── mock/                # Development mock data
│   ├── users.json
│   └── posts.json
├── schemas/             # Validation schemas
│   └── user-schema.ts
└── transformers/        # Data transformers
    └── api-transformers.ts
```

## Usage

```tsx
import { mockUsers } from '@/data/mock/users'
import { userSchema } from '@/data/schemas/user-schema'
import { transformUser } from '@/data/transformers/api-transformers'
```
