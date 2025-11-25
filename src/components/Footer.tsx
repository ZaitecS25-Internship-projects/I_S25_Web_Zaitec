import React, { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import AvisoLegal from "../views/AvisoLegal";
import PoliticaPrivacidad from "../views/Politicadeprivacidad"; 
import PoliticaCookies from "../views/PoliticadeCookies"; // 👈 Nuevo import

const Footer: React.FC = () => {
  const [showAviso, setShowAviso] = useState(false);
  const [showPrivacidad, setShowPrivacidad] = useState(false);
  const [showCookies, setShowCookies] = useState(false); // 👈 Nuevo estado

  const footerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.6, ease: "easeOut" as const },
    }),
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <>
      <motion.footer
        className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-20 pb-8 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={footerVariants}
      >
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16 text-center md:text-left"
            variants={staggerVariants}
          >
            {/* Brand Section */}
            <motion.div
              className="flex flex-col items-center md:items-start gap-6"
              custom={0}
              variants={itemVariants}
            >
              <motion.div className="flex items-center space-x-3">
                <img src="/img/logo-zaitec.png" alt="Zaitec Logo" className="h-12 w-auto" />
                <div className="flex flex-col">
                  <h2 className="text-xl font-bold">Zaitec</h2>
                  <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-sm font-semibold">
                    Innova
                  </span>
                </div>
              </motion.div>
              <motion.p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Soluciones tecnológicas innovadoras que transforman negocios e impulsan el crecimiento digital.
              </motion.p>
            </motion.div>

            {/* Información */}
            <motion.div
              className="flex flex-col items-center md:items-start gap-6"
              custom={1}
              variants={itemVariants}
            >
              <motion.h3 className="font-bold text-lg text-white mb-2">Información</motion.h3>
              <motion.ul className="flex flex-col gap-4 text-sm" variants={staggerVariants}>
                <motion.li variants={itemVariants}>
                  <button
                    onClick={() => setShowAviso(true)}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-left group"
                  >
                    <span className="group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent">
                      Aviso Legal
                    </span>
                  </button>
                </motion.li>

                <motion.li variants={itemVariants}>
                  <button
                    onClick={() => setShowPrivacidad(true)}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-left group"
                  >
                    <span className="group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent">
                      Política de Privacidad
                    </span>
                  </button>
                </motion.li>

                {/* 👇 Nuevo enlace a Política de Cookies */}
                <motion.li variants={itemVariants}>
                  <button
                    onClick={() => setShowCookies(true)}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-left group"
                  >
                    <span className="group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent">
                      Política de Cookies
                    </span>
                  </button>
                </motion.li>
              </motion.ul>
            </motion.div>

            {/* Social & Contact */}
            <motion.div
              className="flex flex-col items-center md:items-start gap-6"
              custom={2}
              variants={itemVariants}
            >
              <motion.h3 className="font-bold text-lg text-white mb-2">Síguenos</motion.h3>
              <motion.p className="text-gray-400 text-sm mb-4">
                Mantente conectado con nuestras últimas novedades.
              </motion.p>
              <motion.div
                className="flex gap-4 justify-center md:justify-start"
                variants={staggerVariants}
              >
                {[{ icon: FaFacebook, href: "https://www.facebook.com/", color: "hover:text-blue-400" },
                  { icon: FaXTwitter, href: "https://x.com/", color: "hover:text-white" },
                  { icon: FaInstagram, href: "https://www.instagram.com/", color: "hover:text-pink-400" }].map((SocialIcon) => (
                  <motion.a
                    key={SocialIcon.href}
                    href={SocialIcon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xl text-gray-400 ${SocialIcon.color} transition-colors duration-300 bg-gray-800/50 p-3 rounded-xl backdrop-blur-sm`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.2, y: -2, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <SocialIcon.icon />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            className="border-t border-gray-700/50 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.p className="text-gray-400 text-sm mb-2">
              &copy; {new Date().getFullYear()} Zaitec Innova. Todos los derechos reservados.
            </motion.p>
            <motion.p className="text-gray-500 text-xs">
              Transformando ideas en soluciones digitales
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 via-purple-600 to-indigo-600" />
      </motion.footer>

      {/* Modales */}
      {showAviso && (
        <div className="fixed inset-0 bg-black/50 z-50 overflow-auto">
          <div className="bg-white max-w-4xl mx-auto my-20 p-8 rounded-xl relative">
            <button onClick={() => setShowAviso(false)} className="absolute top-4 right-4 text-gray-700 font-bold text-xl hover:text-black">×</button>
            <AvisoLegal />
          </div>
        </div>
      )}

      {showPrivacidad && (
        <div className="fixed inset-0 bg-black/50 z-50 overflow-auto">
          <div className="bg-white max-w-4xl mx-auto my-20 p-8 rounded-xl relative">
            <button onClick={() => setShowPrivacidad(false)} className="absolute top-4 right-4 text-gray-700 font-bold text-xl hover:text-black">×</button>
            <PoliticaPrivacidad />
          </div>
        </div>
      )}

      {/* 👇 Modal Política de Cookies */}
      {showCookies && (
        <div className="fixed inset-0 bg-black/50 z-50 overflow-auto">
          <div className="bg-white max-w-4xl mx-auto my-20 p-8 rounded-xl relative">
            <button onClick={() => setShowCookies(false)} className="absolute top-4 right-4 text-gray-700 font-bold text-xl hover:text-black">×</button>
            <PoliticaCookies />
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
