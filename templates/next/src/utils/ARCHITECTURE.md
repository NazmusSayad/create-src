# Utils Directory

Pure utility functions for common operations.

## Structure

```
utils/
├── format.ts            # Formatting utilities
├── array.ts             # Array operations
├── object.ts            # Object operations
├── string.ts            # String utilities
└── math.ts              # Math operations
```

## Usage

```tsx
import { formatCurrency } from '@/utils/format'
import { groupBy } from '@/utils/array'
import { capitalize } from '@/utils/string'

const price = formatCurrency(29.99)
const grouped = groupBy(users, 'role')
const title = capitalize('hello world')
```
