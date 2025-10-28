import { useState } from "react"
import { Outlet, useRouteError } from "react-router-dom"
import Header from "../components/Header"
import type { UserDataType } from "../types"
import Footer from "../components/Footer"

export const initialForm = {
  nombre: '',
  apellido: '',
  segunapellido: '',
  email: '',
  telefono: '',
  fecha: '',
  comentario: '',
}

// Error boundary for layout
export function LayoutErrorBoundary() {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">¡Ups! Algo salió mal</h1>
          <p className="text-gray-600 mb-8">{error.message || "Ha ocurrido un error inesperado"}</p>
          <button 
            onClick={() => window.location.href = '/I_S25_Web_Zaitec/'}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Volver al Inicio
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function Layout() {
  const [formState, setFormState] = useState<UserDataType>(initialForm);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-1 relative z-10">
        <Outlet context={{ formState, setFormState }} />
      </main>
      <Footer />
    </div>
  );
}