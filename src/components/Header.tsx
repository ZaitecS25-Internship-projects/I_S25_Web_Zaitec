import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    setOpen(false);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* 🔹 HEADER FIJO SUPERIOR */}
      <div className="fixed w-full flex flex-row items-center justify-between z-50 bg-white/80 backdrop-blur-md shadow-sm px-4 py-2">
        {/* Logo y título */}
        <div className="flex items-center gap-2">
          <img
            src="/img/logo-zaitec.png"
            alt="Logo Zaitec"
            className="w-14 h-auto"
          />
          <h1 className="text-xl font-extrabold text-neutral-700">
            Zaitec
            <span className="text-orange-600 text-sm font-semibold ml-1">
              Innova
            </span>
          </h1>
        </div>

        {/* Botón Menu */}
        <button
          onClick={toggleMenu}
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-neutral-800 rounded"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-neutral-800 rounded my-1"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-neutral-800 rounded"
          />
          <span className="text-xs text-orange-700 font-semibold mt-1">
            Menu
          </span>
        </button>
      </div>

      {/* 🔸 OVERLAY VERTICAL CENTRADO (tipo Asirtec) */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 text-white text-2xl md:text-3xl font-semibold z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {[
              { label: "Inicio", id: "inicio" },
              { label: "Formación", id: "formacion" },
              { label: "Desarrollo de proyectos", id: "desarrollo-proyectos" },
              { label: "Contacto", id: "contacto" },
            ].map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="relative group mb-4"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300 rounded-full" />
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔹 CONTENIDO DEL HEADER ORIGINAL (mantiene la foto) */}
      <div className="pt-20" id="inicio">
        <div className="relative bg-[url('/img/header-zaitectwo.jpg')] bg-no-repeat bg-cover bg-center h-80">
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <motion.p
              className="text-2xl text-white text-center px-4 md:text-4xl lg:text-5xl font-semibold"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
            >
              Asesoría tecnológica diseñada para empresas líderes
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}
