# Styles Directory

Global styles and theme definitions.

## Structure

```
styles/
├── index.css            # Main CSS imports
├── initial.css          # Base/reset styles
```

## Usage

```css
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@import './initial.css';
@import './components.css';
```
