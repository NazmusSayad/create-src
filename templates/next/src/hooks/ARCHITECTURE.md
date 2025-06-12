# Hooks Directory

Custom React hooks for reusable logic.

## Structure

```
hooks/
├── use-auth.ts          # Authentication hooks
├── use-local-storage.ts # Local storage utility
├── use-debounce.ts      # Debouncing hook
└── use-api.ts           # API data fetching
```

## Usage

```tsx
import { useAuth } from '@/hooks/use-auth'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { useDebounce } from '@/hooks/use-debounce'

function MyComponent() {
  const { user, login } = useAuth()
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  const debouncedValue = useDebounce(searchTerm, 300)
}
```
