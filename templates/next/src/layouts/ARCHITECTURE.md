# Layouts Directory

Page layout components for consistent structure.

## Structure

```
layouts/
├── main-layout.tsx      # Default app layout
├── auth-layout.tsx      # Authentication pages
├── dashboard-layout.tsx # Dashboard layout
└── minimal-layout.tsx   # Landing pages
```

## Usage

```tsx
import { MainLayout } from '@/layouts/main-layout'
import { AuthLayout } from '@/layouts/auth-layout'

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Welcome</h1>
    </MainLayout>
  )
}
```
