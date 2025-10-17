import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { routerApp } from './router'
import Footer from "./components/Footer"

<<<<<<< HEAD
=======


//! Cargar el routerApp desde el archivo router

>>>>>>> temp-save
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routerApp}/>
      <Footer />
  </StrictMode>,
)