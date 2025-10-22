import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Icono de X (Twitter)

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12">
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
        {/* Logo + descripción */}
        <div className="flex flex-col gap-4">
          <img src="/img/logo-zaitec.png" alt="Logo" className="h-12 w-auto object-contain" />
          <p className="text-gray-400 text-sm max-w-xs">
            Soluciones tecnológicas innovadoras que ayudan a tu negocio a crecer.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold mb-2 text-white">Enlaces</h3>
          <ul className="flex flex-col gap-1 text-sm">
            <li>
              <a
                href="#inicio"
                className="hover:text-orange-500 transition duration-300 ease-in-out transform hover:translate-x-1"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                className="hover:text-orange-500 transition duration-300 ease-in-out transform hover:translate-x-1"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#formacion"
                className="hover:text-orange-500 transition duration-300 ease-in-out transform hover:translate-x-1"
              >
                Formación
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="hover:text-orange-500 transition duration-300 ease-in-out transform hover:translate-x-1"
              >
                Contacto
              </a>
            </li>
            <li>
              <a
                href="#desarrollo-proyectos"
                className="hover:text-orange-500 transition duration-300 ease-in-out transform hover:translate-x-1"
              >
                Desarrollo de proyectos
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto + redes sociales */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold mb-2 text-white"></h3>
          <p className="text-gray-400 text-sm"></p>
          <p className="text-gray-400 text-sm"></p>

          {/* Redes sociales */}
          <div className="flex gap-4 text-2xl mt-2">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/asirtec/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-transform duration-300 hover:scale-110"
            >
              <FaFacebook />
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/asirtec?lang=es"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-transform duration-300 hover:scale-110"
            >
              <FaXTwitter />
            </a>

            {/* Instagram */}
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
