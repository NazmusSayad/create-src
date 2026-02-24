# Folder Architecture

This project uses a **feature-based architecture**.
We organize code by business features, not just file types.

```text
├── src/
│   ├── app/           # Next.js App Router (pages & layouts)
│   ├── features/      # Self-contained business modules
│   │   └── home/      # Example feature folder
│   │       ├── index.ts        # ONLY export what's needed
│   │       ├── component.tsx   # UI for this feature
│   │       ├── hooks/          # Hooks just for this feature
│   │       └── utils/          # Utils just for this feature
│   ├── components/    # Reusable, global UI (buttons, inputs)
│   ├── lib/           # Global setup (Tailwind cn, etc.)
│   ├── hooks/         # Global React hooks
│   ├── utils/         # Global helper functions
│   ├── types/         # Global TS types
│   ├── contexts/      # Global React Context
│   ├── styles/        # Global CSS
│   ├── constants/     # Global static values
│   └── api/           # Global API fetchers / server actions
└── public/            # Static files (images, fonts)
```

## The Rules

- **Feature Isolation:** 
  A feature cannot import from another feature. 
  Shared logic goes in `src/lib` or `src/components`.

- **Public API:** 
  Keep feature files private. 
  Only export what the app needs via `index.ts`.

- **Absolute Imports:** 
  Use `@/` for all imports. 
  No `../../../` messy paths.

- **Thin Pages:** 
  `src/app` is only for routing. 
  Real code goes in `src/features`.

- **Colocation:** 
  Keep files close to where they are used. 
  If a button is only used in the `home` feature, put it there. 
  Don't clutter global `src/components`.