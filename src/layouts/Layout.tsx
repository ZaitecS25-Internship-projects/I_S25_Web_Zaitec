// src/layouts/Layout.tsx
import { Outlet, useRouteError, Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Header from "../components/Header"
import Footer from "../components/Footer"

// Error boundary for layout
export function LayoutErrorBoundary() {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">¡Ups! Algo salió mal</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">{error.message || "Ha ocurrido un error inesperado"}</p>
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
  return (
    <div className="min-h-screen flex flex-col relative bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <ScrollToTop />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}