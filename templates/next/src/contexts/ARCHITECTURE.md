# Contexts Directory

React Context providers for global state.

## Structure

```
contexts/
├── auth-context.tsx     # Authentication state
├── theme-context.tsx    # Theme preferences
├── user-context.tsx     # User data
└── index.ts             # Context exports
```

## Usage

```tsx
import { AuthProvider, useAuth } from '@/contexts/auth-context'
import { ThemeProvider } from '@/contexts/theme-context'

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <MyApp />
      </ThemeProvider>
    </AuthProvider>
  )
}
```
