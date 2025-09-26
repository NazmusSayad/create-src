# Features Directory

Feature-based organization for business logic and UI components, located in `src/features/`.

## Structure

```
src/features/
├── home/                # Home page feature
│   ├── index.ts         # Public exports
│   └── home.tsx         # Main component
```

## Usage

```tsx
import { Home } from '@/features/home'
```

## Feature Structure Guidelines

Each feature should follow this internal structure:

```
feature-name/
├── index.ts                  # Public API exports
├── feature-name.tsx          # Main feature component
├── components/               # Feature-specific components
├── hooks/                    # Feature-specific hooks
├── utils/                    # Feature-specific utilities
├── types.ts                  # Feature-specific TypeScript types
├── constants.ts              # Feature-specific constants
└── api/                      # Feature-specific API calls
```

## Creating a New Feature

1. **Create the feature directory:**

   ```bash
   mkdir src/features/my-feature
   ```

2. **Create the main component:**

   ```tsx
   // src/features/my-feature/my-feature.tsx
   export default function MyFeature() {
     return (
       <div>
         <h1>My Feature</h1>
       </div>
     )
   }
   ```

3. **Create the public API:**

   ```tsx
   // src/features/my-feature/index.ts
   export { default as MyFeature } from './my-feature'
   export * from './types'
   export * from './hooks'
   ```

4. **Add feature-specific code as needed**

## Best Practices

### 1. Feature Isolation

- Keep features as independent as possible
- Avoid direct imports between features
- Use shared utilities from `@/lib/` for common functionality

### 2. Public API Pattern

- Always export through `index.ts` files
- Hide internal implementation details
- Make features easy to consume

### 3. Naming Conventions

- Use kebab-case for directories: `user-profile/`
- Use PascalCase for components: `UserProfile.tsx`
- Use camelCase for hooks: `useUserProfile.ts`
- Use kebab-case for utility files: `user-helpers.ts`

### 4. Shared vs Feature-Specific

- **Feature-specific:** Code used only within one feature
- **Shared:** Code used across multiple features (goes in `src/`)

## Import Patterns

### Good - Feature exports through index

```tsx
import { UserProfile, useUserData } from '@/features/user-profile'
```

### Bad - Direct internal imports

```tsx
import UserProfile from '@/features/user-profile/user-profile'
import { useUserData } from '@/features/user-profile/hooks/use-user-data'
```

## Integration with App Router

Features integrate seamlessly with Next.js App Router:

```tsx
// app/dashboard/page.tsx
import { Dashboard } from '@/features/dashboard'

export default function DashboardPage() {
  return <Dashboard />
}
```

## Shared Resources

For code shared across features, use the `src/` directory:

- **`src/components/`** - Reusable UI components
- **`src/hooks/`** - Shared custom hooks
- **`src/lib/`** - Shared utilities and configurations
- **`src/contexts/`** - Global state and contexts
- **`src/utils/`** - General utility functions

## Migration Strategy

When moving from a traditional structure to feature-based:

1. **Identify features** in your current codebase
2. **Group related files** by business functionality
3. **Create feature directories** and move files
4. **Update imports** to use the new structure
5. **Create index.ts files** for clean public APIs

## Benefits

- **Better Organization:** Related code stays together
- **Easier Navigation:** Find everything for a feature in one place
- **Improved Maintainability:** Changes are isolated to specific features
- **Team Collaboration:** Different teams can own different features
- **Scalability:** Easy to add new features without affecting existing ones

## Example Feature Implementation

See the `home/` feature for a basic example of this structure in action.
