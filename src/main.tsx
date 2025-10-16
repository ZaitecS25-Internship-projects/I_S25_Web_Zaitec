import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { routerApp } from './router'


//! Cargar el routerApp desde el archivo router
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routerApp}/>
  </StrictMode>,
)