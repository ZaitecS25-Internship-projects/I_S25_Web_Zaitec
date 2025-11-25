import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/banner";
import IndexPage from "./views/IndexPage";
import Cursos from "./views/Formacion"; // <-- ruta corregida
import "./index.css";

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
    <Router>
      <Navbar />
      <Banner />

      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/Formacion" element={<Cursos />} /> {/* <-- coincide con Link */}
      </Routes>
    </Router>
  );
}

export default App;
