# API Directory

Client-side API utilities and data fetching.

## Structure

```
api/
├── client.ts            # HTTP client setup
├── endpoints.ts         # API endpoint constants
└── queries/             # Data fetching queries
    ├── users.ts
    └── posts.ts
```

## Usage

```tsx
import { apiClient } from '@/api/client'
import { axiosClient } from '@/api/axios'
import { fetchUsers } from '@/api/queries/users'
```
