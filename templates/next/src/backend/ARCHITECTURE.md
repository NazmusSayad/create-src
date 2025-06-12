# Backend Directory

Server-side utilities and database logic.

## Structure

```
backend/
├── database/            # Database connection
├── auth/                # Authentication logic
├── middleware/          # Server middleware
├── services/            # Business logic
└── validators/          # Input validation
    └── user.ts
```

## Usage

```tsx
import { createUser } from '@/backend/services/user'
import { validateUser } from '@/backend/validators/user'
import { authMiddleware } from '@/backend/middleware/auth'
```
