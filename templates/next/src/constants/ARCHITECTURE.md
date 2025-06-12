# Constants Directory

Application-wide constants and configuration.

## Structure

```
constants/
├── index.ts             # Main exports
├── api.ts               # API constants
├── routes.ts            # Route paths
└── config.ts            # App configuration
```

## Usage

```tsx
import { API_BASE_URL, ROUTES } from '@/constants'
import { APP_CONFIG } from '@/constants/config'

const userUrl = `${API_BASE_URL}${ROUTES.USERS}`
```
