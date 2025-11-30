// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { routerApp } from './router'
import { ThemeProvider } from './contexts/Themecontext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={routerApp}/>
    </ThemeProvider>
  </StrictMode>,
)