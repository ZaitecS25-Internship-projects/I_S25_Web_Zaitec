import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  const scrollToSection = (id: string, duration: number = 3500) => {
    const target = document.getElementById(id);
    if (!target) return;

    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + start;
    const distance = end - start;
    let startTime: number | null = null;

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, start + distance * easeInOutQuad(progress));
      if (timeElapsed < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <footer className="bg-gray-900 text-white pt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
        {/* Logo + descripción */}
        <div className="flex flex-col gap-4">
          <img
            src="/img/logo-zaitec.png"
            alt="Logo"
            className="h-12 w-auto object-contain"
          />
          <p className="text-gray-400 text-sm max-w-xs">
            Soluciones tecnológicas innovadoras que ayudan a tu negocio a
            crecer.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold mb-2 text-white">Enlaces</h3>
          <ul className="flex flex-col gap-1 text-sm">
            <li>
              <button
                onClick={() => scrollToSection("inicio")}
                className="hover:text-orange-500 transition duration-300 ease-in-out transform hover:translate-x-1"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contacto")}
                className="hover:text-orange-500 transition duration-300 ease-in-out transform hover:translate-x-1"
              >
                Contacto
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("formacion")}
                className="hover:text-orange-500 transition duration-300 ease-in-out transform hover:translate-x-1"
              >
                Formación
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("desarrollo-proyectos")}
                className="hover:text-orange-500 transition duration-300 ease-in-out transform hover:translate-x-1"
              >
                Desarrollo de proyectos
              </button>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold mb-2 text-white">Síguenos</h3>
          <div className="flex gap-4 text-2xl mt-2">
            <a
              href="https://www.facebook.com/asirtec/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-transform duration-300 hover:scale-110"
            >
              <FaFacebook />
            </a>

            <a
              href="https://x.com/asirtec?lang=es"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-transform duration-300 hover:scale-110"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.instagram.com/asirtec/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-transform duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-800 mt-8 py-4 text-center text-sm text-gray-400">
        &copy; 2025 Zaitec innova. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
