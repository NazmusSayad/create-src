import '@/styles/index.css'

import { Home } from './features/home'
import { createRoot } from 'react-dom/client'

const root = document.getElementById('root')
if (!root) {
  throw new Error('Root element not found')
}

createRoot(root).render(
    <Home/>
)
 