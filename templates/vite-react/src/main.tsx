import '@/styles/index.css'

import { createRoot } from 'react-dom/client'
import { Home } from './features/home'

const root = document.getElementById('root')
if (!root) {
  throw new Error('Root element not found')
}

createRoot(root).render(<Home />)
