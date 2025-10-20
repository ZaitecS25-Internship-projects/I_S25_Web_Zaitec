import Banner from "./components/Banner"; // 👈 nuestro nuevo banner
import "./index.css";

// Si ya tienes un componente Navbar, impórtalo aquí.
// Si no, puedes dejar este ejemplo básico:
function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-600">Zaitec</h1>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><a href="#inicio" className="hover:text-indigo-600">Inicio</a></li>
        <li><a href="#cursos" className="hover:text-indigo-600">Cursos</a></li>
        <li><a href="#nosotros" className="hover:text-indigo-600">Nosotros</a></li>
        <li><a href="#contacto" className="hover:text-indigo-600">Contacto</a></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* 🔹 Menú principal */}
      <Navbar />

      {/* 🔹 Banner destacado (debajo del menú) */}
      <Banner />

      {/* 🔹 Contenido principal */}
      <main className="max-w-6xl mx-auto p-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Desarrolla tu futuro como programador 🚀
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Aprende las tecnologías más demandadas con los mejores cursos online.
        </p>

        {/* Ejemplo de cards de cursos */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Desarrollo Web</h3>
            <p className="text-gray-600 mb-4">HTML, CSS, JavaScript y más.</p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700">
              Ver curso
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">React Avanzado</h3>
            <p className="text-gray-600 mb-4">Hooks, Zustand, y optimización.</p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700">
              Ver curso
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Backend con Node.js</h3>
            <p className="text-gray-600 mb-4">Express, APIs y bases de datos.</p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700">
              Ver curso
            </button>
          </div>
        </div>
      </main>

      {/* 🔹 Footer simple */}
      <footer className="mt-16 py-6 bg-gray-900 text-gray-100 text-center">
        <p>© {new Date().getFullYear()} Zaitec. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
