import { createHashRouter } from "react-router-dom"
import Layout from "./layouts/Layout"
import IndexPage from "./views/IndexPage"
import Formacion from "./views/Formacion"
import Desarrollo from "./views/Desarrollo"
// import { action as actionContacto } from './components/Contacto'

// Simple error boundary
function ErrorBoundary() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">¡Oops! Algo salió mal</h1>
        <p className="text-gray-600 mb-8">La página que buscas no pudo ser cargada.</p>
        <a 
          href="#/" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Volver al Inicio
        </a>
      </div>
    </div>
  );
}

export const routerApp = createHashRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorBoundary />,

        children: [
            {
                index: true,
                element: <IndexPage />,
                // action: actionContacto
            },
            {
                path: 'formacion',
                element: <Formacion />
            },
            {
                path: 'desarrollo',
                element: <Desarrollo />
            }
        ]
    }
])

