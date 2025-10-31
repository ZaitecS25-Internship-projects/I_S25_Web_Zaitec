import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // 🔹 Menú actualizado con el enlace externo al final
  const menuItems = [
    { label: "Inicio", path: "/", id: "inicio" },
    { label: "Desarrollo y proyectos", path: "/desarrollo", id: "desarrollo-proyectos" },
    { label: "Contacto", path: "/contacto", id: "contacto" },
    { label: "Formación", path: "/formacion", id: "formacion" },
    { label: "Zaitec Labs", path: "https://zaiteclabs.es", id: "zaiteclabs" }, // ← enlace externo
  ];

  return (
    <nav className="fixed w-full z-50 bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Zaitec
        </Link>

        {/* Botón del menú hamburguesa */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-between w-8 h-6 focus:outline-none"
        >
          <span
            className={`block h-1 bg-white rounded transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 bg-white rounded transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-1 bg-white rounded transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Menú lateral animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="fixed top-0 right-0 w-64 h-screen bg-gray-900 shadow-lg flex flex-col justify-center items-start p-6 space-y-4 z-40"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
              >
                {/* 🔗 Enlace externo */}
                {item.path.startsWith("http") ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xl font-semibold text-white hover:text-blue-300 transition-all duration-300 w-full text-left py-3 pl-4 border-l-2 border-transparent hover:border-blue-400 hover:bg-white/5 rounded-r-lg"
                  >
                    {item.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      className="w-5 h-5 text-blue-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H19.5M19.5 6V12M19.5 6L10.5 15M5.25 5.25l13.5 13.5"
                      />
                    </svg>
                  </a>
                ) : location.pathname === "/" ? (
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-xl font-semibold text-white hover:text-blue-300 transition-all duration-300 w-full text-left py-3 pl-4 border-l-2 border-transparent hover:border-blue-400 hover:bg-white/5 rounded-r-lg"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to="/"
                    onClick={() => setTimeout(() => scrollToSection(item.id), 100)}
                    className="text-xl font-semibold text-white hover:text-blue-300 transition-all duration-300 w-full text-left py-3 pl-4 border-l-2 border-transparent hover:border-blue-400 hover:bg-white/5 rounded-r-lg block"
                  >
                    {item.label}
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
