# Assets Directory

Static assets imported in components.

## Structure

```
assets/
├── images/              # Component images
├── icons/               # SVG icon components
├── fonts/               # Custom fonts
└── data/                # Static JSON data
    └── mock-data.json
```

## Usage

```tsx
import logo from '@/assets/images/logo.png'
import { ChevronIcon } from '@/assets/icons/chevron'
import mockData from '@/assets/data/mock-data.json'
```
