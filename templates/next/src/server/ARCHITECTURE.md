# Server Directory

Server-side utilities and database logic.

## Structure

```
server/
├── database/            # Database connection
├── auth/                # Authentication logic
├── middleware/          # Server middleware
├── services/            # Business logic
└── validators/          # Input validation
    └── user.ts
```

## Usage

```tsx
import { createUser } from '@/server/services/user'
import { validateUser } from '@/server/validators/user'
import { authMiddleware } from '@/server/middleware/auth'
```
