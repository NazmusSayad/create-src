# Components Directory

Reusable UI components shared across features.

## Structure

```
components/
├── ui/                  # Base components
│   ├── button.tsx
│   ├── input.tsx
│   └── card.tsx
└── layout/              # Layout components
    ├── header.tsx
    ├── wrapper.tsx
    └── root-layout.tsx
└── common/              # Common components
    ├── loading.tsx
    └── error-boundary.tsx
```

## Usage

```tsx
import { Button } from '@/components/ui/button'
import { Header } from '@/components/layout/header'
import { Loading } from '@/components/common/loading'
```
